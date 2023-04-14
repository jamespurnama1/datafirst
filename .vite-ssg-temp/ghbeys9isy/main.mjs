import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { RouterLink, RouterView } from "vue-router";
const __pages_import_0__ = () => import("./assets/Index-4e7f7336.js");
const __pages_import_1__ = () => import("./assets/About-75f74ab9.js");
const routes = [{ "name": "Index", "path": "/", "component": __pages_import_0__, "props": true }, { "name": "About", "path": "/about", "component": __pages_import_1__, "props": true }];
const _imports_0 = "/DataFirstLogo.webp";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="items-center relative p-6 top-0 justify-between flex bg-white w-full"><img class="h-8 w-auto"${ssrRenderAttr("src", _imports_0)} alt="DataFirst Logo"><ul class="flex"><li class="px-6">`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</li><li class="px-6">`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/solutions" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Solutions`);
          } else {
            return [
              createTextVNode("Solutions")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</li><li class="px-6">`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</li><li class="px-6">`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/blog" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</li></ul></nav>`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(`<footer class="absolute bottom-6 flex px-24 justify-between text-xs w-full"><p>Copyright © 2023 Datafirst - All Rights Reserved.</p><span>`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/privacy" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), {
        class: "ml-3",
        to: "/terms"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms &amp; Condition`);
          } else {
            return [
              createTextVNode("Terms & Condition")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</span></footer><!--]-->`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/jameshenry/Documents/web/datafirst/src/App.vue"]]);
const main = "";
const createApp = ViteSSG(
  App,
  { routes },
  async ({ app, router, routes: routes2, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);
  }
);
export {
  _export_sfc as _,
  createApp
};
