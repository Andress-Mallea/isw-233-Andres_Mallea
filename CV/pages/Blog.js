// CV/pages/Blog.js
import { state } from '/services/StateManager.js';
import { BlogService } from '/services/BlogService.js';

export class BlogView extends HTMLElement {
    connectedCallback() {
        // Nos suscribimos para re-renderizar cuando se añada un artículo
        state.subscribe(() => this.render());
        this.render();
    }

    render() {
    this.innerHTML = `
        <section class="articulos">
            <div class="Sobre-mi blog-admin-window"> 
                <div class="Sobre-mi__encabezado">
                    <h2 class="Sobre-mi__title">Administrar Blog: Nueva Entrada</h2>
                </div>
                <div class="Sobre-mi__container blog-form-container">
                    <form id="add-article-form" class="blog-form">
                        <div class="form-group">
                            <input type="text" id="title" class="blog-input" placeholder="Título del artículo..." required>
                            <select id="category" class="blog-select">
                                <option value="Web">Tecnología Web</option>
                                <option value="C++">C++ / Algoritmos</option>
                            </select>
                        </div>
                        <textarea id="desc" class="blog-textarea" placeholder="¿Sobre qué trata este artículo?" required></textarea>
                        <button type="submit" class="Proyect_redirect-button blog-submit">Publicar en el Blog</button>
                    </form>
                </div>
            </div>

            <div class="blog-controls">
                <button class="filter-btn" data-filter="all">TODOS</button>
                <button class="filter-btn" data-filter="C++">C++</button>
                <button class="filter-btn" data-filter="Web">WEB</button>
            </div>

            <div id="blog-grid" class="articulos__linea"></div>
        </section>
    `;

    this.setupEventListeners();
    // Forzamos el renderizado inicial de artículos al cargar la página
    this.renderArticles('all'); 
}

    setupEventListeners() {
        // Manejo del formulario
        const form = this.querySelector('#add-article-form');
        form.onsubmit = (e) => {
            e.preventDefault();
            const newArt = {
                title: this.querySelector('#title').value,
                category: this.querySelector('#category').value,
                desc: this.querySelector('#desc').value,
                img: '/assets/imagen1.jpg' // Imagen por defecto
            };
            state.addArticle(newArt);
        };

        // Filtros
        this.querySelectorAll('[data-filter]').forEach(btn => {
            btn.onclick = () => this.renderArticles(btn.dataset.filter);
        });
    }

    renderArticles(category) {
    const grid = this.querySelector('#blog-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const service = new BlogService(state.articles); // Usamos el Patrón Strategy
    const filtered = service.filter(BlogService.byCategory(category));

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="Sobre-mi__content">No hay artículos en esta categoría.</p>';
        return;
    }

    filtered.forEach(art => {
        const articleComp = document.createElement('blog-article');
        articleComp.data = art; // Esto dispara el render interno del componente
        grid.appendChild(articleComp);
    });
}
}
customElements.define('blog-view', BlogView);