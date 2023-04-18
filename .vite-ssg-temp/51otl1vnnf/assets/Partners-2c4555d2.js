import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { P as Partners$1 } from "./Partners-0cd07aee.js";
import { _ as _export_sfc } from "../main.mjs";
import "vite-ssg";
import "pinia";
import "gsap";
import "vue-router";
const _imports_0 = "/logo/backed/SME.png";
const _imports_1 = "/logo/backed/sheraa.png";
const _imports_2 = "/logo/backed/khalifa.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Partners",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-screen pb-16 lg:pb-10 px-6 lg:px-24 mt-8 lg:mt-24" }, _attrs))}><div class="flex flex-col lg:flex-row items-center justify-start mb-10 lg:mb-0"><div><h1 class="split text-4xl lg:text-8xl font-bold lg:text-left text-center"><span>We </span><span>go </span><span>far </span><span>by </span><br><span>going</span> <span class="text-teal-900">together.</span></h1><p class="mt-5 lg:mb-0 mb-5 lg:w-3/5 mx-auto lg:mx-0">We work with some of industry leading tech companies to provide you with the state-of-the-art technologies that are essential to our services.</p></div><button class="bg-teal-900 hover:scale-110 transition-all rounded-3xl my-2 py-3 px-5 text-white font-bold lg:mx-0 mx-auto text-sm lg:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80 cursor-pointer">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Become a customer`);
          } else {
            return [
              createTextVNode("Become a customer")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</button></div>`);
      _push(ssrRenderComponent(Partners$1, null, null, _parent));
      _push(`<h2 class="text-center mt-24">Backed by</h2><div class="flex justify-between px-24 mt-5 mb-36"><img class="w-16 md:w-24 lg:w-36 object-contain"${ssrRenderAttr("src", _imports_0)} alt="Dubai SME"><img class="w-16 md:w-24 lg:w-36 object-contain"${ssrRenderAttr("src", _imports_1)} alt="Sheraa"><img class="w-16 md:w-24 lg:w-36 object-contain"${ssrRenderAttr("src", _imports_2)} alt="Khalifa Fund for Enterprise Development"></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Partners = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/jameshenry/Documents/web/datafirst/src/pages/Partners.vue"]]);
export {
  Partners as default
};
