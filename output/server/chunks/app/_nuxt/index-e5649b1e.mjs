import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { q as queryContent } from './query-bf1c20aa.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'unhead';
import '@unhead/shared';
import '@unhead/ssr';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
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
import './utils-893a42d4.mjs';
import './ssr-07e22ebd.mjs';
import './preview-541dbe89.mjs';
import 'cookie-es';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const contentQuery = ([__temp, __restore] = withAsyncContext(() => queryContent().find()), __temp = await __temp, __restore(), __temp);
    const tagsContent = contentQuery.filter((i) => i.tags).filter((i) => {
      const regex = /(readme|about)\.md$/i;
      return !regex.test(i._file);
    }).reduce((counts, post) => {
      for (const tag of post.tags) {
        if (counts[tag])
          counts[tag]++;
        else
          counts[tag] = 1;
      }
      return counts;
    }, {});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><h1 class="text-title mb-2em font-bold"> \u6807\u7B7E </h1><ul class="flex gap-1em flex-wrap"><!--[-->`);
      ssrRenderList(unref(tagsContent), (value, key, index) => {
        _push(`<li slide-enter style="${ssrRenderStyle({ "--stagger": index + 1 })}" class="px-2 bg-gray-400:20 rd-1">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/tags/${key}`,
          class: "flex gap-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="hover"${_scopeId}>#${ssrInterpolate(key)}</span><span${_scopeId}>${ssrInterpolate(value)}</span>`);
            } else {
              return [
                createVNode("span", { class: "hover" }, "#" + toDisplayString(key), 1),
                createVNode("span", null, toDisplayString(value), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tags/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-e5649b1e.mjs.map
