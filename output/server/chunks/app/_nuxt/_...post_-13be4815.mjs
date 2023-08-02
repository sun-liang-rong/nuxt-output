import _sfc_main$6 from './ContentDoc-083859bd.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { f as formattedDate } from './index-b87ef431.mjs';
import _sfc_main$7 from './ContentRenderer-1a69baef.mjs';
import { a as useRoute, _ as _export_sfc } from '../server.mjs';
import Giscus from '@giscus/vue';
import 'ufo';
import './ContentQuery-79dea3e0.mjs';
import './asyncData-20625161.mjs';
import 'ohash';
import './query-bf1c20aa.mjs';
import './utils-893a42d4.mjs';
import './ssr-07e22ebd.mjs';
import './preview-541dbe89.mjs';
import 'cookie-es';
import 'h3';
import 'destr';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'unhead';
import '@unhead/shared';
import '@unhead/ssr';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'http-graceful-shutdown';
import './ContentRendererMarkdown-91b55749.mjs';
import 'property-information';
import 'date-fns';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DocBack",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pr-2em xl:absolute xl:top-0 xl:right-full xl:h-full" }, _attrs))}><div class="sticky top-14 w-8em"><div class="cursor-pointer"><div class="i-icon-park-outline-left-small-up"></div> Back </div><div class="hidden xl:block cursor-pointer"><div class="i-icon-park-outline-to-top-one"></div> To Top </div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/doc/DocBack.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DocTitle",
  __ssrInlineRender: true,
  props: ["article"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>${ssrInterpolate(props.article.title)}</h1><div class="op-50 mb-4em"><div>${ssrInterpolate(unref(formattedDate)(props.article.date))}</div><div class="flex gap-2"><!--[-->`);
      ssrRenderList(props.article.tags, (tag) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: tag,
          to: `/tags/${tag}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` #${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(" #" + toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/doc/DocTitle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-6em flex items-center" }, _attrs))}><div class="bg-gray-300:50 h-1px w-full"></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/doc/DocFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DocRender",
  __ssrInlineRender: true,
  props: ["article"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DocTitle = _sfc_main$4;
      const _component_ContentRenderer = _sfc_main$7;
      const _component_doc_footer = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_DocTitle, {
        article: props.article
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContentRenderer, {
        value: props.article
      }, null, _parent));
      _push(ssrRenderComponent(_component_doc_footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/doc/DocRender.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DocToc",
  __ssrInlineRender: true,
  props: ["toc"],
  setup(__props) {
    const props = __props;
    const currentId = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute top-0 left-full h-full pl-2em hidden xl:block" }, _attrs))}><nav class="sticky top-14 w-25em"><ul><!--[-->`);
      ssrRenderList(props.toc.links, (h2, h2Index) => {
        _push(`<li class="list-none relative"><span class="flex items-center">`);
        if (h2.id === unref(currentId)) {
          _push(`<span class="text-1em absolute right-full i-icon-park-outline-right-small"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<a${ssrRenderAttr("href", `#${h2.id}`)}>${ssrInterpolate(h2.text)}</a></span>`);
        if (h2.children && h2.children.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(h2.children, (h3, h3Index) => {
            _push(`<ul><li class="list-none relative flex items-center">`);
            if (h3.id === unref(currentId)) {
              _push(`<div class="absolute right-full i-icon-park-outline-right-small"></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<a${ssrRenderAttr("href", `#${h3.id}`)}>${ssrInterpolate(h3.text)}</a></li></ul>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/doc/DocToc.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...post]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const post = route.params.post;
    const path = post.join("/");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = _sfc_main$6;
      const _component_doc_back = _sfc_main$5;
      const _component_doc_render = _sfc_main$2;
      const _component_doc_toc = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "prose relative slide-enter-content" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ContentDoc, { path: unref(path) }, {
        default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_doc_back, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_doc_render, { article: doc }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_doc_toc, {
              toc: doc.body.toc
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Giscus), {
              repo: "chansee97/nuxt-blog",
              "repo-id": "R_kgDOJZM7Qg",
              category: "comments",
              "category-id": "DIC_kwDOJZM7Qs4CW1GZ",
              mapping: "title",
              term: "Welcome to my blog!",
              "reactions-enabled": "1",
              "emit-metadata": "1",
              "input-position": "top",
              theme: "light_tritanopia",
              lang: "zh-CN",
              loading: "lazy"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_doc_back),
              createVNode(_component_doc_render, { article: doc }, null, 8, ["article"]),
              createVNode(_component_doc_toc, {
                toc: doc.body.toc
              }, null, 8, ["toc"]),
              createVNode(unref(Giscus), {
                repo: "chansee97/nuxt-blog",
                "repo-id": "R_kgDOJZM7Qg",
                category: "comments",
                "category-id": "DIC_kwDOJZM7Qs4CW1GZ",
                mapping: "title",
                term: "Welcome to my blog!",
                "reactions-enabled": "1",
                "emit-metadata": "1",
                "input-position": "top",
                theme: "light_tritanopia",
                lang: "zh-CN",
                loading: "lazy"
              })
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-center"${_scopeId}> Document is empty\u{1F605} </h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-center" }, " Document is empty\u{1F605} ")
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-center"${_scopeId}> Not Found Any Document\u{1F617} </h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-center" }, " Not Found Any Document\u{1F617} ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/p/[...post].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...post_-13be4815.mjs.map
