import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { p as projectList } from '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-title mb-2em font-bold text-center"> \u9879\u76EE </h1><!--[-->`);
      ssrRenderList(unref(projectList), (series, index) => {
        _push(`<article slide-enter style="${ssrRenderStyle({ "--stagger": index + 1 })}"><div class="text-center mt-2em mb-1em text-gray-700:60" font-bold text-lg>${ssrInterpolate(series.name)}</div><div class="grid grid-cols-1 md:grid-cols-2 gap-1em"><!--[-->`);
        ssrRenderList(series.content, (project) => {
          _push(`<a${ssrRenderAttr("title", project.name)}${ssrRenderAttr("href", project.path)} target="_blank" class="flex items-center py-0.5em px-1em rounded-sm hover:bg-gray-400:10"><div class="hover w-full"><div class="text-lg">${ssrInterpolate(project.name)} <span class="text-sm op-50 i-icon-park-outline-efferent-three"></span></div><div class="text-sm op-70">${ssrInterpolate(project.desc)}</div></div></a>`);
        });
        _push(`<!--]--></div></article>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-49e18020.mjs.map
