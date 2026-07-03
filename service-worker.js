const CACHE_NAME = "classenpoche-v1";

const FILES = [
    "/",
    "/index.html",
    "/quiz.html",
    "/style.css",
    "/app.js"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request))
    );
});