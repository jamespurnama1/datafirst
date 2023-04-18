import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import { defineComponent, ref, onMounted, onUnmounted, watch, unref, withCtx, createVNode, createTextVNode, resolveDynamicComponent, Transition, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderVNode } from "vue/server-renderer";
import { gsap } from "gsap";
import { useRoute, RouterLink, RouterView } from "vue-router";
const __pages_import_0__ = () => import("./assets/Partners-beab99bb.js");
const __pages_import_1__ = () => import("./assets/Index-2b26ec53.js");
const __pages_import_2__ = () => import("./assets/Contact-5d27f208.js");
const __pages_import_3__ = () => import("./assets/About-2b90629c.js");
const routes = [{ "name": "Partners", "path": "/partners", "component": __pages_import_0__, "props": true }, { "name": "Index", "path": "/", "component": __pages_import_1__, "props": true }, { "name": "Contact", "path": "/contact", "component": __pages_import_2__, "props": true }, { "name": "About", "path": "/about", "component": __pages_import_3__, "props": true }];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const width = ref(0);
    const opened = ref(false);
    const darkMode = ref(false);
    function resize() {
      width.value = window.innerWidth;
    }
    onMounted(() => {
      checkRoute();
      resize();
      window.addEventListener("resize", resize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", resize);
    });
    const route = useRoute();
    function checkRoute() {
      if (route.path === "/about" || route.path === "/contact") {
        dark();
      } else {
        light();
      }
    }
    function dark() {
      darkMode.value = true;
      gsap.to("body", {
        backgroundColor: "black"
      });
    }
    function light() {
      darkMode.value = false;
      gsap.to("body", {
        backgroundColor: "white"
      });
    }
    watch(() => route.name, () => {
      checkRoute();
      opened.value = false;
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="${ssrRenderClass([[darkMode.value ? "bg-black" : "bg-white"], "lg:items-center flex-col lg:flex-row relative py-3 px-6 lg:py-6 lg:px-12 top-0 justify-between flex origin-top transition-transform duration-500"])}"><div class="flex justify-between items-center relative z-50">`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-6 lg:h-8 w-auto transition-transform"${ssrRenderAttr("src", darkMode.value ? "/DataFirstLogoWhite.webp" : "/DataFirstLogoBlack.webp")} alt="DataFirst Logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "h-6 lg:h-8 w-auto transition-transform",
                src: darkMode.value ? "/DataFirstLogoWhite.webp" : "/DataFirstLogoBlack.webp",
                alt: "DataFirst Logo"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      if (width.value <= 1024) {
        _push(`<div class="h-8 w-8 p-2 flex flex-col justify-around cursor-pointer origin-top"><span class="${ssrRenderClass([[opened.value ? "rotate-45" : "", darkMode.value ? "bg-white" : "bg-black"], "rounded w-6 h-0.5 transition-transform duration-500 origin-[25%_-150%]"])}"></span><span class="${ssrRenderClass([[opened.value ? "opacity-0" : "", darkMode.value ? "bg-white" : "bg-black"], "rounded w-6 h-0.5 transition-transform duration-500"])}"></span><span class="${ssrRenderClass([[opened.value ? "-rotate-45" : "", darkMode.value ? "bg-white" : "bg-black"], "rounded w-6 h-0.5 transition-transform duration-500 origin-[0%_100%]"])}"></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><ul style="${ssrRenderStyle(width.value > 1024 || opened.value && width.value <= 1024 ? null : { display: "none" })}" class="${ssrRenderClass([[darkMode.value ? "bg-black text-white" : "bg-white text-black"], "flex lg:flex-row flex-col lg:bg-transparent lg:m-0 ml-auto m-auto text-center transition-opacity absolute lg:relative lg:h-auto h-screen lg:w-auto w-screen lg:justify-normal justify-center z-30 lg:left-auto left-0"])}">`);
      if (width.value <= 1024) {
        _push(`<li class="py-2 lg:py-0 px-6 hover:text-teal-900">`);
        _push(ssrRenderComponent(unref(RouterLink), { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="py-2 lg:py-0 px-6 hover:text-teal-900">`);
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
      _push(`</li><li class="py-2 lg:py-0 px-6 hover:text-teal-900">`);
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
      _push(`</li><li class="py-2 lg:py-0 px-6 hover:text-teal-900">`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/partners" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Partners`);
          } else {
            return [
              createTextVNode("Partners")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</li><li class="py-2 lg:py-0 px-6 hover:text-teal-900">`);
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
      _push(`</li><li class="py-2 lg:py-0 px-6 hover:text-teal-900">`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Careers`);
          } else {
            return [
              createTextVNode("Careers")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</li><li class="py-2 lg:py-0 px-6 hover:text-teal-900">`);
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
      _push(ssrRenderComponent(unref(RouterView), null, {
        default: withCtx(({ Component, route: route2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), {
              width: width.value,
              key: route2.path
            }, null), _parent2, _scopeId);
          } else {
            return [
              createVNode(
                Transition,
                { name: "fade" },
                {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(Component), {
                      width: width.value,
                      key: route2.path
                    }, null, 8, ["width"]))
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              )
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<footer class="${ssrRenderClass([[darkMode.value ? "bg-black text-white" : "bg-white text-black"], "absolute lg:bottom-6 bottom-3 flex lg:flex-row flex-col items-center justify-center px-6 lg:px-36 lg:justify-between text-center lg:text-left w-full"])}"><p>Copyright © 2023 Datafirst - All Rights Reserved.</p><span class="flex"><p>`);
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
      _push(`</p><p>`);
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
      _push(`</p></span></footer><!--]-->`);
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
