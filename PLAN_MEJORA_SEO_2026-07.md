# Plan de mejora SEO y visibilidad - Tuna Rosa (Julio 2026)

## 0) Arranque operativo (17/07/2026)

Estado: iniciado.

Este plan pasa a ejecución con prioridad en internacionalización SEO real (contenido + metadatos + arquitectura por idioma), no solo traducción visible.

Avances ya aplicados:

- Internacionalización completa del bloque narrativo del evento de Totana en la página de Murcia (títulos y párrafos con claves i18n).
- Internacionalización de atributos visibles de accesibilidad en Murcia (aria-label y alt).
- Ampliación del motor de idioma para traducir atributos: aria-label, alt, title y placeholder.
- Traducciones añadidas para ES, EN, CAT, EUS, PT, FR y GAL en las claves nuevas de Murcia/Totana.
- Metadatos SEO internacionalizados (title, description, Open Graph y Twitter) en:
  - index.html
  - pages/tuna-murcia.html
  - pages/videos-youtube.html
  - pages/contacto.html
- Página pages/tuna-alicante.html migrada a i18n funcional (head + contenido principal + scripts de idioma).
- Coherencia hreflang reforzada en head y sitemap.xml para URLs clave (incluyendo x-default).
- Fase 1 iniciada y ejecutada: páginas individuales de vídeo creadas y enlazadas desde el hub.
- Fase 2 cerrada: páginas nuevas publicadas para expansión regional y nacional:
  - pages/tuna-valencia.html
  - pages/tuna-lgtbi-espana.html
  - pages/tuna-lgtbi-alicante.html
- Enlazado interno reforzado desde inicio, contacto, vídeos y página local de Alicante hacia las nuevas URLs objetivo.
- Sitemaps finales actualizados para cierre de fase:
  - sitemap.xml (nuevas URLs geográficas y de vídeo)
  - sitemap-images.xml (nuevas URLs con imágenes representativas)

Pendiente para cerrar el 100% internacionalizado en clave SEO:

- Metadatos del head por idioma completados en páginas clave (pendiente solo revisión fina de copy por idioma).
- Estructura de URLs por idioma para SEO (evitar depender solo de cambio JS en cliente).
- Etiquetas hreflang x-default + alternates por URL equivalente (base completada; pendiente validar en Search Console).
- Sitemap por idioma o sitemap único con variantes bien normalizadas.
- Texto descriptivo JSON-LD por idioma (aplazado temporalmente).

## 1) Objetivo

Aumentar visibilidad orgánica en Google y Google Imágenes para búsquedas de marca, locales, regionales y nacionales, reforzando que Tuna Rosa es una agrupación musical inclusiva y no el fruto.

Enfoque geográfico:

- Base: Alicante
- Expansión prioritaria: Murcia y Valencia
- Captación amplia: toda España

## 2) Diagnóstico actual (estado real de la web)

- Ya existe una base multipágina útil para SEO:
  - Inicio: index.html
  - Vídeos: pages/videos-youtube.html
  - Local SEO Alicante: pages/tuna-alicante.html
  - Contacto/Únete: pages/contacto.html
- Ya hay señales SEO técnicas activas:
  - sitemap.xml y sitemap-images.xml
  - Datos estructurados en inicio y página de vídeos
  - Metadatos sociales (Open Graph/Twitter)
- Ya hay traducciones por idioma en js/translations.js
- Oportunidades principales detectadas:
  - Falta separar vídeos en páginas individuales para resultados de vídeo
  - Falta una arquitectura editorial (blog) con calendario de contenidos
  - Falta una estructura de enlazado interno más agresiva entre páginas clave
  - Falta normalizar metadatos por página con una intención de búsqueda única

## 3) Validación de las recomendaciones propuestas por la otra IA

### Lo que sí está bien y conviene aplicar

- Estructurar contenido por intención en páginas específicas
- Potenciar palabras clave locales y de cola larga
- Crear contenidos recurrentes (blog/noticias)
- Mejorar experiencia móvil, rendimiento y CTAs

### Lo que adaptamos a la realidad de esta web

