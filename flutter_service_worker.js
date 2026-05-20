'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a20234030ff034d4f0aa49d6a5387fc9",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "e0ce1689545824ea2252cf19974b2a40",
"/": "e0ce1689545824ea2252cf19974b2a40",
"main.dart.js": "fda56600d8c94d75d2e31b04e1cac775",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"cv/thaer_mosa_cv.pdf": "975e5884ac7b9c45bcb5b51b24cdc978",
"assets/NOTICES": "e4f1184ee04e75ffbbee9256a1fe5468",
"assets/FontManifest.json": "b39ca5f6a88d5992c660d6531daa19b1",
"assets/AssetManifest.bin.json": "03a0753c1dfc096f2e6b8960b426321c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "40b11af53fbc1c9cff687976a25035e5",
"assets/fonts/MaterialIcons-Regular.otf": "d8cb0fae3d1d9abfd28b9075afb2e139",
"assets/assets/images/projects/MSCIco.png": "a2f7c336190087038a1e95131396289e",
"assets/assets/images/projects/boj_jo.webp": "9e966d9625a47dc04a40ac9568b0405b",
"assets/assets/images/projects/BOJ_Pal.webp": "0a7f9c9189e43616fa5aa5c6f3c16a8a",
"assets/assets/images/projects/VibrantSoftIco.png": "fcbd149e70920039a01c6fabe38ccad3",
"assets/assets/images/projects/EfeedbackIco.png": "c7d5bd5fc00acf887e0491c7cad5b591",
"assets/assets/images/projects/MOE_UAE.png": "cef560f93682ca06ce965bb06fb03a55",
"assets/assets/images/projects/JasmineIco.png": "4018e114253bf8016cae31b15fbfa2f7",
"assets/assets/images/projects/TEC_UEA_App.png": "5ffc16d3d0c56c2dff2171867f843a0e",
"assets/assets/images/projects/AAIco.png": "3e423fc3db4a093856c042d93b8f1f50",
"assets/assets/images/projects/JannahIco.png": "28965ec6c14b7b6dcfa7c7537a1c1a77",
"assets/assets/images/projects/Upgrade.png": "f69c140fbb3dffb818649a50917503bb",
"assets/assets/images/projects/ADHA.png": "4e207ebcc59b550049114245e10166f2",
"assets/assets/images/projects/waw_al_balad.png": "c92a35bd3545faffd7c1349084572e70",
"assets/assets/images/projects/OfferkomIcon.png": "d490ba94f7be3f48ae8cf875e1ce92cc",
"assets/assets/images/projects/FoodGoIco.png": "8c021db2ffcf865d667f8b194d7be44c",
"assets/assets/images/projects/BOJ_Iraq.webp": "76978c5d63d8f594c2bc3772481b026a",
"assets/assets/images/projects/JannahReportingIco.png": "58fbd0cb83ad91e5f94ab95ad18b5f55",
"assets/assets/images/projects/AmsaIco.png": "49d52efaf432deb3ade10c4ae9bf4d4e",
"assets/assets/images/projects/PIF_KSA.png": "a9ebfde5577c53bbcdd90555eff73d20",
"assets/assets/images/projects/EhsanEnsanIco.png": "f9f93c15c27d35fa8863ac316c8d569a",
"assets/assets/images/projects/Actvet_App.png": "92cf28763eb639dccc1998183af4a7c5",
"assets/assets/images/projects/KIAIco.png": "9ca56e9113b203a9917c8f96a5e45c7d",
"assets/assets/images/projects/Ministry_of_Finance.png": "6529804725884c6b92d105f54391d335",
"assets/assets/images/projects/avatar.svg": "81899e18586b10083308cdf1270c656f",
"assets/assets/images/profileIcon.jpeg": "a4357b5ee576db46e6a9c17739f48417",
"assets/assets/images/games/RunnerSpaceGmareIco.png": "b6e62584b354b2ba3f729632b62dbdb5",
"assets/assets/images/games/BravoBravoIco.png": "b647477df8c2a51d06ce1fa27244ecf6",
"assets/assets/images/games/SpaceAdventtureIco.png": "a8e1371766bb4d386408d1c6c5d2cde1",
"assets/assets/images/games/HookAndRunIco.png": "84fbb5f420d102993de80a55fbfa788b",
"assets/assets/cv/thaer_mosa_cv.pdf": "975e5884ac7b9c45bcb5b51b24cdc978",
"assets/assets/fonts/IBMPlexSansArabic-Regular.ttf": "ba73b8c18f3ecabea995bfe7535607e1",
"assets/assets/fonts/Cairo-Regular.ttf": "5dacd3d88fa294c5c6263d4041a34935",
"assets/assets/fonts/Tajawal-Regular.ttf": "435d5fcde3884b45f82a2bfa34617aea",
"assets/assets/fonts/Cairo-Bold.ttf": "08f051a1822e014b22374926f1406d01",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
