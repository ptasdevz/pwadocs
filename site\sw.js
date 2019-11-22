importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');


workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "8a273bec59812c5ba18af1beb3da8511"
  },
  {
    "url": "assets/fonts/font-awesome.css",
    "revision": "ac6d788b8ea7f0caeccbc17b72b87413"
  },
  {
    "url": "assets/fonts/material-icons.css",
    "revision": "3b51d5609e7b16ebda21ab25714d2fa7"
  },
  {
    "url": "assets/fonts/specimen/FontAwesome.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "assets/fonts/specimen/FontAwesome.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "assets/fonts/specimen/FontAwesome.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "assets/fonts/specimen/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "assets/fonts/specimen/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/fonts/specimen/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "assets/icons/logo-192.png",
    "revision": "46f865ec8b1a3b0cc8773b2302351d36"
  },
  {
    "url": "assets/icons/logo-36.png",
    "revision": "7e1b738492fed6b7024b29ca7f72aa89"
  },
  {
    "url": "assets/icons/logo-512.png",
    "revision": "da5888474d0aabbb1ee7b4019167512d"
  },
  {
    "url": "assets/images/favicon.png",
    "revision": "840f949f01d90907c37b8bdc4cd53304"
  },
  {
    "url": "assets/images/icons/bitbucket.1b09e088.svg",
    "revision": "8646916b544923cf750f42ae20fc95f2"
  },
  {
    "url": "assets/images/icons/github.f0b8504a.svg",
    "revision": "141c380fb0c0190cc17a609dda46c37a"
  },
  {
    "url": "assets/images/icons/gitlab.6dd19c00.svg",
    "revision": "06a25891a19fe8079d25804d7bbd1dfc"
  },
  {
    "url": "assets/javascripts/application.718059d6.js",
    "revision": "7ddeb4c2b50759f5c1aecfe298aa4e8c"
  },
  {
    "url": "assets/javascripts/application.a8b5e56f.js",
    "revision": "af6425d057edc6f02dc637dc7ef439ed"
  },
  {
    "url": "assets/javascripts/lunr/lunr.ar.js",
    "revision": "6e07dc0c1382349a876dbd6b956e1cce"
  },
  {
    "url": "assets/javascripts/lunr/lunr.da.js",
    "revision": "1f7fd925373e7f5519a995e07fdea9ac"
  },
  {
    "url": "assets/javascripts/lunr/lunr.de.js",
    "revision": "95c1b599380ac98691d004c48341fbae"
  },
  {
    "url": "assets/javascripts/lunr/lunr.du.js",
    "revision": "47400fb0c13ca67e15e8b89c3cdbf820"
  },
  {
    "url": "assets/javascripts/lunr/lunr.es.js",
    "revision": "06a5b012f492e77c03855d477ebb65b7"
  },
  {
    "url": "assets/javascripts/lunr/lunr.fi.js",
    "revision": "52796134fcf1bac6473d47db003bd3c0"
  },
  {
    "url": "assets/javascripts/lunr/lunr.fr.js",
    "revision": "49c1ee1d39fe4f30f3c2380d468ba1ec"
  },
  {
    "url": "assets/javascripts/lunr/lunr.hu.js",
    "revision": "bfc8d3b77e5068c6e3cd4f7820c88ea7"
  },
  {
    "url": "assets/javascripts/lunr/lunr.it.js",
    "revision": "7a91cefd003745e62a411fbf34a6d9f3"
  },
  {
    "url": "assets/javascripts/lunr/lunr.ja.js",
    "revision": "1e816d3ec7e92900b325550e8ab77104"
  },
  {
    "url": "assets/javascripts/lunr/lunr.jp.js",
    "revision": "92740e202ca53e306ab899d3c6477ce1"
  },
  {
    "url": "assets/javascripts/lunr/lunr.multi.js",
    "revision": "37dce7ff7090b9f3d05dc0f88ad82fbb"
  },
  {
    "url": "assets/javascripts/lunr/lunr.nl.js",
    "revision": "5fcd3c04a81a6dca4a9bc4a0dac7a829"
  },
  {
    "url": "assets/javascripts/lunr/lunr.no.js",
    "revision": "768b4f388339ff9ede92810aa2c23a0c"
  },
  {
    "url": "assets/javascripts/lunr/lunr.pt.js",
    "revision": "6615bd30ad33522c3a0d504086348453"
  },
  {
    "url": "assets/javascripts/lunr/lunr.ro.js",
    "revision": "9ea235d913c06a269a428b7a5020b164"
  },
  {
    "url": "assets/javascripts/lunr/lunr.ru.js",
    "revision": "2441d75257f38e4d34186cb70f746cdc"
  },
  {
    "url": "assets/javascripts/lunr/lunr.stemmer.support.js",
    "revision": "530c1a8079050d0d50b05baecf64aeec"
  },
  {
    "url": "assets/javascripts/lunr/lunr.sv.js",
    "revision": "af2fa7792fd69d110a81d85c667c469c"
  },
  {
    "url": "assets/javascripts/lunr/lunr.th.js",
    "revision": "5d0ed17d46134709ea27b6f2eb3379de"
  },
  {
    "url": "assets/javascripts/lunr/lunr.tr.js",
    "revision": "a4860f38beab8c13b38cf8fe73d8244f"
  },
  {
    "url": "assets/javascripts/lunr/lunr.vi.js",
    "revision": "d03c4ad2d928a5f762b3d213a262129b"
  },
  {
    "url": "assets/javascripts/lunr/tinyseg.js",
    "revision": "5fc885c250841b98b37f81a531502277"
  },
  {
    "url": "assets/javascripts/lunr/wordcut.js",
    "revision": "14824fe820ca87a4d1ef0263081741cd"
  },
  {
    "url": "assets/javascripts/modernizr.268332fc.js",
    "revision": "af32c804eb539a21ff5de12432ada85f"
  },
  {
    "url": "assets/javascripts/modernizr.74668098.js",
    "revision": "e87b650f2e03c495b1de968eb9db54cc"
  },
  {
    "url": "assets/stylesheets/application-palette.3e3d1dff.css",
    "revision": "25061a4c0378228d3edc4659bfb3549c"
  },
  {
    "url": "assets/stylesheets/application-palette.a8b3c06d.css",
    "revision": "4197d98a3dcbfdee1ae1cae992ad7776"
  },
  {
    "url": "assets/stylesheets/application.1b62728e.css",
    "revision": "3d46415dc631096c1ed616e2056b487c"
  },
  {
    "url": "assets/stylesheets/application.4031d38b.css",
    "revision": "2677892cb9de3e076ecf9549fc14d089"
  },
  {
    "url": "img/favicon.ico",
    "revision": "beb8b8735c8adfa96f754cd832b01b0c"
  },
  {
    "url": "index.html",
    "revision": "40a09261b574b730c58a26354be4cc2e"
  },
  {
    "url": "manifest.json",
    "revision": "a64a4e75c8ef0106c921bc8e96b5b6d1"
  },
  {
    "url": "page2.html",
    "revision": "e653d26d7ebaf6767aa9adaaae7ecdd5"
  },
  {
    "url": "search/search_index.json",
    "revision": "407454bdc2e5860e1ee2d1fae0cd2cfb"
  },
  {
    "url": "sitemap.xml",
    "revision": "4cacb7d870009272386b1c4d0914fce9"
  },
  {
    "url": "sitemap.xml.gz",
    "revision": "2a2fa809255e5018b849bebefa2c594c"
  }
]);
workbox.googleAnalytics.initialize();


addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    skipWaiting();
  }
});

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);