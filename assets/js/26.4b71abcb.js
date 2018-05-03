(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{68:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"图片防盗链以及不同源的数据访问解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片防盗链以及不同源的数据访问解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片防盗链以及不同源的数据访问解决方案")]),a("h2",{attrs:{id:"图片防盗链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片防盗链","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片防盗链")]),a("p",[t._v("图片防盗链技术应用很广泛，其中一种方案就是验证请求request header 中host与Referer的一致性\n如果不一致，会返回403 或者返回一张替代的图片，比如百度就会返回一张希望工程的图，\n另一种方案就是写进cache里，如果通过官方客户端访问会有对应的cache，而通过第三方的访问由于浏览器中\n没有对应cache，缺乏必要的信息，就不会返回200，而会返回403，知乎就是这么操作的")]),a("p",[t._v("解决方案是使用 https://images.weserv.nl/这个网址的功能来间接访问图片\n具体方案为将url重新替换成上面连接")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("return url.replace(/http\\w{0,1}:\\/\\/p/g, 'https://images.weserv.nl/?url=p');\n")])]),a("h2",{attrs:{id:"不同源的数据访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同源的数据访问","aria-hidden":"true"}},[t._v("#")]),t._v(" 不同源的数据访问")]),a("p",[t._v("1.jsonp 这个需要后台提供回调函数，是需要前后端配合，而且只支持get操作，\n如果开发的是第三方的话，这个方案基本可以不考虑")]),a("p",[t._v("2.CORS 这套方案对老旧浏览器支持率不高，根据维基百科相关词条介绍，\n可以理解为jsonp的现代版，支持更多操作，不在仅仅是get一种操作")]),a("p",[t._v("3.服务器代理，通过在服务器编程，实现接口代理，将程序访问api通过服务器转成外网地址的api，\n比如说前端ajax访问个api，这个api在服务器中代理为https://xxxxx.xxxx.com/api4/ 那么实际上访问的就是代理的地址，\n这样就可以不跨域进行数据的访问")]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("iframe 限制的跨域数据访问")])]),a("h2",{attrs:{id:"vue开发下的跨域访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue开发下的跨域访问","aria-hidden":"true"}},[t._v("#")]),t._v(" vue开发下的跨域访问")]),a("ol",[a("li",[a("p",[t._v("可以通过nginx服务器代理")])]),a("li",[a("p",[t._v("vue-cli提供了proxyTable，实际上就是将访问的接口进行代理，代理到真正的接口上")])])]),a("p",[t._v("for example:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("proxyTable: {\n  '/list': {\n    target: 'http://api.xxxxxxxx.com',\n    pathRewrite: {\n      '^/list': '/list'\n    }\n  }\n}\n")])])])}],!1,null,null,null);e.default=s.exports}}]);