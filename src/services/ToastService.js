
class ToastService {

    static toastQueue = [];
    static processing = false;

    // Queue the toast
    static queue(toast) {
        this.toastQueue.push(toast);
        if (this.processing === false) {
            this.processQueue();
        }
    }

    // Process the queue of toasts
    static processQueue() {
        this.processing = true;
        this.toastQueue[0].show = true;

        // When the timeout completes, hide the toast and remove it from the queue
        setTimeout(() => {
            this.toastQueue[0].show = false;
            this.toastQueue[0].toggle = false;
            this.toastQueue.shift();

            // Continue to process the queue if there are toasts left
            if (this.toastQueue.length > 0) {
                setTimeout(() => {
                    this.processQueue();
                }, 500);
            } else {
                this.processing = false;
            }
        }, 3500);
    }
}

export default ToastService;
