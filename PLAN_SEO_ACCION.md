# 🚀 Plan de Acción SEO - Tuna Rosa LGTBIQA+

**Fecha de análisis:** 13 de febrero de 2026  
**Nivel actual:** 8/10 ✅ (MUY BUENO)

---

## ✅ YA IMPLEMENTADO (Lo que acabo de hacer)

### 1. Sitemap.xml mejorado

- ✅ Fechas actualizadas a 2026-02-13
- ✅ Agregado soporte multiidioma con hreflang
- ✅ Prioridades optimizadas

### 2. Hreflang tags

- ✅ Agregados en index.html y contacto.html
- ✅ Declara 7 idiomas disponibles (es, ca, gl, eu, pt, en, fr)
- ✅ Google ahora sabe que ofreces contenido multiidioma

### 3. Schema.org mejorado

- ✅ Doble markup: Organization + WebSite
- ✅ Agregado `knowsAbout` (mejora relevancia temática)
- ✅ `availableLanguage` declarado
- ✅ Información de contacto enriquecida

### 4. Favicon agregado

- ✅ Mejora la confianza del usuario
- ✅ Visible en pestañas y marcadores

---

## 🚨 TAREAS CRÍTICAS (Hazlas ESTA SEMANA)

### 1. Optimizar imágenes ⚠️ URGENTE

**Problema actual:**

```
logo.png         → 576 KB (debería ser <100 KB)
requinto.jpg     → 300 KB (debería ser <80 KB)
1767695303243.jpg → 256 KB (debería ser <100 KB)
guitarra.jpg     → 144 KB (debería ser <60 KB)
```

**Solución:**

#### Opción A: Online (Más fácil)

1. Ve a https://tinypng.com
2. Sube todas las imágenes de `/images`
3. Descarga las versiones optimizadas
4. Reemplázalas en tu servidor

#### Opción B: Convertir a WebP (Mejor SEO)

```bash
# Instala la herramienta (solo una vez)
sudo apt install webp  # En Linux
# brew install webp    # En Mac

# Convierte todas las imágenes
cd /home/juanma/personal/tunarosa/images
for img in *.jpg *.png; do
  cwebp -q 85 "$img" -o "${img%.*}.webp"
done
```

Luego actualiza el HTML:

```html
<!-- Antes -->
<img src="images/logo.png" alt="Logo" />

<!-- Después -->
<picture>
  <source srcset="images/logo.webp" type="image/webp" />
  <img src="images/logo.png" alt="Logo" />
</picture>
```

**Impacto:** ⚡ +30% velocidad de carga = Mejor ranking en Google

---

### 2. Google Search Console (15 minutos)

**Pasos exactos:**

1. **Ve a:** https://search.google.com/search-console
2. **Haz clic en:** "Agregar propiedad" → "Prefijo de URL"
3. **Escribe:** `https://tunarosa.es`
4. **Verifica con HTML tag:**
   - Google te dará un código como: `<meta name="google-site-verification" content="ABC123...">`
   - Cópialo
   - Pégalo en `index.html` línea 44 (donde dice `TU_CODIGO_AQUI`)
   - Sube el archivo
   - Vuelve a Google y haz clic en "Verificar"

5. **Envía el sitemap:**
   - Menú izquierdo → "Sitemaps"
   - Escribe: `sitemap.xml`
   - Enviar

**Beneficio:** Google te dirá exactamente:

- Qué búsquedas llevan a tu web
- Qué URLs están indexadas
- Errores que debes corregir

---

### 3. Crear contenido (Blog)

**La carpeta `/pages/blog` está vacía ← PROBLEMA GRANDE**

Google ama el contenido fresco. Necesitas al menos 5-10 artículos.

**Ideas de artículos fáciles:**

1. **"Historia de la Tuna Rosa: Nuestros Orígenes"**
   - Cuenta cómo empezó el proyecto
   - 500-800 palabras
   - Usa palabras clave: "tuna LGTBIQA+", "música inclusiva España"

2. **"¿Qué es una Tuna? Tradición y Modernidad"**
   - Explica qué es una tuna para quien no lo sepa
   - Historia tradicional vs. tu enfoque moderno
   - Palabras clave: "qué es una tuna", "tuna estudiantil"

3. **"Instrumentos de la Tuna Rosa: Nuestra Diversidad Musical"**
   - Describe cada instrumento
   - Ya tienes las fotos ✅
   - Palabras clave: "instrumentos tuna", "bandurria", "cuatro venezolano"

4. **"Eventos LGTBIQA+ en España: Dónde nos Encontrarás"**
   - Lista de eventos donde actuáis
   - Calendario de actuaciones
   - Palabras clave: "eventos LGTB España", "música pride"

