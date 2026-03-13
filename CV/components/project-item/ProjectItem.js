export class ProjectItem extends HTMLElement {
    constructor() {
        super();
        this._data = null;
    }

    set data(value) {
        this._data = value;
        this.render();
    }

    render() {
        if (!this._data) return;

        // Estructura basada en tu CSS de proyectos
        this.innerHTML = `
            <section class="Proyect">
                <div class="Proyect__encabezado">
                    <h3 class="Proyect__title">${this._data.title}</h3>
                    <div class="Sobre-mi__buttons">
                        <span class="Sobre-mi__button Sobre-mi__button--minimize">
                            <img src="assets/minimizar2.png" alt="Icono" class="button-icon">
                        </span>
                        <span class="Sobre-mi__button Sobre-mi__button--maximize">
                            <img src="assets/ventana.webp" alt="Icono" class="button-icon">
                        </span>
                        <span class="Sobre-mi__button Sobre-mi__button--close">X</span>
                    </div>
                </div>
                <div class="Proyect__container">
                    <div class="Proyect__image-container">
                        <img src="${this._data.image}" alt="${this._data.title}" class="Proyect__photo">
                    </div>
                    <div class="Proyect__column-container">
                        <div class="Proyect__description-container">
                            <p class="Proyect__description">${this._data.description}</p>
                        </div>
                        <button class="Proyect_redirect-button">Ir a Ver La Pagina del Proyecto</button>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('project-item', ProjectItem);