(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{78:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),n("p",[t._v("标题会自动获取锚链接。可以使用 "),n("router-link",{attrs:{to:"../config/#markdownanchor"}},[n("code",[t._v("markdown.anchor")])]),t._v("  选项来配置锚点的渲染。")],1),t._m(2),n("ul",[n("li",[t._m(3),n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),n("li",[n("router-link",{attrs:{to:"../config/#markdown"}},[t._v("配置 Markdown")])],1)])]),t._m(4)]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),n("p",[t._v("🎉 💯")]),t._m(20),t._m(21),t._m(22),t._m(23),n("p"),t._m(24),n("p"),n("p",[t._v("可以使用 "),n("router-link",{attrs:{to:"../config/#markdowntoc"}},[n("code",[t._v("markdown.toc")])]),t._v(" 选项配置 TOC 的渲染。")],1),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),n("p",[t._v("你还可以自定义块的标题：")]),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),n("hr"),t._m(42),n("hr")])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"markdown-拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-拓展","aria-hidden":"true"}},[this._v("#")]),this._v(" Markdown 拓展")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"标题锚-header-anchors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标题锚-header-anchors","aria-hidden":"true"}},[this._v("#")]),this._v(" 标题锚(header anchors)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"链接-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接-links","aria-hidden":"true"}},[this._v("#")]),this._v(" 链接(links)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以 "),s("code",[this._v(".md")]),this._v(" 或 "),s("code",[this._v(".html")]),this._v(" 结尾的入站链接转换为 "),s("code",[this._v("<router-link>")]),this._v(" 进行 SPA 导航。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("出站链接自动获取 "),s("code",[this._v('target="_blank"')]),this._v(":")]),s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[this._v("vuejs.org")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[this._v("VuePress on GitHub")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"yaml-front-matter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml-front-matter","aria-hidden":"true"}},[this._v("#")]),this._v(" YAML Front Matter")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("支持 "),s("a",{attrs:{href:"https://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"}},[this._v("YAML Front Matter")]),this._v(" 开箱即用")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),n("span",{attrs:{class:"token key atrule"}},[t._v("title")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging Like a Hacker\n"),n("span",{attrs:{class:"token key atrule"}},[t._v("lang")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("数据在页面的其余部分也可以使用，包括所有自定义和主题组件，通过 "),s("code",[this._v("$page")]),this._v(" 访问。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("title")]),this._v(" 和 "),s("code",[this._v("lang")]),this._v(" 会在当前页面自动设置。另外，你可以指定额外的 meta 标签进行注入：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),n("span",{attrs:{class:"token key atrule"}},[t._v("meta")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" description\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keywords\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" super duper SEO\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"github-样式表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-样式表","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub 样式表")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("Tables")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("Are")]),n("th",{staticStyle:{"text-align":"right"}},[t._v("Cool")])])]),n("tbody",[n("tr",[n("td",[t._v("col 3 is")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("right-aligned")]),n("td",{staticStyle:{"text-align":"right"}},[t._v("$1600")])]),n("tr",[n("td",[t._v("col 2 is")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("centered")]),n("td",{staticStyle:{"text-align":"right"}},[t._v("$12")])]),n("tr",[n("td",[t._v("zebra stripes")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("are neat")]),n("td",{staticStyle:{"text-align":"right"}},[t._v("$1")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"emoji"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emoji","aria-hidden":"true"}},[this._v("#")]),this._v(" Emoji")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(":tada: :100:\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"目录-table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录-table-of-contents","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录(table of contents)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("[[toc]]\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#标题锚-header-anchors"}},[t._v("标题锚(header anchors)")])]),n("li",[n("a",{attrs:{href:"#链接-links"}},[t._v("链接(links)")])]),n("li",[n("a",{attrs:{href:"#yaml-front-matter"}},[t._v("YAML Front Matter")])]),n("li",[n("a",{attrs:{href:"#github-样式表"}},[t._v("GitHub 样式表")])]),n("li",[n("a",{attrs:{href:"#emoji"}},[t._v("Emoji")])]),n("li",[n("a",{attrs:{href:"#目录-table-of-contents"}},[t._v("目录(table of contents)")])]),n("li",[n("a",{attrs:{href:"#自定义容器-custom-containers"}},[t._v("自定义容器(custom containers)")])]),n("li",[n("a",{attrs:{href:"#在代码块中高亮显示行-line-highlighting-in-code-blocks"}},[t._v("在代码块中高亮显示行(line highlighting in code blocks)")])]),n("li",[n("a",{attrs:{href:"#高级配置-advanced-configuration"}},[t._v("高级配置(advanced configuration)")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义容器-custom-containers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器-custom-containers","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义容器(custom containers)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),s("p",[this._v("This is a tip")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),s("p",[this._v("This is a warning")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),s("p",[this._v("This is a dangerous thing")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("::: danger STOP\nDanger zone, do not proceed\n:::\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("STOP")]),s("p",[this._v("Danger zone, do not proceed")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在代码块中高亮显示行-line-highlighting-in-code-blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在代码块中高亮显示行-line-highlighting-in-code-blocks","aria-hidden":"true"}},[this._v("#")]),this._v(" 在代码块中高亮显示行(line highlighting in code blocks)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("``` js{4}\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{attrs:{class:"highlighted-line"}},[t._v("      msg"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Highlighted!'")])]),t._v("    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"高级配置-advanced-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级配置-advanced-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" 高级配置(advanced configuration)")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("VuePress 使用 "),n("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it")]),t._v("作为 markdwon 渲染器。上面的许多扩展都是通过定制插件实现的。你可以使用 "),n("code",[t._v(".vuepress/config.js")]),t._v(" 中的 "),n("code",[t._v("markdown")]),t._v(" 选项进一步自定义 "),n("code",[t._v("markdown-it")]),t._v(" 实例：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// markdown-it-anchor 的选项")]),t._v("\n    anchor"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" permalink"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// markdown-it-toc 的选项")]),t._v("\n    toc"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" includeLevel"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    config"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" md "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 使用更多 markdown-it 插件！")]),t._v("\n      md"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("原文："),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("https://vuepress.vuejs.org/guide/markdown.html")])])])}],!1,null,null,null);s.default=e.exports}}]);