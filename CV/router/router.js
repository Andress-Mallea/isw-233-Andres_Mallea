const routes = {
    '/': 'home-view',
    '/about': 'about-view',
    '/proyectos': 'projects-view',
    '/abilities': 'abilities-view',
    '/education': 'education-view', 
    '/blog': 'blog-view'
};

export const initRouter = () => {
    const handleRoute = () => {
        const path = window.location.pathname;
        const tagName = routes[path] || routes['/'];
        const root = document.getElementById('app-root');
        const taskbar = document.getElementById('xp-taskbar');
        if (path === '/' || path === '') {
            if (taskbar) taskbar.style.display = 'none'; 
        } else {
            if (taskbar) taskbar.style.display = 'flex';
        }
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