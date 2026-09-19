// A minimal, network-only Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Forces the waiting service worker to become the active service worker
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim()); // Ensure the service worker takes control immediately
});

self.addEventListener('fetch', (event) => {
  // Pass all requests straight to the network without touching any cache
  event.respondWith(fetch(event.request));
});
