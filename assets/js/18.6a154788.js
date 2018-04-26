(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{74:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),e("p",[t._v("如果你只是想随便用下 VuePress，你可以在全局安装它：")]),t._m(3),t._m(4),e("p",[t._v("如果你想要在一个已有项目中维护文档，就应该将 VuePress 安装为本地依赖。此设置还允许你使用 CI 或 Netlify 服务，在推送时自动部署。")]),t._m(5),t._m(6),t._m(7),t._m(8),e("p",[t._v("你现在就可以开始编写文档了：")]),t._m(9),e("p",[t._v("要生成静态资源，请运行：")]),t._m(10),e("p",[t._v("默认情况下，构建的文件会位于 "),e("code",[t._v(".vuepress/dist")]),t._v(" 中，该文件可以通过 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中的 "),e("code",[t._v("dest")]),t._v(" 字段进行配置。构建的文件可以部署到任何静态文件服务器。关于如何部署到一些常用服务，请参考 "),e("router-link",{attrs:{to:"./deploy.html"}},[t._v("部署指南")]),t._v("。")],1),e("hr"),t._m(11),e("hr")])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"起步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起步","aria-hidden":"true"}},[this._v("#")]),this._v(" 起步")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("兼容性注意事项")]),s("p",[this._v("VuePress 要求 Node.js >= 8。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"全局安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局安装")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# 全局安装")]),t._v("\nyarn global add vuepress "),e("span",{attrs:{class:"token comment"}},[t._v("# 或 npm install -g vuepress")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 创建一个 markdown 文件")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'# Hello VuePress'")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" README.md\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 开始编写文档")]),t._v("\nvuepress dev\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 构建")]),t._v("\nvuepress build\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在已有项目中安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在已有项目中安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 在已有项目中安装")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# 安装为本地依赖项")]),t._v("\nyarn add -D vuepress "),e("span",{attrs:{class:"token comment"}},[t._v("# 或 npm install -D vuepress")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 创建一个 docs 目录")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" docs\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 创建一个 markdown 文件")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'# Hello VuePress'")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" docs/README.md\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),s("p",[this._v("It is currently recommended to use "),s("a",{attrs:{href:"https://yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Yarn")]),this._v(" instead of npm when installing VuePress into an existing project that has webpack 3.x as a dependency. Npm fails to generate the correct dependency tree in this case.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后，给 "),s("code",[this._v("package.json")]),this._v(" 添加一些 scripts 脚本：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"docs:dev"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"docs:build"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn docs:dev "),s("span",{attrs:{class:"token comment"}},[this._v("# 或 npm run docs:dev")]),this._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn docs:build "),s("span",{attrs:{class:"token comment"}},[this._v("# 或 npm run docs:build")]),this._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("原文："),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("https://vuepress.vuejs.org/guide/getting-started.html")])])])}],!1,null,null,null);s.default=a.exports}}]);