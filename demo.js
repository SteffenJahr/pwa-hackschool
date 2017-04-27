if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(() => {
            console.log('ServiceWorker successfully registered.')
        }, error => {
            console.log('Unable to register serviceWorker', error);
        });
}