- No partimos de una sola página: ya hay varias. Por tanto, no se rehace todo, se optimiza lo que ya existe.
- La prioridad no es crear más páginas genéricas, sino:
  1. Resolver indexación de vídeo (una URL por vídeo)
  2. Crear plan editorial y páginas de evento
  3. Reforzar enlazado y entidad de marca

## 4) Plan de ejecución por fases

## Fase 0 (inmediata, 1-2 días)

Objetivo: consolidar señales técnicas para relectura rápida.

Tareas:

1. Reenviar sitemaps en Search Console:
   - https://tunarosa.es/sitemap.xml
   - https://tunarosa.es/sitemap-images.xml
2. Solicitar indexación de URLs clave:
   - https://tunarosa.es/
   - https://tunarosa.es/pages/tuna-alicante.html
   - https://tunarosa.es/pages/videos-youtube.html
   - https://tunarosa.es/pages/contacto.html
3. Verificar que robots.txt no bloquee recursos críticos y que imágenes respondan 200.

Resultado esperado:

- Relectura acelerada y estabilización de cobertura.

## Fase 0.5 (prioridad crítica, 2-4 días) - Internacionalización SEO

Objetivo: que Google entienda y sirva versión idiomática correcta de cada URL clave.

Tareas:

1. Definir arquitectura multilenguaje:

- Opción recomendada: rutas por idioma (`/es/`, `/en/`, `/cat/`, etc.) o sufijo claro por página.
- Mantener una URL canónica por idioma y contenido equivalente.

2. Añadir etiquetas hreflang en páginas estratégicas:

- `index.html`
- `pages/tuna-murcia.html`
- `pages/tuna-alicante.html`
- `pages/videos-youtube.html`
- `pages/contacto.html`

3. Separar metadatos por idioma:

- title + meta description
- Open Graph title/description
- Texto descriptivo en JSON-LD cuando proceda

4. Validar coherencia SEO por idioma:

- Canonical apuntando a la versión del mismo idioma
- Sin mezcla de idiomas en snippets

5. Actualizar sitemaps tras cambios:

- `sitemap.xml`
- `sitemap-images.xml` (si cambian URLs de destino)

Resultado esperado:

- Mejora de relevancia por idioma en resultados orgánicos.
- Menos riesgo de canibalización entre versiones idiomáticas.
- Señales más fuertes para internacionalización en Search Console.

## Fase 1 (prioridad alta, 3-5 días)

Objetivo: desbloquear visibilidad en resultados de vídeo.

Tareas:

1. Crear una página por vídeo principal.
   - Ejemplo de URLs:
     - pages/video-orgullo-totana-1.html
     - pages/video-orgullo-totana-2.html
2. Cada página de vídeo debe incluir:
   - Un solo VideoObject
   - El vídeo como contenido principal visible
   - Texto editorial propio (contexto, evento, breve resumen)
   - CTA a canal de YouTube y a contacto
3. Mantener pages/videos-youtube.html como hub/listado, enlazando a las páginas individuales.
4. Añadir estas URLs al sitemap.xml.

Resultado esperado:

- Reducir incidencias de tipo no es página de visualización de vídeo.

## Fase 2 (prioridad alta, 1 semana)

Objetivo: escalar posicionamiento local, regional y nacional de intención musical.

Tareas:

1. Mejorar la página local Alicante con más bloques semánticos:
   - Dónde actuamos en Alicante
   - Tipo de eventos
   - Cómo contratar/colaborar
2. Crear páginas geográficas de expansión:

- pages/tuna-murcia.html
- pages/tuna-valencia.html

3. Crear una página nacional de captación:

- pages/tuna-lgtbi-espana.html

4. Crear una página temática adicional de intención fuerte:
   - pages/tuna-lgtbi-alicante.html
5. Reforzar enlazado interno desde inicio, contacto y vídeos hacia las páginas locales, regionales y nacionales.
6. Homogeneizar títulos y metadescripciones para no canibalizar (una intención por ciudad/ámbito).

Resultado esperado:

- Mejor cobertura para búsquedas locales, regionales y transaccionales.

## Fase 3 (prioridad media, continuo)

