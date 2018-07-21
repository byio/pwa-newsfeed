// set this to true for production
const doCache = false;

// name of cache
const CACHE_NAME = 'pwa-newsfeed-cache-v1';

// delete old caches that are not the current one
self.addEventListener('activate', event => {
  const cacheWhiteList = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
          .then(keyList => Promise.all(keyList.map(key => {
            console.log(`Deleting cache: ${key}`);
            return cache.delete(key);
          })));
  );
});

// event listener for install event when PWA is started for the very first time
self.addEventListener('install', event => {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
            .then(cache => {
              fetch('assets-manifest.json').then(response => { response.json() })
                                           .then(assets => {
                                             // open cache to cache files
                                             const urlsToCache = [
                                               "/",
                                               assets["main.js"]
                                             ];
                                             cache.addAll(urlsToCache);
                                             console.log(`Files cached!`);
                                           })
            })
    );
  }
});

// listen for the fetch event so that when the client fetches the files, this service worker will
// intercept the request and serve up the files from the cache if they exist
self.addEventListener('fetch', event => {
  if (doCache) {
    event.respondWith(
      caches.match(event.request)
            .then(response => {
              return response || fetch(event.request);
            });
    );
  }
});
