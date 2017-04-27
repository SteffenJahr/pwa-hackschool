function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

self.addEventListener('install', event => {
    console.log('Installing Service Worker…');
    event.waitUntil(
        wait(3000).then(() => {
            console.log('Service Worker installed!');
            self.skipWaiting();
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Activating Service Worker…');
    event.waitUntil(
        wait(3000).then(() => {
            console.log('Service Worker activated!');
            self.clients.claim();
        })
    );
});