Objetivo: atraer tráfico nuevo con contenido fresco.

Tareas:

1. Activar sección blog con frecuencia mínima quincenal.
2. Publicar 2 a 4 piezas al mes con enfoque SEO:
   - Resumen de actuaciones
   - Crónicas de eventos LGTBIQA+
   - Historias de miembros e instrumentos
3. Cada artículo debe incluir:
   - Palabra clave principal
   - 2 a 4 palabras secundarias
   - Enlace a vídeo o evento relacionado
   - CTA a contacto/unirse

Resultado esperado:

- Aumento de impresiones por long-tail y más URLs posicionando.

## 5) Palabras clave objetivo por clusters

## Marca

- tuna rosa
- tuna rosa lgtbiqa+
- tuna rosa alicante
- tuna rosa murcia
- tuna rosa valencia
- tuna rosa españa

## Locales

- tuna en alicante
- tuna lgtbi alicante
- música inclusiva alicante
- actuaciones tuna alicante

## Regionales (expansión)

- tuna en murcia
- tuna lgtbi murcia
- musica inclusiva murcia
- actuaciones tuna murcia
- tuna en valencia
- tuna lgtbi valencia
- musica inclusiva valencia
- actuaciones tuna valencia

## Nacionales (escala)

- tuna lgtbi españa
- musica inclusiva españa
- grupo de musica lgtbiqa+ españa
- tuna inclusiva españa
- contratacion tuna para eventos españa

## Intención de unión/participación

- unirme a una tuna en alicante
- unirme a una tuna en murcia
- unirme a una tuna en valencia
- unirme a una tuna en españa
- tuna inclusiva para unirme
- contacto tuna rosa

## Vídeo/eventos

- actuaciones tuna rosa
- orgullo totana tuna rosa
- vídeos tuna rosa youtube

## 6) Qué vamos a tocar y cómo (mapa de implementación)

- index.html
  - Reforzar enlaces a páginas objetivo y CTAs de conversión
- pages/videos-youtube.html
  - Mantener rol de índice y derivar a páginas de vídeo individuales
- pages/tuna-alicante.html
  - Ampliar contenido local y bloque de contratación/colaboración
- pages/contacto.html
  - Mantener mensaje de acceso desde cualquier lugar y FAQ alineada
- js/translations.js
  - Añadir claves para todo texto nuevo en todos los idiomas
- sitemap.xml
  - Incluir nuevas URLs de vídeo y contenido
- sitemap-images.xml
  - Mantener imagen principal y captions optimizados

## 7) Medición y seguimiento (KPIs)

## KPI de visibilidad

- Impresiones y clics (Search Console) en:
  - Marca
  - Local Alicante
  - Regional Murcia
  - Regional Valencia
  - Nacional España
  - Vídeos
- Número de consultas nuevas con clics cada 28 días

## KPI de indexación

- URLs válidas indexadas
- Errores de vídeo (si aparecen, corregir por plantilla)
- Estado de los sitemaps y fecha de última lectura

## KPI de negocio

- Clics hacia contacto
- Clics al canal de YouTube
- Solicitudes recibidas por email/Instagram

## 8) Calendario recomendado

- Semana 1: Fase 0 + Fase 1
- Semana 2: Fase 2
- Semana 3 en adelante: Fase 3 continua
- Revisión quincenal de KPIs y ajuste de contenidos

## 9) Riesgos y mitigación

- Riesgo: canibalización entre páginas similares.
  - Mitigación: una intención principal por URL.
- Riesgo: traducir tarde y romper UX multidioma.
  - Mitigación: no publicar textos nuevos sin claves en js/translations.js.
- Riesgo: resultados de vídeo dominados por YouTube.
  - Mitigación: páginas de visualización propias con contenido editorial fuerte.

## 10) Próximo paso operativo

Orden de arranque actualizado:

1. Ejecutar Fase 0.5 (internacionalización SEO en páginas clave).
2. Ejecutar Fase 1 (dos páginas de vídeo individuales).
3. Actualizar y reenviar `sitemap.xml` + `sitemap-images.xml` en Search Console.
