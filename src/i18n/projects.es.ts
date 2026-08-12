import type { ProjectTranslation } from "./projects";

/** Spanish project copy, keyed by slug. Missing keys fall back to English. */
export const PROJECTS_ES: Record<string, ProjectTranslation> = {
  "b2b-manufacturing-portal-development": {
    title: "Portal B2B para un fabricante industrial de configuración bajo pedido",
    excerpt:
      "Ampliación de un portal de manufactura heredado con autoservicio para clientes, digitalización del flujo de almacén y visibilidad de producción, sin interrumpir la operación en vivo.",
    client: "Fabricante B2B estadounidense de sistemas industriales modulares a pedido (NDA)",
    duration: "2024 – en curso",
    challenge:
      "El portal existente era estable, pero los flujos clave seguían dependiendo de actualizaciones manuales y hojas de cálculo. Los clientes necesitaban soporte interno para modificar pedidos y configurar productos, y los equipos de almacén dependían de pasos manuales para inventario y preparación de envíos. Las paradas de producción no tenían seguimiento estructurado, lo que limitaba la visibilidad de los cuellos de botella.",
    solution: [
      "Configurador de producto de cara al cliente para configurar, cotizar y recomprar de forma autónoma.",
      "Seguimiento de entradas de almacén con escaneo de códigos de barras e inventario en tiempo real.",
      "Documentación de envíos automatizada e integración con proveedores logísticos.",
      "Registro de paradas de producción por máquina, área, duración y motivo.",
      "Control de acceso por rol y monitoreo de integraciones en siete sistemas conectados.",
      "Entrega incremental para preservar la estabilidad del sistema de producción.",
    ],
    resultLabels: [
      "Menos pasos manuales",
      "Módulos críticos entregados",
      "Integraciones desplegadas",
      "Paradas de producción en los despliegues",
    ],
    outcomes: [
      "Las integraciones cubren Stripe, APIs de transportistas, conciliación bancaria, SharePoint, Office 365 y Google Analytics.",
    ],
  },

  "kentico-13-to-xperience-migration": {
    title: "Migración de un portal B2B con miles de SKU de Kentico 13 a Xperience by Kentico",
    excerpt:
      "Un fabricante global de materiales de construcción migró a Xperience by Kentico un portal para más de 350 distribuidores en 18 países, conservando más de 12.000 SKU y todas las integraciones.",
    client: "Fabricante global B2B de materiales de construcción (NDA)",
    duration: "05/2025 — 12/2025",
    challenge:
      "La arquitectura del portal se había vuelto riesgosa y lenta, con más de 40 tipos de página personalizados y más de 80 widgets fuertemente interdependientes. La sincronización con ERP y CRM dependía de hojas de cálculo manuales, lo que generaba precios e inventario desactualizados. Cada campaña nueva requería ciclos de desarrollo de 10 a 12 semanas y la autenticación de distribuidores estaba fragmentada entre el portal, Salesforce y el ERP.",
    solution: [
      "Tres migraciones de ensayo completas en entorno no productivo para validar la fidelidad del contenido y la integridad de las redirecciones.",
      "Frontend en ASP.NET Core con separación clara entre lógica de dominio, integraciones y presentación.",
      "Commerce headless con Shopify Plus mediante los conectores oficiales de Xperience.",
      "Integración REST a medida con el ERP y tareas programadas para precios contractuales y stock en vivo.",
      "SSO con Salesforce y Azure AD B2C para unificar la identidad de los distribuidores.",
      "Asistente de IA AIRA habilitado para redacción editorial y traducción multilingüe.",
    ],
    resultLabels: [
      "Ciclos de campaña más cortos",
      "Más sesiones de distribuidores autenticados",
      "Menos conciliación manual ERP/CRM",
      "Catálogo más rápido",
    ],
    outcomes: [
      "Los ciclos de campaña con socios bajaron de 10–12 semanas a 6–8 semanas.",
      "El tiempo de carga del catálogo mejoró de 3,1 s a 2,0 s.",
    ],
  },

  "custom-employee-recognition-platform": {
    title: "Plataforma de reconocimiento de empleados a medida en 8 semanas",
    excerpt:
      "Una empresa tecnológica de Texas reemplazó su SaaS de reconocimiento cerrado por una plataforma propia con recompensas, gamificación y analítica para RR. HH., construida en ocho semanas.",
    client: "Empresa tecnológica de Texas, más de 200 empleados",
    duration: "02/2026 — 04/2026 (8 semanas)",
    challenge:
      "La herramienta existente no permitía personalización y no daba a RR. HH. datos de participación ni analítica. El proveedor bloqueaba los cambios en la lógica de recompensas y el costo recurrente de 6.000 a 7.200 USD anuales no incluía propiedad intelectual ni control del roadmap.",
    solution: [
      "Frontend en React con actualizaciones en tiempo real de reconocimientos, rankings y saldos.",
      "Backend en Node.js para transacciones concurrentes, flujos automatizados y actualizaciones por WebSocket.",
      "Sistema de doble moneda (Kudos a Coins) con trazabilidad completa de transacciones.",
      "Más de 15 insignias, ranking por percentil y recompensas automáticas por cumpleaños y aniversarios.",
      "Panel de analítica para RR. HH. con reportes por rango de fechas.",
      "Interfaz responsiva optimizada para móvil sin una base de código aparte.",
    ],
    resultLabels: [
      "Adopción en el primer mes",
      "Módulos en producción al lanzar",
      "Cuotas SaaS eliminadas al año",
      "Despliegue sin reversiones",
    ],
    outcomes: [],
  },

  "kentico-cms-for-koni": {
    title: "Solución B2B escalable en Kentico para Koni",
    excerpt:
      "KONI pasó de un sitio atado a plantillas a una arquitectura de widgets en Kentico que soporta varios sitios B2B regionales, con editores capaces de armar páginas sin desarrolladores.",
    client: "KONI (parte del grupo ITT), fabricante de amortiguadores hidráulicos regulables",
    duration: "Enero 2023 — Abril 2024",
    challenge:
      "El sitio desactualizado de KONI ya no reflejaba la marca actual, no escalaba para múltiples propiedades y era difícil de mantener por perfiles no técnicos. Además debía alinearse con la estandarización en Kentico del grupo ITT mientras atendía a socios y distribuidores B2B.",
    solution: [
      "Cambio de una arquitectura basada en plantillas a una basada en widgets para que los editores armen páginas sin desarrollo.",
      "Vue.js con renderizado del lado del servidor para mejorar SEO y tiempos de carga.",
      "Biblioteca de widgets reutilizables desplegable en varios sitios B2B sin nuevos ciclos de desarrollo.",
      "Entrega iterativa con feedback del cliente y pruebas de aceptación durante todo el proyecto.",
      "Kentico Xperience sobre .NET Core con ASP.NET MVC e infraestructura de Amazon.",
    ],
    resultLabels: [
      "Más vistas de página",
      "Más vistas de producto",
      "Más clics en navegación y CTA",
      "Sitios B2B sobre una arquitectura",
    ],
    outcomes: [
      "La arquitectura se extendió a tres sitios B2B distintos sin reconstruir desde cero.",
    ],
  },

  "pj-our-way": {
    title: "Plataforma escalable de apoyo a la alfabetización judía",
    excerpt:
      "Reconstrucción de la plataforma PJ Our Way para la Harold Grinspoon Foundation, con una interfaz doble para niños y padres y capacidad para 5.000 sesiones simultáneas.",
    client: "Harold Grinspoon Foundation",
    challenge:
      "El sitio original de PJ Our Way era lento y difícil de mantener, y no cumplía las expectativas de una experiencia interactiva. La plataforma debía soportar hasta 50.000 usuarios y 5.000 sesiones simultáneas, atendiendo a dos públicos distintos —niños y padres— con interfaces, contenidos y permisos diferentes.",
    solution: [
      "Arquitectura Kentico MVC con granjas web y caché por capas para mejorar el rendimiento.",
      "Interfaz dividida que permite alternar entre modo niño y modo padre con contenidos propios.",
      "Gamificación con seguimiento de insignias por actividad de lectura y lógica de backend a medida.",
      "Módulos de administración a medida para gestionar libros, eventos y datos de usuarios.",
      "Integración con el ERP Microsoft Dynamics NAV mediante una API propia.",
      "Staging de contenido, versionado, tour de bienvenida y mejoras de accesibilidad.",
    ],
    resultLabels: [
      "Usuarios simultáneos en pico",
      "Tasa de éxito en un despliegue de 50.000 personas",
    ],
    outcomes: [
      "Menor carga administrativa gracias a una gestión de contenidos simplificada.",
      "Mayor participación y experiencias más claras para niños y padres.",
    ],
  },

  "dynamic-document": {
    title: "Sistema de gestión documental para cliente de manufactura",
    excerpt:
      "Sistema documental empresarial a medida para un fabricante global, que eliminó la documentación en papel y estableció una única fuente de verdad en más de 50 países.",
    client: "Fabricante global de materiales de construcción e interiores comerciales (NDA)",
    duration: "Más de 2 años",
    challenge:
      "Varias divisiones mantenían estándares documentales separados, por lo que era frecuente usar materiales desactualizados en producción e instalación en campo. Eso generaba retrabajo costoso, quejas de clientes, exposición normativa, costos excesivos de impresión y demoras por aprobaciones dispersas entre departamentos y marcas.",
    solution: [
      "Generador dinámico que arma documentos en tiempo real con la marca, logos y descargos correctos según quien los solicita.",
      "Automatización de flujos y aprobaciones con múltiples aprobadores, delegación y aprobación en paralelo.",
      "Motor de reglas de retención que retira documentos automáticamente según tipo y política de cumplimiento.",
      "Visor seguro que impide descargar o copiar material sensible.",
      "Función de «Libros» para que cada empleado agrupe los documentos que más usa.",
    ],
    resultLabels: [
      "Reducción de costos de impresión",
      "Hasta la adopción en toda la empresa",
      "Menos errores documentales",
      "Documentos de producto gestionados",
    ],
    outcomes: ["El repositorio centralizado da servicio a equipos en más de 50 países."],
  },

  "anderson-tuftex-enterprise-cms-transformation": {
    title: "Transformación del sitio de Anderson Tuftex con un CMS empresarial",
    excerpt:
      "Anderson Tuftex renovó su sitio de e-commerce de pisos con una plantilla reutilizable de Kentico Xperience 13 y herramientas avanzadas, eliminando la dependencia de desarrollo para el día a día.",
    client:
      "Anderson Tuftex (parte de Shaw Industries), fabricante de pisos de madera, Dalton, Georgia",
    duration: "Marzo 2024 — en curso",
    challenge:
      "Anderson Tuftex necesitaba modernizar su sitio para responder a la demanda de una mejor experiencia de compra. La plataforma existente no ofrecía una gestión de contenidos flexible y exigía intervención de desarrollo para cambios rutinarios, lo que limitaba la autonomía de marketing y retrasaba el lanzamiento de nuevos sitios de marca.",
    solution: [
      "Plantilla reutilizable de Kentico Xperience 13 para lanzar sitios de marca de forma rápida y consistente.",
      "Capacidades avanzadas de e-commerce con filtrado dinámico de productos y fichas personalizables.",
      "Integración de 8 herramientas externas: Cybersource, AudioEye, OneTrust, Genesys Chat, Bazaarvoice, SharpSpring, Roomvo y Calendly.",
      "Permisos por rol para que editores y responsables de marca gestionen sus propios flujos.",
      "Componentes en React para layouts flexibles con soporte de backend en .NET.",
    ],
    resultLabels: ["Más clics en CTA", "Más vistas de página", "Más vistas de producto"],
    outcomes: [
      "Cero dependencia de desarrollo para actualizaciones de contenido y flujos de e-commerce cotidianos.",
    ],
  },

  "flaga-energy-management-platform": {
    title: "Renovación web para la plataforma de gestión energética FLAGA",
    excerpt:
      "Sitio multilingüe en Umbraco Cloud para FLAGA, principal proveedor de gas licuado de Austria, con gestión de contenidos autónoma y buscador de distribuidores por ubicación.",
    client:
      "FLAGA, principal proveedor de gas licuado de Austria, con más de 65 años de trayectoria",
    challenge:
      "FLAGA necesitaba capacidades multilingües para una base de clientes diversa, mejores herramientas de edición para reducir la dependencia de desarrollo, una solución de newsletter integrada y un buscador de distribuidores por ubicación para mejorar la conveniencia y la eficiencia operativa.",
    solution: [
      "Umbraco Cloud con widgets modulares para que marketing publique sin desarrollo.",
      "Integración de Newsletter Studio para la gestión de campañas de email.",
      "Buscador por ubicación para que los clientes encuentren su proveedor de gas más cercano.",
      "Layouts flexibles que permiten diseños distintos a partir de plantillas idénticas.",
    ],
    resultLabels: [],
    outcomes: [
      "Más tráfico y mejores tasas de conversión gracias a la interfaz multilingüe y un diseño más usable.",
      "Menores costos operativos al reducir el soporte continuo de desarrollo.",
      "Mejor comunicación con clientes mediante el newsletter integrado.",
      "Presencia online más profesional y mayor confianza en la marca.",
    ],
  },

  coretec: {
    title: "Desarrollo de plataforma e-commerce para una marca premium de pisos",
    excerpt:
      "El sitio de COREtec Floors se reconstruyó sobre Kentico 13 y React, dando autonomía a marketing para armar páginas y elevando tráfico y conversión.",
    client: "Shaw Industries (marca premium de pisos COREtec Floors)",
    challenge:
      "El equipo necesitaba equilibrar tecnología avanzada con facilidad de gestión: un backend robusto para la operación del negocio y, a la vez, la posibilidad de que marketing actualizara contenidos sin depender de desarrollo.",
    solution: [
      "Kentico Xperience 13 con MVC Core para modernizar el stack, mejorar la seguridad y simplificar el escalado.",
      "React con renderizado del lado del servidor para mejorar la experiencia de frontend.",
      "Kentico Page Builder con 5 plantillas específicas y 1 genérica para que los editores construyan páginas.",
      "Integración de pagos CyberSource, accesibilidad AudioEye, privacidad OneTrust, Genesys Chat, reseñas Bazaarvoice y visualización de ambientes Roomvo.",
    ],
    resultLabels: ["Más tráfico web", "Más conversión"],
    outcomes: [
      "Menores costos del equipo de desarrollo gracias a herramientas de administración completas.",
      "Mejor experiencia de usuario y mayor confianza en la marca COREtec Floors.",
    ],
  },

  "blockchain-dashboard": {
    title: "Dashboard de blockchain",
    excerpt:
      "Dashboard analítico en tiempo real que procesa y visualiza grandes volúmenes de datos del mercado cripto —transacciones, wallets y NFTs— sobre una infraestructura escalable en AWS.",
    client: "Empresa de analítica blockchain (NDA)",
    challenge:
      "El proyecto enfrentaba tres obstáculos centrales: gestionar de forma eficiente enormes volúmenes de datos distribuidos entre múltiples nodos, garantizar actualizaciones continuas en tiempo real a medida que evoluciona el mercado, y ejecutar consultas intensivas que exigen recursos de cómputo robustos.",
    solution: [
      "Pipeline de ingesta en AWS con fuentes confiables como Infura.",
      "Motor de procesamiento en tiempo real para análisis de transacciones y tendencias.",
      "Infraestructura escalable en AWS para almacenamiento, streaming y procesamiento.",
      "Visualización clara de métricas complejas de blockchain.",
      "Análisis de transacciones en tiempo real y seguimiento de wallets.",
      "Indicadores de mercado básicos y avanzados para interpretar tendencias.",
    ],
    resultLabels: [],
    outcomes: [
      "Pipeline eficiente que da acceso fluido a los datos de blockchain.",
      "Análisis de transacciones en tiempo real, seguimiento de wallets e indicadores de mercado.",
      "Visualización que hace interpretables métricas complejas para perfiles no especializados.",
    ],
  },

  "time-series-analysis-and-forecasting-for-cryptocur": {
    title: "Sistema automatizado para predecir tendencias del mercado de criptomonedas",
    excerpt:
      "Plataforma automatizada de pronóstico con machine learning para tendencias de cripto, acciones y bonos, con modelos adaptativos y pipelines de datos paralelizados.",
    client: "Eudaimonia, especialistas en tecnologías robustas de pronóstico de mercado",
    challenge:
      "La alta volatilidad exigía modelos adaptativos y los datos crudos requerían ingeniería de características compleja. El cliente además necesitaba pipelines paralelizados eficientes, un sistema centralizado para probar múltiples modelos de series temporales, garantías de calidad de datos y soporte para distintos esquemas de pronóstico.",
    solution: [
      "Solución de pronóstico de series temporales con modelos adaptativos para mercados volátiles.",
      "Ingeniería de características rigurosa para mejorar la precisión y capturar tendencias.",
      "Sistema centralizado para probar y desarrollar modelos de pronóstico diversos.",
      "Arquitectura de microservicios con UI de administración, UI de usuario y API para clientes.",
      "Integración de la API de Polygon para datos históricos, Google Cloud Vertex AI para desplegar modelos y Azure Functions para el post-procesamiento.",
    ],
    resultLabels: [],
    outcomes: [
      "La plataforma permite seguir tendencias de mercado y analizar datos históricos.",
      "Los usuarios pueden crear escenarios de pronóstico propios para diversificar carteras y optimizar retornos.",
      "Un conjunto de herramientas que ayuda a los inversores a decidir con mejor información.",
    ],
  },

  "accounts-payable-and-invoicing-process-automation": {
    title: "Automatización de facturación para una empresa líder en compras",
    excerpt:
      "Plataforma con IA que automatiza cuentas por pagar y facturación para una empresa líder en compras, con cumplimiento PEPPOL e integración con Ariba y SAP.",
    client:
      "Empresa líder de soluciones de compras en Australia, con clientes en toda Asia-Pacífico",
    challenge:
      "La plataforma debía integrarse con varios sistemas de facturación, incluidos Ariba y SAP, soportar formatos diversos —PDF, imágenes y documentos electrónicos—, implementar reglas de negocio configurables y gestionar datos de proveedores con distintos métodos de identificación.",
    solution: [
      "Integración fluida con plataformas de facturación populares como Ariba y SAP.",
      "Procesamiento de facturas con IA y extracción inteligente de datos en múltiples formatos.",
      "Motor de reglas flexible para configurar excepciones, alertas y asignación de aprobadores.",
      "Gestión robusta de proveedores mediante identificadores únicos, incluido el ABN.",
      "Aplicación multi-tenant con entrada por email, API y carga de archivos.",
      "Cumplimiento del estándar PEPPOL para interoperabilidad futura.",
    ],
    resultLabels: ["Satisfacción de usuarios", "Pagos procesados", "Reducción del tiempo de ciclo"],
    outcomes: [],
  },

  "door-services": {
    title: "Soluciones web y móviles integradas para una empresa de servicios de puertas",
    excerpt:
      "Plataforma web y móvil integrada para Door Services Corporation, que agiliza la búsqueda de servicios por ubicación, la gestión de contenidos multimarca y la información de producto.",
    client: "Door Services Corporation, empresa canadiense de servicios de puertas automáticas",
    challenge:
      "El negocio necesitaba un sistema que permitiera a los clientes encontrar fácilmente su centro de servicio más cercano según reglas de negocio. La gestión de contenidos debía equilibrar contenido compartido entre submarcas con personalización por marca, y se requería un módulo complejo de gestión de productos acorde a los procesos internos.",
    solution: [
      "Plataforma web y móvil con búsqueda por ubicación de centros de servicio.",
      "Kentico CMS para gestión de contenidos multimarca y autonomía de los editores.",
      "Sistema PIM con modelado de datos, importación/exportación y flujos de trabajo.",
      "Capa de datos que conecta el PIM con ERP, CRM y e-commerce.",
      "Interfaz responsiva optimizada para escritorio y móvil con navegación intuitiva.",
    ],
    resultLabels: [],
    outcomes: [
      "Menores costos operativos gracias a herramientas intuitivas para editores y personal de tienda.",
      "Más visitantes y un mejor recorrido digital que deriva en visitas a tienda.",
      "Gestión de contenidos sin intervención de desarrollo en todas las marcas y ubicaciones.",
    ],
  },

  "ml-based-saas": {
    title: "SaaS con machine learning para predecir la matrícula de estudiantes",
    excerpt:
      "Plataforma SaaS con machine learning que permite a las universidades seguir la matrícula y predecir la probabilidad de inscripción a partir de datos integrados de almacén y CRM.",
    client:
      "Zenuit Consulting Services, consultora de TI estadounidense en ciberseguridad y machine learning aplicado",
    challenge:
      "El sistema debía integrar almacenes de datos manteniendo integridad y exactitud, sincronizarse con Salesforce pese a esquemas de tablas en cambio continuo, y manejar requisitos complejos de gestión de datos entre instituciones.",
    solution: [
      "Servicio web multi-tenant con capacidades administrativas robustas para la integración de almacenes.",
      "Tareas programadas para actualizar información y esquemas según los requisitos del administrador.",
      "Plataforma centralizada para gestionar datos de admisiones, analítica y consultas.",
      "Integración fluida de sistemas CRM y almacenes de datos.",
      "Carga de datos históricos para pronosticar la matrícula.",
    ],
    resultLabels: [],
    outcomes: [
      "Reducción significativa del tiempo del proceso de admisiones gracias a una plataforma centralizada.",
      "Marcadores de matrícula personalizados y prioridades diarias de contacto.",
      "Análisis de embudo personalizado para agilizar los esfuerzos de captación.",
    ],
  },

  "customer-churn": {
    title: "Pronóstico de abandono de clientes",
    excerpt:
      "Modelo dinámico de predicción de abandono para una entidad financiera líder de Azerbaiyán, que identifica clientes de crédito en riesgo e impulsa retención dirigida.",
    client: "Entidad financiera líder en Azerbaiyán",
    challenge:
      "El modelo debía adaptarse a cambios en el comportamiento de los clientes y en las condiciones económicas, extraer conclusiones accionables de conjuntos de datos diversos —historial de transacciones, demografía y tendencias de mercado— y personalizar productos de crédito a escala en una base de clientes muy amplia.",
    solution: [
      "Modelo dinámico de predicción de abandono adaptado a comportamientos y condiciones de mercado cambiantes.",
      "Extracción de señales a partir de historial transaccional, demografía y tendencias de mercado.",
      "Refinamiento y personalización de la oferta crediticia según el análisis de comportamiento.",
      "Integración de las predicciones con los flujos de marketing y CRM para retención proactiva.",
    ],
    resultLabels: [],
    outcomes: [
      "Reducción del abandono de clientes gracias al modelo predictivo.",
      "Captación de nuevos clientes mediante estrategias de marketing basadas en datos.",
      "Mejor oferta crediticia, con más satisfacción y oportunidades de venta cruzada.",
    ],
  },

  "gat-flooring": {
    title: "Rediseño del sitio de una empresa de pisos con e-commerce",
    excerpt:
      "Rediseño UI/UX del sitio de e-commerce de GAT Flooring en torno a una nueva identidad de marca, con navegación reestructurada y un flujo dedicado de selección de producto.",
    client:
      "GAT Flooring, importador y distribuidor australiano de materiales de construcción premium",
    challenge:
      "El sitio necesitaba un rediseño completo alineado con la identidad de marca actualizada, creando a la vez una interfaz moderna e intuitiva. El diseño también debía admitir contenido escalable para catálogos variables sin saturar al usuario con texto plano.",
    solution: [
      "Traslado de la navegación desde un panel lateral a un menú superior.",
      "Página dedicada a la selección de productos.",
      "Secciones de portada que destacan la información clave con jerarquía visual clara.",
      "Separación de ubicaciones e información de contacto en páginas distintas.",
      "Prioridad a las mejoras estructurales junto con la actualización visual.",
      "Enfoque de diseño moderno y minimalista.",
    ],
    resultLabels: [],
    outcomes: ["Aumento del tráfico del sitio.", "Mejor conversión de visitante a cliente."],
  },

  kenticomigration: {
    title: "Migración a Kentico Xperience 13 Core para una agencia estatal",
    excerpt:
      "Una agencia estatal migró desde Kentico 12 Portal Engine, ya sin soporte, a Xperience 13 Core, reduciendo el tiempo de respuesta medio un 93,7 % con menos de 10 minutos de caída visible.",
    client: "Agencia estatal de protección ambiental de EE. UU. (NDA)",
    challenge:
      "La implementación en Kentico 12 se había vuelto compleja, con widgets a medida y bloques de contenido grandes que degradaban el rendimiento en picos de tráfico. La plataforma llegó a fin de vida, con el riesgo de seguridad y cumplimiento asociado, mientras los editores lidiaban con inconsistencias de accesibilidad y dependían de desarrollo para cambios rutinarios de maquetación.",
    solution: [
      "Evaluación detallada de tipos de página, plantillas, widgets, bibliotecas de medios y patrones de URL.",
      "Capa de migración automatizada entre la base de Kentico 12 y Xperience 13 Core, con registro para detectar anomalías.",
      "Migración de widgets embebidos en texto enriquecido parseando el contenido y reemplazándolo por componentes estructurados.",
      "Rediseño con un modelo de contenido por componentes reutilizables.",
      "Conservación de más del 95 % de las URL, con redirecciones para el resto y así proteger el SEO.",
      "Corte programado fuera de hora pico, con validación en staging y plan de rollback.",
    ],
    resultLabels: [
      "Menor tiempo de respuesta medio",
      "Mejora en el percentil 90",
      "Actualizaciones sin desarrollo",
      "Caída visible para usuarios",
    ],
    outcomes: [
      "El tiempo de respuesta medio bajó de 2,23 s a 0,141 s.",
      "Cero regresiones críticas de accesibilidad tras el lanzamiento.",
    ],
  },

  "asp-guard": {
    title: "App web de despacho para gestionar guardias de cruce escolar",
    excerpt:
      "Aplicación web de despacho para A.S.P. Incorporated que gestiona la programación, asignación y seguimiento en tiempo real de guardias de cruce escolar en Toronto.",
    client: "A.S.P. Incorporated, proveedor de servicios de seguridad y conserjería",
    challenge:
      "El sitio existente necesitaba mejor experiencia de uso y nuevas funciones para reemplazar hojas de Excel manuales por reportes automatizados. El procesamiento de grandes volúmenes de información causaba problemas de rendimiento y volvía lento el sistema para el personal administrativo que gestiona la operación en toda la ciudad.",
    solution: [
      "Asignación inteligente de guardias considerando disponibilidad, feriados, distancia a las zonas y turnos existentes.",
      "Panel en tiempo real con asistencia, horarios de entrada y salida y ubicación.",
      "Seguimiento de ubicación con geocercas y visualización de trayectorias.",
      "Reportes de asistencia, análisis de cobertura y estado de asignación de turnos.",
      "Presentación de datos por rol, optimizada para cada tipo de usuario.",
    ],
    resultLabels: [],
    outcomes: [
      "Reducción significativa del tiempo dedicado a gestionar guardias y recolectar datos.",
      "Mayor eficiencia operativa con planificación intuitiva de personal.",
      "Mejor visibilidad del desempeño de los empleados mediante análisis detallado.",
    ],
  },

  "asp-guard-mobile-app": {
    title: "App móvil de despacho para la gestión de guardias de cruce",
    excerpt:
      "La app móvil de despacho XGuard para ASP Security Services, que automatiza el seguimiento de guardias con localización confiable en iOS y Android.",
    client: "A.S.P. Incorporated (ASP Security Services)",
    challenge:
      "La app anterior tenía seguimiento de ubicación impreciso y fallos frecuentes, lo que dificultaba el mantenimiento y ralentizaba las actualizaciones. La interfaz no era intuitiva y el sistema debía soportar iOS y Android con actualización de datos en segundo plano.",
    solution: [
      "Arquitectura estable y mantenible con nuevo diseño UI/UX para iOS y Android.",
      "Seguimiento de ubicación confiable como núcleo de la gestión de turnos.",
      "Actualización de datos en segundo plano para mostrar información al día sin refrescar manualmente.",
      "Interfaz responsiva fiel a las especificaciones de diseño en distintos tamaños de pantalla.",
      "Funciones de cribado COVID-19, entrada y salida, gestión de turnos y comunicación con supervisores.",
    ],
    resultLabels: [],
    outcomes: [
      "Una única herramienta para que el personal gestione asignaciones y asistencia.",
      "Soporte de iOS y Android con mayor estabilidad y mejor experiencia de uso.",
      "Seguimiento automatizado que permite a la dirección analizar asistencia y generar reportes.",
    ],
  },

  "leak-control": {
    title: "Identificación de fugas en válvulas submarinas de seguridad ambiental",
    excerpt:
      "Sistema de IA y machine learning que detecta tempranamente fugas en válvulas submarinas de seguridad, evitando fallos de equipo y daño ambiental en operaciones offshore.",
    client: "Empresa energética multinacional de petróleo y gas presente en más de 70 países",
    challenge:
      "El cliente necesitaba detectar tempranamente fugas en válvulas de seguridad de subsuelo para mitigar el riesgo de fallo, minimizar el tiempo improductivo mediante modelos predictivos y proteger los ecosistemas marinos reduciendo el costo de la inspección física.",
    solution: [
      "Captura de datos de sonar volumétrico 3D para evaluar el estado submarino de forma integral.",
      "Machine learning e IA para interpretar datos de sonar complejos y construir modelos predictivos.",
      "Análisis de flujo de fluidos y presión para desarrollar indicadores tempranos de fuga.",
      "Reducción significativa de la frecuencia de inspecciones físicas.",
    ],
    resultLabels: [],
    outcomes: [
      "Menor riesgo de fallo del equipo de seguridad gracias a la detección temprana.",
      "Más ingresos al reducir el tiempo improductivo y los costos operativos.",
      "Menor impacto ambiental sobre ecosistemas y fauna marina.",
    ],
  },

  naoo: {
    title: "Desarrollo de app móvil de servicio automotriz para Naoo",
    excerpt:
      "App móvil de asistencia en carretera para Naoo, plataforma australiana de servicios vehiculares, que permite comparar precios de combustible y solicitar mecánica y grúa.",
    client: "Naoo",
    challenge:
      "La app requería un sistema de pagos configurable con varios proveedores, notificaciones push, chat integrado entre clientes y call center, seguimiento de ubicación para identificar servicios cercanos y un mapa multifuncional con rangos de precios de combustible por zona.",
    solution: [
      "App móvil con React Native, TypeScript y Redux, usando funciones nativas del teléfono y Google Maps.",
      "Arquitectura de mapas a medida con librerías específicas para visualizar precios de combustible.",
      "CRM para que los empleados gestionen solicitudes y las respuestas de los equipos de servicio.",
      "Pasarela de pagos configurable desde el panel de administración.",
      "Servicios de CI/CD y certificación en las tiendas de iOS y Android.",
    ],
    resultLabels: [],
    outcomes: [
      "App funcional de asistencia que conecta clientes con servicios de reparación y grúa.",
      "Monitoreo de precios de combustible en tiempo real para encontrar las mejores tarifas cercanas.",
      "Ecosistema completo: panel de administración, apps iOS/Android y tienda integrada.",
    ],
  },

  "kustom-printing": {
    title: "Sistema de gestión de pedidos a medida para Kustom Printing",
    excerpt:
      "Progressive Web App para Kustom Printing Products que gestiona pedidos de mantenimiento y reparación de impresoras, funcionando sin conexión en zonas de baja cobertura.",
    client: "Kustom Printing Products",
    challenge:
      "La empresa necesitaba una aplicación de gestión de pedidos capaz de funcionar sin conexión en zonas con internet deficiente o nulo. El personal debía acceder a la información de clientes y gestionar pedidos desde ubicaciones remotas manteniendo el almacenamiento de datos seguro.",
    solution: [
      "Sistema de administración con React y .NET Core, usando tecnología PWA para acceso sin conexión.",
      "Calendario a medida para agendar citas y tareas.",
      "Firma manual para aprobaciones digitales de clientes.",
      "Temporizador propio para registrar horas de trabajo del personal.",
      "Monitoreo y distribución de pedidos en tiempo real por parte de los administradores.",
    ],
    resultLabels: [],
    outcomes: [
      "Gestión de pedidos sin conexión en todas las ubicaciones.",
      "Flujo de trabajo más ágil con supervisión en tiempo real.",
      "Notificaciones, alertas y analítica para seguir el desempeño.",
      "Captura de firma digital que elimina las aprobaciones en papel.",
    ],
  },

  timeoutdoors: {
    title:
      "Reconstrucción de una plataforma de eventos al aire libre con autogestión de socios en Kentico",
    excerpt:
      "TimeOutdoors reconstruyó su plataforma de eventos sobre Kentico Xperience 13 para habilitar la publicación autónoma de socios, con 17 % más tráfico y 75 % menos tiempo de alta.",
    client: "TimeOutdoors",
    duration: "Octubre 2021 — Marzo 2022",
    challenge:
      "El catálogo de eventos creció por encima de la capacidad interna de publicación: cada listado requería soporte de desarrollo. Los socios no podían gestionar sus propios contenidos, marketing consumía su tiempo en operaciones de contenido, la lógica de rutas de eventos estaba fragmentada y el rendimiento del servidor de origen se degradaba al escalar el inventario.",
    solution: [
      "Interfaz de edición para socios con controles simplificados para gestionar sus listados.",
      "Capa unificada de rutas que resuelve las URL de eventos por el árbol de contenido con fallback dinámico.",
      "Módulo de e-commerce integrado para carrito, pedidos y pagos.",
      "Personalización por segmentación para mostrar eventos relevantes.",
      "Automatización de flujos que reduce tareas manuales de marketing.",
      "Entrega de medios por CDN con caché multinivel para soportar el crecimiento del catálogo.",
    ],
    resultLabels: [
      "Más tráfico web",
      "Más ventas",
      "Alta de socios más rápida",
      "Eventos activos publicados",
    ],
    outcomes: ["El alta de socios bajó de 12 días a 3 días."],
  },

  "grocery-delivery": {
    title: "Diseño UI/UX para entrega de comestibles",
    excerpt:
      "Diseño UI/UX para una plataforma de entrega de comestibles, que llevó al cliente de vender solo por Instagram a una tienda automatizada basada en flujos de usuario investigados.",
    challenge:
      "El cliente necesitaba un sitio actual pero simple y minimalista para aumentar los pedidos. Muchos clientes abandonaban el proceso de compra, así que el diseño exigió investigación amplia —análisis de competencia, estudio del público objetivo y pruebas con usuarios— para asegurar una navegación sencilla.",
    solution: [
      "Análisis del público objetivo: mujeres y hombres de 20 a 35 años que buscan compras rápidas y de calidad.",
      "Mapa del sitio con 7 secciones principales: productos, carrito, cuenta, nosotros, entrega/pago, preguntas frecuentes y contacto.",
      "Flujos de usuario que establecen recorridos de compra lógicos y completos.",
      "Wireframes de baja fidelidad para eliminar distracciones y luego de alta fidelidad con contenido.",
      "Prototipo interactivo en Figma con versión móvil adaptativa.",
      "Pruebas con usuarios sobre los prototipos antes de desarrollar.",
    ],
    resultLabels: [],
    outcomes: [
      "Transición de pedidos solo por Instagram a una plataforma automatizada.",
      "Menor tiempo de espera del cliente por respuesta a su pedido.",
      "Más volumen de pedidos con menos personal necesario.",
    ],
  },

  "productivity-mobile-app": {
    title: "Diseño UI/UX para app móvil de productividad",
    excerpt:
      "Diseño multiplataforma para una app de productividad basada en el método Getting Things Done, que ayuda a organizar y priorizar tareas.",
    challenge:
      "Crear un diseño de app móvil multiplataforma que resultara intuitivo tanto para usuarios de iOS como de Android, implementando los fundamentos del método GTD.",
    solution: [
      "Mockups y prototipo creados en Figma.",
      "Análisis de competencia para identificar funciones útiles más allá de las bases de GTD.",
      "Marcado de tareas sin requerir registro.",
      "Subtareas y vista de calendario de tareas.",
      "Documentación completa de flujos de usuario y wireframes de todas las pantallas.",
    ],
    resultLabels: [],
    outcomes: [
      "La app ganó popularidad entre usuarios enfocados en organización de tareas y productividad.",
    ],
  },

  vivad: {
    title: "Automatización del sistema de gestión de pedidos",
    excerpt:
      "Automatización del procesamiento de pedidos de Vivad, dividiendo pedidos en tareas por centro de trabajo con trazabilidad por código QR y estado en tiempo real para el cliente.",
    client: "Vivad, empresa australiana de impresión digital de gran formato y banners",
    challenge:
      "El sistema debía manejar lógica de negocio compleja para dividir pedidos en tareas manejables y distribuirlas entre centros de trabajo, integrándose con los sistemas existentes y manteniendo la sincronización de datos en todos los puntos de contacto.",
    solution: [
      "Plataforma de procesamiento de pedidos totalmente automatizada con interfaz intuitiva.",
      "Panel apto para móvil donde los operarios ven sus tareas priorizadas.",
      "Navegación por código QR para trazabilidad de cada trabajo.",
      "Visualización del flujo con estado de pedido en tiempo real para clientes y personal.",
      "Gestión de colas de trabajo para minimizar tiempos muertos de producción.",
    ],
    resultLabels: [],
    outcomes: [
      "Reducción significativa de la carga operativa del equipo de Vivad.",
      "Monitoreo de producción en tiempo real y priorización de tareas.",
      "Mayor transparencia para el cliente mediante el seguimiento del pedido.",
    ],
  },

  dasparts: {
    title: "Sistema e-commerce para un vendedor de repuestos y accesorios de auto",
    excerpt:
      "Plataforma de e-commerce para DasParts, minorista canadiense de repuestos Volkswagen y Audi, con gestión de inventario y procesamiento automatizado de pedidos sobre Kentico.",
    client: "DasParts",
    challenge:
      "El proyecto avanzaba con presión de tiempo para implementar las plantillas de diseño, requería migrar la base de datos a un CMS flexible para futuras actualizaciones y necesitaba funciones modernas de captación para impulsar las ventas.",
    solution: [
      "Arquitectura de e-commerce sobre Kentico con búsqueda automatizada de repuestos.",
      "Integración de Scandit para escaneo de códigos de barras y gestión de inventario en almacén.",
      "Conexión con QuickBooks para sincronizar inventario, ventas y facturas en tiempo real.",
      "Integración con el courier Flagship para la entrega de pedidos.",
      "Automatización del procesamiento manual de pedidos y de la gestión del catálogo.",
    ],
    resultLabels: ["Crecimiento de ventas"],
    outcomes: [
      "Menos trabajo manual de inventario y procesamiento de pedidos.",
      "Mayor consistencia de datos entre sistemas.",
      "Pedidos en autoservicio sin intervención del personal.",
    ],
  },

  lavelio: {
    title: "Desarrollo de SaaS para una plataforma de IA en redes sociales",
    excerpt:
      "Plataforma SaaS multi-tenant que permite a marcas de moda, belleza y joyería analizar datos de redes sociales y entender las preferencias del consumidor con IA.",
    client: "Lavelio",
    challenge:
      "El proyecto exigía un desarrollo costo-eficiente dentro de un presupuesto ajustado, construyendo a la vez una solución SaaS multi-tenant capaz de escalar a múltiples clientes sin un gasto de infraestructura proporcional.",
    solution: [
      "Boilerplate en .NET Core para minimizar el desarrollo de funcionalidad de bajo nivel.",
      "Plantilla de UI en React provista por el cliente para reducir el esfuerzo de interfaz.",
      "Arquitectura multi-tenant con separación de base de datos por inquilino.",
      "Sistema de administración por roles para gestionar inquilinos y usuarios.",
      "Dashboard y portal de analítica intuitivos para el análisis de redes sociales.",
    ],
    resultLabels: [],
    outcomes: [
      "Plataforma SaaS sencilla que entrega insights de marketing en redes sociales.",
      "Solución costo-eficiente que cubre las necesidades del cliente manteniendo la rentabilidad.",
      "Infraestructura escalable que admite nuevos clientes sin inversión adicional significativa.",
    ],
  },

  prorank: {
    title: "Desarrollo de un marketplace para constructoras y subcontratistas",
    excerpt:
      "Marketplace de construcción donde constructoras y subcontratistas se conectan, contratan y transaccionan digitalmente, manteniendo estándares de calidad con reputación y valoraciones.",
    client:
      "Empresa líder mundial de construcción y servicios, con más de 6.000 millones de USD en contratos anuales",
    challenge:
      "El proyecto requería un desarrollo intensivo —multi-tenancy con bases separadas, facturación y pagos, gestión de suscripciones con cobro recurrente y dashboards con reportes— atendiendo a la vez las necesidades de constructoras y subcontratistas.",
    solution: [
      "Uso del framework ASP.NET Zero para enfocarse en el negocio y no en infraestructura de bajo nivel.",
      "Arquitectura multi-tenant con separación de base de datos para escalar.",
      "Sistema completo de facturación, pagos y gestión de suscripciones.",
      "Experiencia intuitiva tanto para publicar proyectos como para postularse a ellos.",
      "Sistema de reputación y valoraciones que incentiva el trabajo de calidad.",
    ],
    resultLabels: [],
    outcomes: [
      "La plataforma se lanzó en un par de meses.",
      "Varias empresas líderes se sumaron con múltiples subcontratistas.",
      "Se cerraron operaciones exitosas en la primera semana tras el lanzamiento.",
    ],
  },

  "shaw-pro": {
    title: "Sistema e-commerce para distribuidores de un fabricante de alfombras",
    excerpt:
      "Shaw Industries reconstruyó su portal B2B para distribuidores sobre Kentico MVC, modernizando una plataforma con mucho contenido y mejorando la captación de usuarios y el rendimiento.",
    client: "Shaw Industries Group, Inc.",
    challenge:
      "El antiguo Portal Engine no ofrecía el rendimiento ni las funciones que exigía un sitio con mucho contenido. Migrar a Kentico MVC implicaba reconstruir funcionalidad antes provista por web parts y widgets sin soporte nativo en la nueva plataforma.",
    solution: [
      "Migración a Kentico MVC para mayor control del HTML y un marcado más limpio y apto para SEO.",
      "Widgets a medida que reemplazan funciones del Portal Engine sin limitaciones de desarrollo.",
      "Arquitectura moderna que acelera notablemente la carga de páginas.",
      "Integración de la gestión de contenidos con inventario interno y servicios de imágenes.",
      "Interfaz responsiva pensada para múltiples tipos de dispositivo.",
    ],
    resultLabels: [
      "Más usuarios nuevos",
      "Crecimiento total de usuarios",
      "Más sesiones",
      "Menor tasa de rebote",
    ],
    outcomes: [],
  },

  staalduinen: {
    title: "Sistema de pedidos y app web para un distribuidor de flores en Canadá",
    excerpt:
      "Plataforma de pedidos B2B para Staalduinen Floral que permite a los clientes navegar, pedir y pagar en autoservicio, con precios e inventario del ERP en tiempo real.",
    client: "Staalduinen Floral Limited",
    challenge:
      "Todos los datos de clientes, productos y pedidos vivían en el ERP y requerían sincronización en tiempo real de precios e inventario sin degradar el rendimiento de la plataforma. La complejidad de la integración fue el principal obstáculo técnico.",
    solution: [
      "Sincronización programada de datos de producto —nombres, imágenes, atributos— hacia Kentico CMS.",
      "Endpoints de API dedicados para consultar precios e inventario en tiempo real.",
      "Portal de autoservicio que reduce la carga de procesamiento de pedidos del personal.",
      "Integración con los sistemas ERP existentes.",
      "Trabajo colaborativo con la agencia socia y el cliente final.",
    ],
    resultLabels: [],
    outcomes: [
      "Ciclo de venta más corto.",
      "Menor carga de trabajo del personal gracias al autoservicio.",
      "Sincronización fluida y en tiempo real entre el CMS y los sistemas de backend.",
    ],
  },

  digitron: {
    title: "Sistema de inventario y gestión de contenidos en Kentico MVC",
    excerpt:
      "Digitron Semiconductors modernizó su sitio con un sistema de inventario dinámico sobre Kentico, con 136 % más tráfico y editores capaces de ampliar el catálogo sin código.",
    client: "Digitron Semiconductors",
    challenge:
      "El sitio anterior no permitía ampliar el inventario con nuevos tipos de producto sin desarrollo significativo. La plataforma además no era responsiva, tenía problemas de rendimiento y fallos de validación que provocaban caídas cuando los editores cargaban datos inválidos.",
    solution: [
      "Módulos a medida en Kentico para que los editores creen tipos de producto y gestionen campos, filtros, unidades y visibilidad desde el panel, sin código.",
      "Plantillas dinámicas que generan listados y filtros a partir de la configuración y no de plantillas fijas.",
      "Migración de miles de productos fuera del árbol de contenido para mejorar el rendimiento.",
      "Estrategias de caché y compresión de contenido para acelerar el sitio.",
      "Indexación de búsqueda a medida e integración del parseo de documentación en PDF.",
    ],
    resultLabels: ["Más tráfico interanual"],
    outcomes: [
      "Mejor experiencia del editor, con menos errores de validación y caídas.",
      "Se alcanzó el objetivo de navegación en cinco clics para encontrar productos.",
      "Mejor adaptación a móviles en todo tipo de dispositivo.",
    ],
  },

  "fit-factory-clubs": {
    title: "Aplicación móvil y servicio web de fitness",
    excerpt:
      "Rediseño del sitio de un club de fitness que reforzó la presencia de marca y simplificó el recorrido del usuario, con más de 1.000 nuevas membresías en pocos meses.",
    client: "Fit Factory Clubs",
    challenge:
      "El sitio necesitaba representar mejor la marca y simplificar el recorrido del consumidor, mejorando la navegación de quienes buscaban información sobre la experiencia de estudio premium.",
    solution: [
      "Rediseño completo del sitio con fuerte foco en experiencia de usuario.",
      "Mejor navegación y acceso a la información.",
      "Flujos optimizados para editores de contenido y marketing.",
      "Integración amplia con los sistemas internos del cliente.",
    ],
    resultLabels: ["Membresías vendidas en pocos meses"],
    outcomes: [],
  },

  totaltechschool: {
    title: "Digitalización de Total Tech School",
    excerpt:
      "Total Tech School digitalizó procesos offline con una plataforma LMS y de e-commerce, eliminando la carga manual de datos y habilitando la compra de cursos online.",
    client: "Total Tech School",
    challenge:
      "La escuela necesitaba automatizar trabajo manual considerable y eliminar el seguimiento en hojas de cálculo de inscripciones, pagos, clases y calificaciones. El sistema requería arquitectura modular para acompañar cambios rápidos de proceso a medida que la escuela crecía.",
    solution: [
      "Sitio de e-commerce sobre Kentico CMS para comprar cursos y webinars.",
      "Evaluación y certificación en línea.",
      "Sistema de gestión de aprendizaje para programas, clases y horarios.",
      "Seguimiento de trabajos y gestión de calificaciones.",
      "Firma electrónica de documentos.",
      "Medidas de seguridad para evitar que se compartan los webinars.",
    ],
    resultLabels: [],
    outcomes: [
      "El tiempo de inscripción a un evento pasó de 1–2 días a procesamiento inmediato.",
      "Eliminación de la carga manual de datos y de los procesos en papel.",
      "Mejor acceso a la información para el equipo administrativo.",
    ],
  },

  "transition-to-trades": {
    title: "Sistema educativo de transición para Hiller",
    excerpt:
      "El sistema de gestión en Excel de Transition to Trades se convirtió en una aplicación web automatizada, eliminando procesos manuales y aumentando la eficiencia de los coordinadores.",
    client:
      "Transition to Trades, de Hiller Plumbing, Heating, Cooling & Electrical y la guarnición del Ejército de EE. UU. en Fort Campbell",
    challenge:
      "El cliente seguía todos sus procesos en hojas de Excel, lo que obligaba a hacer cambios en varios lugares, validar a mano y convivir con inconsistencias de datos. Ese enfoque manual era una carga considerable que limitaba la eficiencia operativa.",
    solution: [
      "Conversión del esquema en una aplicación web con flujos automatizados.",
      "Validación de entradas y construcción de relaciones entre datos.",
      "Listas de tareas autogeneradas para que los coordinadores no omitan acciones.",
      "Abstracción de alto nivel que permite extender el sistema con poco desarrollo.",
      "Entrevistas y seguimiento de empleo, gestión de eventos, reservas de clases, mentoría, reportes e informes de autorización estatal.",
    ],
    resultLabels: [],
    outcomes: [
      "Ahorro significativo de costos por mayor eficiencia de los coordinadores.",
      "Eliminación de errores humanos que exigían mucho tiempo de resolución.",
      "Menos acciones manuales y procesos globalmente más rápidos.",
    ],
  },

  "trutech-test": {
    title: "Herramienta de reclutamiento para evaluación de candidatos",
    excerpt:
      "SaaS de reclutamiento que permite a empresas de servicios evaluar el conocimiento de los candidatos e identificar brechas de formación: 160 empresas suscritas en el primer mes.",
    client: "Hiller Plumbing, Heating, Cooling & Electrical",
    challenge:
      "La aplicación debía atender a múltiples empresas con flujos y perspectivas distintas manteniendo el aislamiento de datos. Requería una arquitectura de nivel empresarial para cumplir los requisitos de SaaS multi-tenant sin perder capacidad de respuesta en todos los dispositivos.",
    solution: [
      "Backend en .NET Core y frontend en React para desarrollo ágil con estabilidad empresarial.",
      "Interfaz limpia e intuitiva, con navegación y funciones evidentes.",
      "Evaluación automatizada de resultados, que reduce casi al 100 % el tiempo de corrección manual.",
      "Aislamiento de datos multi-tenant para la seguridad y privacidad de cada suscriptor.",
      "Optimización de la respuesta en todos los dispositivos y tamaños de pantalla.",
    ],
    resultLabels: [
      "Empresas suscritas en el primer mes",
      "Pruebas grupales e individuales realizadas",
    ],
    outcomes: [
      "Un grupo de prueba confirmó que la aplicación es rápida y responsiva.",
      "Los responsables calificaron la interfaz como limpia y fácil de usar.",
    ],
  },

  "college-navigator": {
    title: "Software de navegación para estudiantes universitarios",
    excerpt:
      "Plataforma de recorrido virtual del campus que permite a futuros estudiantes explorar a distancia una universidad costera mediante panorámicas 360° y puntos interactivos.",
    client: "Institución educativa privada cerca de Boston",
    challenge:
      "Crear un sistema de navegación virtual sencillo de usar que integrara fotografía 360° con puntos interactivos dentro de las panorámicas, garantizando una experiencia fluida en todos los dispositivos.",
    solution: [
      "Panorámicas interactivas proyectadas sobre esferas 3D para recorridos inmersivos y realistas.",
      "Fotografía 360° adaptada para mostrar el campus con puntos de información clicables.",
      "Mapa interactivo del campus con marcadores que revelan detalles de edificios, fotos, videos e información de programas.",
      "Interfaz limpia y accesible con herramientas de navegación y diseño responsivo.",
      "Infraestructura de backend robusta que gestiona imágenes de alta resolución para cargas rápidas y transiciones suaves.",
    ],
    resultLabels: [
      "Más tráfico del sitio universitario",
      "Menor rebote en las páginas del recorrido",
      "Más consultas de futuros estudiantes",
      "Países alcanzados",
    ],
    outcomes: [],
  },

  "notification-center": {
    title: "Desarrollo de aplicación para una empresa hipotecaria",
    excerpt:
      "Herramienta de comparación hipotecaria con React, con cálculos en tiempo real y comparación lado a lado, integrada con una aplicación móvil existente.",
    client: "Mortgage Apps",
    challenge:
      "Crear desde cero una herramienta hipotecaria única e integrarla con una app móvil existente, ofreciendo una experiencia potente pero simplificada para encontrar opciones de crédito.",
    solution: [
      "Plataforma en React con filtros y facetas en tiempo real.",
      "Comparación inteligente lado a lado.",
      "Integración con el ecosistema de la aplicación móvil existente.",
      "Interfaz centrada en el usuario con respuesta inmediata a cada pulsación.",
      "Motor de cálculo en tiempo real para descubrir productos hipotecarios.",
    ],
    resultLabels: [],
    outcomes: [
      "Mejor experiencia de usuario con una interfaz intuitiva.",
      "Comparación de productos hipotecarios lado a lado.",
      "Resultados que se actualizan en tiempo real mientras el usuario escribe.",
    ],
  },

  "driver-dispatch": {
    title: "Software de automatización de seguimiento de carga para Cargo Bee",
    excerpt:
      "Seguimiento de carga y despacho de conductores automatizados que reemplazaron la gestión por email y teléfono, multiplicando por diez la capacidad sin sumar administrativos.",
    client: "Cargo Bee",
    challenge:
      "El seguimiento manual de cargas por bandeja de entrada obligaba a los responsables a llamar a los conductores para ofrecer las cargas más rentables, lo que generaba demoras e imprecisiones. El proceso consumía mucho tiempo y frenaba la escalabilidad.",
    solution: [
      "Firebase con la API de Gmail y Cloud Functions para capturar automáticamente las cargas entrantes por email.",
      "App multiplataforma en React Native para que los conductores vean cargas disponibles según su geolocalización.",
      "Postulación a cargas y notificaciones push sobre oportunidades cercanas al punto de recogida.",
      "Eliminación del seguimiento manual y menos comunicación telefónica entre administración y conductores.",
    ],
    resultLabels: ["Aumento de la capacidad de carga"],
    outcomes: [
      "Automatización de pasos administrativos manuales y menos sobrecarga de comunicación.",
      "Eliminación de errores humanos en el seguimiento y la asignación de cargas.",
    ],
  },

  "workplace-budget-tool": {
    title: "Herramienta de visualización y cotización de oficinas para una empresa de mobiliario",
    excerpt:
      "Herramienta de visualización y cotización que permite a los comerciales generar propuestas de espacios de trabajo a medida, con visualización y precios en minutos.",
    client: "Office Environments of New England / BKM Total Office and Business Interiors (NDA)",
    challenge:
      "La solución requería una lógica de cálculo de presupuesto compleja con decenas de variables, ya que la oferta altamente configurable del cliente hacía lentas y difíciles las cotizaciones precisas.",
    solution: [
      "Visualización interactiva del plano, desde la distribución hasta los detalles de decoración.",
      "Cálculo de presupuesto en tiempo real y generación de la propuesta comercial.",
      "Recorrido intuitivo que permite experimentar con opciones de configuración.",
      "Envío por email de la oferta detallada directamente al cliente.",
      "Proceso de venta más ágil con capacidad de cotización rápida.",
    ],
    resultLabels: [],
    outcomes: [
      "Ciclos de venta más rápidos y cierres más ágiles.",
      "El tiempo de generación de propuestas pasó de horas a minutos.",
    ],
  },

  "philadelphia-commercial": {
    title: "Integración de Kentico MVC para el e-commerce de un fabricante de alfombras",
    excerpt:
      "Philadelphia Commercial migró de Kentico Portal Engine a Kentico MVC, modernizando su plataforma de e-commerce con marcado más limpio y mayor participación.",
    client: "Shaw Industries Group, Inc. (Philadelphia Commercial)",
    challenge:
      "La migración exigía recrear numerosas funciones del Portal Engine ausentes en Kentico MVC, incluidos web parts y widgets de los que dependía el cliente, aprovechando a la vez las capacidades de la nueva plataforma.",
    solution: [
      "Uso del control superior del HTML en Kentico MVC para generar marcado más limpio y ligero.",
      "Widgets a medida que reemplazan la funcionalidad faltante del Portal Engine.",
      "Sistema de gestión de contenidos integrado con el catálogo de productos.",
      "Integración con el inventario interno y el servicio de imágenes.",
      "Configuración de granja web para escalar.",
    ],
    resultLabels: [
      "Más usuarios nuevos",
      "Crecimiento total de usuarios",
      "Más sesiones",
      "Vistas de página",
    ],
    outcomes: ["La tasa de rebote bajó del 42 % al 1,03 %."],
  },

  "mortgage-calculator": {
    title: "Herramienta de cotización hipotecaria para una entidad financiera",
    excerpt:
      "Calculadora hipotecaria mobile-first que permite estimar créditos rápidamente a clientes y asesores, con notificación automática al responsable en cada solicitud.",
    challenge:
      "La entidad financiera necesitaba ofrecer a usuarios y comerciales una calculadora de crédito e hipoteca rápida y fácil de usar para aumentar la conversión y agilizar el proceso de venta.",
    solution: [
      "Calculadora mobile-first para que el usuario estime costos según su situación financiera y las condiciones.",
      "Estimación de opciones de refinanciación con envío de solicitud integrado.",
      "Notificación automática a los responsables y almacenamiento de solicitudes en el sistema interno.",
      "Interfaz eficiente que mantiene la información clave de decisión en una sola pantalla.",
      "Herramientas para que los asesores coticen y consulten el historial de cada cliente.",
    ],
    resultLabels: [],
    outcomes: [
      "Procesamiento más rápido de consultas con almacenamiento centralizado.",
      "Más ventas y mayor captación de nuevos clientes.",
    ],
  },

  "eurobank-cyprus": {
    title: "Transformación digital de Eurobank Cyprus",
    excerpt:
      "Eurobank Cyprus rediseñó su sitio bancario sobre Kentico, sumando calculadoras financieras e infraestructura balanceada y lista para cumplimiento normativo.",
    client: "Eurobank Cyprus (Eurobank Group)",
    challenge:
      "El banco necesitaba migrar de un sitio heredado a un CMS maduro con gestión avanzada de contenidos, multimedia, navegación dinámica y carga eficiente, sobre infraestructura .NET, IIS y MS SQL Server apta para cumplimiento y en un sistema seguro con balanceo de carga.",
    solution: [
      "Kentico CMS para una gestión de contenidos segura y escalable.",
      "Herramientas financieras: calculadora de préstamos, conversor de divisas y calculadora de IBAN.",
      "Arquitectura de granja web para alta disponibilidad.",
      "Soporte de contenido multilingüe para la operación internacional.",
      "Interfaz amigable para editores que reduce la dependencia de desarrollo.",
    ],
    resultLabels: ["Aumento de tráfico"],
    outcomes: [
      "Mejor rendimiento del sitio y mejor experiencia de usuario.",
      "Requisitos de cumplimiento y de marketing atendidos a la vez.",
    ],
  },

  "trutech-tracker": {
    title: "Career Growth Tracker — TruTech",
    excerpt:
      "SaaS de seguimiento del desarrollo profesional que reemplaza hojas de cálculo por datos centralizados para la progresión de técnicos, reduciendo un 40 % el esfuerzo de los supervisores.",
    client: "Hiller Plumbing, Heating, Cooling & Electrical",
    challenge:
      "El equipo debía construir un SaaS multi-tenant que soportara flujos de usuario diversos aislando los datos de cada suscriptor, migrar desde procesos heredados en Excel, automatizar el seguimiento de progreso entre umbrales de inscripción y crear una interfaz intensiva accesible desde cualquier dispositivo.",
    solution: [
      "Los técnicos se inscriben por sí mismos según el puesto que ocupan para optar a una promoción.",
      "Notificaciones automáticas que avisan a los supervisores de cambios de estado de sus mentoreados.",
      "Panel centralizado que filtra datos por múltiples criterios con visibilidad del progreso.",
      "Arquitectura multi-tenant que aísla los datos entre empresas suscritas.",
      "Materiales de aprendizaje y definición de objetivos para mentores y mentoreados.",
    ],
    resultLabels: ["Menos tiempo y esfuerzo de supervisión"],
    outcomes: [
      "Eliminación de cientos de hojas de cálculo de inscripciones y de miles de registros históricos.",
      "Cualquier registro histórico se recupera rápidamente dentro de la aplicación.",
    ],
  },

  "pj-library-ua": {
    title: "Sistema de gestión de contenidos y usuarios para PJ Library",
    excerpt:
      "Sistema de gestión de contenidos y usuarios que permite al programa PJ Library distribuir libros gratuitos a familias judías en Ucrania, con flujos de envío automatizados.",
    client: "Harold Grinspoon Foundation",
    challenge:
      "La fundación necesitaba lanzar el programa PJ Library en Ucrania con un sistema capaz de gestionar registros, procesar datos de familias, generar listas de envío y automatizar la entrega de libros minimizando errores manuales.",
    solution: [
      "Registro y alta de familias para inscribir a sus hijos en el programa.",
      "Procesamiento automatizado de datos para generar listas de envío a partir de los registros.",
      "Integración con sistemas de mensajería para eliminar errores de carga manual.",
      "Flujos automatizados de envío y entrega a los suscriptores.",
      "Paneles de reportes y analítica con información del programa.",
    ],
    resultLabels: ["Familias suscritas en un año"],
    outcomes: [
      "Miles de familias judías accedieron a libros gratuitos y de alta calidad.",
      "El programa se lanzó con éxito en Ucrania.",
    ],
  },

  "vet-pharma-sales-tool": {
    title: "Herramienta de presupuesto para farmacéutica veterinaria",
    excerpt:
      "Herramienta de precios que permite a los responsables comerciales de una farmacéutica veterinaria calcular precios competitivos y procesar pedidos con dependencias complejas entre componentes.",
    challenge:
      "La aplicación debía manejar dependencias estrictas entre componentes médicos con requisitos de compatibilidad complejos, y cálculos de precio intrincados en los que el costo de cada componente variaba según su combinación con otros.",
    solution: [
      "Análisis del contenido del carrito para sugerir componentes compatibles.",
      "Pipeline de cálculo de precios complejo que contempla las interdependencias.",
      "Precios exactos y desglose detallado para el equipo comercial.",
      "Respuesta rápida a las solicitudes de precio de los clientes.",
    ],
    resultLabels: [],
    outcomes: [
      "Más ventas gracias a la respuesta rápida y a un modelo de precios competitivo.",
      "Ventaja competitiva sólida a partir de una estrategia de precios más sofisticada.",
    ],
  },

  "tour-booking-module": {
    title: "Sistema de reservas de visitas para una planta de reciclaje australiana",
    excerpt:
      "Una planta de reciclaje australiana reemplazó las reservas por teléfono y email por un módulo de autoservicio en Kentico, con más de 500 reservas en seis meses.",
    client: "Planta regional australiana de reciclaje y recuperación de recursos",
    duration: "8 semanas",
    challenge:
      "La planta gestionaba las reservas por teléfono, email y hojas de cálculo, obligando al personal a verificar manualmente la disponibilidad de cuatro tipos de visita con restricciones complejas: espacios compartidos, límites de aforo, feriados y sesiones enlazadas que podían solaparse. En temporada alta esto consumía hasta 12 horas semanales de trabajo administrativo.",
    solution: [
      "Extensión a medida de Kentico 12 con un servicio de planificación en .NET basado en reglas.",
      "Interfaz pública de reserva con disponibilidad en tiempo real y prevención automática de conflictos.",
      "Panel de administración para gestionar visitas recurrentes, aforo, cierres y dependencias.",
      "Emails de confirmación automáticos y almacenamiento centralizado de las reservas.",
      "Validación del lado del servidor, control de acceso por rol y registro de auditoría.",
    ],
    resultLabels: [
      "Reservas en los primeros seis meses",
      "Menos tiempo de administración",
      "Tiempo medio para completar una reserva",
      "Reservas duplicadas en los primeros 60 días",
    ],
    outcomes: [],
  },

  "sales-price-book": {
    title: "Catálogo de precios para una empresa de servicios residenciales y reparación",
    excerpt:
      "Catálogo de ventas apto para móvil que permite a los responsables de campo preparar ofertas filtradas, funcionando sin conexión en zonas de baja cobertura.",
    client:
      "Hiller, proveedor de servicios residenciales y comerciales en Tennessee, el sur de Kentucky y el norte de Alabama",
    challenge:
      "El cliente necesitaba actualizar el catálogo de productos desde una hoja de cálculo, controlar qué columnas eran filtrables y mantener la app operativa en lugares con conexión escasa o nula.",
    solution: [
      "Lectura directa del archivo Excel con caché en backend, en lugar de implementar una base de datos.",
      "Definición de las columnas filtrables dentro del propio Excel para facilitar las actualizaciones.",
      "Modo sin conexión mediante el Service Worker de Angular para operar sin internet.",
    ],
    resultLabels: [],
    outcomes: [
      "Preparación más rápida de ofertas para los comerciales en campo.",
      "Más operaciones cerradas con éxito.",
      "Mayor satisfacción del cliente.",
    ],
  },

  "org-chart": {
    title: "Software de directorio de empleados para una empresa de manufactura",
    excerpt:
      "Aplicación web que refleja la estructura organizativa completa de más de 20.000 empleados, con búsqueda predictiva, contacto integrado y directorio de instalaciones.",
    challenge:
      "Mantener los datos actualizados para más de 20.000 empleados exigía una sincronización continua con el Active Directory corporativo, donde se mantiene toda la información del personal.",
    solution: [
      "Aplicación web que muestra la estructura organizativa completa de más de 20.000 empleados.",
      "Búsqueda predictiva para encontrar personas rápidamente.",
      "Navegación sencilla hacia arriba y abajo por las ramas de la estructura.",
      "Envío de correos y llamadas desde la propia aplicación.",
      "Directorio de instalaciones de la empresa con indicaciones de cómo llegar.",
    ],
    resultLabels: ["Empleados en el directorio"],
    outcomes: [
      "Mejor comprensión de la estructura y navegación más rápida hacia cada persona.",
      "Mejor acceso a la información de contacto de los empleados.",
      "El directorio de instalaciones ahorra tiempo al buscar sedes y rutas.",
    ],
  },

  "site-builder": {
    title: "Constructor de sitios con plantillas para un cliente de manufactura",
    excerpt:
      "Constructor de sitios empresarial que permite a una red de concesionarios gestionar múltiples sitios promocionales desde una sola plataforma, manteniendo la coherencia de marca.",
    challenge:
      "El cliente industrial necesitaba gestionar todos los sitios promocionales de sus concesionarios en un solo lugar y que fueran fáciles de actualizar por perfiles no técnicos. Gestionar una red donde cada ubicación requiere su propio sitio, manteniendo la coherencia del contenido, plantea desafíos importantes.",
    solution: [
      "Varios diseños de sitio con plantillas y distintos temas de color.",
      "Funciones adicionales como catálogo de productos y opciones de dominio propio.",
      "Producción de contenido centralizada y compartida entre todos los sitios.",
      "Construido sobre Kentico, .NET, React y SASS.",
      "Menores costos de mantenimiento con un enfoque de construir una vez y reutilizar.",
    ],
    resultLabels: [],
    outcomes: [
      "Ahorro en marketing gracias a la producción centralizada de contenido.",
      "Información consistente en todos los sitios de concesionarios.",
      "Reducción significativa de costos de mantenimiento y desarrollo de funciones.",
    ],
  },

  "rug-calculator": {
    title: "Configurador de alfombras a medida para un fabricante de EE. UU.",
    excerpt:
      "Configurador de alfombras que permite diseñar alfombras personalizadas con precios dinámicos, elevando un 37 % las ventas de alfombras a medida.",
    challenge:
      "El equipo debía implementar un algoritmo de precios complejo capaz de manejar numerosas configuraciones —material, tamaño, forma, base y bordes— y diseñar una interfaz que motivara la personalización creativa frente a la compra de productos ya hechos.",
    solution: [
      "Backend en Microsoft .NET para una arquitectura flexible, extensible y personalizable.",
      "Frontend en AngularJS con un recorrido paso a paso y visualización de la alfombra.",
      "Aplicación web ligera y responsiva que funciona en todos los dispositivos.",
      "Inyección dinámica de configuración para ajustar la lógica de precios.",
    ],
    resultLabels: ["Más ventas de alfombras a medida"],
    outcomes: [
      "Nuevas capacidades y experiencias para el cliente.",
      "Tiempo liberado del personal, ya que los clientes diseñan sus alfombras por su cuenta.",
    ],
  },

  "current-choice": {
    title: "Current Choice: marketplace de proveedores de electricidad",
    excerpt:
      "Marketplace que permite a los consumidores comparar proveedores de electricidad y cambiar de plan mediante análisis factura a factura y datos de consumo en tiempo real.",
    client: "Current Choice",
    challenge:
      "La plataforma debía integrar múltiples APIs de terceros —proveedores y distribuidoras— para obtener datos de consumo, planes disponibles y precios, y procesar los cambios de proveedor, gestionando además las restricciones de disponibilidad por zona de servicio.",
    solution: [
      "Unificación de múltiples interfaces de terceros detrás de una única interfaz genérica.",
      "Adaptadores propios para cada servicio de terceros.",
      "Inyección de dependencias y patrones de diseño para una arquitectura flexible y extensible.",
      "Traslado de todo el proceso de cambio a canal online para reducir la gestión manual.",
    ],
    resultLabels: ["Crecimiento anual durante varios años"],
    outcomes: [
      "Más ingresos por cambios residenciales a otros proveedores y distribuidoras.",
      "Reducción significativa de las horas necesarias para gestionar el proceso de cambio.",
    ],
  },
};
