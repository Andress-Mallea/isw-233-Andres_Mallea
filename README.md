# Windows XP Portfolio SPA

Este proyecto es una **Single Page Application (SPA)** desarrollada con **JavaScript vanila**, centrada en la implementación de patrones de diseño avanzados y el uso exhaustivo de observadores nativos para gestionar una interfaz retro inspirada en la estética de Windows XP.

---

## Arquitectura y Patrones de Diseño (GoF)

Para garantizar la escalabilidad y el mantenimiento del sistema, se implementaron los siguientes patrones:

| Patrón | Implementación | Propósito |
| :--- | :--- | :--- |
| **Singleton** | `StateManager.js` | Garantiza una **fuente única de verdad** para el estado global de la aplicación (artículos del blog y favoritos), evitando inconsistencias entre vistas. |
| **Observer (Manual)** | `StateManager.js` → `BlogView` | Desacopla la lógica de datos de la interfaz de usuario. El estado notifica automáticamente a los componentes suscritos mediante `notify()` para una actualización reactiva de la UI sin llamadas manuales. |
| **Factory Method** | `ComponentFactory.js` | Centraliza la creación de las vistas de la aplicación basándose en la ruta del navegador. Facilita la escalabilidad al permitir añadir nuevas secciones sin modificar el Router. |

---

## Web Components (Custom Elements)

La interfaz se construye mediante componentes nativos distribuidos de forma modular para mejorar la organización del código:

* **Vistas Principales (`pages/`):** `HomeView`, `AboutView`, `AbilitiesView`, `EducationView`, `ProjectsView` y `BlogView`.
* **Elementos Reutilizables (`components/`):** `NameCard`, `CustomFooter`, `ProjectItem` y `BlogArticle`.

### **Ventajas del enfoque:**
* **Encapsulamiento:** Gestión independiente de HTML, lógica y estilos mediante la metodología **BEM** en CSS, evitando colisiones globales.
* **Reutilización:** Capacidad de instanciar elementos como `ProjectItem` con diferentes sets de datos de manera eficiente.
* **Semántica:** Mejora la legibilidad del DOM principal al utilizar etiquetas personalizadas como `<blog-view>` o `<custom-footer>`.

---

## 👁️ Sistema de Observadores Nativos

Se implementaron tres tipos de servicios de observación en la carpeta `services/observers/` para gestionar eventos complejos del sistema de forma asíncrona:

### **1. Mutation Observer**
* **Ubicación:** Inicializado en `app.js` mediante `MutationService.js`.
* **Función:** Monitorea el `#app-root` para detectar cambios estructurales en la SPA. Permite al "Kernel" del sistema realizar logs de navegación e inicializaciones automáticas cada vez que el Router inyecta una nueva vista.

### **2. Intersection Observer**
* **Ubicación:** Implementado en `Blog.js` mediante `IntersectionService.js`.
* **Función:** Optimiza el rendimiento y la **UX**. Las tarjetas del blog activan su animación de *fade-in* solo cuando entran en el área visible del usuario (viewport), reduciendo la carga visual innecesaria.

### **3. Resize Observer**
* **Ubicación:** Implementado en `About.js` mediante `ResizeService.js`.
* **Función:** Implementa un diseño responsivo basado en contenedores. Si la ventana de perfil cambia de dimensiones, el observador ajusta dinámicamente el layout (`flex-direction`) para asegurar la legibilidad constante de la información.

---

## Tecnologías Utilizadas

* **JavaScript (ES6+):** Uso de Módulos, Clases y Web Components nativos.
* **CSS3:** Implementación de la metodología **BEM** (Block Element Modifier) para estilos escalables.
* **LocalStorage:** Persistencia de datos para la funcionalidad de artículos favoritos, permitiendo que las preferencias del usuario se mantengan tras recargar la página.

