import { defineComponent, ref, onMounted, onBeforeUnmount, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { _ as _export_sfc } from "../main.mjs";
import "vite-ssg";
import "pinia";
import "vue-router";
const _imports_0 = "/linkedin.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    const state = ref("sales");
    onMounted(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      ScrollTrigger.batch(".split span", {
        onEnter: (elements) => {
          gsap.to(elements, {
            y: 0,
            duration: 0.5,
            stagger: 0.2
          });
          gsap.to(elements, {
            autoAlpha: 1,
            stagger: 0.2
          });
        },
        start: "50% 70%",
        onLeave: (elements) => gsap.set(elements, { opacity: 1, y: 0, overwrite: true })
      });
    });
    onBeforeUnmount(() => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-e7f3a816><section class="text-white flex flex-col gap-24 lg:flex-row h-[75vh] items-center justify-center" data-v-e7f3a816><h1 class="text-4xl lg:text-8xl font-bold text-center lg:text-left" data-v-e7f3a816><span class="text-teal-900" data-v-e7f3a816>Growth </span><span data-v-e7f3a816>is </span><span data-v-e7f3a816>just</span><br data-v-e7f3a816><span data-v-e7f3a816>one </span><span data-v-e7f3a816>click</span> <span data-v-e7f3a816>away.</span></h1><div class="relative rounded-3xl bg-white py-5 lg:py-6 px-3 lg:px-12 mx-12 min-w-[75%] lg:min-w-0 lg:w-[500px]" data-v-e7f3a816><ul class="text-black flex justify-between cursor-pointer bg-white" data-v-e7f3a816><li class="font-medium text-sm lg:text-base" data-v-e7f3a816>Sales</li><li class="font-medium text-sm lg:text-base" data-v-e7f3a816>Support</li><li class="font-medium text-sm lg:text-base" data-v-e7f3a816>General Inquiries</li></ul><div class="${ssrRenderClass([{
        "lg:translate-x-[42px] translate-x-[9px] w-[15%] lg:w-[11%]": state.value === "sales",
        "lg:translate-x-[170px] translate-x-[74px] w-[21%] lg:w-[15%]": state.value === "support",
        "lg:translate-x-[320px] translate-x-[100%] w-[42%] lg:w-[28%]": state.value === "general"
      }, "selector absolute left-0 h-1 transition-transform"])}" data-v-e7f3a816></div><!--[-->`);
      if (state.value === "sales") {
        _push(`<div class="flex flex-col items-center justify-end pt-10 px-3" data-v-e7f3a816><p class="text-black text-center w-2/3" data-v-e7f3a816>Learn more about our solutions and how it fits our needs</p><button class="bg-teal-900 hover:scale-110 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold transition-all duration-300 text-sm lg:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80" data-v-e7f3a816>`);
        _push(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contact Sales`);
            } else {
              return [
                createTextVNode("Contact Sales")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(`</button></div>`);
      } else if (state.value === "support") {
        _push(`<div class="flex flex-col items-center justify-end pt-10 px-3" data-v-e7f3a816><p class="text-black text-center w-2/3" data-v-e7f3a816>Experiencing technical issues?<br data-v-e7f3a816>We&#39;re ready to help!</p><button class="bg-teal-900 hover:scale-110 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold transition-all duration-300 text-sm lg:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80" data-v-e7f3a816>`);
        _push(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contact Support`);
            } else {
              return [
                createTextVNode("Contact Support")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(`</button></div>`);
      } else if (state.value === "general") {
        _push(`<div class="flex flex-col items-center justify-end pt-10 px-3" data-v-e7f3a816><p class="text-black text-center w-2/3" data-v-e7f3a816>For everything else!</p><button class="bg-teal-900 hover:scale-110 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold transition-all duration-300 text-sm lg:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80" data-v-e7f3a816>`);
        _push(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contact us`);
            } else {
              return [
                createTextVNode("Contact us")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]--></div></section><section data-v-e7f3a816><a class="flex items-center justify-start flex-col h-52 mt-10" href="https://linkedin.com/datafirst" target="_blank" rel="noreferrer noopener" data-v-e7f3a816><img class="object-contain mb-3 w-6 lg:w-12"${ssrRenderAttr("src", _imports_0)} alt="LinkedIn" data-v-e7f3a816><p class="text-white text-lg lg:text-xl" data-v-e7f3a816>Check out our LinkedIn</p></a></section></main>`);
    };
  }
});
const Contact_vue_vue_type_style_index_0_scoped_e7f3a816_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e7f3a816"], ["__file", "/Users/jameshenry/Documents/web/datafirst/src/pages/Contact.vue"]]);
export {
  Contact as default
};
