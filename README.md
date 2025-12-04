# 🎧 Landing Page - Auriculares Bluetooth Gamer

Landing page moderna y atractiva para la venta de auriculares gamer con diseño neón, efectos visuales impactantes y experiencia de usuario optimizada.

## 📋 Descripción del Proyecto

Este proyecto es una página de aterrizaje (landing page) completamente funcional diseñada para promocionar y vender auriculares Bluetooth para gamers. Cuenta con un diseño visual llamativo inspirado en la estética gamer con efectos de neón, partículas animadas y un flujo de compra completo.

## ✨ Características Principales

### 🎨 Diseño y Estética
- **Paleta de colores neón**: Negro (#070606), Rojo (#C8102E) y Dorado (#D4AF37)
- **Partículas animadas** de fondo con efecto neón
- **Tipografías personalizadas**: Orbitron (títulos) y Noto Sans JP (texto)
- **Efectos visuales**: Sombras brillantes, gradientes y animaciones suaves

### 🖼️ Componentes Visuales
- **Carrusel de imágenes** con 3 variantes de auriculares
  - Navegación manual con botones
  - Indicadores de posición (dots)
  - Avance automático cada 5 segundos
- **Cards informativas** con íconos sobre características del producto
- **Testimonios de usuarios** con avatares y calificaciones
- **Tabla comparativa** con competidores del mercado

### 🛒 Funcionalidad de Compra
- **Formulario multi-paso**:
  1. Datos personales y de envío (con selector de provincias argentinas)
  2. Datos de pago con tarjeta
- **Validación completa**:
  - Algoritmo de Luhn para validar números de tarjeta
  - Validación de formato de fecha de vencimiento (MM/YY)
  - Validación de CVV
- **Modal de procesamiento** con spinner y mensajes de estado
- **Confirmación de pedido** con número de orden único
- **Enmascaramiento de tarjeta** para seguridad

### ⏱️ Elementos de Conversión
- **Temporizador de oferta limitada** (15 minutos)
- **Múltiples CTAs** estratégicamente ubicados
- **Garantía de devolución** destacada (30 días)
- **Comparación de precios** con competidores
- **Formulario de suscripción** al newsletter

### 📱 Responsive Design
- Adaptación completa a dispositivos móviles
- Grid flexible para cards y testimonios
- Formularios optimizados para diferentes tamaños de pantalla

## 🗂️ Estructura de Archivos

```
proyecto/
│
├── index.html          # Página principal de venta
├── about.html          # Página sobre la programadora
├── styles.css          # Estilos completos del proyecto
├── scripts.js          # Funcionalidad JavaScript
├── README.md           # Este archivo
│
├── auriculares1.png    # Imagen carrusel (variante negra)
├── auriculares2.png    # Imagen carrusel (variante roja)
├── auriculares3.png    # Imagen carrusel (variante azul)
└── priscila.jpeg       # Foto de la desarrolladora
```

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Flexbox y Grid para layouts
  - Animaciones y transiciones
  - Gradientes y efectos visuales
  - Media queries para responsive
- **JavaScript Vanilla**:
  - Manipulación del DOM
  - Validaciones de formulario
  - Animaciones con Canvas
  - Local Storage (opcional)

## 💻 Funcionalidades JavaScript

### Canvas de Partículas
Sistema de partículas animadas que crea un fondo dinámico con 80 partículas que se mueven y rebotan en los bordes del canvas.

### Sistema de Carrusel
- Cambio manual con botones prev/next
- Selección directa con dots
- Auto-avance cada 5 segundos
- Transiciones suaves de opacidad

### Temporizador de Oferta
Cuenta regresiva de 15 minutos que genera urgencia en la compra.

### Validación de Tarjetas
Implementación del algoritmo de Luhn para validar números de tarjeta de crédito de forma matemática.

### Flujo de Compra
1. Validación de datos personales
2. Transición a formulario de pago
3. Simulación de procesamiento (2.2 segundos)
4. Generación de número de pedido único
5. Confirmación visual con modal

## 🎯 Secciones de la Página

1. **Hero**: Carrusel de productos + título principal + CTA
2. **Beneficios**: 4 cards con características destacadas
3. **Testimonios**: 3 testimonios de usuarios con avatares
4. **Oferta Limitada**: Temporizador + descuento + CTA
5. **Comparación**: Tabla vs competidores (Razer, HyperX, Corsair)
6. **Garantía**: Promesa de devolución en 30 días
7. **Formulario de Compra**: Proceso completo de checkout
8. **Footer**: Redes sociales + suscripción + copyright

## 📧 Información de Contacto

La página incluye enlaces a:
- WhatsApp
- Instagram
- TikTok
- Formulario de suscripción al newsletter

## 👩‍💻 Sobre la Desarrolladora

**Priscila Rupcic**
- Programadora Web especializada en landing pages para emprendedores
- [LinkedIn](https://www.linkedin.com/in/priscilarupcic)
- [Instagram](https://www.instagram.com/priscilarupcic)

## 🔄 Posibles Mejoras Futuras

- [ ] Integración con pasarela de pago real (Stripe, MercadoPago)
- [ ] Backend para procesamiento de pedidos
- [ ] Sistema de envío de emails automatizado
- [ ] Base de datos para almacenar pedidos
- [ ] Panel de administración
- [ ] Integración con sistemas de envío
- [ ] A/B testing de variantes de diseño
- [ ] Analíticas de conversión
- [ ] Chat en vivo con soporte
- [ ] Sistema de cupones de descuento

## 📝 Notas de Implementación

- El formulario actualmente simula el procesamiento pero no envía datos a ningún servidor
- Las imágenes de auriculares deben estar en el mismo directorio que el HTML
- Los iconos se cargan desde CDNs externos
- Las fuentes se importan desde Google Fonts
- Compatible con navegadores modernos (Chrome, Firefox, Safari, Edge)

## ⚠️ Consideraciones de Seguridad

**IMPORTANTE**: Este es un proyecto educativo/demostrativo. Para un entorno de producción real:
- Nunca procesar pagos en el frontend
- Utilizar HTTPS obligatorio
- Implementar validación en servidor
- Usar pasarelas de pago certificadas PCI-DSS
- Nunca almacenar datos de tarjetas completos
- Implementar tokens de seguridad (CSRF)
- Sanitizar todas las entradas de usuario

## 📄 Licencia

© 2025 Priscila Rupcic. Todos los derechos reservados.

---

**Desarrollado con 💜 para gamers que buscan estilo y calidad**
