const version = '20201026122731';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/designpatterns/2020/09/09/DWA1018-Abstract-Factory-Design-Pattern/","/database/2020/09/08/DWA1017-Introduction-to-Redis-and-basic-functionalities/","/designpatterns/2020/09/08/DWA1016-Factory-Design-Pattern/","/data%20structures/2020/08/18/DWA1015-Implementing-Copy-method-in-singly-linked-list/","/data%20structures/2020/08/17/DWA1014-Reversing-a-Linked-Lists/","/interview/2020/08/16/DWA1012-Sum-of-elements-in-a-given-range/","/machine_learning/2020/08/03/DWA1013-Machine-Learning-Introduction-with-basic-terms/","/system%20design/2020/08/03/DWA1012-Load-Balancer/","/designpatterns/2020/06/09/DWA1011-Singleton-Design-Pattern/","/algorithm/2020/05/25/DWA1010-Counting-Sort-Algorithm/","/algods/","/categories/","/contests/","/events/","/blog/","/","/manifest.json","/offline/","/assets/search.json","/search/","/assets/styles.css","/thanks/","/youtube-tech/","/redirects.json","/sitemap.xml","/robots.txt","/blog/page2/","/blog/page3/","/blog/page4/","/blog/page5/","/feed.xml","/assets/logos/logo.png", "/assets/default-offline-image.png", "/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
