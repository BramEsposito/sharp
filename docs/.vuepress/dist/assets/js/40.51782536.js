(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{245:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"reordering-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reordering-instances","aria-hidden":"true"}},[t._v("#")]),t._v(" Reordering instances")]),t._v(" "),s("p",[t._v("It's sometimes useful to allow the user to rearrange instances right from the Entity List. Let's say we want to let the user choose some "),s("code",{staticClass:"inline"},[t._v("pages")]),t._v(" order:")]),t._v(" "),s("h2",{attrs:{id:"generator-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generator-command","aria-hidden":"true"}},[t._v("#")]),t._v(" Generator Command")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan sharp:make:reorder-handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("class_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("model_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"write-the-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-the-class","aria-hidden":"true"}},[t._v("#")]),t._v(" Write the class")]),t._v(" "),s("p",[t._v("First, we need to write a class for the reordering itself, which must implement "),s("code",{staticClass:"inline"},[t._v("Code16\\"),s("span",{staticClass:"token package"},[t._v("Sharp"),s("span",{staticClass:"token punctuation"},[t._v("\\")]),t._v("EntityList"),s("span",{staticClass:"token punctuation"},[t._v("\\")]),t._v("Commands"),s("span",{staticClass:"token punctuation"},[t._v("\\")]),t._v("ReorderHandler")])]),t._v(", and therefore the "),s("code",{staticClass:"inline"},[s("span",{staticClass:"token function"},[t._v("reorder")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),s("span",{staticClass:"token keyword"},[t._v("array")]),t._v(" "),s("span",{staticClass:"token variable"},[t._v("$ids")]),s("span",{staticClass:"token punctuation"},[t._v(")")])]),t._v(" function.")]),t._v(" "),s("p",[t._v("Here's an example with Eloquent and a numerical "),s("code",{staticClass:"inline"},[t._v("order")]),t._v(" column:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageReorderHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReorderHandler")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reorder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ids")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pages")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereIn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ids")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pages")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$page")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("array_search")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$page")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ids")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$page")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"configure-reorder-for-the-front-end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-reorder-for-the-front-end","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure reorder for the front-end")]),t._v(" "),s("p",[t._v("Then, in the "),s("code",{staticClass:"inline"},[t._v("SharpEntityList")]),t._v(" class, we have to configure our reorder handler:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildListConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setReorderable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageReorderHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('And that\'s it! The list now presents a "Reorder" button, and your code will be called when needed.')]),t._v(" "),s("h2",{attrs:{id:"handle-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handle-exceptions","aria-hidden":"true"}},[t._v("#")]),t._v(" Handle exceptions")]),t._v(" "),s("p",[t._v("If you need to abort the process, for any reason, you can raise a "),s("code",{staticClass:"inline"},[t._v("Code16\\"),s("span",{staticClass:"token package"},[t._v("Sharp"),s("span",{staticClass:"token punctuation"},[t._v("\\")]),t._v("Exceptions"),s("span",{staticClass:"token punctuation"},[t._v("\\")]),t._v("SharpException"),s("span",{staticClass:"token punctuation"},[t._v("\\")]),t._v("SharpApplicativeException")])]),t._v(" in the "),s("code",{staticClass:"inline"},[s("span",{staticClass:"token function"},[t._v("reorder")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),s("span",{staticClass:"token keyword"},[t._v("array")]),t._v(" "),s("span",{staticClass:"token variable"},[t._v("$ids")]),s("span",{staticClass:"token punctuation"},[t._v(")")])]),t._v(" function.")])])},[],!1,null,null,null);a.default=n.exports}}]);