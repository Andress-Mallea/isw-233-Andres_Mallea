
export class AbilitiesView extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="Sobre-mi abilities-window">
                <div class="Sobre-mi__encabezado">
                    <h2 class="Sobre-mi__title">C:\\Users\\Andres\\Habilidades.sys</h2>
                    <div class="Sobre-mi__buttons">
                        <span class="Sobre-mi__button Sobre-mi__button--minimize">
                                <img src="assets/minimizar2.png" alt="Foto de Andres Mallea"  class="button-icon">
                            </span>
                            <span class="Sobre-mi__button Sobre-mi__button--maximize">
                                <img src="assets/ventana.webp" alt="Foto de Andres Mallea"  class="button-icon">
                            </span>
                            <span class="Sobre-mi__button Sobre-mi__button--close">X</span>
                    </div>
                </div>
                
                <div class="Sobre-mi__container abilities-container">
                    <h3 class="abilities-subtitle">>> Mi Stack Técnico e Idiomas</h3>
                    <div class="skills-grid">
                        <div class="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" class="skill-icon">
                            <span class="skill-name">C++</span>
                        </div>
                        <div class="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="skill-icon">
                            <span class="skill-name">Python</span>
                        </div>
                        <div class="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" class="skill-icon">
                            <span class="skill-name">Java</span>
                        </div>
                        <div class="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" class="skill-icon">
                            <span class="skill-name">JavaScript</span>
                        </div>
                        <div class="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" class="skill-icon">
                            <span class="skill-name">Angular</span>
                        </div>
                        <div class="skill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="skill-icon">
                            <span class="skill-name">React</span>
                        </div>
                        <div class="skill-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055666.png" alt="Design" class="skill-icon">
                            <span class="skill-name">Diseño / Dibujo</span>
                        </div>
                        
                        <div class="skill-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Español" class="skill-icon" style="border-radius: 4px; box-shadow: 1px 1px 3px rgba(0,0,0,0.2);">
                            <span class="skill-name">Español (Nativo)</span>
                        </div>

                        <div class="skill-card">
                            <img src="https://flagcdn.com/w40/gb.png" alt="Inglés" class="skill-icon" style="border-radius: 4px; box-shadow: 1px 1px 3px rgba(0,0,0,0.2);">
                            <span class="skill-name">Inglés (C1)</span>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('abilities-view', AbilitiesView);