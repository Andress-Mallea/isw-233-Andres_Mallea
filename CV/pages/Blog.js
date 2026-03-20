// CV/pages/Blog.js
import { state } from '../services/StateManager.js';
import { IntersectionService } from '../services/observers/IntersectionObserver.js';

export class BlogView extends HTMLElement {
    constructor() {
        super();
        this.currentFilter = 'todos';
        this.articles = [];
        this.favorites = [];
        // Instancia única del servicio para cumplir con SOLID
        this.scrollObserver = new IntersectionService(); 
    }

    connectedCallback() {
        // Suscripción al Sujeto (StateManager)
        state.subscribe(this);
        
        // Carga inicial de datos
        this.articles = state.articles;
        this.favorites = state.favorites;
        
        this.render();
    }

    disconnectedCallback() {
        // Limpieza de memoria (importante para la nota de Ingeniería)
        state.unsubscribe(this);
    }

    // Método del Patrón Observer: Se ejecuta cuando el StateManager llama a notify()
    update(articles, favorites) {
        this.articles = articles;
        this.favorites = favorites;
        this.render();
    }

    render() {
        const filteredArticles = this.articles.filter(art => {
            if (this.currentFilter === 'favoritos') {
                return this.favorites.includes(art.id);
            }
            if (this.currentFilter === 'todos') {
                return true;
            }
            return art.category === this.currentFilter;
        });

        this.innerHTML = `
            <section class="Sobre-mi blog-window">
                <div class="Sobre-mi__encabezado">
                    <h2 class="Sobre-mi__title">C:\\Users\\Andres\\Documents\\Mis_Articulos.txt</h2>
                    <div class="Sobre-mi__buttons">
                        <span class="Sobre-mi__button">_</span>
                        <span class="Sobre-mi__button">□</span>
                        <span class="Sobre-mi__button Sobre-mi__button--close">X</span>
                    </div>
                </div>

                <div class="Sobre-mi__container blog-container">
                    <div class="blog-filters">
                        <button class="filter-btn ${this.currentFilter === 'todos' ? 'active' : ''}" data-cat="todos">TODOS</button>
                        <button class="filter-btn ${this.currentFilter === 'favoritos' ? 'active' : ''}" data-cat="favoritos">⭐ FAVORITOS</button>
                        <button class="filter-btn ${this.currentFilter === 'Logros' ? 'active' : ''}" data-cat="Logros">LOGROS</button>
                    </div>

                    <div class="blog-grid">
                        ${filteredArticles.length > 0 ? 
                            filteredArticles.map(article => this.createCardTemplate(article)).join('') : 
                            '<p class="empty-msg">No se encontraron archivos en esta carpeta.</p>'
                        }
                    </div>
                </div>
            </section>
        `;

        this.setupEventListeners();

        // RE-OBSERVACIÓN: Como innerHTML borró todo, volvemos a observar los nuevos elementos
        // Usamos requestAnimationFrame o setTimeout para esperar al siguiente ciclo de render del navegador
        requestAnimationFrame(() => {
            this.scrollObserver.observeElements('.blog-card');
        });
    }

    createCardTemplate(article) {
        const isFav = this.favorites.includes(article.id);
        return `
            <article class="blog-card ${isFav ? 'blog-card--fav' : ''}">
                <div class="blog-card__header">
                    <button class="fav-btn" data-id="${article.id}" title="Marcar como favorito">
                        ${isFav ? '★' : '☆'}
                    </button>
                    <img src="${article.img}" alt="${article.title}" class="blog-card__image">
                </div>
                <div class="blog-card__content">
                    <span class="blog-card__category">${article.category}</span>
                    <h4 class="blog-card__title">${article.title}</h4>
                    <p class="blog-card__desc">${article.desc}</p>
                    <button class="xp-button-small">Abrir...</button>
                </div>
            </article>
        `;
    }

    setupEventListeners() {
        // Manejo de clicks en filtros
        this.querySelectorAll('.filter-btn').forEach(btn => {
            btn.onclick = () => {
                this.currentFilter = btn.getAttribute('data-cat');
                this.render();
            };
        });

        // Manejo de clicks en favoritos (comunica al StateManager)
        this.querySelectorAll('.fav-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation(); // Evita que el click se propague a la tarjeta
                const id = parseInt(btn.getAttribute('data-id'));
                state.toggleFavorite(id);
            };
        });
    }
}
customElements.define('blog-view', BlogView);