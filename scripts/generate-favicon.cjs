// Generates favicon.ico (PNG-in-ICO) and apple-touch-icon.png with no image deps.
const fs = require("fs");
const zlib = require("zlib");

// Brand green (oklch(0.72 0.19 135)) and ink, as sRGB.
const GREEN = [74, 195, 74];
const INK = [26, 38, 30];

// 5x7 block glyphs, drawn as pixel rows.
const GLYPHS = {
  D: ["11100", "10010", "10001", "10001", "10001", "10010", "11100"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
};

function makeCanvas(size) {
  const px = Buffer.alloc(size * size * 4, 0);
  const set = (x, y, [r, g, b], a = 255) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    const i = (y * size + x) * 4;
    px[i] = r;
    px[i + 1] = g;
    px[i + 2] = b;
    px[i + 3] = a;
  };
  return { px, set };
}

function roundedSquare(size, radius, canvas, color) {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const cx = Math.min(Math.max(x, radius), size - 1 - radius);
      const cy = Math.min(Math.max(y, radius), size - 1 - radius);
      const d = Math.hypot(x - cx, y - cy);
      if (d <= radius + 0.5) canvas.set(x, y, color, 255);
    }
  }
}

function drawGlyph(canvas, glyph, ox, oy, scale, color) {
  glyph.forEach((row, ry) => {
    [...row].forEach((cell, rx) => {
      if (cell !== "1") return;
      for (let dy = 0; dy < scale; dy++) {
        for (let dx = 0; dx < scale; dx++) {
          canvas.set(ox + rx * scale + dx, oy + ry * scale + dy, color);
        }
      }
    });
  });
}

function render(size) {
  const canvas = makeCanvas(size);
  roundedSquare(size, Math.round(size * 0.22), canvas, GREEN);

  const scale = Math.max(1, Math.round(size / 16));
  const glyphW = 5 * scale;
  const glyphH = 7 * scale;
  const gap = Math.max(1, Math.round(scale * 0.8));
  const totalW = glyphW * 2 + gap;
  const ox = Math.round((size - totalW) / 2);
  const oy = Math.round((size - glyphH) / 2);

  drawGlyph(canvas, GLYPHS.D, ox, oy, scale, INK);
  drawGlyph(canvas, GLYPHS.L, ox + glyphW + gap, oy, scale, INK);
  return canvas.px;
}

function crc32(buf) {
  let c,
    crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}

function toPng(px, size) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filter: none
    px.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/** ICO container holding PNG images (valid since Vista). */
function toIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);

  let offset = 6 + entries.length * 16;
  const dirs = [];
  for (const { size, png } of entries) {
    const d = Buffer.alloc(16);
    d[0] = size >= 256 ? 0 : size;
    d[1] = size >= 256 ? 0 : size;
    d[2] = 0;
    d[3] = 0;
    d.writeUInt16LE(1, 4);
    d.writeUInt16LE(32, 6);
    d.writeUInt32LE(png.length, 8);
    d.writeUInt32LE(offset, 12);
    dirs.push(d);
    offset += png.length;
  }
  return Buffer.concat([header, ...dirs, ...entries.map((e) => e.png)]);
}

const sizes = [16, 32, 48];
const ico = toIco(sizes.map((size) => ({ size, png: toPng(render(size), size) })));
fs.writeFileSync("public/favicon.ico", ico);
fs.writeFileSync("public/apple-touch-icon.png", toPng(render(180), 180));
console.log("favicon.ico", ico.length, "bytes /", sizes.join("+"), "px");
console.log("apple-touch-icon.png written");
