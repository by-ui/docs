(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{245:function(t,a,s){"use strict";s.r(a);function e(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",[s("h1",[a._v("Rate 评分")]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("评分组件")]),a._v(" "),a._m(0),a._v(" "),s("p",[a._v("最简单的用法。")]),a._v(" "),s("demo-box",[s("div",{attrs:{slot:"demo"},slot:"demo"},[s("by-rate")],1),a._v(" "),s("div",{attrs:{slot:"source-code"},slot:"source-code"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a._v("    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("by-rate")]),a._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("by-rate")]),a._v(">")]),a._v("\n")])])])]),a._m(1),a._v(" "),s("p",[a._v("给评分组件加上文案展示。")]),a._v(" "),s("demo-box",[s("div",{attrs:{slot:"demo"},slot:"demo"},[s("by-rate",{attrs:{"show-text":!0},model:{value:a.value2,callback:function(t){a.value2=t},expression:"value2"}},[s("span",[a._v(a._s(a.value2)+" 星")])])],1),a._v(" "),s("div",{attrs:{slot:"source-code"},slot:"source-code"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("by-rate")]),a._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":show-text")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"true"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"value2"')]),a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("span")]),a._v(">")]),a._v("{{ value2 }} 星"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("span")]),a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("by-rate")]),a._v(">")]),a._v("\n")])])])]),a._m(2),a._v(" "),s("p",[a._v("可以将星星替换为其他图标。")]),a._v(" "),s("demo-box",[s("div",{attrs:{slot:"demo"},slot:"demo"},[s("by-rate",{attrs:{icon:"icon-heart-on"}})],1),a._v(" "),s("div",{attrs:{slot:"source-code"},slot:"source-code"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a._v("    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("by-rate")]),a._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("icon")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"icon-heart-on"')]),a._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("by-rate")]),a._v(">")]),a._v("\n")])])])]),a._m(3),a._v(" "),s("p",[a._v("支持选中半星。")]),a._v(" "),s("demo-box",[s("div",{attrs:{slot:"demo"},slot:"demo"},[s("by-rate",{attrs:{"allow-half":!0,"show-text":!0,value:a.valueHalfStar},on:{"on-change":a.onStarChange,"on-hover-change":a.onHoverChange}})],1),a._v(" "),s("div",{attrs:{slot:"source-code"},slot:"source-code"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("by-rate")]),a._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":allow-half")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"true"')]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":show-text")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"true"')]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"valueHalfStar"')]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("@on-change")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"onStarChange"')]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("@on-hover-change")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"onHoverChange"')]),a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("by-rate")]),a._v(">")]),a._v("\n")])])])]),a._m(4),a._v(" "),s("p",[a._v("只读，无法进行鼠标交互。")]),a._v(" "),s("demo-box",[s("div",{attrs:{slot:"demo"},slot:"demo"},[s("by-rate",{attrs:{"allow-half":!0,"show-text":!0,value:a.valueReadonly,disabled:!0}})],1),a._v(" "),s("div",{attrs:{slot:"source-code"},slot:"source-code"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("by-rate")]),a._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":allow-half")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"true"')]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":show-text")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"true"')]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"valueReadonly"')]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":disabled")]),a._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"true"')]),a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("by-rate")]),a._v(">")]),a._v("\n")])])])]),a._v(" "),a._m(5),a._v(" "),a._m(6),a._v(" "),a._m(7),a._v(" "),a._m(8),a._v(" "),a._m(9),a._v(" "),a._m(10)],1)}e._withStripped=!0;var r,v,n=s(1),l=s.n(n),_=s(0),o=(r=function(t,a){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)a.hasOwnProperty(s)&&(t[s]=a[s])})(t,a)},function(t,a){function s(){this.constructor=t}r(t,a),t.prototype=null===a?Object.create(a):(s.prototype=a.prototype,new s)}),c=function(t,a,s,e){var r,v=arguments.length,n=v<3?a:null===e?e=Object.getOwnPropertyDescriptor(a,s):e;if("object"===("undefined"==typeof Reflect?"undefined":l()(Reflect))&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,a,s,e);else for(var _=t.length-1;0<=_;_--)(r=t[_])&&(n=(v<3?r(n):3<v?r(a,s,n):r(a,s))||n);return 3<v&&n&&Object.defineProperty(a,s,n),n};function p(){var t=null!==v&&v.apply(this,arguments)||this;return t.value2=3,t.value1=2.5,t.valueHalfStar=1,t.valueReadonly=3,t}var h=(v=_.g,o(p,v),p.prototype.onStarChange=function(t){console.log(t)},p.prototype.onHoverChange=function(t){console.log(t)},p=c([_.a],p)),i=s(2),d=Object(i.a)(h,e,[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h2",{attrs:{id:"ji-chu-yong-fa"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('ji-chu-yong-fa')","aria-hidden":"true"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h2",{attrs:{id:"wen-an-zhan-xian"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('wen-an-zhan-xian')","aria-hidden":"true"}},[t._v("¶")]),t._v(" 文案展现")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h2",{attrs:{id:"qi-ta-tu-biao"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('qi-ta-tu-biao')","aria-hidden":"true"}},[t._v("¶")]),t._v(" 其他图标")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h2",{attrs:{id:"ban-xing"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('ban-xing')","aria-hidden":"true"}},[t._v("¶")]),t._v(" 半星")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h2",{attrs:{id:"zhi-du"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('zhi-du')","aria-hidden":"true"}},[t._v("¶")]),t._v(" 只读")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h2",{attrs:{id:"rate-can-shu"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('rate-can-shu')","aria-hidden":"true"}},[t._v("¶")]),t._v(" Rate 参数")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("count")]),t._v(" "),s("td",[t._v("star 总数")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("当前值")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("allow-half")]),t._v(" "),s("td",[t._v("是否允许选择半颗星")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])])]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[t._v("只读，无法进行交互")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])])]),t._v(" "),s("tr",[s("td",[t._v("icon")]),t._v(" "),s("td",[t._v("指定图标")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("icon-star")])])]),t._v(" "),s("tr",[s("td",[t._v("show-text")]),t._v(" "),s("td",[t._v("实现显示辅助文案")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h2",{attrs:{id:"rate-shi-jian"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('rate-shi-jian')","aria-hidden":"true"}},[t._v("¶")]),t._v(" Rate 事件")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("事件名称")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("返回值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("on-change")]),t._v(" "),s("td",[t._v("star 数目改变时触发")]),t._v(" "),s("td",[t._v("改变后的值")])]),t._v(" "),s("tr",[s("td",[t._v("on-hover-change")]),t._v(" "),s("td",[t._v("鼠标在 star 上移动导致数值变化时触发")]),t._v(" "),s("td",[t._v("改变后的值")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h2",{attrs:{id:"rate-slot"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('rate-slot')","aria-hidden":"true"}},[t._v("¶")]),t._v(" Rate slot")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-")]),t._v(" "),s("td",[t._v("自定义展示文案的内容")])])])])}],!1,null,null,null);d.options.__file="docs/markdown/rate.md";a.default=d.exports}}]);