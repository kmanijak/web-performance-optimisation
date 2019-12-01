var version = 2;

console.log("SW version "+ version +" script run at", new Date());

self.addEventListener("install", function(event) {
    console.log("SW version " + version + " installed at", new Date());
    self.skipWaiting();
});

self.addEventListener("activate", function(event) {
    console.log("SW  version " + version + " activated at", new Date());
});

self.addEventListener("fetch", function(event) {
    event.respondWith(fetch(event.request));
});