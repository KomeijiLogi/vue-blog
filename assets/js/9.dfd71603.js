(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{83:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),r("p",[t._v("VuePress 由两部分组成：一部分是支持用 Vue 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题。它的诞生初衷是为了支持 Vue 及其子项目的文档需求。")]),r("p",[t._v("每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。")]),t._m(1),t._m(2),t._m(3),t._m(4),r("ul",[r("li",[t._v("为技术文档而优化的 "),r("router-link",{attrs:{to:"./markdown.html"}},[t._v("内置 Markdown 拓展")])],1),r("li",[r("router-link",{attrs:{to:"./using-vue.html"}},[t._v("在 Markdown 文件中使用 Vue 组件的能力")])],1),r("li",[r("router-link",{attrs:{to:"./custom-themes.html"}},[t._v("Vue 驱动的自定义主题系统")])],1),r("li",[t._v("自动生成 Service Worker")]),r("li",[t._v("Google Analytics 集成")]),r("li",[t._v("多语言支持")]),t._m(5)]),t._m(6),r("p",[t._v("VuePress 仍然处于开发中，这里有一些目前还不支持、但已经在计划中的特性：")]),t._m(7),r("p",[t._v("我们欢迎你为 VuePress 的开发作出贡献。")]),t._m(8),t._m(9),r("p",[t._v("VuePress 能做的事情，Nuxt 理论上确实能够胜任，但 Nuxt 是为构建应用程序而生的，而 VuePress 则专注在以内容为中心的静态网站上，同时提供了一些为技术文档定制的开箱即用的特性。")]),t._m(10),r("p",[t._v("这两个项目同样都是基于 Vue，然而它们都是完全的运行时驱动，因此对 SEO 不够友好。如果你并不关注 SEO，同时也不想安装大量依赖，它们仍然是非常好的选择！")]),t._m(11),r("p",[t._v("Hexo 一直驱动着 Vue 的文档 —— 事实上，在把我们的主站从 Hexo 迁移到 VuePress 之前，我们可能还有很长的路要走。Hexo 最大的问题在于他的主题系统太过于静态以及过度地依赖纯字符串，而我们十分希望能够好好地利用 Vue 来处理我们的布局和交互，同时，Hexo 的 Markdown 渲染的配置也不是最灵活的。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"它是如何工作的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的？","aria-hidden":"true"}},[this._v("#")]),this._v(" 它是如何工作的？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("事实上，一个 VuePress 网站是一个由 "),e("a",{attrs:{href:"http://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Vue")]),this._v("、"),e("a",{attrs:{href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"}},[this._v("Vue Router")]),this._v(" 和 "),e("a",{attrs:{href:"http://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[this._v("webpack")]),this._v(" 驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 "),e("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Nuxt")]),this._v(" 的 "),e("code",[this._v("nuxt generate")]),this._v(" 命令，以及其他的一些项目，比如 "),e("a",{attrs:{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Gatsby")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[this._v("#")]),this._v(" 特性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("默认主题包含：\n"),e("ul",[e("li",[this._v("响应式布局")]),e("li",[this._v("可选的主页")]),e("li",[this._v("简洁的开箱即用的标题搜索")]),e("li",[this._v("可以自定义的导航栏（navbar）和侧边栏（sidebar）")]),e("li",[this._v("自动生成的 GitHub 链接和页面的编辑链接")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"todo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#todo","aria-hidden":"true"}},[this._v("#")]),this._v(" Todo")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Algolia DocSearch 的集成")]),e("li",[this._v("博客系统")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"为什么不是"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么不是...?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nuxt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nuxt","aria-hidden":"true"}},[this._v("#")]),this._v(" Nuxt")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"docsify-docute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docsify-docute","aria-hidden":"true"}},[this._v("#")]),this._v(" Docsify / Docute")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"hexo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hexo","aria-hidden":"true"}},[this._v("#")]),this._v(" Hexo")])}],!1,null,null,null);e.default=a.exports}}]);