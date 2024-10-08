self.addEventListener("fetch", (event) => {
  const isImage = event.request.url.endsWith(".svg");
  const isApi = /api/.test(event.request.url);
  if (isImage || isApi) {
    event.respondWith(
      caches.open("app-cache").then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) {
            return response;
          }

          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request.url, networkResponse.clone());
            return networkResponse;
          });
        });
      }),
    );
  }
  return fetch(event.request);
});
