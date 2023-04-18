import { defineComponent, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { computed } from "@vue/reactivity";
import { _ as _export_sfc } from "../main.mjs";
import { P as Partners } from "./Partners-0cd07aee.js";
import "vite-ssg";
import "pinia";
import "gsap";
import "vue-router";
const _imports_0 = "/Hero.mp4";
const _imports_1 = "/logo/Jumeirah_Group.png";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Blog",
  __ssrInlineRender: true,
  props: {
    width: { type: Number, required: true }
  },
  setup(__props) {
    const props = __props;
    const posts = [
      {
        title: "From Mess to Meaning: How Data Cleaning Can Transform Your Analysis&nbsp;Results",
        slug: "",
        img: ""
      },
      {
        title: "The Power of Data: 5 Marketing Trends to Elevate Your Business in&nbsp;2023",
        slug: "",
        img: ""
      },
      {
        title: "Data engineer vs. data scientist: What’s the difference &amp; which should you&nbsp;hire",
        slug: "",
        img: ""
      }
    ];
    const showPosts = computed(() => {
      return props.width > 1024 ? posts : posts.slice(0, 2);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid gap-3 lg:gap-12 grid-cols-2 lg:grid-cols-3" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(showPosts), (post, index) => {
        _push(`<div class="appear lg:px-6 px-3 py-3 lg:py-12 bg-white h-[50vw] lg:h-[512px] relative overflow-hidden rounded-3xl shadow-lg flex flex-col justify-end"><div class="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-30% to-white to-50%"></div><img class="absolute top-0 left-0 w-full h-1/2"${ssrRenderAttr("src", `/blog/${index + 1}.png`)}${ssrRenderAttr("alt", post.title)}><h3 class="relative z-20 text-xs lg:text-3xl">${post.title}</h3>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: post.slug,
          class: "text-orange mt-1 relative z-20 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>Continue Reading</p>`);
            } else {
              return [
                createVNode("p", null, "Continue Reading")
              ];
            }
          }),
          _: 2
          /* DYNAMIC */
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/Users/jameshenry/Documents/web/datafirst/src/components/Blog.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    width: { type: Number, required: true }
  },
  setup(__props) {
    const types = {
      "Government &amp;<br>Public Sector": "Unparalleled insights for informed decision-making in the public sector.",
      Hospitality: "Elevated customer experience and revenue growth with advanced analytics solutions.",
      Education: "Enhanced learning outcomes and optimized operations with simplified yet advanced insights.",
      Automotive: "Reduced costs and increased revenue growth with powerful analytics tools.",
      "Food & Beverage": "Optimized menu engineering and reduced food costs with advanced analytics solutions.",
      Telecommunications: "Streamlined operations and increased growth with simplified yet powerful insights."
    };
    const solutions = [
      {
        title: "Accelerate value through data &amp;&nbsp;analytics.",
        desc: "Take control of your business and maximize its potential by finding out what people want and why. Our integrated dashboard and data automations provide valuable insights into your audience's preferences.",
        CTA: "Explore Data Analytics",
        dashboard: "/DataAnalytics.jpeg",
        dashboardAlt: "",
        image: "/DataAnalyticsBG.png",
        imageAlt: ""
      },
      {
        title: "Flow F&B Analytics:<br>Drive Revenue, Save&nbsp;time.",
        desc: "Business intelligence catered towards hospitality industry, FLOW allows you to confidently make informed decisions based on accurate insights, combined with reporting and analytics solutions with business metrics specifically crafted to meet your goals.",
        CTA: "Explore FLOW",
        dashboard: "FLOW.jpeg",
        dashboardAlt: "",
        image: "FLOWBG.png",
        imageAlt: ""
      },
      {
        title: "Build a super tech team, the right&nbsp;way.",
        desc: "Utilizing advanced technologies and data analysis to identify the best candidates for your company, we provide a customized approach that takes into account your specific needs, tailored to find the right talent for your organization.",
        CTA: "Explore IT Recruitment",
        dashboard: "",
        dashboardAlt: "",
        image: "ITRecruitmentBG.jpeg",
        imageAlt: ""
      }
    ];
    const clients = [
      "Amoodial",
      "Bergen Auto Spareparts",
      "Damac",
      "Dubai Holding",
      "Five Global Holdings",
      "HotelIQ",
      "Jumeirah Group"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-screen" }, _attrs))} data-v-75f76a7e><section class="flex items-center relative overflow-hidden h-[75vh] !m-0" data-v-75f76a7e><div class="flex flex-col mx-24 my-36" data-v-75f76a7e><h1 class="split text-white font-bold text-4xl lg:text-8xl my-2 text-center lg:text-left" data-v-75f76a7e><span data-v-75f76a7e>It </span><span data-v-75f76a7e>all </span><span data-v-75f76a7e>starts </span><br data-v-75f76a7e><span data-v-75f76a7e>with </span><span data-v-75f76a7e>data.</span></h1><p class="my-2 text-white lg:text-2xl text-center lg:text-left" data-v-75f76a7e>Growth starts here.<br data-v-75f76a7e>Unleash the power of data with the right resources and insights.</p><button class="bg-teal-900 hover:bg-teal-500 hover:scale-110 transition-all rounded-3xl my-2 py-3 px-5 text-white hover:text-teal-900 font-bold lg:ml-0 mx-auto text-sm lg:text-lg" data-v-75f76a7e>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Find Out How`);
          } else {
            return [
              createTextVNode("Find Out How")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</button></div><video loop muted autoplay playsinline class="object-fill -z-10 absolute top-0 left-0 brightness-75 w-full h-full"${ssrRenderAttr("src", _imports_0)} data-v-75f76a7e></video></section><section class="appear mx-2 lg:mx-24 rounded-3xl shadow-lg bg-white py-12 lg:px-36 px-4 flex lg:justify-between items-center justify-center lg:flex-row flex-col lg:gap-0 gap-5" data-v-75f76a7e><h2 class="text-teal-900 font-bold lg:text-left text-center" data-v-75f76a7e>Trusted by Industry Leaders</h2><div class="flex content-center flex-col items-center h-full" data-v-75f76a7e><div class="lg:m-5 flex items-center flex-wrap justify-center" data-v-75f76a7e><!--[-->`);
      ssrRenderList(clients.slice(0, 3), (client) => {
        _push(`<img class="object-contain w-12 lg:w-36 h-auto my-2 mx-5"${ssrRenderAttr("src", `/logo/${client.replace(/ /g, "_")}.png`)}${ssrRenderAttr("alt", client)} data-v-75f76a7e>`);
      });
      _push(`<!--]--></div><div class="lg:m-5 flex items-center flex-wrap justify-center" data-v-75f76a7e><!--[-->`);
      ssrRenderList(clients.slice(-4), (client) => {
        _push(`<img class="object-contain w-12 lg:w-36 h-auto my-2 mx-5"${ssrRenderAttr("src", `/logo/${client.replace(/ /g, "_")}.png`)}${ssrRenderAttr("alt", client)} data-v-75f76a7e>`);
      });
      _push(`<!--]--></div></div></section><section class="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-12 mx-24 min-h-[90vh]" data-v-75f76a7e><!--[-->`);
      ssrRenderList(types, (desc, title, index) => {
        _push(`<div class="appear relative bg-white rounded-3xl min-h-[240px] lg:min-h-[480px] shadow-lg overflow-hidden" data-v-75f76a7e><div class="p-3 lg:p-5 flex flex-col justify-end h-full relative z-20" data-v-75f76a7e><h3 class="text-sm break-words" data-v-75f76a7e>${title}</h3><p class="text-xs" data-v-75f76a7e>${ssrInterpolate(desc)}</p></div><div class="absolute top-0 w-full h-full bg-gradient-to-t to-transparent from-white from-30% lg:from-20% lg:to-50% to-70% z-10" data-v-75f76a7e></div><img class="absolute h-3/4 lg:h-full w-full top-0 object-cover"${ssrRenderAttr("src", `/types/${index + 1}.png`)}${ssrRenderAttr("alt", title)} rel="preload" data-v-75f76a7e></div>`);
      });
      _push(`<!--]--></section><section data-v-75f76a7e><h2 class="split font-bold text-center lg:text-left" data-v-75f76a7e><span data-v-75f76a7e>Data </span><span class="text-teal-900" data-v-75f76a7e>First,</span><br data-v-75f76a7e><span data-v-75f76a7e>Innovation</span><span data-v-75f76a7e> Follows.</span></h2><!--[-->`);
      ssrRenderList(solutions, (solution, index) => {
        _push(`<div class="${ssrRenderClass([[index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"], "appear bg-white shadow-lg rounded-3xl mb-5 lg:my-12 lg:h-[512px] flex overflow-hidden flex-col-reverse"])}" data-v-75f76a7e>`);
        if (__props.width > 1024) {
          _push(`<img class="object-cover lg:h-full h-1/3 lg:w-1/3 w-full basis-1/3 flex-grow-0 flex-shrink-0"${ssrRenderAttr("src", `/solutions/${solution.image}`)}${ssrRenderAttr("alt", solution.imageAlt)} data-v-75f76a7e>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([[solution.dashboard ? "to-30% lg:pl-24" : "to-15% lg:pl-72", index >= 1 ? "text-left items-start" : "text-right items-end", index === 1 ? "-mr-52 bg-gradient-to-l !pl-10 !lg:pr-24" : "lg:-ml-52 bg-gradient-to-r"], "py-6 lg:py-12 px-10 from-transparent to-white relative z-10 flex flex-col justify-center gap-4 w-full lg:w-auto lg:max-w-[75%]"])}" data-v-75f76a7e><h3 data-v-75f76a7e>${solution.title}</h3><p data-v-75f76a7e>${ssrInterpolate(solution.desc)}</p><button class="${ssrRenderClass([[index >= 1 ? "mr-auto" : "ml-auto"], "bg-white hover:bg-teal-900 transition-all hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80 duration-300 ring-teal-900 hover:ring-0 ring-1 rounded-3xl my-2 py-3 px-5 text-teal-900 hover:text-white font-bold text-sm lg:text-lg"])}" data-v-75f76a7e>${ssrInterpolate(solution.CTA)}</button></div>`);
        if (solution.dashboard) {
          _push(`<div class="lg:my-auto m-5 lg:mx-10 rounded-xl lg:rounded-3xl shadow-lg overflow-hidden flex-shrink-0 lg:h-3/5" data-v-75f76a7e><img class="object-fill h-full w-auto"${ssrRenderAttr("src", `/solutions/${solution.dashboard}`)}${ssrRenderAttr("alt", solution.dashboardAlt)} data-v-75f76a7e></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></section><section data-v-75f76a7e><div class="appear relative rounded-3xl bg-gray py-5 md:py-12 lg:px-36 px-12" data-v-75f76a7e><p data-v-75f76a7e>In their own words</p><q class="font-bold leading-snug text-lg md:text-3xl lg:text-6xl text-teal-900 mt-3 w-11/12 block" data-v-75f76a7e>It has been an eye-opening experience working with Datafirst Solutions, especially with their professional support and constant engagement in implementing different analytics projects.</q><img class="absolute bottom-5 md:bottom-12 lg:right-36 right-12 h-auto w-16 md:w-24 lg:w-48"${ssrRenderAttr("src", _imports_1)} alt="Jumeirah Group Logo" data-v-75f76a7e></div></section>`);
      _push(ssrRenderComponent(Partners, null, null, _parent));
      _push(ssrRenderComponent(Blog, { width: __props.width }, null, _parent));
      _push(`<section data-v-75f76a7e><div class="appear bg-gray rounded-t-3xl py-12 lg:px-36 px-12 h-[75vh] flex flex-col lg:flex-row justify-center items-center w-full" data-v-75f76a7e><h2 class="split leading-none text-center lg:text-left" data-v-75f76a7e><span data-v-75f76a7e>Tomorrow&#39;s</span><span data-v-75f76a7e> Growth,</span><br data-v-75f76a7e><span data-v-75f76a7e>Starts </span><span class="text-teal-900" data-v-75f76a7e>Today.</span></h2><button class="bg-teal-900 hover:scale-110 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold lg:ml-auto transition-all duration-300 text-sm lg:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80" data-v-75f76a7e>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Schedule a Demo`);
          } else {
            return [
              createTextVNode("Schedule a Demo")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</button></div></section></main>`);
    };
  }
});
const Index_vue_vue_type_style_index_0_scoped_75f76a7e_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-75f76a7e"], ["__file", "/Users/jameshenry/Documents/web/datafirst/src/pages/Index.vue"]]);
export {
  Index as default
};
