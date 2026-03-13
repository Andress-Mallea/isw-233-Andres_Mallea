const routes = {
    '/': 'home-view',
    '/about': 'about-view',
    '/blog': 'blog-view',
    '/proyectos': 'projects-view'
};

export const initRouter = () => {
    const handleRoute = () => {
        const path = window.location.pathname;
        const tagName = routes[path] || routes['/'];
        const root = document.getElementById('app-root');
        root.innerHTML = `<${tagName}></${tagName}>`;
    };

    window.onpopstate = handleRoute;

    document.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            handleRoute();
        }
    });

    handleRoute();
};