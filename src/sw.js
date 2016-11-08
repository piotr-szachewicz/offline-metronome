self.addEventListener('install', (event) => {
  console.log('installing my first service worker');

  event.waitUntil(
    caches.open('online-metronome-v4').then((cache) => {
      return cache.addAll([
        '/',
        'css/style.css',
        'css/bootstrap.min.css',
        'js/index.js',
        'js/worker.js'
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

