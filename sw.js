self.addEventListener('install', function(event) {
  console.log('installing my first service worker');

  event.waitUntil(
    caches.open('online-metronome-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'build/index.js',
        'build/worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log("fetching " + event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

