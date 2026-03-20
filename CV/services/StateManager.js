// CV/services/StateManager.js
class StateManager {
    constructor() {
        
        if (StateManager.instance) return StateManager.instance;
        this.observers = []; 
        this.articles = [
            { 
                id: 1, 
                title: 'Victoria en el NASA Space Apps Challenge', 
                category: 'Logros', 
                desc: 'Cómo logramos el primer lugar nacional dos veces consecutivas con el equipo Moondust Crusaders, enfrentando retos de datos espaciales.', 
                img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400' 
            },
            { 
                id: 2, 
                title: 'Programación Competitiva: Mi Experiencia en ICPC', 
                category: 'Técnico', 
                desc: 'Relato de mi participación en la International Collegiate Programming Contest, donde la optimización de algoritmos y el trabajo bajo presión son clave.', 
                img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400' 
            },
            { 
                id: 3, 
                title: 'Arquitectura y Patrones en Videojuegos', 
                category: 'Desarrollo', 
                desc: 'Análisis técnico sobre la implementación de patrones de diseño como Command e Iterator en motores como Godot y Game Maker usando C++ y C#.', 
                img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400' 
            }
        ];
        const defaultArticles = [
            { id: 1, title: 'Mi primer post', category: 'Web', desc: 'Aprendiendo BEM y SOLID', img: '/assets/imagen1.jpg' }
        ];
        
        const savedFavs = localStorage.getItem('xp_favorites');
        this.favorites = savedFavs ? JSON.parse(savedFavs) : [];
        
        StateManager.instance = this;
    }

    subscribe(observer) {
        if (!this.observers) this.observers = [];
        if (observer && !this.observers.includes(observer)) {
            this.observers.push(observer);
        }
    }

    unsubscribe(observer) {
        if (this.observers) {
            this.observers = this.observers.filter(obs => obs !== observer);
        }
    }

    notify() {
        if (this.observers) {
            this.observers.forEach(observer => {
                if (observer && typeof observer.update === 'function') {
                    observer.update(this.articles, this.favorites);
                }
            });
        }
    }
    toggleFavorite(id) {
        if (this.favorites.includes(id)) {
            this.favorites = this.favorites.filter(favId => favId !== id);
        } else {
            this.favorites.push(id);
        }
        localStorage.setItem('xp_favorites', JSON.stringify(this.favorites));
        this.notify();
    }
}
export const state = new StateManager();