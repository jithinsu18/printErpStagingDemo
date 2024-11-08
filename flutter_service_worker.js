'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e6ec9b7afecbc82d6a7d9d3bee1d8a54",
"index.html": "b4686ab81e89da7cd1c5ab8bf457d492",
"/": "b4686ab81e89da7cd1c5ab8bf457d492",
"main.dart.js": "086cf9340cfc6eb35d1b68b5137b6a26",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "b63960dcece6a54b258b29cf582b37bb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fa10ce6ab4394baeff8daee77a5cbd79",
"assets/AssetManifest.json": "b3de1619fc6a7ae5b57747a8ff3316f3",
"assets/NOTICES": "88f5b62926f88e9210362c25e40aa3f7",
"assets/FontManifest.json": "e337d0baef074e34c9b96df87f0dd305",
"assets/AssetManifest.bin.json": "16ef0e3dd75d23904ce307f7c27b3b52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "1f9bb2d7339311e457948d7ab7ee7f48",
"assets/fonts/MaterialIcons-Regular.otf": "2fef9bcf8a0d2fd777a96ab56d5bb683",
"assets/assets/images/dashboard_pending.png": "23e9ae1a684e32806475887853a93783",
"assets/assets/images/lpo_icon.png": "7f4e407f897e64137b949d26d2b76374",
"assets/assets/images/sale.png": "c91c9873353af7ea1e77cb72ababb69b",
"assets/assets/images/sales.png": "c91c9873353af7ea1e77cb72ababb69b",
"assets/assets/images/icon_re_add_stock.png": "efb06b00772abfb434d1c777ec66d19a",
"assets/assets/images/icon_create.png": "9d71d030797b4937d5c79d61de0efc8c",
"assets/assets/images/work_order_icon.png": "29738f16899f59825e9531a6166211aa",
"assets/assets/images/pdf_icon_for_email.png": "dedce39251ef755a9d9a2db9fc890baa",
"assets/assets/images/app_logo_icon.png": "ae8072973d6ec11aed0804ffb77454e9",
"assets/assets/images/home_icon.png": "56f8205850dc6a2e92c791a67e91da6f",
"assets/assets/images/stock.png": "84da742c5223ff478f1baf76c50e6a2e",
"assets/assets/images/dashboard_cancelled.png": "b1aecd10cff04501fbd90f0bdb8eca2a",
"assets/assets/images/create_icon.png": "31593280accc4e8f3b7592b394708e35",
"assets/assets/images/jobs_icon.png": "3725f0d5dbd40e677dede68579928c63",
"assets/assets/images/pdf_icon_for_letter_pad.png": "ec8013b436b98a8a95ac2023a30c651f",
"assets/assets/images/icon_view_stocks.png": "e1597cc3fb0099af0e59c8bc6657dec0",
"assets/assets/images/view_icon.png": "6eefa68fa682bc1d4095413a95d598b9",
"assets/assets/images/app_logo_horizontal_letter_head.jpg": "d7fc2925c83316b71f32b8eae0df248c",
"assets/assets/images/app_logo_default.png": "3bac464e3561e4fdc48206492a855e8a",
"assets/assets/images/accountant.png": "2c7ca342da44a06ccd067bdd4e30f62e",
"assets/assets/images/dashboard_completed.png": "da188ccb78f1017e9645542bb5e52d6b",
"assets/assets/images/back_icon.png": "7a8098e71a04f58d0fa65325dae8ed83",
"assets/assets/images/icon_add_stock.png": "971325b11ecf1767f6a11551cd0fda6a",
"assets/assets/images/user_thumbnail.png": "1d207b7d2479816874d59e87f912d0e5",
"assets/assets/images/seal_image.jpg": "655c37b22e2f562c692b001afa372c4a",
"assets/assets/images/admin.png": "c3fdf5f11d2996ff9cea6db35c49a5f8",
"assets/assets/images/icon_vendors.png": "447399f550c86b2307bc51399d726601",
"assets/assets/images/app_logo_horizontal.png": "07fc2d014b3a00f5f8c5ab386210bf55",
"assets/assets/fonts/MicrosoftYaheiUi/MicrosoftYaheiUi-Regular.ttf": "f7537600c22b8726f091451543939a5d",
"assets/assets/fonts/MicrosoftYaheiUi/MicrosoftYaheiUi-Bold.ttf": "29dcc95ca574bea83319e3ade2a3656b",
"assets/assets/fonts/Arial/Arial-Regular.ttf": "fa3228aadde0db988e1822c2f736c131",
"assets/assets/fonts/Arial/Arial-Bold.ttf": "858f5a50a4c3e5e6559a0c9b128eee60",
"assets/assets/fonts/Arial/Arial-Italic.ttf": "2137c23218da07ab8a45d52851fea784",
"assets/assets/fonts/Nunito/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/fonts/Nunito/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/fonts/Nunito/Nunito-Italic.ttf": "581b66edfbf5926644f1e56d772fe526",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "df7b648ce5356ea1ebce435b3459fd60",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "549ec3575943fef98f76b46924ff5efa",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "e31fcf1885e371e19f5786c2bdfeae1b",
"assets/assets/fonts/TimesNewRoman/TimesNewRoman-Bold.ttf": "1d3466fec8a99ed65f32cbdfb3d5c4d0",
"assets/assets/fonts/TimesNewRoman/TimesNewRoman-Regular.ttf": "e2f6bf4ef7c6443cbb0ae33f1c1a9ccc",
"assets/assets/fonts/TimesNewRoman/TimesNewRoman-Italic.ttf": "e3d6e9ea74f51afbfc9071e214ddb9e8",
"assets/assets/fonts/AdobeArabic/AdobeArabic-Bold.ttf": "e902c526bda12fcde747551b53c4c6cc",
"assets/assets/fonts/AdobeArabic/AdobeArabic-Regular.ttf": "a8d771626b3faf0970c57d91445c21c1",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
