(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{86:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署")]),a("p",[t._v("下述的指南，将假定你将文档放置在项目的 "),a("code",[t._v("docs")]),t._v(" 目录中，并使用默认的构建输出位置。")]),a("h2",{attrs:{id:"github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub Pages")]),a("ol",[a("li",[a("p",[t._v("将 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 的 "),a("code",[t._v("base")]),t._v(" 设置成你仓库的名字，举个例子，如果你的仓库是 "),a("code",[t._v("https://github.com/foo/bar")]),t._v(", 部署的页面将会通过 "),a("code",[t._v("https://foo.github.io/bar")]),t._v(" 来访问，此时，你应该将 "),a("code",[t._v("base")]),t._v(" 设置为 "),a("code",[t._v('"/bar/"')]),t._v("。")])]),a("li",[a("p",[t._v("在你的项目中运行:")])])]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# 构建静态文件")]),t._v("\nvuepress build docs\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 切换到你的输出目录")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# push 到你仓库的 gh-pages 分支")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 将 <USERNAME>/<REPO> 替换成你的信息")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("USERNAME"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("REPO"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(".git master:gh-pages\n")])]),a("p",[t._v("你可以在你的持续集成的设置中，设置在每次 push 代码时自动运行上述脚本。")]),a("h2",{attrs:{id:"netlify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netlify","aria-hidden":"true"}},[t._v("#")]),t._v(" Netlify")]),a("ol",[a("li",[t._v("确保你已经有了构建你的文档的的 npm scripts：")])]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"build-docs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在 Netlify 中, 创建一个新的 Github 项目，并做一下设置:")])]),a("ul",[a("li",[a("strong",[t._v("Build Command:")]),a("code",[t._v("npm run build-docs")]),t._v(" 或者 "),a("code",[t._v("yarn build-docs")])]),a("li",[a("strong",[t._v("Publish directory:")]),a("code",[t._v("docs/.vuepress/dist")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("点击 deploy 按钮！")])])])}],!1,null,null,null);s.default=e.exports}}]);