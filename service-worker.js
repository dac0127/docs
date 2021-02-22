/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6542c6abbd394c0525a2ff20d5462b85"
  },
  {
    "url": "about.html",
    "revision": "20f1b3f9234dfdc53b7513464e3bae1e"
  },
  {
    "url": "about/index.html",
    "revision": "224ca9ddf0f543992dd79b352bb43f7a"
  },
  {
    "url": "assets/css/0.styles.81887141.css",
    "revision": "c47ce1fed069ef8861b2721ab9bd32e5"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "dae6f8a1b113085865bb6b0e6aa36d72"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.87f9fd02.js",
    "revision": "17bc3495aa4263e7ba17f5faa432a25d"
  },
  {
    "url": "assets/js/11.6aa89fd8.js",
    "revision": "ed537758eeca2c904c4a2fc71664200a"
  },
  {
    "url": "assets/js/12.9c4f7569.js",
    "revision": "6f5fdb9e6335fb36487378f84c25fb31"
  },
  {
    "url": "assets/js/13.ae0f7659.js",
    "revision": "e8c205958d21c1fee3fab438fa8b95e5"
  },
  {
    "url": "assets/js/14.47cd9db5.js",
    "revision": "7a8188f46423a8154cb958e63872d86f"
  },
  {
    "url": "assets/js/15.1c038beb.js",
    "revision": "22c02abef9794109e409f32a7158be0c"
  },
  {
    "url": "assets/js/16.72281d0b.js",
    "revision": "ad2d9536b12452164aff49f505749f7d"
  },
  {
    "url": "assets/js/17.0b0b957e.js",
    "revision": "29abcb3fceb328e1bf105f12a980ece8"
  },
  {
    "url": "assets/js/18.3aa430f3.js",
    "revision": "01309a1fcaf0b7bcc57703751e48d480"
  },
  {
    "url": "assets/js/19.b75f0145.js",
    "revision": "50f7b4df6568acc82c2249887aed1516"
  },
  {
    "url": "assets/js/2.89c9107b.js",
    "revision": "c0f82528832ecbd45b2373489984a00d"
  },
  {
    "url": "assets/js/20.4c518a89.js",
    "revision": "f235dcbb787b0818c421e0da2c9aa7f9"
  },
  {
    "url": "assets/js/21.6da68daf.js",
    "revision": "a2b67334891d245e1f80c276bbd9024b"
  },
  {
    "url": "assets/js/22.1ba695ce.js",
    "revision": "b2140c159a3a579ef3e20630d0bd72b6"
  },
  {
    "url": "assets/js/3.389d9647.js",
    "revision": "60b0f5c393e6ddbdb03c85c070e71647"
  },
  {
    "url": "assets/js/4.a68b49cc.js",
    "revision": "c3c8e351cbc071f449f2f0506356d410"
  },
  {
    "url": "assets/js/5.7287982c.js",
    "revision": "40fa453ae4a7f5ddd2ed910c355dfb38"
  },
  {
    "url": "assets/js/6.8fe146c4.js",
    "revision": "06f66c7a5c53d59dc1dd48dfc9a9dd92"
  },
  {
    "url": "assets/js/7.c3aea230.js",
    "revision": "c4f268d951106d759b87b31a15961827"
  },
  {
    "url": "assets/js/8.2e9c6c59.js",
    "revision": "20e181a0f91dd7d32dfc7dfee1d07756"
  },
  {
    "url": "assets/js/9.dbd0b581.js",
    "revision": "99edba4f88ce132fad5d8825562091fb"
  },
  {
    "url": "assets/js/app.ef2f23e0.js",
    "revision": "2a394b92d46f0c112fe6a5a24eebf02f"
  },
  {
    "url": "CSS/css1.html",
    "revision": "e4ae3f717bf926d56308c41c7663d774"
  },
  {
    "url": "CSS/css2.html",
    "revision": "3d734ac0d7cb30267c1cebde7a6b5852"
  },
  {
    "url": "CSS/index.html",
    "revision": "26c32a7d1c6afc2df6c210c8107f8ffc"
  },
  {
    "url": "guide/index.html",
    "revision": "6f18b7f4c1f3fdd0fb5d144ef58b5d0e"
  },
  {
    "url": "icons/andriod-chrome-192x192.png",
    "revision": "00e35b04f8af6448015d358b0dbbcacf"
  },
  {
    "url": "icons/andriod-chrome-512x512.png",
    "revision": "e346950886026b8b8a376f7c4ae9020c"
  },
  {
    "url": "index.html",
    "revision": "935ba60d8c54ff8ae307aa753c269057"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "9135101e7385669436c5f7dda27a3bb1"
  },
  {
    "url": "JavaScript/javascript1.html",
    "revision": "00ca78881f02d3c174bd15e3b4bff079"
  },
  {
    "url": "JavaScript/javascript2.html",
    "revision": "f49a9ad2e5082520188c81f963aba889"
  },
  {
    "url": "language/chinese/index.html",
    "revision": "aaa6219c2f452951e9c6ec98005b7487"
  },
  {
    "url": "language/japanese/index.html",
    "revision": "c69b3884de86020bb80301205bc52f90"
  },
  {
    "url": "page-a.html",
    "revision": "8e54efdfcfd812d4ec4970345f5f3a98"
  },
  {
    "url": "page-b.html",
    "revision": "02006670b0b265a5bd4087ab6df2f047"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
