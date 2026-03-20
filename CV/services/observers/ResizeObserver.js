export class ResizeService {
    constructor(callback) {
        this.observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (typeof callback === 'function') {
                    callback(entry.contentRect);
                }
            }
        });
    }

    observeElement(element) {
        if (element && element instanceof HTMLElement) {
            this.observer.observe(element);
        }
    }
}