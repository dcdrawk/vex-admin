
class ToastService {

    static toastQueue = [];
    static processing = false;

    // Queue the toast
    static queue(toast, delay) {
        console.log(toast);
        this.toastQueue.push(toast);
        console.log(this.toastQueue);
        if (this.processing === false) {
            this.processQueue(delay);
        }
    }

    // Process the queue of toasts
    static processQueue(delay) {
        console.log(delay);
        this.processing = true;
        this.toastQueue[0].show = true;

        // When the timeout completes, hide the toast and remove it from the queue
        setTimeout(() => {
            this.toastQueue[0].show = false;
            this.toastQueue.shift();

            // Continue to process the queue if there are toasts left
            if (this.toastQueue.length > 0) {
                console.log('not empty');
                setTimeout(() => {
                    this.processQueue(delay);
                }, 500);
            } else {
                this.processing = false;
            }
        }, delay);
    }
}

export default ToastService;
