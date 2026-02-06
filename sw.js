
const CACHE_NAME = 'zoolingo-v1';

// Initial assets to cache immediately
const PRE_CACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRE_CACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Strategy: Cache First, falling back to Network
  // Dynamic caching for external resources (esm.sh, tailwind, fonts)
  
  const url = new URL(event.request.url);

  // 1. Exclude Gemini API (generativelanguage) from caching to avoid stale AI responses
  if (url.hostname.includes('generativelanguage.googleapis.com')) {
    return; // Standard network fetch, no cache interaction
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        // Only cache valid responses
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic' && networkResponse.type !== 'cors') {
          return networkResponse;
        }

        // Cache Rules:
        // 1. Same origin files (JS chunks, etc)
        // 2. esm.sh (Libraries)
        // 3. tailwindcss (CDN)
        // 4. google fonts
        const shouldCache = 
            url.origin === self.location.origin ||
            url.hostname === 'esm.sh' ||
            url.hostname === 'cdn.tailwindcss.com' ||
            url.hostname === 'fonts.googleapis.com' ||
            url.hostname === 'fonts.gstatic.com';

        if (shouldCache) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return networkResponse;
      }).catch(() => {
        // Optional: Return a fallback page if offline and resource not in cache
        // For this app, simply failing (and letting the UI handle offline state) is acceptable
        // since the main bundle contains the local Dictionary fallback.
      });
    })
  );
});
