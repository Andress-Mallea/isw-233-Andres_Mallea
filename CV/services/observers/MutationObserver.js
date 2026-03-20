export class MutationService {
    constructor() {
        this.config = { childList: true, subtree: true };
        this.observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    console.log('XP Kernel: Nueva vista inyectada en el DOM.');
                }
            }
        });
    }

    init(targetNode) {
        this.observer.observe(targetNode, this.config);
    }
}