5. **"Únete a Tuna Rosa: Requisitos y Proceso de Membresía"**
   - Tutorial detallado
   - FAQs ampliadas
   - Palabras clave: "cómo unirse tuna", "asociación LGTB música"

**Formato recomendado:**

```html
<!-- /pages/blog/historia-tuna-rosa.html -->
<!doctype html>
<html lang="es">
  <head>
    <meta
      name="description"
      content="Descubre cómo nació Tuna Rosa LGTBIQA+, la primera tuna inclusiva de España dedicada a la diversidad y el feminismo."
    />
    <meta
      name="keywords"
      content="historia tuna rosa, tuna LGTBIQA+ España, origen tuna inclusiva"
    />
    <link
      rel="canonical"
      href="https://tunarosa.es/pages/blog/historia-tuna-rosa.html"
    />
    <title>Historia de Tuna Rosa LGTBIQA+ | Nuestros Orígenes</title>
    ...
  </head>
</html>
```

**Frecuencia:** 1 artículo nuevo cada 2-3 semanas = Google te ama

---

## 📊 MEJORAS TÉCNICAS (Mes próximo)

### 1. Lazy Loading de imágenes

Agrega esto a todas las `<img>`:

```html
<img src="imagen.jpg" alt="..." loading="lazy" />
```

**Dónde:**

- index.html (líneas de instrumentos)
- contacto.html (imágenes del escudo)

### 2. Preconnect a CDNs

En el `<head>` de todas las páginas:

```html
<link rel="preconnect" href="https://cdnjs.cloudflare.com" />
<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
```

### 3. Minificar CSS/JS

**Opción fácil:** Usa https://www.minifier.org

- Sube `css/style.css` → Descarga `style.min.css`
- Sube `js/main.js` → Descarga `main.min.js`
- Actualiza las referencias en HTML

### 4. Agregar breadcrumbs

En páginas internas como contacto.html:

```html
<nav aria-label="breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
    >
      <a itemprop="item" href="/">
        <span itemprop="name">Inicio</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <li
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
    >
      <span itemprop="name">Contacto</span>
      <meta itemprop="position" content="2" />
    </li>
  </ol>
</nav>
```

---

## 🔗 BACKLINKS (Link Building)

**Objetivo:** Conseguir que otros sitios enlacen a tunarosa.es

### Directorios LGTBIQA+ (fáciles):

- [ ] https://www.felgtb.org (Federación Estatal LGTBI)
- [ ] https://cogam.es (Colectivo LGTB+ Madrid)
- [ ] https://lambdavalencia.org
- [ ] Directorios autonómicos de tu región

### Medios y prensa:

- [ ] Envía nota de prensa a:
  - Shangay Magazine
  - DosManzanas
  - El Plural (sección LGTB)
  - Medios locales de tu ciudad

### Asociaciones culturales:

- [ ] Tunas tradicionales (ofrecer colaboraciones)
- [ ] Asociaciones estudiantiles
- [ ] Centros culturales

**Plantilla de email:**

```
Asunto: Tuna Rosa LGTBIQA+ - Nueva Asociación Musical Inclusiva

Hola,

Me llamo [Tu nombre] y soy [coordinador/miembro] de Tuna Rosa LGTBIQA+,
la primera tuna inclusiva dedicada a la diversidad sexual y el feminismo en España.

Nos encantaría que nos incluyerais en vuestro directorio de asociaciones
LGTBIQA+ / culturales.

Web: https://tunarosa.es
Instagram: @tunarosalgtbiqaplus
Descripción breve: Tuna musical inclusiva donde todas las personas tienen
cabida. Celebramos la diversidad, el feminismo y el amor a través de la música.

¿Sería posible? ¡Gracias!

Saludos,
[Tu nombre]
Tuna Rosa LGTBIQA+
```

---

## 📱 REDES SOCIALES ← SUPER IMPORTANTE

**Google considera las señales sociales:**

### Instagram (ya lo tienes ✅)

- [ ] Publica 3-4 veces/semana
- [ ] Usa hashtags: #TunaRosa #LGTBIQA+ #MúsicaInclusiva #Diversidad #Pride #TunaEspaña
- [ ] Link en bio → tunarosa.es

### YouTube (mencionado en footer pero ¿existe?)

- [ ] Crea canal
- [ ] Sube vídeos de actuaciones
- [ ] Título: "Tuna Rosa LGTBIQA+ en [evento] - [canción]"
- [ ] Descripción con link a web

### Facebook Page (opcional)

