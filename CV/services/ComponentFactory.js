
import { AboutView } from '../pages/About.js';
import { ProjectsView } from '../pages/Projects.js';
import { BlogView } from '../pages/Blog.js';

export class ComponentFactory {
    static createView(path) {
        // Mapeo de rutas a constructores de componentes
        const views = {
            '/': HomeView,
            '/about': AboutView,
            '/proyectos': ProjectsView,
            '/blog': BlogView
        };

        const ViewClass = views[path] || HomeView;
        
        // Retorna una nueva instancia del Web Component correspondiente
        return new ViewClass();
    }
}