(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{66:function(t,a,e){"use strict";e.r(a);var r=e(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"npm使用的几个技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm使用的几个技巧","aria-hidden":"true"}},[t._v("#")]),t._v(" npm使用的几个技巧")]),e("h2",{attrs:{id:"删除文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除文件")]),e("p",[t._v("想删除node_modules文件夹,有时候会提示需要administrator权限，但是物理上给文件夹管理员权限不仅不容易成功，\n而且操作繁琐，其实google了一下，发现rimraf指令来删除文件夹就好操作多了")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  npm install rimraf -g   // 全局安装rimraf\n\n  rimraf node_modules    // 使用rimraf删除对应的node_modules文件夹\n")])]),e("h2",{attrs:{id:"清楚缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清楚缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 清楚缓存")]),e("p",[t._v("npm安装依赖时，有时会失败，出现这样的问题")]),e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),e("p",[t._v("NPM ERR！Please try running this command again as root/Administrator.")])]),e("p",[t._v("然后安装依赖就会失败")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  npm cache clean -f  // 强制清除缓存\n\n  npm install         // 安装全部依赖\n")])]),e("p",[t._v("清除缓存，然后再安装就可以解决问题")])])}],!1,null,null,null);a.default=n.exports}}]);