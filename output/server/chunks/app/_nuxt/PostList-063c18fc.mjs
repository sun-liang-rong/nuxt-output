import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { a as useRoute, b as useRouter, s as subNavLinks } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Cell-0e21c6a7.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SubNav",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { path } = route;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex gap-1em mb-2em" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(subNavLinks), (item) => {
        _push(`<li class="${ssrRenderClass([unref(path) === item.path ? "text-deep font-bold" : "deep-hover", "cursor-pointer"])}"><span class="text-title">${ssrInterpolate(item.title)}</span></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostList",
  __ssrInlineRender: true,
  props: ["posts"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Cell = _sfc_main$2;
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.posts, (article, index) => {
        _push(`<!--[-->`);
        if (article.isMarked) {
          _push(`<div class="relative pointer-events-none select-none h-20" slide-enter style="${ssrRenderStyle({ "--stagger": index + 1 })}"><span class="text-8em font-bold op-15 absolute -top-0.2em -left-0.3em color-transparent text-stroke-2 text-stroke-hex-aaa">${ssrInterpolate(article.year)}</span></div>`);
        } else {
          _push(ssrRenderComponent(_component_Cell, {
            article,
            "slide-enter": "",
            style: { "--stagger": index + 1 }
          }, null, _parent));
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=PostList-063c18fc.mjs.map
