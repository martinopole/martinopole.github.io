var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/amabilidade/index.html',
        '/img/icone.png',
        '/amabilidade/img/icone.png',
        '/sw.js',
        '/amabilidade/sw.js',
        '/manifest.js',
        '/amabilidade/manifest.js',
      ]);
    })
  )
});