- Más audiencia mayor de 30 años
- Compartir eventos

---

## ⚡ QUICK WINS (Cosas de 5 minutos)

### 1. Alt text en imágenes

Verifica que TODAS las imágenes tengan alt descriptivo:

```html
<!-- ❌ MAL -->
<img src="logo.png" alt="" />

<!-- ✅ BIEN -->
<img
  src="logo.png"
  alt="Logo Tuna Rosa LGTBIQA+ - Bandera multicolor con escudo"
/>
```

### 2. Enlaces internos

En cada página, enlaza a otras secciones:

```html
<!-- En index.html, dentro del texto -->
<p>
  Si quieres formar parte de nuestra familia musical,
  <a href="pages/contacto.html">descubre cómo unirte</a>.
</p>
```

### 3. Copyright actualizado

En footer.html línea ~40:

```html
<!-- Cambia 2026 por el año actual -->
<p>© 2026 Tuna Rosa LGTBIQA+</p>
```

---

## 📈 KPIs (Cómo medir el éxito)

### Google Search Console (revisa cada semana):

- **Impresiones:** Cuántas veces aparece tu web en búsquedas
- **Clics:** Cuántos entran
- **CTR:** % de clics (objetivo: >3%)
- **Posición media:** Qué puesto ocupas (objetivo: Top 10)

### Google Analytics (cuando lo instales):

- Visitas totales
- Tiempo en página (objetivo: >1:30 min)
- Tasa de rebote (objetivo: <60%)
- Páginas más vistas

---

## 🎯 PLAN DE 90 DÍAS

### Semana 1-2 (AHORA):

- [x] Sitemap actualizado ✅
- [x] Hreflang tags ✅
- [x] Schema.org mejorado ✅
- [ ] Optimizar imágenes
- [ ] Registrar en Google Search Console
- [ ] Enviar sitemap a Google

### Semana 3-4:

- [ ] Escribir 2 artículos de blog
- [ ] Agregar lazy loading
- [ ] Minificar CSS/JS
- [ ] Registrarse en 5 directorios LGTBIQA+

### Mes 2:

- [ ] 2 artículos más de blog
- [ ] Conseguir 3-5 backlinks
- [ ] Crear canal YouTube
- [ ] Enviar nota de prensa

### Mes 3:

- [ ] Analizar métricas en Search Console
- [ ] Ajustar palabras clave según datos reales
- [ ] 2 artículos más
- [ ] Plan de contenido para próximos 6 meses

---

## 🆘 RECURSOS GRATUITOS

### Herramientas SEO:

- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics:** https://analytics.google.com
- **Test Mobile-Friendly:** https://search.google.com/test/mobile-friendly
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Schema.org Validator:** https://validator.schema.org

### Optimización de imágenes:

- **TinyPNG:** https://tinypng.com
- **Squoosh:** https://squoosh.app (Google)
- **Convertidor WebP:** https://cloudconvert.com/jpg-to-webp

### Aprendizaje:

- **Google SEO Starter Guide:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- **Moz Beginner's Guide:** https://moz.com/beginners-guide-to-seo

---

## ❓ FAQ - Si tienes dudas

**P: ¿Cuánto tarda Google en indexar cambios?**  
R: 1-7 días normalmente. Acelera enviando sitemap en Search Console.

**P: ¿Necesito pagar por SEO?**  
R: NO. Todo lo que necesitas es gratis. Las herramientas que menciono son gratuitas.

**P: ¿Cuándo veré resultados?**  
R: SEO es largo plazo. Primeros resultados en 4-8 semanas. Pico en 6-12 meses.

**P: ¿Qué es lo MÁS importante?**  
R: Contenido de calidad (blog) + Google Search Console + Backlinks

**P: ¿Debo contratar a alguien?**  
R: Con tu nivel actual (8/10), NO. Sigue este plan y en 3 meses reevalúa.

---

## 📞 NEXT STEPS (Ahora mismo)

1. ✅ **YA HECHO:** Mejoras técnicas implementadas
2. **TÚ HACES (hoy):** Optimizar imágenes en TinyPNG
3. **TÚ HACES (esta semana):** Registrar en Google Search Console
4. **TÚ HACES (próximas 2 semanas):** Escribir primer artículo de blog
5. **TÚ HACES (mes próximo):** Enviar sitemap y revisar métricas

---

**¡Tu SEO es SÓLIDO! Solo necesitas contenido regular y paciencia. 🌈🎵**

---

_Última actualización: 13 de febrero de 2026_  
_Creado por: Análisis SEO automatizado para Tuna Rosa LGTBIQA+_
