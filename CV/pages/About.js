import { ResizeService } from '../services/observers/ResizeObserver.js';
export class AboutView extends HTMLElement {
    connectedCallback() {
        this.render();
        const resizer = new ResizeService((rect) => {
            console.log(`Ventana Sobre Mí mide: ${rect.width}px`);
            if (rect.width < 600) {
                this.querySelector('.about-layout').style.flexDirection = 'column';
            } else {
                this.querySelector('.about-layout').style.flexDirection = 'row';
            }
        });
        resizer.observeElement(this.querySelector('.about-window'));
    }

    render() {
        this.innerHTML = `
            <section class="Sobre-mi about-window">
                <div class="Sobre-mi__encabezado">
                    <h2 class="Sobre-mi__title">C:\\Users\\Andres\\Desktop\\User_Profile.inf</h2>
                    <div class="Sobre-mi__buttons">
                        <span class="Sobre-mi__button Sobre-mi__button--minimize"><img src="assets/minimizar2.png" class="button-icon"></span>
                        <span class="Sobre-mi__button Sobre-mi__button--maximize"><img src="assets/ventana.webp" class="button-icon"></span>
                        <span class="Sobre-mi__button Sobre-mi__button--close">X</span>
                    </div>
                </div>

                <div class="about-layout">
                    <aside class="about-sidebar">
                        <div class="sidebar-group">
                            <h4 class="sidebar-title">Información Personal</h4>
                            <ul class="sidebar-list">
                                <li><strong>Ubicación:</strong> Bolivia</li>
                                <li><strong>Idioma:</strong> Español/Inglés</li>
                            </ul>
                        </div>
                        <div class="sidebar-group">
                            <h4 class="sidebar-title">Intereses (Hobbies)</h4>
                            <ul class="sidebar-list">
                                <li>🎮 Videojuegos</li>
                                <li>🎨 Dibujo & Diseño</li>
                                <li>📖 Filosofía</li>
                            </ul>
                        </div>
                    </aside>

                    <main class="about-main">
                        <div class="about-section">
                            <h3 class="about-section-title">Perfil Profesional</h3>
                            <p class="about-text">
                                Estudiante de Ingeniería de Software con sólida base en algoritmia y desarrollo multiplataforma. Galardonado dos veces a nivel nacional en el NASA Space Apps Challenge, demostrando capacidad de innovación y resolución de problemas en tiempo récord. Participante activo en programación competitiva (ICPC). Poseo un nivel de inglés C1 y dominio técnico en C++, Python y Java. Busco una oportunidad para aportar mi capacidad analítica y liderazgo en un entorno de desarrollo desafiante
                            </p>
                        </div>

                        <div class="about-section">
                            <h3 class="about-section-title">Experiencia Destacada </h3>
                            <ul class="experience-list">
                                <li>
                                    <strong>Desarrollo Web Full Stack:</strong> 
                                    Experiencia en la aplicación de Angular y JavaScript puro para soluciones dinámicas.
                                </li>
                                <li>
                                    <strong>Software Multiplataforma:</strong> 
                                    Dominio técnico aplicando C++, Python y Java en escenarios complejos de ICPC.
                                </li>
                                <li>
                                    <strong>Liderazgo en Innovación:</strong> 
                                    Rol clave y liderazgo técnico en Moondust Crusaders (Ganadores NASA Space Apps 2024, 2025).
                                </li>
                            </ul>
                        </div>
                    </main>
                </div>
            </section>
        `;
    }
}
customElements.define('about-view', AboutView);