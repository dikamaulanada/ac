self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('akademi-crypto-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './styles.css',
        './script.js',
        './manifest.json',
        './images/logo.png',
        './images/logo-192x192.png',
        './images/logo-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
