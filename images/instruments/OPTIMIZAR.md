# Guía para Optimizar Imágenes de Instrumentos

## 📏 Tamaños Recomendados

**Ancho:** 600-800 píxeles máximo
**Alto:** 800-1200 píxeles (para instrumentos verticales)
**Formato:** JPG o WebP
**Calidad:** 80-85% (buen equilibrio calidad/tamaño)

## 🔧 Usando ImageMagick (Linux)

### Instalar ImageMagick (si no lo tienes):

```bash
sudo apt-get install imagemagick
```

### Redimensionar todas las imágenes a la vez:

```bash
cd /home/juanma/personal/tunarosa/images/instruments

# Redimensionar manteniendo proporción (ancho máximo 700px)
for img in *.jpg *.JPG *.jpeg *.JPEG 2>/dev/null; do
  [ -f "$img" ] && mogrify -resize 700x -quality 85 "$img"
done

# O con PNG
for img in *.png *.PNG 2>/dev/null; do
  [ -f "$img" ] && mogrify -resize 700x -quality 85 -format jpg "$img"
done
```

### Redimensionar imagen por imagen:

```bash
# Ejemplo para una imagen específica
mogrify -resize 700x -quality 85 guitarra.jpg
mogrify -resize 700x -quality 85 pandereta.jpg
```

### Convertir de otro formato a JPG:

```bash
convert pandereta.png -quality 85 pandereta.jpg
```

## 🌐 Herramientas Online (sin instalar nada)

1. **TinyPNG.com** - Arrastra y suelta, comprime automáticamente
2. **Squoosh.app** - De Google, muy visual
3. **iLoveIMG.com** - Redimensiona múltiples a la vez
4. **Compressor.io** - Muy buena calidad

## 📝 Nombres de Archivos Necesarios

Asegúrate de que las imágenes tengan exactamente estos nombres:

- pandereta.jpg
- ukelele.jpg
- cuatro-venezolano.jpg
- bandurria.jpg
- requinto.jpg
- cuatro-boliviano.jpg
- guitarra.jpg
- laud.jpg

## ✅ Verificar Tamaño Actual

```bash
cd /home/juanma/personal/tunarosa/images/instruments
ls -lh *.jpg
```

Tamaño ideal por archivo: **50-200 KB**
Si son más de 500 KB, deberías optimizar.

## 🚀 Script Rápido de Optimización

Copia y pega esto en la terminal:

```bash
cd /home/juanma/personal/tunarosa/images/instruments

# Backup primero (por si acaso)
mkdir -p ../instruments-backup
cp *.* ../instruments-backup/ 2>/dev/null

# Optimizar todas las JPG
for img in *.jpg *.JPG *.jpeg *.JPEG 2>/dev/null; do
  if [ -f "$img" ]; then
    echo "Optimizando $img..."
    mogrify -resize 700x700\> -quality 85 -strip "$img"
  fi
done

echo "✅ Optimización completada!"
ls -lh
```

El símbolo `>` en `700x700\>` significa "solo redimensiona si es más grande".
