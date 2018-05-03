(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{67:function(n,e,s){"use strict";s.r(e);var t=s(0),i=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"package-json参数解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#package-json参数解析","aria-hidden":"true"}},[this._v("#")]),this._v(" package.json参数解析")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{\n    *name:"",\n            //---包名---\n            //可包含：小写的字母、数字、.、_、-，禁止出现空格\n            //包名是唯一的(npm库里的包名)\n    *description:"",\n            //---该包的简介---\n    *version:"",\n            //---版本号---\n            //格式 xx.xx.xx\n    *keywords:"",\n            //---关键词数组---\n            //可被npm库中搜索到\n    maintainters:"",\n            //---包维护者列表---\n            //示例:[{"name":xx,"email":"xx@gmail.com","web":"http://xx.com"},{...}]\n    contributors:"",\n            //---贡献者列表---\n            //第一个是包作者本人，格式同上面包维护者相同\n    bus:"",\n            //---可反馈bug的url或者email\n    lincenses:"",\n            //---当前包所使用的许可证列表---\n            //表示本包在哪些许可证下可以用\n            //格式:[{"type":xx,"url":"http://xx.com"}]\n    *repositories:"",\n            //---源代码的托管位置---\n    *dependencies:"",\n            //---当前包所需的依赖包---\n    homepage:"",\n            //当前包的网站位置\n    os:"",\n            //---支持的操作系统列表---\n            //一般为空（基本都支持）\n    cpu:"", \n            //---支持的CPU架构列表---\n            //一般为空（基本都支持）\n            //有效的值：arm,mips,ppc,sparc,x86,x86_64.\n    *engine:"",\n            //---支持的javascript引擎列表---\n            //一般为空（基本都支持）\n            //有效的值：ejs,mips,flusspferd,gpsee,jsc,spidermonkey,narwhal,node,v8.\n    builtin:"",\n            //---标志当前包是否内建在底层系统的标准组件--- \n            //不懂 没用到\n    directories:"",\n            //---包目录说明---\n    implements:"",\n            //---实现规范的列表---\n            //标志当前包实现了CommonJs的哪些规范\n            //没用过。。\n    *scripts："",\n            //---脚本说明对象---\n            //用来安装、编译、测试、卸载包\n            //可是一段命令或者js文件\n            /*\n            "scripts": {\n                "precommit": "eslint --cache --fix ./js/ ./common",\n                "build_clear": "rimraf -rf build&& mkdir build",\n                "start": "cross-env NODE_ENV=development node --max-old-space-size=8192,\n                "test":"test.js"\n            }\n            */\n    *author："",\n            //---包作者---\n    *bin:"",\n            //---包可作为命令行工具使用---\n            //配置好bin字段后，通过npm install <package_name> -g 将脚本添加到执行路径中，之后可以在命令行中直接执行。\n            //类似全局安装了webpack~\n    *main:"",\n            //---入口文件---\n            //如果不存在这个字段，会自动按下面顺序查找:index.js,index.node,index.json\n    *devDenpendencies:""\n            //---只在开发时需要的依赖包---\n}            \n')])])])}],!1,null,null,null);e.default=i.exports}}]);