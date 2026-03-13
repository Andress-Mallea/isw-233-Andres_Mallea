// CV/services/StateManager.js
class StateManager {
    constructor() {
        if (StateManager.instance) return StateManager.instance;
        
        // Cargamos artículos guardados o unos por defecto
        const defaultArticles = [
            { id: 1, title: 'Mi primer post', category: 'Web', desc: 'Aprendiendo BEM y SOLID', img: '/assets/imagen1.jpg' }
        ];
        this.articles = JSON.parse(localStorage.getItem('blog_articles')) || defaultArticles;
        this.favorites = JSON.parse(localStorage.getItem('favs')) || [];
        this.subscribers = [];
        
        StateManager.instance = this;
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    notify() {
        this.subscribers.forEach(cb => cb({ 
            articles: this.articles, 
            favorites: this.favorites 
        }));
    }

    addArticle(article) {
        const newArticle = { ...article, id: Date.now() };
        this.articles.push(newArticle);
        localStorage.setItem('blog_articles', JSON.stringify(this.articles));
        this.notify();
    }

    toggleFavorite(articleId) {
        if (this.favorites.includes(articleId)) {
            this.favorites = this.favorites.filter(id => id !== articleId);
        } else {
            this.favorites.push(articleId);
        }
        localStorage.setItem('favs', JSON.stringify(this.favorites));
        this.notify();
    }
}
export const state = new StateManager();