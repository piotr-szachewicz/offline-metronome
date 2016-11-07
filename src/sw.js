self.addEventListener('install', (event) => {
  console.log('installing my first service worker');

  event.waitUntil(
    caches.open('online-metronome-v3').then((cache) => {
      return cache.addAll([
        '/',
        'style/style.css',
        'style/bootstrap.min.css',
        'build/index.js',
        'build/worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log("fetching " + event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

