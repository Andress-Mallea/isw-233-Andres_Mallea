export class ProjectsView extends HTMLElement {
    constructor() {
        super();
        this.projects = [
            {
                title: 'Proyecto 1',
                desc: 'Plataforma interactiva desarrollada con Angular y JavaScript, optimizada para la gestión eficiente de datos...',
                img: 'assets/Image__Optimus-Prime.jpeg'
            },
            {
                title: 'Proyecto 2',
                desc: 'Videojuego de lógica y exploración diseñado en Game Maker, implementando mecánicas complejas...',
                img: 'assets/Image__Optimus-Prime.jpeg'
            },
            {
                title: 'Proyecto 3',
                desc: 'Implementación de algoritmos avanzados en C++ para la resolución de problemas de optimización...',
                img: 'assets/Image__Optimus-Prime.jpeg'
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let projectsHTML = this.projects.map(p => `
            <section class="Proyect">
                <div class="Proyect__encabezado">
                    <h3 class="Proyect__title">${p.title}</h3>
                    <div class="Sobre-mi__buttons">
                        <span class="Sobre-mi__button Sobre-mi__button--minimize"><img src="assets/minimizar2.png" class="button-icon"></span>
                        <span class="Sobre-mi__button Sobre-mi__button--maximize"><img src="assets/ventana.webp" class="button-icon"></span>
                        <span class="Sobre-mi__button Sobre-mi__button--close">X</span>
                    </div>
                </div>
                <div class="Proyect__container">
                    <div class="Proyect__image-container">
                        <img src="${p.img}" alt="${p.title}" class="Proyect__photo">
                    </div>
                    <div class="Proyect__column-container">
                        <div class="Proyect__description-container">
                            <p class="Proyect__description">${p.desc}</p>
                        </div>
                        <button class="Proyect_redirect-button">Ir a Ver La Pagina del Proyecto</button>
                    </div>
                </div>
            </section>
        `).join('');

        this.innerHTML = `<div class="projects-wrapper">${projectsHTML}</div>`;
    }
}
customElements.define('projects-view', ProjectsView);