import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Partners",
  __ssrInlineRender: true,
  setup(__props) {
    const partners = {
      Storage: [
        "/logo/storage/image 4.png",
        "/logo/storage/image 5.png",
        "/logo/storage/image 6.png",
        "/logo/storage/image 7.png",
        "/logo/storage/image 54.png",
        "/logo/storage/image 56.png",
        "/logo/storage/image 81.png"
      ],
      Mining: [
        "/logo/mining/data 1.png",
        "/logo/mining/image 8.png",
        "/logo/mining/image 9.png",
        "/logo/mining/image 51.png",
        "/logo/mining/image 53.png"
      ],
      Analytics: [
        "/logo/analytics/image 13.png",
        "/logo/analytics/image 14.png",
        "/logo/analytics/image 15.png",
        "/logo/analytics/image 16.png",
        "/logo/analytics/image 17.png"
      ],
      Visualization: [
        "/logo/visualization/image 9.png",
        "/logo/visualization/image 10.png",
        "/logo/visualization/image 11.png"
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(partners, (images, type) => {
        _push(`<div class="appear relative overflow-hidden bg-white min-h-[300px] lg:h-72 rounded-3xl shadow-lg py-6 px-6 lg:px-12 mb-3 lg:my-12 flex flex-col lg:flex-row lg:gap-72 lg:min-h-[240px]"><h3 class="lg:text-left text-lg lg:text-5xl mt-auto relative z-20">${ssrInterpolate(type)}</h3><div class="flex flex-1 justify-center items-center flex-wrap relative z-20"><!--[-->`);
        ssrRenderList(images, (image) => {
          _push(`<img class="object-contain w-24 lg:w-36 h-8 lg:h-16 mx-2 lg:mx-5 lg:my-3"${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", image)}>`);
        });
        _push(`<!--]--></div><div class="absolute z-10 top-0 left-0 w-full h-full lg:bg-gradient-to-r bg-gradient-to-b from-transparent from-15% to-white lg:to-30% to-25%"></div><div class="absolute z-10 top-0 left-0 w-full h-full lg:bg-gradient-to-tr bg-gradient-to-r from-white to-transparent lg:to-30% to-70%"></div><img class="mr-auto absolute top-0 left-0 lg:w-1/3 w-full object-cover lg:h-full"${ssrRenderAttr("src", `/${type}BG.png`)} alt="BG"></div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Partners = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/jameshenry/Documents/web/datafirst/src/components/Partners.vue"]]);
export {
  Partners as P
};
