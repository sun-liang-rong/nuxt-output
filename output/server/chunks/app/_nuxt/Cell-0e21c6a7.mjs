import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { f as formattedDate } from './index-b87ef431.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Cell",
  __ssrInlineRender: true,
  props: ["article"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/p${props.article._path}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li${ssrRenderAttr("title", props.article.title)} class="hover list-none mb-6 mt-2 flex flex-col md:gap-2 md:flex-row md:items-center"${_scopeId}><span class="text-lg"${_scopeId}>${ssrInterpolate(props.article.title)}</span><span class="text-sm op-70"${_scopeId}>${ssrInterpolate(unref(formattedDate)(props.article.date))}</span></li>`);
          } else {
            return [
              createVNode("li", {
                title: props.article.title,
                class: "hover list-none mb-6 mt-2 flex flex-col md:gap-2 md:flex-row md:items-center"
              }, [
                createVNode("span", { class: "text-lg" }, toDisplayString(props.article.title), 1),
                createVNode("span", { class: "text-sm op-70" }, toDisplayString(unref(formattedDate)(props.article.date)), 1)
              ], 8, ["title"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Cell-0e21c6a7.mjs.map
