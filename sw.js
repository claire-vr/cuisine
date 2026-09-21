const CACHE_NAME = 'claires-kitchen-v5';
const PRECACHE_URLS = [
  "./",
  "index.html",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "favicon.ico",
  "images/036c4ca7aca0e6652d85fac52bb5f5f0.jpg",
  "images/089325ed7c99f3cd8bca80beb5ceb762.jpg",
  "images/0a44d69897b8a8159fb303c4984c37f0.jpg",
  "images/0c7c9d2619ac91b70fdbf9897f6df121.jpg",
  "images/0e721c09051b07382f870ddd6a036bf8.jpg",
  "images/1427289a7b8ed075a6d55b3d33630b3d.jpg",
  "images/1467f95504f82d1d7ac7a42105f4e9ae.jpg",
  "images/1632f42a1bcb095702f5c06c7bf002e4.jpg",
  "images/1955b8d95282d514585fc7ff1e63ba9d.jpg",
  "images/198f86beab1ad46db32f9d5913be6bea.jpg",
  "images/19ecb3192267d17fbb232a4c8c60f460.jpg",
  "images/1aae5d144ea2adb60329e91d763c28d0.jpg",
  "images/1b012cab0f4d79e61d0154f87c325b44.jpg",
  "images/1ec9c3e3ae64740c7f9eb5a0563cbee3.jpg",
  "images/1fed596de6fc9d24101b07e90162189e.jpg",
  "images/22bddebe1cd72571855399875d322dbf.jpg",
  "images/23faaf3dfa466873ff40409cb3440d59.jpg",
  "images/2774e28904f901d61ffbed1267ce411a.jpg",
  "images/2f43a9a45fbdc4bd76713da524dedf4a.jpg",
  "images/36f5e19e1dc44f9534ef5115cb8351f0.jpg",
  "images/37112f6bf09bb2397670d0c2b441a3f7.jpg",
  "images/378f582480bf4a2f52a1a3921bbe9c68.jpg",
  "images/379d57394856bf1bffc8cc355587a6eb.jpg",
  "images/3825c2113871153033ff8b7f32c4c715.jpg",
  "images/38f4a48fd1165521362c6dcf293c3b39.jpg",
  "images/3ac3a5729d60a7985f90d8065fac85b1.jpg",
  "images/3f4cdcf3da65e489b20af231aa62e91a.jpg",
  "images/404a8ef2387d8ef46dcec246e0dbd486.jpg",
  "images/41ad911fe470bea8e735f746f0d1e04a.jpg",
  "images/41eb4000f13922078fd804e7c7d8ec63.jpg",
  "images/436246849d62709eb9c6d5c4fb4502df.jpg",
  "images/46f85c857129edf94d1f6b522c541927.jpg",
  "images/47442951139f5c6ee66f1e1e7b1335ac.jpg",
  "images/47d863d38111e38c9e413cd3a8e3c3db.jpg",
  "images/4c5e42732038339c93b90cb382603617.jpg",
  "images/5166ddc6638d3c7316212721f35a45b4.jpg",
  "images/5184d2a0eb6029b49d28648549af9843.jpg",
  "images/51b8ceadffddfdbb0ca815b3148a2a2b.jpg",
  "images/55c3a240d80b1f0e5d5171799c86a483.jpg",
  "images/56b2f5e55c7931d03822fd18cbe076df.jpg",
  "images/56ca33d0db443aecbad0e3323a0873bc.jpg",
  "images/584844ec6fcc1a6ecc623a8d32279328.jpg",
  "images/5f82aa153df6731d99c8df3c7d98b792.jpg",
  "images/6261a511d7b21dc32b40a926421a886f.jpg",
  "images/64ba32eb9e0ca6b4d05c2df79915d9a2.jpg",
  "images/65aa3b172113dff9fe9ee17e443b8642.jpg",
  "images/6a6e8d397cc9e413c403ddd5c12c119f.jpg",
  "images/6d10bd947ed0b407888ec07a75fe73af.jpg",
  "images/6dcad369e07a0ec4407b53d47dd1c2e4.jpg",
  "images/6f62cef3b642773ddf3cf77bc6fffdfd.jpg",
  "images/7204adfd77d5cd5af7ac337862b84e65.jpg",
  "images/769830d4422064b19b5057fd053aa36b.jpg",
  "images/7a0de44776045f33218b391133dec252.jpg",
  "images/7c672dc9bc92d636078238c8a4c79474.jpg",
  "images/7c7a81a536586e19daa3dfd917b459f4.jpg",
  "images/7d188ec31ad7fd43bf65ab15de8b634b.jpg",
  "images/7d68feabe69e23b56e9b75b6a66a3a28.jpg",
  "images/7ff34dd4dc3c58edbaad5164ada64179.jpg",
  "images/80d3570cc6ffeeb993caa523138e0f54.jpg",
  "images/825bd62fd101dc150a2fc847c3e055a5.jpg",
  "images/82bef92aa69101548f08dede21df50af.jpg",
  "images/8730a0936fd84b66776d36b813496ee3.jpg",
  "images/8826aabb97c38730578592f7cdf15291.jpg",
  "images/8c34f8f01229f977c886f0dea7f4bc4a.jpg",
  "images/8dad3247930e23aba38a1a42881002ea.jpg",
  "images/8e36a0c53472484279681b903bff07f4.jpg",
  "images/8e3f825f544dd62408e7925536321b6f.jpg",
  "images/8fea2a6ad665f1a932215cf7425e64e2.jpg",
  "images/9268f764c4bbc978eac6af5b0c7f43e7.jpg",
  "images/9520fb855ff2d3b5ffcb525e0c7cb1f4.jpg",
  "images/985619603de09bc84676c16e87229fe0.jpg",
  "images/9b72dbcd034d2a73bdeb22a5f049f519.jpg",
  "images/9c59751e7301ffaa0284513ebb220ec8.jpg",
  "images/9d91a06283ab3a07e91a54b42f89bc79.jpg",
  "images/9f4cb4676945c3a018cbb65bca916c29.jpg",
  "images/a284b4190a31275700a12dac93556048.jpg",
  "images/a5608ea342ae1dce6e27b06b5bacd07a.jpg",
  "images/a58a33bd4dd2bff2a504008660cddc15.jpg",
  "images/a6f19c08a1e971b598564907eb3b29bd.jpg",
  "images/a7693364bae6dfbc43939b5d5656a547.jpg",
  "images/a8cb3dfd38b621ca0c02045e913af1a1.jpg",
  "images/ad196def26016ba4993080410c4a3af3.jpg",
  "images/adac99adbe38cc5295b33d3b0bb46e0e.jpg",
  "images/b065f11c5974be41c428fff4ed717a75.jpg",
  "images/b0f4eeabf94e49c3a00e222eca05e70a.jpg",
  "images/b24900082b737320c39efb4fcead3f02.jpg",
  "images/b39d82bf4e8c90e57fb2e9d77516727f.jpg",
  "images/b76c4c7e65b75a0f2b62d0b30421a707.jpg",
  "images/bb7525259442e0419ff1f4c9bf00e0a3.jpg",
  "images/bbebc16a647d565a80355fd187ce9cda.jpg",
  "images/bcc9c0810630c7c959db5ee6589ba1b4.jpg",
  "images/bd5959277e6b20e1abe24f19c0aa88cd.jpg",
  "images/be0779e677e949a1efe4c3bc178c686a.jpg",
  "images/bf75a1b8efede3b09c38d58827a53dcb.jpg",
  "images/c4f0e31f9f89b41b036c419c80b2fe94.jpg",
  "images/c7cd86af9063755e376bf2d2df7ccd0e.jpg",
  "images/c805349d9dbee116fd627843e33bbff3.jpg",
  "images/cc99771a4db864d78c0252db5507151a.jpg",
  "images/ccfb6e066ccf24ad1f6cee2e43575fa6.jpg",
  "images/cfe9c2c8f1dd17576fbeac2b19394f51.jpg",
  "images/d0fa0f79010b3719ab35bad78319de72.jpg",
  "images/d29a0bb8735e2b72f28fbfd8d5303544.jpg",
  "images/d4d3908f3d6bee4c2b9c4034c144219c.jpg",
  "images/d534539795d75f48e08109e84c1aa670.jpg",
  "images/d635104067b06791b4accb52fa37bb51.jpg",
  "images/d7b992b0a61ca8c65c2eac5befda5831.jpg",
  "images/dccad278cb8b80381003a30ca5fcaddf.jpg",
  "images/de796d2bd4d63478fd999a49439d2b2e.jpg",
  "images/e06cee95b16933618cd98cfc3f3b04e2.jpg",
  "images/e1f5699469c828688bc3685820767f4f.jpg",
  "images/e2e5eebb991378bde14e152e395a16bc.jpg",
  "images/e3bef2b0bbb6871164c96b05c3442e49.jpg",
  "images/e625cc94449a42eed349cfd12f6e4181.jpg",
  "images/e62f141aa1924f42e90d84ec0890f2dc.jpg",
  "images/e7b657bef290fc4e5da10107fb1ab4b0.jpg",
  "images/e83cbc35ff2edb3a518240acd699d9a0.jpg",
  "images/e878714348197577f8d9e05854e3a984.jpg",
  "images/ea7a072fe5f887644cb1c216de3d265e.jpg",
  "images/eae7d150e3bbd4c06b1cc92818ac75ac.jpg",
  "images/eba1d801302b46ee07d4ac14371f7c2c.jpg",
  "images/ed617f5a29d83784b6aa7555d41382b5.jpg",
  "images/f17161cf6d7e641f8c7ff2766cf49877.jpg",
  "images/f1daf4c9c223ee240a872a4e9e274fb3.jpg",
  "images/f47ec89a34616068a88b2a64acd8f772.jpg",
  "images/f561dc41fb53b3b7f56cb79b3eb3704c.jpg",
  "images/f5fa4029f030dc9d785a960de7c79b58.jpg",
  "images/f718f677c59506e2b9b1ddfdc0865bee.jpg",
  "images/f8ec6b63565785688b81247d1f411254.jpg",
  "images/f9881630a042c8beede52d297226fe3e.jpg",
  "images/ffd99dc1331a2af6490af90f69bbf016.jpg"
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS).catch(() => {
      return Promise.all(PRECACHE_URLS.map((url) => cache.add(url).catch(() => {})));
    }))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// HTML (the app shell) uses network-first: always try to fetch the latest
// version first, so edits show up without waiting on a cache-name bump.
// Falls back to the cached copy only when offline.
const isHtmlRequest = (request) =>
  request.mode === 'navigate' ||
  (request.headers.get('accept') || '').includes('text/html');

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  if (isHtmlRequest(event.request)) {
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match(event.request).then((cached) => cached || caches.match('index.html')))
    );
    return;
  }

  // Everything else (images, icons, manifest) is cache-first, since those
  // rarely change and don't need a network round-trip every load.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
