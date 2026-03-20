
import { AboutView } from '../pages/About.js';
import { ProjectsView } from '../pages/Projects.js';
import { BlogView } from '../pages/Blog.js';
import { AbilitiesView } from '../pages/Abilities.js';
import { EducationView } from '../pages/Education.js';
export class ComponentFactory {
    static createView(path) {
        const views = {
            '/': HomeView,
            '/about': AboutView,
            '/proyectos': ProjectsView,
            '/blog': BlogView,
            '/abilities': AbilitiesView,
            '/education': EducationView
        };

        const ViewClass = views[path] || HomeView;
        return new ViewClass();
    }
}