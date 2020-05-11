'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7441d3dc01bf9993ad20a20bed8bf2d9",
"assets/assets/logo.png": "d4c939b7c1660129361d58230c82cf1c",
"assets/assets/rgpv_logo.png": "e221b3dd29cf2e2a0f255c6f467e9175",
"assets/assets/target.png": "37de9de836d356cb7a77bb471c5adf72",
"assets/assets/user.png": "54e9ec5365eeb967838ffd2a35eda50b",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "42249734c4995bf559678db83f9bd4cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "863c4bf673acc4ab8348409b2624bb51",
"icons/Icon-512.png": "6c8a19b69e2bb463934b6de2ba2d1a5d",
"index.html": "4ec4852b33dfd93dfed89d0bbc45c103",
"/": "4ec4852b33dfd93dfed89d0bbc45c103",
"main.dart.js": "a7eb5d4a1493fb0409288f579067ee73",
"manifest.json": "97492ecbfc14905e3e5525773a30b79f",
"_redirects": "76c5cf5c09b14e38758ea51ea16d7503"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
