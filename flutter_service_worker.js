'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "72499f5241a21857da3565382bcb221c",
".git/config": "e5464b00a299ebef758113edda90ece8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "35b5f4454063f2c43c458379383febe7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8bc48d906718b6b3a8a455978ba749e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90994cdc6237155129f928c7d2dad29d",
".git/logs/refs/heads/main": "90994cdc6237155129f928c7d2dad29d",
".git/logs/refs/remotes/origin/gh-pages": "ddc7a9c7acc38564886eede402c41eed",
".git/logs/refs/remotes/origin/HEAD": "531d200ae3b9fb851388f9aa7e0a11aa",
".git/logs/refs/remotes/origin/main": "f0b223077dd9d28cd00f04e01ee063a6",
".git/objects/03/5d67b0f66b43ed49863f6e4db7ddf2b3d7011e": "ed8c73b954614a8c64702b911f70d3f2",
".git/objects/07/e0ad71cf7aa2b26ba0b05d2af233074921e9be": "f3a68a0e81f245fc14444a392c9c0ef5",
".git/objects/0d/c41cbf187fe4f950d7f91c3984bd069de7d99d": "5120bde9d8ffe8a674dd0e2ed61b0ca8",
".git/objects/0d/ce970f97e664df581b8872d651535d6094c14d": "a8d73d6631eedd31bf0f41f53c4e5946",
".git/objects/13/9ae5970681afca8df4590e9f72ec4197795042": "c2b7891d53c8d3161f1a427036b9d5e0",
".git/objects/16/61b8d38c5d8c60bea9da195a9468b38edd015f": "c2625383b663fc097708fd6f47e64f49",
".git/objects/16/68efb24e9bfc00874b71018aec56b32adbd899": "23f0dd83da2a14055ee54d8c76d4697e",
".git/objects/17/a7ef784f0a9ff420a8fcae6a76a05de0bea2e6": "363dab2c8955b1e35bc49dbbd0cbdcd2",
".git/objects/19/622ea1353f7880c46147ffe93770a3e7ffe5cf": "dc8115d93b367a7f2818b5d2225b9ca5",
".git/objects/1a/6721f0611e79093c6c39e7276d89ea2d19f964": "cb12b6433f8fa4c82c16d04d83e588db",
".git/objects/20/659683bda235bf86bf9c70447202b2aa50c533": "da4819a2b9a489f117d2659e2f7d51cd",
".git/objects/20/d8e5e6fa49a9b78c9205a8d2a6092cf702ebc2": "e666a0f46d321f6493f115707953d3b7",
".git/objects/21/07c0609a014549fa0b830ba8cacabb941d53ac": "4f62dcf0dc83ebf4318192367b02d104",
".git/objects/26/eca0eebb2e2e6df29ae3b50ac20769f85d3504": "4206ca635ed505b57811307039fb5469",
".git/objects/2c/9b1f7b6372318048cb03a7d0ff1eb35e7e7bda": "8c614abe62e31755c5e731318b03f988",
".git/objects/2e/93547c0fcbe9adb2fbb85c5f1808d5baf04360": "df4b7ce1055e23d307bebd7befd3dc92",
".git/objects/34/8f6eec4521a55f68df1bb5b2b9b09039b2b2c8": "5688a14c322d86adfb87abae22513a8c",
".git/objects/36/4c585d7a8d30ec5bb11c844be2a7304436e02f": "510d7988760c4abc2d45c2551f878d5f",
".git/objects/3c/3ed356a9427f54a8c7aef10abf5f9d27d8c8a6": "c5187f3787c5a9011cc3ac9e39897844",
".git/objects/3e/3237057a8107bd459a1977962ae183207cbabf": "f1bd87465a07efd71994c1040a22668c",
".git/objects/3e/46a0ac9a27ad7ac9889294c0dbea8dadd9fa6b": "db37b514afc59b8c2f981cc08fedd772",
".git/objects/44/f965e56162145a0059e1c103c27634edfacd7b": "755d726574f8ee4ecf8de9747baea235",
".git/objects/45/9c5eaeaeec6f56777c8725bb7f81e77f271fd7": "4325b08af38d5aee2dbd53b950c6b698",
".git/objects/45/d1b09978238906f9bc61ecc5a644577233d07d": "a654ec86c85d747d71bc5f7dd4e12060",
".git/objects/4a/534c42724275615a4f9e6e8554f6b5c6e81efc": "7bb2f4254b693b2e7e0bfd68026e405d",
".git/objects/4f/0b3e3459b93ed6f531926e30c4f25c68102181": "87a5e39860bb33ce94025bce527addd1",
".git/objects/4f/d38455f14ca597fcc952411a782c2969b926da": "07e706bcfe814c2979144e6199110561",
".git/objects/58/01b05e53708d2a4a3d5d3f7d441adcc56dd2c6": "e2651879b9848e3974ed710ac3d85918",
".git/objects/59/b3d386769598a5ccf7d40833c60d26bccce36a": "3bd6fece79c81cb8b7259d4622c6d9d5",
".git/objects/5e/33cfd65aa7ab773ec2c8be4ce135134948a924": "871586ab487246c8f5359417fa257176",
".git/objects/60/c80326e53dda91584641e81f3ae487734a6053": "e4471eb8f1db7d83a8a99308e69a93e2",
".git/objects/63/cea8e429873d0edfc134bb350edd3667cdfba8": "9ef191497a55956862fcf595b336ab4c",
".git/objects/64/71b7588fa060d5964bd5f4923fda7a32a0bc99": "140918998364d2ddc6a24ff501c6569e",
".git/objects/67/3b3ec9d278eff7fcdf3770f4096e7aca7ff7a8": "9ce28d60036f69c5263168259b9f7d73",
".git/objects/6c/b41cfadb193dbf852c945e05a0738ef3366dc0": "d19989c49b47e78f32ec84b1c9209834",
".git/objects/6f/a2131f3f91f352d40792c60006f5db97c68479": "02f2f2ee4b6bc437f5d08136f46f63ee",
".git/objects/77/3093aaaf0cbea0a68ca09405d67bbdd54fadef": "f78187a2e6c7a06f8eefe59a4bfebe57",
".git/objects/7c/29e38ce3b2afa976008c58938072e7ce177a93": "fe159037503071af01b4fbc16b6ea5fb",
".git/objects/8c/72de3b6387e5476de16eab9540e4a97c21923f": "cb73ad6044bd9565a46edbd1cae9d3f2",
".git/objects/8d/2d0472bcf33fcff0b4877eb14a01c80774f88a": "ff242cf25af516f39bc8c8e3c3fddd62",
".git/objects/94/697a061b81d9ba9cce5f0c52e97f15db3b6be8": "2090941c1fe6ec26a7cc2abedf4796ba",
".git/objects/95/5e5a204fbba0efc2d30b8a3d3174495f77254e": "bf2449cadc4bf4016bddec532381b368",
".git/objects/a7/814a5018d8c29679c3ea9327308783a529f5cd": "ceb3f235fd607dbc5f42bd11a159c42b",
".git/objects/af/a7d19562fd0fb188fa06c37106efcb02173778": "4715efac67dce68ba83c558d653bd79b",
".git/objects/b0/58b74e770d38deb4e52d91d74c7a7f2c2858ab": "741c9007be052202feb2b1de387142e5",
".git/objects/b0/79e6244110d8bd87f46d61eb24b5107a1cc5a8": "c1898d8788bacb9bcbb0c6a66e2627e9",
".git/objects/b2/24a55bbb0eb15526a641933dbeab5eecb0761e": "721de4a7daaa0f1004092bc17edb370d",
".git/objects/b5/2d6c18e0c90790b59ae42bb46da902563ea88e": "722810c97d81ea2a7a65728829ae3303",
".git/objects/b7/ebc9d1dd5bdbfb26fc0c74757d40f972866506": "6c88fccacaf95513a04927942d935da3",
".git/objects/b9/bab0e82427dfaac408d552dd7fbcd1d3a711da": "771f1bc9ab74d76738cfb4bb028b9273",
".git/objects/c4/1bb1fe1de268b145e898d6afcfcaa0ae5f5364": "ae389d8bc146916e0d62f4c192a62929",
".git/objects/c8/10c162b7086a438152d019ca39eeee79021b05": "a0005f6fa15a9c8f4b56fe80cad4b0aa",
".git/objects/ce/404db08c4e0f53822f810efb69c03a892d9eb5": "4e0cc9fa0443c9971b8821984cc523d3",
".git/objects/ce/9c53012d9166891e4e76b68bbbe37949bc2ea0": "adf65192bd1c8025a979357c452e432f",
".git/objects/d2/a5d503f52a46f3ca7eabf89a35ced886abc42c": "ebe2ce154fc5d5d3e6fa38a2bf29bfae",
".git/objects/d4/88b69d8e74185ea46d279e00f57f35b27a143f": "92076d26d8b8ac49d602aec40b5a8a0d",
".git/objects/d6/b836adee5989f935fc3c9bf814d51dce4dc348": "c0ba8c45edbdab9ef47c93f7d004bddd",
".git/objects/da/1011074a730feb61a56dedc944c5b6bd704054": "2fadd64a7371387bb4ba2bb38847c14e",
".git/objects/df/2a77e7f369b2d01ff342d138f895ba07adc425": "627e8f3c878ec32722642be2ef903000",
".git/objects/e8/80be9b6a8ddc93db7331163fc57441fcbbbd9b": "b04f20a404b80baf4d1d8543a85ff5e7",
".git/objects/ee/afe531e66e95efcd811faa8ca19ecef906e69d": "7933892be76393189f04a008c15eab19",
".git/objects/f1/06448117d4b9a9c79bfbe5d11329df8a27d838": "d7353ec2a1545e6d0542979378b9edd6",
".git/objects/f4/a1d7b0bb280bb6f4c7475866769625d7125051": "476109481ffa7031f218fcce66ef2366",
".git/objects/f6/a6077ff5377b7fe4e1201136e062d81ee34c6f": "94a043e40ade53431667bc390e8bd30c",
".git/objects/f7/36f07a25e0dfd48fba8992dca76b8b3c0a5be8": "7da3381c50bdcb3e3f4d1bbfe11e2df6",
".git/objects/f9/5896508d1acb5cbf897de8b3d484ffff2f0bbb": "df685bd1e15a4a38252cdb273294e681",
".git/objects/fa/d2ea2aa32a390fc7bd516666345ae9a03eb3b0": "07202493c8149b81f18d370532665b81",
".git/objects/fc/70e020dbe558fce578cafd531be3a85b8e004f": "3f2420173f3ce7197b14c398ef776a3d",
".git/objects/pack/pack-e8b25deec53c7557bbf46e34d8a3185a1a3b7824.idx": "d70f8943851cb2084671315687f47e46",
".git/objects/pack/pack-e8b25deec53c7557bbf46e34d8a3185a1a3b7824.pack": "6fd67c139928a55a04ca49a1675ebaf6",
".git/objects/pack/pack-e8b25deec53c7557bbf46e34d8a3185a1a3b7824.rev": "551a84d1a13f400e4df13152573e0f4a",
".git/ORIG_HEAD": "df8b92153f720103278dd84707f17460",
".git/packed-refs": "a0b0955f042bfbab128e663ca493c5a9",
".git/refs/heads/main": "b9f60a11e9896fc32d1ed6b2d31c2306",
".git/refs/remotes/origin/gh-pages": "6aa0056bcc1ed1bfd1027150dfb0f883",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b9f60a11e9896fc32d1ed6b2d31c2306",
"assets/AssetManifest.bin": "7cf1d17f02baf34c01815a21a05c4230",
"assets/AssetManifest.bin.json": "0cf38b96ae2b952836de9e28acd622d2",
"assets/AssetManifest.json": "9bfb497717beb286dc8f5fe313fc4ed8",
"assets/assets/images/icon/icon-small.png": "6a5c6cf9590a7f89c12914572f4546c0",
"assets/assets/images/icon/icon-x-small.png": "4c0ed25f974752cfcf8c71e1a92126be",
"assets/assets/images/icon/icon.png": "180497a0c4bdb37ccd90b39635d0f014",
"assets/assets/images/icon/truck_bg.png": "919dafb4516ffd86a374d39c8ab65e2a",
"assets/assets/images/user-img/dad.jpg": "e5b6729ed10f01fe9ae4135061fab946",
"assets/assets/images/user-img/may.jpg": "5cf2f3a0dcc31723315dac021e689e20",
"assets/assets/images/user-img/mom.jpg": "bae863369a89ef6bd4e2e42cc0e4b7be",
"assets/assets/images/user-img/winston.jpg": "a34dfb4bdd346cca0c4928e0aebbe3bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5c29898bcc2f3563774a45bff24c1f8d",
"assets/NOTICES": "f2efb1d4cb60c850c8fa49811ea5689b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "5ed1c13e942e5f5f373f3b9c46c4f223",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0c8cc8c710c318606c9eed9e5b5e3053",
"/": "0c8cc8c710c318606c9eed9e5b5e3053",
"main.dart.js": "b9ea75096a12a82d237c6372c3e4e946",
"manifest.json": "da90b9ef338c13abaa7673de700b6b93",
"version.json": "30e79683d11984971abf214cbf3ce04f"};
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
