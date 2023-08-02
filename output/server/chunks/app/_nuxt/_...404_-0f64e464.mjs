import _sfc_main$1 from './ContentDoc-083859bd.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
import './ContentRenderer-1a69baef.mjs';
import './ContentRendererMarkdown-91b55749.mjs';
import 'destr';
import 'scule';
import 'property-information';
import './preview-541dbe89.mjs';
import 'cookie-es';
import 'h3';
import 'ohash';
import './ssr-07e22ebd.mjs';
import './ContentQuery-79dea3e0.mjs';
import './asyncData-20625161.mjs';
import './query-bf1c20aa.mjs';
import './utils-893a42d4.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = _sfc_main$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "prose" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ContentDoc, {
    path: "404",
    class: "slide-enter-content"
  }, null, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...404].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____404_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ____404_ as default };
//# sourceMappingURL=_...404_-0f64e464.mjs.map
