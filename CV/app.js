import '/components/namecard/NameCard.js';
import '/components/block-article/BlogArticle.js'; // Verifica que la carpeta sea block-article
import '/components/common/CustomFooter.js';
import '/components/project-item/ProjectItem.js'; // IMPORTANTE: faltaba este

import '/pages/Home.js';
import '/pages/About.js';
import '/pages/Projects.js';
import '/pages/Blog.js';

import { initRouter } from '/router/router.js';

// Iniciar la aplicación
initRouter();