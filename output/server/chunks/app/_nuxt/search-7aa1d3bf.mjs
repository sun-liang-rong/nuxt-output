import { _ as _sfc_main$1 } from './Cell-0e21c6a7.mjs';
import { defineComponent, ref, watch, unref, useSSRContext } from 'vue';
import { q as queryContent } from './query-bf1c20aa.mjs';
import { ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { u as useDebounceFn } from './index-370c9a62.mjs';
import './nuxt-link-563b35af.mjs';
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
import './index-b87ef431.mjs';
import 'date-fns';
import './utils-893a42d4.mjs';
import './ssr-07e22ebd.mjs';
import './preview-541dbe89.mjs';
import 'cookie-es';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    const searchValue = ref("");
    const queryResult = ref();
    const getQueryResult = useDebounceFn(async () => {
      if (!searchValue.value) {
        queryResult.value = [];
        return;
      }
      queryResult.value = await queryContent().where({
        $or: [
          { title: { $regex: new RegExp(`.*${searchValue.value}.*`, "i") } },
          {
            description: {
              $regex: new RegExp(`.*${searchValue.value}.*`, "i")
            }
          },
          {
            tags: {
              $contains: searchValue.value
            }
          }
        ]
      }).find();
    }, 600);
    watch(searchValue, getQueryResult);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cell = _sfc_main$1;
      _push(`<!--[--><h1 class="text-title mb-2em font-bold"> \u641C\u641C </h1><div class="slide-enter-content"><input${ssrRenderAttr("value", unref(searchValue))} placeholder="Search post title / description / tag" class="search-input mb-2em"><ul><!--[-->`);
      ssrRenderList(unref(queryResult), (article, index) => {
        _push(ssrRenderComponent(_component_cell, {
          key: article._path,
          article,
          "slide-enter": "",
          style: { "--stagger": index + 1 }
        }, null, _parent));
      });
      _push(`<!--]--></ul></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-7aa1d3bf.mjs.map
