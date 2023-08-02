import { _ as _sfc_main$1, a as _sfc_main$2 } from './PostList-063c18fc.mjs';
import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { g as getIncludedYearPosts } from './index-b87ef431.mjs';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
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
import './Cell-0e21c6a7.mjs';
import './nuxt-link-563b35af.mjs';
import './query-bf1c20aa.mjs';
import './utils-893a42d4.mjs';
import './ssr-07e22ebd.mjs';
import './preview-541dbe89.mjs';
import 'cookie-es';
import 'date-fns';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "life",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const posts = ([__temp, __restore] = withAsyncContext(() => getIncludedYearPosts("life")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_sub_nav = _sfc_main$1;
      const _component_post_list = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_sub_nav, null, null, _parent));
      _push(ssrRenderComponent(_component_post_list, { posts: unref(posts) }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/life.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=life-f0602065.mjs.map
