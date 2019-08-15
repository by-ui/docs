(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{158:function(s,t,a){"use strict";a.r(t);function r(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("Message 全局提示")]),t._v(" "),a("hr"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("基础用法")]),t._v(" "),a("p",[t._v("四种类型的消息提示")]),t._v(" "),a("demo-box",[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("by-button",{on:{click:function(s){return t.handleClick("info")}}},[t._v("Info")]),t._v(" "),a("by-button",{on:{click:function(s){return t.handleClick("success")}}},[t._v("Success")]),t._v(" "),a("by-button",{on:{click:function(s){return t.handleClick("warning")}}},[t._v("Warning")]),t._v(" "),a("by-button",{on:{click:function(s){return t.handleClick("error")}}},[t._v("Error")])],1),t._v(" "),a("div",{attrs:{slot:"source-code"},slot:"source-code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"handleClick('info')\"")]),t._v(">")]),t._v("Info"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"handleClick('success')\"")]),t._v(">")]),t._v("Success"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"handleClick('warning')\"")]),t._v(">")]),t._v("Warning"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"handleClick('error')\"")]),t._v(">")]),t._v("Error"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      handleClick (type) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (type === "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'info'")]),t._v(") {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$message.info("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是一条提示信息这是一条提示信息这是一条提示信息这是一条提示信息这是一条提示信息'")]),t._v(")\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (type === "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'success'")]),t._v(") {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$message.success("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是一条成功信息'")]),t._v(")\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (type === "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'warning'")]),t._v(") {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$message.warning("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是一条警告信息'")]),t._v(")\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (type === "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'error'")]),t._v(") {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$message.error("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是一条错误信息'")]),t._v(")\n        }\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),a("h2",[t._v("修改延时")]),t._v(" "),t._m(4),t._v(" "),a("demo-box",[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("by-button",{on:{click:t.changeDuration}},[t._v("修改延时")])],1),t._v(" "),a("div",{attrs:{slot:"source-code"},slot:"source-code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"changeDuration"')]),t._v(">")]),t._v("修改延时"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      changeDuration () {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$message.info({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是一条提示信息，10s 后自动关闭'")]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("duration")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10000")]),t._v("\n        })\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),a("h2",[t._v("加载中")]),t._v(" "),t._m(5),t._v(" "),a("demo-box",[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("by-button",{on:{click:t.showLoading}},[t._v("显示加载中...")])],1),t._v(" "),a("div",{attrs:{slot:"source-code"},slot:"source-code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"showLoading"')]),t._v(">")]),t._v("显示加载中..."),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      showLoading () {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" loading = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$message.loading({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'加载中...'")]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("duration")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("\n        })\n        setTimeout(loading, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3000")]),t._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),a("h2",[t._v("单独引用")]),t._v(" "),t._m(6),t._v(" "),a("demo-box",[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("by-button",{on:{click:function(s){return t.handleImportClick("info")}}},[t._v("Info")]),t._v(" "),a("by-button",{on:{click:function(s){return t.handleImportClick("success")}}},[t._v("Success")]),t._v(" "),a("by-button",{on:{click:function(s){return t.handleImportClick("warning")}}},[t._v("Warning")]),t._v(" "),a("by-button",{on:{click:function(s){return t.handleImportClick("error")}}},[t._v("Error")])],1),t._v(" "),a("div",{attrs:{slot:"source-code"},slot:"source-code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"handleImportClick('info')\"")]),t._v(">")]),t._v("Info"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"handleImportClick('success')\"")]),t._v(">")]),t._v("Success"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"handleImportClick('warning')\"")]),t._v(">")]),t._v("Warning"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"handleImportClick('error')\"")]),t._v(">")]),t._v("Error"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-button")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      handleImportClick (type) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (type === "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'info'")]),t._v(") {\n          Message.info("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是一条提示信息这是一条提示信息这是一条提示信息这是一条提示信息这是一条提示信息'")]),t._v(")\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (type === "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'success'")]),t._v(") {\n          Message.success("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是一条成功信息'")]),t._v(")\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (type === "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'warning'")]),t._v(") {\n          Message.warning("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是一条警告信息'")]),t._v(")\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (type === "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'error'")]),t._v(") {\n          Message.error("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是一条错误信息'")]),t._v(")\n        }\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),a("h2",[t._v("Message 参数")]),t._v(" "),t._m(7)],1)}r._withStripped=!0;var e,n,_=a(1),l=a.n(_),v=a(0),p=a(85),c=(e=function(s,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,t){s.__proto__=t}||function(s,t){for(var a in t)t.hasOwnProperty(a)&&(s[a]=t[a])})(s,t)},function(s,t){function a(){this.constructor=s}e(s,t),s.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),o=function(s,t,a,r){var e,n=arguments.length,_=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===("undefined"==typeof Reflect?"undefined":l()(Reflect))&&"function"==typeof Reflect.decorate)_=Reflect.decorate(s,t,a,r);else for(var v=s.length-1;0<=v;v--)(e=s[v])&&(_=(n<3?e(_):3<n?e(t,a,_):e(t,a))||_);return 3<n&&_&&Object.defineProperty(t,a,_),_};function i(){return null!==n&&n.apply(this,arguments)||this}var h=(n=v.e,c(i,n),i.prototype.handleClick=function(s){"info"===s?this.$message.info("这是一条提示信息这是一条提示信息这是一条提示信息这是一条提示信息这是一条提示信息"):"success"===s?this.$message.success("这是一条成功信息"):"warning"===s?this.$message.warning("这是一条警告信息"):"error"===s&&this.$message.error("这是一条错误信息")},i.prototype.handleImportClick=function(s){"info"===s?p.Message.info("这是一条提示信息这是一条提示信息这是一条提示信息这是一条提示信息这是一条提示信息"):"success"===s?p.Message.success("这是一条成功信息"):"warning"===s?p.Message.warning("这是一条警告信息"):"error"===s&&p.Message.error("这是一条错误信息")},i.prototype.changeDuration=function(){this.$message.info({message:"这是一条提示信息，10s 后自动关闭",duration:1e4})},i.prototype.showLoading=function(){var s=this.$message.loading({message:"加载中...",duration:0});setTimeout(s,3e3)},i.prototype.mounted=function(){console.log(p.Message)},i=o([v.a],i)),d=a(2),g=Object(d.a)(h,r,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("相比 "),a("code",{pre:!0},[s._v("Notification")]),s._v("，"),a("code",{pre:!0},[s._v("Message")]),s._v(" 更轻量，居中显示在页面顶部，用于展示全局消息，例如操作的反馈信息")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("提供消息、成功、错误、警告等反馈提示")]),s._v(" "),a("li",[s._v("在顶部居中显示，并自动消失，是一种不打断用户操作的轻量级提示")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("我们在 "),a("code",{pre:!0},[s._v("Vue.prototype")]),s._v(" 中添加了全局对象 "),a("code",{pre:!0},[s._v("$message")]),s._v("，我们可以直接通过 "),a("code",{pre:!0},[s._v("this.$message")]),s._v(" 操作实例")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("code",{pre:!0},[s._v("this.$message(config)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("this.$message.info(config)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("this.$message.success(config)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("this.$message.warning(config)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("this.$message.error(config)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("this.$message.loading(config)")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("提示默认的显示时长为 "),a("code",{pre:!0},[s._v("3s")]),s._v("，可传递 "),a("code",{pre:!0},[s._v("duration")]),s._v(" 来自定义时长")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{pre:!0},[s._v("this.$message.loading")]),s._v(" 返回关闭方法，可用于手动关闭提示框")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("通过 "),a("code",{pre:!0},[s._v("import")]),s._v(" 方式引用")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",[s._v("全局提示的类别")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("success")]),s._v(", "),a("code",{pre:!0},[s._v("error")]),s._v(", "),a("code",{pre:!0},[s._v("warning")]),s._v(", "),a("code",{pre:!0},[s._v("info")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("info")])])]),s._v(" "),a("tr",[a("td",[s._v("message")]),s._v(" "),a("td",[s._v("提示的内容")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("自动关闭的延时，默认为 "),a("code",{pre:!0},[s._v("3000")]),s._v(" 毫秒")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("3000")])]),s._v(" "),a("tr",[a("td",[s._v("icon")]),s._v(" "),a("td",[s._v("自定义类别ICON")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("info")])])]),s._v(" "),a("tr",[a("td",[s._v("onClose")]),s._v(" "),a("td",[s._v("关闭提示框时的回调函数")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])])])])}],!1,null,null,null);g.options.__file="docs/markdown/message.md";t.default=g.exports}}]);