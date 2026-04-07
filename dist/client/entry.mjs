import { renderers } from "./renderers.mjs";
import { c as createExports, s as serverEntrypointModule } from "./_@astrojs-ssr-adapter.CSD59ynl.js";
import { manifest } from "./manifest_Bm4_mFVm.mjs";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/api/auth/login.astro.mjs");
const _page2 = () => import("./pages/api/auth/me.astro.mjs");
const _page3 = () => import("./pages/api/auth/signup.astro.mjs");
const _page4 = () => import("./pages/api/messages/get.astro.mjs");
const _page5 = () => import("./pages/api/messages/send.astro.mjs");
const _page6 = () => import("./pages/api/mpesa/callback.astro.mjs");
const _page7 = () => import("./pages/api/mpesa/status.astro.mjs");
const _page8 = () => import("./pages/api/mpesa/stkpush.astro.mjs");
const _page9 = () => import("./pages/api/rides/_rideid_.astro.mjs");
const _page10 = () => import("./pages/api/rides.astro.mjs");
const _page11 = () => import("./pages/api/transactions.astro.mjs");
const _page12 = () => import("./pages/confirm-ride.astro.mjs");
const _page13 = () => import("./pages/contact-driver.astro.mjs");
const _page14 = () => import("./pages/home.astro.mjs");
const _page15 = () => import("./pages/login.astro.mjs");
const _page16 = () => import("./pages/mpesa-payment-confirmation.astro.mjs");
const _page17 = () => import("./pages/mpesa-payment-details.astro.mjs");
const _page18 = () => import("./pages/payment-failure.astro.mjs");
const _page19 = () => import("./pages/payment-initiation.astro.mjs");
const _page20 = () => import("./pages/payment-success.astro.mjs");
const _page21 = () => import("./pages/placeholder.astro.mjs");
const _page22 = () => import("./pages/profile.astro.mjs");
const _page23 = () => import("./pages/ride-completed.astro.mjs");
const _page24 = () => import("./pages/ride-history.astro.mjs");
const _page25 = () => import("./pages/ride-in-progress.astro.mjs");
const _page26 = () => import("./pages/ride-request.astro.mjs");
const _page27 = () => import("./pages/select-ride-type.astro.mjs");
const _page28 = () => import("./pages/signup.astro.mjs");
const _page29 = () => import("./pages/track-driver.astro.mjs");
const _page30 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
  ["src/pages/api/auth/login.ts", _page1],
  ["src/pages/api/auth/me.ts", _page2],
  ["src/pages/api/auth/signup.ts", _page3],
  ["src/pages/api/messages/get.ts", _page4],
  ["src/pages/api/messages/send.ts", _page5],
  ["src/pages/api/mpesa/callback.ts", _page6],
  ["src/pages/api/mpesa/status.ts", _page7],
  ["src/pages/api/mpesa/stkpush.ts", _page8],
  ["src/pages/api/rides/[rideId].ts", _page9],
  ["src/pages/api/rides/index.ts", _page10],
  ["src/pages/api/transactions/index.ts", _page11],
  ["src/pages/confirm-ride.astro", _page12],
  ["src/pages/contact-driver.astro", _page13],
  ["src/pages/home.astro", _page14],
  ["src/pages/login.astro", _page15],
  ["src/pages/mpesa-payment-confirmation.astro", _page16],
  ["src/pages/mpesa-payment-details.astro", _page17],
  ["src/pages/payment-failure.astro", _page18],
  ["src/pages/payment-initiation.astro", _page19],
  ["src/pages/payment-success.astro", _page20],
  ["src/pages/placeholder.astro", _page21],
  ["src/pages/profile.astro", _page22],
  ["src/pages/ride-completed.astro", _page23],
  ["src/pages/ride-history.astro", _page24],
  ["src/pages/ride-in-progress.astro", _page25],
  ["src/pages/ride-request.astro", _page26],
  ["src/pages/select-ride-type.astro", _page27],
  ["src/pages/signup.astro", _page28],
  ["src/pages/track-driver.astro", _page29],
  ["src/pages/index.astro", _page30]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./noop-entrypoint.mjs"),
  middleware: () => import("./_noop-middleware.mjs")
});
const _args = {
  "mode": "standalone",
  "client": "file:///home/rayan/bossie-ride/dist/client/",
  "server": "file:///home/rayan/bossie-ride/dist/server/",
  "host": false,
  "port": 4321,
  "assets": "",
  "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports["handler"];
const startServer = _exports["startServer"];
const options = _exports["options"];
const _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  handler,
  options,
  pageMap,
  startServer
};
