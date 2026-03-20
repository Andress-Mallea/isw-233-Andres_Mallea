export class IntersectionService {
    constructor() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('xp-fade-in');
                    this.observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
    }
    observeElements(selector) {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            elements.forEach(el => this.observer.observe(el));
        }
    }
}