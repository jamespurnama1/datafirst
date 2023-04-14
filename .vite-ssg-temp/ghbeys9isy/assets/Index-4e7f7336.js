import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, onMounted, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { _ as _export_sfc } from "../main.mjs";
import "vite-ssg";
import "pinia";
import "vue-router";
const _imports_0 = "/Hero.mp4";
const _imports_1 = "/logo/Jumeirah_Group.png";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid gap-12 lg:grid-cols-3" }, _attrs))}><!--[-->`);
      ssrRenderList(posts, (post, index) => {
        _push(`<div class="appear px-6 py-12 bg-white h-[512px] relative overflow-hidden rounded-3xl shadow-lg flex flex-col justify-end"><div class="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-40% to-white to-60%"></div><img class="absolute top-0 left-0 w-full h-auto"${ssrRenderAttr("src", `/blog/${index + 1}.png`)}${ssrRenderAttr("alt", post.title)}><h3 class="relative z-20">${post.title}</h3>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: post.slug,
          class: "text-orange mt-1 relative z-20 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Continue Reading`);
            } else {
              return [
                createTextVNode("Continue Reading")
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
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    onMounted(() => {
      ScrollTrigger.batch(".appear", {
        onEnter: (elements, triggers) => {
          gsap.to(elements, { opacity: 1, y: 0, stagger: 0.15 });
        },
        start: "top 90%"
      });
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
    onUnmounted(() => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    });
    const types = {
      "Government & Public Sector": "Unparalleled insights for informed decision-making in the public sector.",
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-screen" }, _attrs))} data-v-75f76a7e><section class="flex items-center relative overflow-hidden h-[75vh] !m-0" data-v-75f76a7e><div class="flex flex-col mx-24 my-36" data-v-75f76a7e><h1 class="split text-white font-bold text-8xl my-2 text-center lg:text-left" data-v-75f76a7e><span data-v-75f76a7e>It </span><span data-v-75f76a7e>all </span><span data-v-75f76a7e>starts </span><br data-v-75f76a7e><span data-v-75f76a7e>with </span><span data-v-75f76a7e>data.</span></h1><p class="my-2 text-white text-2xl text-center lg:text-left" data-v-75f76a7e>Growth starts here.<br data-v-75f76a7e>Unleash the power of data with the right resources and insights.</p><button class="bg-teal-900 rounded-3xl my-2 py-3 px-5 text-white font-bold lg:ml-0 mx-auto text-lg" data-v-75f76a7e>`);
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
      _push(`</button></div><video loop muted autoplay playsinline class="object-fill -z-10 absolute top-0 left-0 brightness-75 w-full h-full"${ssrRenderAttr("src", _imports_0)} data-v-75f76a7e></video></section><section class="appear mx-24 rounded-3xl shadow-lg bg-white py-12 px-36 flex lg:justify-between items-center justify-center lg:flex-row flex-col lg:gap-0 gap-5" data-v-75f76a7e><h2 class="text-teal-900 font-bold text-6xl lg:text-left text-center" data-v-75f76a7e>Trusted by Industry Leaders</h2><div class="flex content-center flex-col items-center h-full" data-v-75f76a7e><div class="lg:m-5 flex items-center flex-wrap justify-center" data-v-75f76a7e><!--[-->`);
      ssrRenderList(clients.slice(0, 3), (client) => {
        _push(`<img class="object-contain w-36 h-auto my-2 mx-5"${ssrRenderAttr("src", `/logo/${client.replace(/ /g, "_")}.png`)}${ssrRenderAttr("alt", client)} data-v-75f76a7e>`);
      });
      _push(`<!--]--></div><div class="lg:m-5 flex items-center flex-wrap justify-center" data-v-75f76a7e><!--[-->`);
      ssrRenderList(clients.slice(-4), (client) => {
        _push(`<img class="object-contain w-36 h-auto my-2 mx-5"${ssrRenderAttr("src", `/logo/${client.replace(/ /g, "_")}.png`)}${ssrRenderAttr("alt", client)} data-v-75f76a7e>`);
      });
      _push(`<!--]--></div></div></section><section class="grid lg:grid-cols-3 gap-12 mx-24 min-h-[90vh]" data-v-75f76a7e><!--[-->`);
      ssrRenderList(types, (desc, title, index) => {
        _push(`<div class="appear relative bg-white rounded-3xl min-h-[480px] shadow-lg overflow-hidden" data-v-75f76a7e><div class="p-5 flex flex-col justify-end h-full relative z-20" data-v-75f76a7e><h3 data-v-75f76a7e>${ssrInterpolate(title)}</h3><p data-v-75f76a7e>${ssrInterpolate(desc)}</p></div><div class="absolute top-0 w-full h-full bg-gradient-to-t to-transparent from-white from-20% to-50% z-10" data-v-75f76a7e></div><img class="absolute h-full w-full top-0 object-cover"${ssrRenderAttr("src", `/types/${index + 1}.png`)}${ssrRenderAttr("alt", title)} rel="preload" data-v-75f76a7e></div>`);
      });
      _push(`<!--]--></section><section data-v-75f76a7e><h2 class="split font-bold text-8xl text-center lg:text-left" data-v-75f76a7e><span data-v-75f76a7e>Data </span><span class="text-teal-900" data-v-75f76a7e>First,</span><br data-v-75f76a7e><span data-v-75f76a7e>Innovation</span><span data-v-75f76a7e> Follows.</span></h2><!--[-->`);
      ssrRenderList(solutions, (solution, index) => {
        _push(`<div class="${ssrRenderClass([[index === 1 ? "flex-row-reverse" : ""], "appear bg-white shadow-lg rounded-3xl my-12 h-[512px] flex overflow-hidden"])}" data-v-75f76a7e><img class="object-cover h-full w-1/3 basis-1/3 flex-grow-0 flex-shrink-0"${ssrRenderAttr("src", `/solutions/${solution.image}`)}${ssrRenderAttr("alt", solution.imageAlt)} data-v-75f76a7e><div class="${ssrRenderClass([[solution.dashboard ? "to-30% pl-24" : "to-15% pl-72", index >= 1 ? "text-left items-start" : "text-right items-end", index === 1 ? "-mr-52 bg-gradient-to-l !pl-10 !pr-24" : "-ml-52 bg-gradient-to-r"], "py-12 px-10 from-transparent to-white relative z-10 flex flex-col justify-center gap-4"])}" data-v-75f76a7e><h3 data-v-75f76a7e>${solution.title}</h3><p data-v-75f76a7e>${ssrInterpolate(solution.desc)}</p><button class="${ssrRenderClass([[index >= 1 ? "mr-auto" : "ml-auto"], "bg-white transition-all hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80 duration-300 ring-teal-900 hover:ring-0 ring-1 rounded-3xl my-2 py-3 px-5 text-teal-900 font-bold text-lg"])}" data-v-75f76a7e>${ssrInterpolate(solution.CTA)}</button></div><div class="my-auto mx-10 rounded-3xl shadow-lg overflow-hidden flex-shrink-0 h-3/5" data-v-75f76a7e>`);
        if (solution.dashboard) {
          _push(`<img class="object-fill h-full w-auto"${ssrRenderAttr("src", `/solutions/${solution.dashboard}`)}${ssrRenderAttr("alt", solution.dashboardAlt)} data-v-75f76a7e>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></section><section data-v-75f76a7e><div class="appear relative rounded-3xl bg-gray py-12 lg:px-36 px-12" data-v-75f76a7e><p data-v-75f76a7e>In their own words</p><q class="font-bold leading-snug text-3xl lg:text-6xl text-teal-900 mt-3 w-11/12 block" data-v-75f76a7e>It has been an eye-opening experience working with Datafirst Solutions, especially with their professional support and constant engagement in implementing different analytics projects.</q><img class="absolute bottom-12 lg:right-36 right-12 h-auto w-24 lg:w-48"${ssrRenderAttr("src", _imports_1)} alt="Jumeirah Group Logo" data-v-75f76a7e></div></section><section data-v-75f76a7e><!--[-->`);
      ssrRenderList(partners, (images, type, index) => {
        _push(`<div class="appear relative overflow-hidden bg-white h-72 rounded-3xl shadow-lg py-6 px-12 my-12 flex flex-col lg:flex-row lg:gap-72 min-h-[240px]" data-v-75f76a7e><h3 class="text-5xl mt-auto relative z-20" data-v-75f76a7e>${ssrInterpolate(type)}</h3><div class="flex flex-1 justify-center items-center flex-wrap relative z-20" data-v-75f76a7e><!--[-->`);
        ssrRenderList(images, (image) => {
          _push(`<img class="object-contain w-36 h-16 mx-5 my-3"${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", image)} data-v-75f76a7e>`);
        });
        _push(`<!--]--></div><div class="absolute z-10 top-0 left-0 w-full h-full lg:bg-gradient-to-r bg-gradient-to-b from-transparent from-15% to-white lg:to-30% to-25%" data-v-75f76a7e></div><div class="absolute z-10 top-0 left-0 w-full h-full lg:bg-gradient-to-tr bg-gradient-to-r from-white to-transparent lg:to-30% to-70%" data-v-75f76a7e></div><!-- <img :src="\`/partners/bg\${[index]}\`" alt=""> --><img class="mr-auto absolute top-0 left-0 lg:w-1/3 w-full object-cover lg:h-full"${ssrRenderAttr("src", `/${type}BG.png`)} alt="BG" data-v-75f76a7e></div>`);
      });
      _push(`<!--]--></section>`);
      _push(ssrRenderComponent(Blog, null, null, _parent));
      _push(`<section data-v-75f76a7e><div class="appear bg-gray rounded-t-3xl py-12 lg:px-36 px-12 h-[75vh] flex flex-col lg:flex-row justify-center items-center w-full" data-v-75f76a7e><h2 class="split text-8xl leading-none text-center lg:text-left" data-v-75f76a7e><span data-v-75f76a7e>Tomorrow&#39;s</span><span data-v-75f76a7e> Growth,</span><br data-v-75f76a7e><span data-v-75f76a7e>Starts </span><span class="text-teal-900" data-v-75f76a7e>Today.</span></h2><button class="bg-teal-900 rounded-3xl lg:my-2 my-5 py-3 px-5 text-white font-bold lg:ml-auto transition-all duration-300 text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80 text-lg" data-v-75f76a7e>`);
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
