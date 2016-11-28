

const CACHE_VERSION = 2;
const CURRENT_CACHES = {
  prefetch: 'prefetch-cache-v' + CACHE_VERSION,
  read: 'read-through-cache-v' + CACHE_VERSION
};

var urlsToPrefetch = [
  './',
  'build/main.css',
  'build/main.js',
  'build/main.js.map',
  'build/polyfills.js',

  'assets/fonts/ionicons.eot',
  'assets/fonts/ionicons.svg',
  'assets/fonts/ionicons.ttf',
  'assets/fonts/ionicons.woff',
  'assets/fonts/ionicons.woff2',

  // The videos are stored remotely with CORS enabled.
  'https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/srutim.webm?alt=media&token=e10a5ef9-7ae0-4a7f-958f-238a26815389',
  'https://firebasestorage.googleapis.com/v0/b/telavivo-8884f.appspot.com/o/Srutim.mp4?alt=media&token=c421c819-ff3a-4e52-8748-cfb56a9f2cac'
];

self.addEventListener('activate', function (event) {
  console.log('fffff');
});

self.addEventListener('fetch', function (event) {

});

self.addEventListener('push', function (event) {

});
