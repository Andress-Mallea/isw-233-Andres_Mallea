
import { state } from '/services/StateManager.js';

export class BlogArticle extends HTMLElement {
    constructor() {
        super();
        this._articleData = null;
    }

    // Usamos un setter para pasar los datos al componente
    set data(value) {
        this._articleData = value;
        this.render();
    }

    connectedCallback() {
        // Patrón Observer: nos suscribimos a cambios en los favoritos
        state.subscribe((favorites) => {
            this.updateFavoriteUI(favorites);
        });
    }

    render() {
    if (!this._articleData) return;

    const template = document.getElementById('tpl-articulo');
    if (!template) {
        console.error("No se encontró el template #tpl-articulo");
        return;
    }

    const content = template.content.cloneNode(true);
    
    // Verificamos que los elementos existan antes de asignarles valor
    const titleEl = content.querySelector('.articulo__title');
    const descEl = content.querySelector('.articulo__description');
    const photoEl = content.querySelector('.articulo__photo');

    if (titleEl) titleEl.textContent = this._articleData.title;
    if (descEl) descEl.textContent = this._articleData.desc;
    if (photoEl) photoEl.src = this._articleData.img;
    
    const favBtn = content.querySelector('.articulo__fav-btn');
    if (favBtn) {
        favBtn.addEventListener('click', () => state.toggleFavorite(this._articleData.id));
    }

    this.innerHTML = '';
    this.appendChild(content);
    this.updateFavoriteUI(state.favorites);
}

    updateFavoriteUI(favorites) {
        const btn = this.querySelector('.articulo__fav-btn');
        if (btn && this._articleData) {
            const isFav = favorites.includes(this._articleData.id);
            // Aplicamos modificador BEM para el estado activo
            isFav ? btn.classList.add('articulo__fav-btn--active') 
                  : btn.classList.add('articulo__fav-btn--inactive');
        }
    }
}
customElements.define('blog-article', BlogArticle);