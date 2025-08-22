# 🌿 Podas Macho - Sitio Web de Empresa de Jardinería

Sitio web estático profesional para Podas Macho, especialistas en poda de palmeras y jardinería en Benidorm, Altea, Alfaz del Pi, Albir y La Nucia. Disponible en **español** e **inglés**.

## 🌐 Versiones de Idioma

- **Español**: Página principal en español para el mercado local
- **English**: English version for international customers on Costa Blanca

## 📋 Características Principales

- **Diseño Responsive**: Adaptado para móviles, tablets y escritorio
- **Bilingüe**: Versiones completas en español e inglés
- **Selector de Idioma**: Cambio fácil entre idiomas en el top bar
- **Galería Interactiva**: Slider horizontal con lightbox para mostrar trabajos realizados
- **Formulario de Contacto**: Sistema de contacto con validación
- **Navegación Intuitiva**: Menú desplegable para servicios
- **Información de Contacto**: Top bar con teléfono y email destacados
- **Redes Sociales**: Enlaces a Instagram y Facebook
- **Botón WhatsApp**: Acceso directo para consultas rápidas

## Descripción

Esta es una página web estática moderna y responsive que presenta los servicios de Podas Macho, una empresa con 8 años de experiencia en:

- Poda y tala de palmeras y arbolado
- Tratamientos contra plagas y enfermedades
- Mantenimiento integral de jardines
- Servicio de destoconado
- Limpieza de fincas y parcelas

## Características

- **Diseño Responsive**: Adaptable a todos los dispositivos
- **Botón de WhatsApp**: Contacto directo flotante
- **Navegación Suave**: Scroll suave entre secciones
- **Animaciones**: Efectos visuales al hacer scroll
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Diseño accesible y usable

## Estructura del Proyecto

```
PODAS_MACHO/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── script.js       # JavaScript funcional
└── README.md           # Este archivo
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Grid y Flexbox
- **JavaScript**: Funcionalidades interactivas
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografía Roboto

## Funcionalidades

### Navegación

- Menú hamburguesa para móviles
- Navegación suave entre secciones
- Header que se adapta al scroll

### Contacto

- Botón de WhatsApp flotante con animación
- Información de contacto completa
- Enlaces a redes sociales

### Responsive Design

- Diseño adaptable desde 320px hasta escritorio
- Grid flexible para servicios y ciudades
- Imágenes y contenido optimizado

## Instalación y Uso

### Opción 1: Servidor Node.js (Recomendado)

1. **Instalar dependencias**:

   ```bash
   npm install
   ```

2. **Iniciar el servidor**:

   ```bash
   npm start
   ```

3. **Abrir en el navegador**: http://localhost:8000

### Opción 2: Servidor de desarrollo

```bash
# Para desarrollo con recarga automática
npm run dev
```

### Opción 3: Otros servidores locales

```bash
# Con http-server (incluido)
npm run serve

# Con Python
python -m http.server 8000

# Con PHP
php -S localhost:8000
```

## Personalización

### Colores

Los colores principales se pueden modificar en `css/styles.css`:

- Verde principal: `#2d5a3d`
- Verde secundario: `#4a7c59`
- Verde claro: `#a8d5ba`

### Contenido

- Modificar textos en `index.html`
- Cambiar número de WhatsApp en el botón flotante
- Actualizar información de contacto

### Imágenes

Para agregar imágenes:

1. Crear carpeta `images/`
2. Agregar imágenes optimizadas
3. Actualizar referencias en HTML/CSS

## SEO y Analytics

### Meta Tags Incluidos

- Title y description optimizados
- Keywords relevantes
- Viewport para móviles
- Open Graph (preparado para redes sociales)

### Para Analytics

Agregar código de Google Analytics en `<head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

## Optimización

### Performance

- CSS y JS minificados para producción
- Imágenes optimizadas (WebP cuando sea posible)
- Lazy loading implementado

### Velocidad de Carga

- Fuentes web optimizadas
- CSS crítico inline
- JavaScript no bloqueante

## Contacto de la Empresa

- **Teléfono**: 648294101
- **Email**: podasmacho@hotmail.com
- **Ubicación**: 03502 Benidorm, Alicante
- **WhatsApp**: +34 648294101

## Zonas de Trabajo

- Altea
- Benidorm
- Alfaz del Pi
- Albir
- La Nucia

## Licencia

© 2025 MIGUEL MACHO LOPEZ - Todos los derechos reservados
