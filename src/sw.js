self.addEventListener('install', (event) => {
  console.log('installing my first service worker');

  event.waitUntil(
    caches.open('online-metronome-v1').then((cache) => {
      return cache.addAll([
        '/',
        'index.js',
        'worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
