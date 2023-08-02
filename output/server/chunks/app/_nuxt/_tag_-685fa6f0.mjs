import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { _ as _sfc_main$1 } from './Cell-0e21c6a7.mjs';
import { defineComponent, ref, withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { a as useRoute } from '../server.mjs';
import { q as queryContent } from './query-bf1c20aa.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import 'ufo';
import './index-b87ef431.mjs';
import 'date-fns';
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
  __name: "[tag]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const tag = route.params.tag;
    const queryResult = ref();
    queryResult.value = ([__temp, __restore] = withAsyncContext(() => queryContent().where({
      tags: {
        $contains: tag
      }
    }).find()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_cell = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-title mb-2em">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tags",
        class: "hover"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tags `);
          } else {
            return [
              createTextVNode(" Tags ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / ${ssrInterpolate(unref(tag))}</h1><ul><!--[-->`);
      ssrRenderList(unref(queryResult), (article) => {
        _push(ssrRenderComponent(_component_cell, {
          key: article._path,
          article
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (unref(queryResult).length === 0) {
        _push(`<h1 class="text-2xl text-center"> Not Found Any Document\u{1F617} </h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tags/[tag].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_tag_-685fa6f0.mjs.map
