import '/components/namecard/NameCard.js';
import '/components/block-article/BlogArticle.js'; 
import '/components/common/CustomFooter.js';
import '/components/project-item/ProjectItem.js'; 

import '/pages/Home.js';
import '/pages/About.js';
import '/pages/Projects.js';
import '/pages/Blog.js';
import './pages/Abilities.js'; 
import './pages/Home.js';
import './pages/Education.js';
import { initRouter } from '/router/router.js';
import { MutationService } from './services/observers/MutationObserver.js';

const domMonitor = new MutationService();
const appRoot = document.getElementById('app-root');
domMonitor.init(appRoot);
initRouter();