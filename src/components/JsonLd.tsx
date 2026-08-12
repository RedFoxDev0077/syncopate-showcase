/**
 * Emits a JSON-LD structured data block. Rendered inline (rather than through
 * the router `head`) so it is present in the SSR'd HTML that crawlers read.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is built from our own content, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
