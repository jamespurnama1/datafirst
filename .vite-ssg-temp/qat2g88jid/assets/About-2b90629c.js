import { defineComponent, onMounted, onBeforeUnmount, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { _ as _export_sfc } from "../main.mjs";
import "vite-ssg";
import "pinia";
import "vue-router";
const _imports_0 = "/assets/aboutHero-bf0f2583.jpg";
const _imports_1 = "/about/analytics.svg";
const _imports_2 = "/about/recruit.svg";
const _imports_3 = "/about/grow.svg";
const _imports_4 = "/DataFirstLogoWhite.webp";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const clients = [
      "Jumeirah Group",
      "Dubai Holding",
      "Damac"
    ];
    const awards = {
      "Microsoft Certified: Azure Data Engineer": "AzureDataEngineer",
      "Microsoft Certified: Azure Solutions Architect": "AzureSolutionsArchitect",
      "Microsoft Certified: Azure Fundamentals": "AzureFundamentals",
      "Microsoft Certified: Power BI Data Analyst Associate": "PowerBIDataAnalystAssociate",
      "Administering Microsoft SQL Server Databases": "AdministeringSQL",
      "Implemeting a Data Warehouse with Microsoft SQL Server": "ImplementingSQL",
      "Querying Microsoft SQL Server": "QueryingSQL",
      "Shortlisted for World Data Visualization Prize": "ShortlistedPrize",
      "Qlik: Data Literacy Certification": "DataLiteracy",
      "Qlik Sense: Data Architect Certification": "QlikSense",
      "ISTQB Certfied Tester": "ISTQB"
    };
    gsap.registerPlugin(ScrollTrigger);
    onMounted(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
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
    onBeforeUnmount(() => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-screen text-white" }, _attrs))}><section class="flex items-center lg:justify-end relative overflow-hidden h-[75vh] !m-0"><div class="flex flex-col mx-6 my-12 lg:mx-24 lg:my-36 lg:w-1/2 lg:ml-auto"><h1 class="split text-white font-bold text-4xl lg:text-8xl my-2 text-left"><span>At </span><span>a </span><span>time </span><br><span>where </span><span>data </span><span>is </span><span>king,<br></span><span>we </span><span>help </span><span>you </span><span>make </span><span>the </span><span>most </span><span>out </span><span>of </span><span>it.</span></h1><p class="my-2 text-white lg:text-2xl text-left">Datafirst Solutions is a company based in Dubai, UAE that specializes in data and analytics. Our team consists of passionate problem-solvers and data experts with the experience and capability that enable us to leverage the power of data, to ultimately help businesses make informed decisions and grow better.</p></div><img class="absolute bottom-0 lg:left-0 -z-10 object-contain w-auto h-full lg:brightness-100 brightness-50"${ssrRenderAttr("src", _imports_0)}></section><section><div class="appear relative py-5 md:py-12 lg:px-72 px-12"><h2>Founder&#39;s Message</h2><q class="leading-snug lg:text-base text-xs mt-3 w-11/12 block">My journey in uncovering the power of data began when I started working in data and analytics space over a decade ago. I saw data all over the map: very huge potential, but very little action were built and taken upon that source of information. There has to be a better solution, that is able to transform raw datas into valuable insights to help companies grow and thrive in the region. So in 2020, we decided to take matters in our own hands by building Datafirst. <br><br> Our mission is simple: To be the catalyst of growth for local and international organizations through innovative data solutions, to eventually contribute to the overall betterment and development of this region as a whole. So, let’s join us in uncovering the power of data, together!</q><div class="ml-auto text-right mt-3"><p><strong>Budoor Al Amoodi</strong></p><p>Founder</p></div></div></section><section class="appear relative overflow-hidden bg-white rounded-3xl mx-12 lg:mx-36 my-5 lg:my-12 py-6 lg:py-12 lg:px-36 px-4 flex lg:justify-between items-center justify-center lg:flex-row flex-col lg:gap-0 gap-5"><h2 class="text-black font-bold split"><span>We </span><span>have </span><span>work </span><span>with </span><span>some </span><span>of </span><span>the </span><span>region&#39;s </span><span class="text-teal-900">leading</span> <span>companies</span></h2><div class="flex content-center flex-col items-center h-full"><!--[-->`);
      ssrRenderList(clients, (client) => {
        _push(`<img class="appear object-contain w-20 lg:w-36 h-auto my-2 lg:my-5 mx-5"${ssrRenderAttr("src", `/logo/${client.replace(/ /g, "_")}.png`)}${ssrRenderAttr("alt", client)}>`);
      });
      _push(`<!--]--></div></section><section class="appear text-center flex flex-col lg:gap-6 items-center justify-center py-5 md:py-12 lg:px-36 px-12"><h2>We are very capable of</h2><div class="flex justify-between mt-5"><div class="flex flex-col items-center justify-start lg:w-1/5 w-[30%]"><img class="h-8 lg:h-20 mb-5 object-contain"${ssrRenderAttr("src", _imports_1)} alt="Analytics"><p class="text-xs lg:text-xl">Providing in-depth analytics and data-based insights.</p></div><div class="flex flex-col items-center justify-start lg:w-1/5 w-[30%]"><img class="h-8 lg:h-20 mb-5 object-contain"${ssrRenderAttr("src", _imports_2)} alt="Recruitment"><p class="text-xs lg:text-xl">Recruiting and outsourcing quality manpower for various tech positions.</p></div><div class="flex flex-col items-center justify-start lg:w-1/5 w-[30%]"><img class="h-8 lg:h-20 mb-5 object-contain"${ssrRenderAttr("src", _imports_3)} alt="Grow"><p class="text-xs lg:text-xl">Helping F&amp;B and hospitality businesses grow through business intelligence solutions.</p></div></div></section><section class="appear text-center flex flex-col lg:gap-6 items-center justify-center py-5 md:py-12 lg:px-36 px-6"><h2>Awards &amp; certification</h2><div class="flex flex-wrap items-center justify-center gap-4 lg:gap-16"><!--[-->`);
      ssrRenderList(awards, (value, key) => {
        _push(`<div class="appear flex flex-col items-center justify-start mb-auto my-3 max-w-[70px] lg:max-w-[200px]"><img class="lg:h-36 h-20 w-auto object-contain mb-3"${ssrRenderAttr("src", `/about/awards/${value}.png`)}${ssrRenderAttr("alt", key)}><p>${ssrInterpolate(key)}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="appear flex flex-col items-center justify-center min-h-[500px] mx-6 lg:mx-24"><button class="bg-teal-900 hover:scale-110 rounded-3xl lg:mb-16 my-10 py-3 px-5 text-white font-bold lg:mx-auto transition-all duration-300 text-sm lg:text-lg hover:shadow-[0_0_50px_0_rgba(0,0,0,0.3)] hover:shadow-teal-900/80">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
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
      _push(`</button><img class="h-6 lg:h-8 w-auto transition-transform"${ssrRenderAttr("src", _imports_4)} alt="DataFirst Logo"><p>Dubai, United Arab Emirates</p></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/jameshenry/Documents/web/datafirst/src/pages/About.vue"]]);
export {
  About as default
};
