(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_manage-brand-brand~pages_manage-goods-add~uni_modules-uni-id-pages-pages-login-login-smscode~u~f5991e58"],{"0147":function(e,t,r){"use strict";r("7a82");var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("262e")),u=a(r("2caf")),i=a(r("c7eb")),l=a(r("1da1")),s=a(r("d4ec")),o=a(r("bee2")),f=a(r("53ca"));r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("d3b7"),r("5319"),r("b64b"),r("e25e"),r("d401"),r("466d"),r("00b4"),r("2ca0"),r("c740"),r("6062"),r("3ca3"),r("ddb0"),r("99af"),r("c975"),r("14d9"),r("4de4"),r("e9c4");var c={email:/^\S+?@\S+?\.\S+?$/,idcard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i")},d={int:"integer",bool:"boolean",double:"number",long:"number",password:"string"};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=["label"];r.forEach((function(t){void 0===e[t]&&(e[t]="")}));var a=t;for(var n in e){var u=new RegExp("{"+n+"}");a=a.replace(u,e[n])}return a}var h={integer:function(e){return h.number(e)&&parseInt(e,10)===e},string:function(e){return"string"===typeof e},number:function(e){return!isNaN(e)&&"number"===typeof e},boolean:function(e){return"boolean"===typeof e},float:function(e){return h.number(e)&&!h.integer(e)},array:function(e){return Array.isArray(e)},object:function(e){return"object"===(0,f.default)(e)&&!h.array(e)},date:function(e){return e instanceof Date},timestamp:function(e){return!(!this.integer(e)||Math.abs(e).toString().length>16)},file:function(e){return"string"===typeof e.url},email:function(e){return"string"===typeof e&&!!e.match(c.email)&&e.length<255},url:function(e){return"string"===typeof e&&!!e.match(c.url)},pattern:function(e,t){try{return new RegExp(e).test(t)}catch(r){return!1}},method:function(e){return"function"===typeof e},idcard:function(e){return"string"===typeof e&&!!e.match(c.idcard)},"url-https":function(e){return this.url(e)&&e.startsWith("https://")},"url-scheme":function(e){return e.startsWith("://")},"url-web":function(e){return!1}},v=function(){function e(t){(0,s.default)(this,e),this._message=t}return(0,o.default)(e,[{key:"validateRule",value:function(){var e=(0,l.default)((0,i.default)().mark((function e(t,r,a,n,u){var l,s,o,f,c,d,m,h,v;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(l=null,s=r.rules,o=s.findIndex((function(e){return e.required})),!(o<0)){e.next=8;break}if(null!==a&&void 0!==a){e.next=6;break}return e.abrupt("return",l);case 6:if("string"!==typeof a||a.length){e.next=8;break}return e.abrupt("return",l);case 8:if(f=this._message,void 0!==s){e.next=11;break}return e.abrupt("return",f["default"]);case 11:c=0;case 12:if(!(c<s.length)){e.next=35;break}if(d=s[c],m=this._getValidateType(d),Object.assign(d,{label:r.label||'["'.concat(t,'"]')}),!p[m]){e.next=20;break}if(l=p[m](d,a,f),null==l){e.next=20;break}return e.abrupt("break",35);case 20:if(!d.validateExpr){e.next=26;break}if(h=Date.now(),v=d.validateExpr(a,u,h),!1!==v){e.next=26;break}return l=this._getMessage(d,d.errorMessage||this._message["default"]),e.abrupt("break",35);case 26:if(!d.validateFunction){e.next=32;break}return e.next=29,this.validateFunction(d,a,n,u,m);case 29:if(l=e.sent,null===l){e.next=32;break}return e.abrupt("break",35);case 32:c++,e.next=12;break;case 35:return null!==l&&(l=f.TAG+l),e.abrupt("return",l);case 37:case"end":return e.stop()}}),e,this)})));return function(t,r,a,n,u){return e.apply(this,arguments)}}()},{key:"validateFunction",value:function(){var e=(0,l.default)((0,i.default)().mark((function e(t,r,a,n,u){var l,s,o;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l=null,e.prev=1,s=null,e.next=5,t.validateFunction(t,r,n||a,(function(e){s=e}));case 5:o=e.sent,(s||"string"===typeof o&&o||!1===o)&&(l=this._getMessage(t,s||o,u)),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),l=this._getMessage(t,e.t0.message,u);case 12:return e.abrupt("return",l);case 13:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(t,r,a,n,u){return e.apply(this,arguments)}}()},{key:"_getMessage",value:function(e,t,r){return m(e,t||e.errorMessage||this._message[r]||t["default"])}},{key:"_getValidateType",value:function(e){var t="";return e.required?t="required":e.format?t="format":e.arrayType?t="arrayTypeFormat":e.range?t="range":void 0!==e.maximum||void 0!==e.minimum?t="rangeNumber":void 0!==e.maxLength||void 0!==e.minLength?t="rangeLength":e.pattern?t="pattern":e.validateFunction&&(t="validateFunction"),t}}]),e}(),p={required:function(e,t,r){return e.required&&function(e,t){return void 0===e||null===e||("string"===typeof e&&!e||(!(!Array.isArray(e)||e.length)||"object"===t&&!Object.keys(e).length))}(t,e.format||(0,f.default)(t))?m(e,e.errorMessage||r.required):null},range:function(e,t,r){for(var a=e.range,n=e.errorMessage,u=new Array(a.length),i=0;i<a.length;i++){var l=a[i];h.object(l)&&void 0!==l.value?u[i]=l.value:u[i]=l}var s=!1;return Array.isArray(t)?s=new Set(t.concat(u)).size===u.length:u.indexOf(t)>-1&&(s=!0),s?null:m(e,n||r["enum"])},rangeNumber:function(e,t,r){if(!h.number(t))return m(e,e.errorMessage||r.pattern.mismatch);var a=e.minimum,n=e.maximum,u=e.exclusiveMinimum,i=e.exclusiveMaximum,l=u?t<=a:t<a,s=i?t>=n:t>n;return void 0!==a&&l?m(e,e.errorMessage||r["number"][u?"exclusiveMinimum":"minimum"]):void 0!==n&&s?m(e,e.errorMessage||r["number"][i?"exclusiveMaximum":"maximum"]):void 0!==a&&void 0!==n&&(l||s)?m(e,e.errorMessage||r["number"].range):null},rangeLength:function(e,t,r){if(!h.string(t)&&!h.array(t))return m(e,e.errorMessage||r.pattern.mismatch);var a=e.minLength,n=e.maxLength,u=t.length;return void 0!==a&&u<a?m(e,e.errorMessage||r["length"].minLength):void 0!==n&&u>n?m(e,e.errorMessage||r["length"].maxLength):void 0!==a&&void 0!==n&&(u<a||u>n)?m(e,e.errorMessage||r["length"].range):null},pattern:function(e,t,r){return h["pattern"](e.pattern,t)?null:m(e,e.errorMessage||r.pattern.mismatch)},format:function(e,t,r){var a=Object.keys(h),n=d[e.format]?d[e.format]:e.format||e.arrayType;return a.indexOf(n)>-1&&!h[n](t)?m(e,e.errorMessage||r.typeError):null},arrayTypeFormat:function(e,t,r){if(!Array.isArray(t))return m(e,e.errorMessage||r.typeError);for(var a=0;a<t.length;a++){var n=t[a],u=this.format(e,n,r);if(null!==u)return u}return null}},b=function(e){(0,n.default)(r,e);var t=(0,u.default)(r);function r(e,a){var n;return(0,s.default)(this,r),n=t.call(this,r.message),n._schema=e,n._options=a||null,n}return(0,o.default)(r,[{key:"updateSchema",value:function(e){this._schema=e}},{key:"validate",value:function(){var e=(0,l.default)((0,i.default)().mark((function e(t,r){var a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=this._checkFieldInSchema(t),a){e.next=5;break}return e.next=4,this.invokeValidate(t,!1,r);case 4:a=e.sent;case 5:return e.abrupt("return",a.length?a[0]:null);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"validateAll",value:function(){var e=(0,l.default)((0,i.default)().mark((function e(t,r){var a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=this._checkFieldInSchema(t),a){e.next=5;break}return e.next=4,this.invokeValidate(t,!0,r);case 4:a=e.sent;case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"validateUpdate",value:function(){var e=(0,l.default)((0,i.default)().mark((function e(t,r){var a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=this._checkFieldInSchema(t),a){e.next=5;break}return e.next=4,this.invokeValidateUpdate(t,!1,r);case 4:a=e.sent;case 5:return e.abrupt("return",a.length?a[0]:null);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"invokeValidate",value:function(){var e=(0,l.default)((0,i.default)().mark((function e(t,r,a){var n,u,l,s,o;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=[],u=this._schema,e.t0=(0,i.default)().keys(u);case 3:if((e.t1=e.t0()).done){e.next=15;break}return l=e.t1.value,s=u[l],e.next=8,this.validateRule(l,s,t[l],t,a);case 8:if(o=e.sent,null==o){e.next=13;break}if(n.push({key:l,errorMessage:o}),r){e.next=13;break}return e.abrupt("break",15);case 13:e.next=3;break;case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"invokeValidateUpdate",value:function(){var e=(0,l.default)((0,i.default)().mark((function e(t,r,a){var n,u,l;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=[],e.t0=(0,i.default)().keys(t);case 2:if((e.t1=e.t0()).done){e.next=13;break}return u=e.t1.value,e.next=6,this.validateRule(u,this._schema[u],t[u],t,a);case 6:if(l=e.sent,null==l){e.next=11;break}if(n.push({key:u,errorMessage:l}),r){e.next=11;break}return e.abrupt("break",13);case 11:e.next=2;break;case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"_checkFieldInSchema",value:function(e){var t=Object.keys(e),a=Object.keys(this._schema);if(new Set(t.concat(a)).size===a.length)return"";var n=t.filter((function(e){return a.indexOf(e)<0})),u=m({field:JSON.stringify(n)},r.message.TAG+r.message["defaultInvalid"]);return[{key:"invalid",errorMessage:u}]}}]),r}(v);b.message=new function(){return{TAG:"",default:"验证错误",defaultInvalid:"提交的字段{field}在数据库中并不存在",validateFunction:"验证无效",required:"{label}必填",enum:"{label}超出范围",timestamp:"{label}格式无效",whitespace:"{label}不能为空",typeError:"{label}类型无效",date:{format:"{label}日期{value}格式无效",parse:"{label}日期无法解析,{value}无效",invalid:"{label}日期{value}无效"},length:{minLength:"{label}长度不能少于{minLength}",maxLength:"{label}长度不能超过{maxLength}",range:"{label}必须介于{minLength}和{maxLength}之间"},number:{minimum:"{label}不能小于{minimum}",maximum:"{label}不能大于{maximum}",exclusiveMinimum:"{label}不能小于等于{minimum}",exclusiveMaximum:"{label}不能大于等于{maximum}",range:"{label}必须介于{minimum}and{maximum}之间"},pattern:{mismatch:"{label}格式不匹配"}}};var g=b;t.default=g},"0678":function(e,t,r){var a=r("d437");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=r("4f06").default;n("850f6c12",a,!0,{sourceMap:!1,shadowMode:!1})},"0db3":function(e,t,r){"use strict";r("7a82");var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.typeFilter=t.type=t.setDataValue=t.realName=t.rawData=t.objSet=t.objGet=t.name2arr=t.isRequiredField=t.isRealName=t.isNumber=t.isEqual=t.isBoolean=t.getValue=t.getDataValueType=t.getDataValue=t.deepCopy=void 0;var n=a(r("53ca"));r("e9c4"),r("7db0"),r("d3b7"),r("a9e3"),r("13d5"),r("ac1f"),r("00b4"),r("5319"),r("d81d"),r("7039"),r("d401"),r("25f0");t.deepCopy=function(e){return JSON.parse(JSON.stringify(e))};var u=function(e){return"int"===e||"double"===e||"number"===e||"timestamp"===e};t.typeFilter=u;t.getValue=function(e,t,r){var a=r.find((function(e){return e.format&&u(e.format)})),n=r.find((function(e){return e.format&&"boolean"===e.format||"bool"===e.format}));return a&&(t=t||0===t?c(Number(t))?Number(t):t:null),n&&(t=!!d(t)&&t),t};t.setDataValue=function(e,t,r){return t[e]=r,r||""};var i=function(e,t){return f(t,e)};t.getDataValue=i;t.getDataValueType=function(e,t){var r=i(e,t);return{type:m(r),value:r}};t.realName=function(e){var t=o(e);if("object"===(0,n.default)(t)&&Array.isArray(t)&&t.length>1){var r=t.reduce((function(e,t){return e+"#".concat(t)}),"_formdata_");return r}return t[0]||e};t.isRealName=function(e){return/^_formdata_#*/.test(e)};t.rawData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.parse(JSON.stringify(e)),r={};for(var a in t){var n=l(a);s(r,n,t[a])}return r};var l=function(e){var t=e.replace("_formdata_#","");return t=t.split("#").map((function(e){return c(e)?Number(e):e})),t};t.name2arr=l;var s=function(e,t,r){return"object"!==(0,n.default)(e)||o(t).reduce((function(e,t,a,n){return a===n.length-1?(e[t]=r,null):(t in e||(e[t]=/^[0-9]{1,}$/.test(n[a+1])?[]:{}),e[t])}),e),e};function o(e){return Array.isArray(e)?e:e.replace(/\[/g,".").replace(/\]/g,"").split(".")}t.objSet=s;var f=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"undefined",a=o(t),n=a.reduce((function(e,t){return(e||{})[t]}),e);return n&&void 0===n?r:n};t.objGet=f;var c=function(e){return!isNaN(Number(e))};t.isNumber=c;var d=function(e){return"boolean"===typeof e};t.isBoolean=d;t.isRequiredField=function(e){for(var t=!1,r=0;r<e.length;r++){var a=e[r];if(a.required){t=!0;break}}return t};var m=function(e){var t={};return"Boolean Number String Function Array Date RegExp Object Error".split(" ").map((function(e,r){t["[object "+e+"]"]=e.toLowerCase()})),null==e?e+"":"object"===(0,n.default)(e)||"function"===typeof e?t[Object.prototype.toString.call(e)]||"object":(0,n.default)(e)};t.type=m;t.isEqual=function(e,t){if(e===t)return 0!==e||1/e===1/t;if(null==e||null==t)return e===t;var r=toString.call(e),a=toString.call(t);if(r!==a)return!1;switch(r){case"[object RegExp]":case"[object String]":return""+e===""+t;case"[object Number]":return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":return+e===+t}if("[object Object]"==r){var n=Object.getOwnPropertyNames(e),u=Object.getOwnPropertyNames(t);if(n.length!=u.length)return!1;for(var i=0;i<n.length;i++){var l=n[i];if(e[l]!==t[l])return!1}return!0}return"[object Array]"==r?e.toString()==t.toString():void 0}},"3dbb":function(e,t,r){"use strict";var a=r("0678"),n=r.n(a);n.a},"431d":function(e,t,r){"use strict";r("7a82");var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("c7eb")),u=a(r("1da1")),i=a(r("ade3"));r("a9e3"),r("7db0"),r("d3b7"),r("99af"),r("159b"),r("c975"),r("e9c4"),r("14d9"),r("ddb0");var l=a(r("0147")),s=r("0db3"),o=a(r("e143"));o.default.prototype.binddata=function(e,t,r){if(r)this.$refs[r].setValue(e,t);else{var a;for(var n in this.$refs){var u=this.$refs[n];if(u&&u.$options&&"uniForms"===u.$options.name){a=u;break}}if(!a)return console.error("当前 uni-froms 组件缺少 ref 属性");a.setValue(e,t)}};var f={name:"uniForms",emits:["validate","submit"],options:{virtualHost:!0},props:{value:{type:Object,default:function(){return null}},modelValue:{type:Object,default:function(){return null}},model:{type:Object,default:function(){return null}},rules:{type:Object,default:function(){return{}}},errShowType:{type:String,default:"undertext"},validateTrigger:{type:String,default:"submit"},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:"left"},border:{type:Boolean,default:!1}},provide:function(){return{uniForm:this}},data:function(){return{formData:{},formRules:{}}},computed:{localData:function(){var e=this.model||this.modelValue||this.value;return e?(0,s.deepCopy)(e):{}}},watch:{rules:{handler:function(e,t){this.setRules(e)},deep:!0,immediate:!0}},created:function(){this.childrens=[],this.inputChildrens=[],this.setRules(this.rules)},methods:{setRules:function(e){this.formRules=Object.assign({},this.formRules,e),this.validator=new l.default(e)},setValue:function(e,t){var r=this.childrens.find((function(t){return t.name===e}));return r?(this.formData[e]=(0,s.getValue)(e,t,this.formRules[e]&&this.formRules[e].rules||[]),r.onFieldChange(this.formData[e])):null},validate:function(e,t){return this.checkAll(this.formData,e,t)},validateField:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;t=[].concat(t);var a={};return this.childrens.forEach((function(r){var n=(0,s.realName)(r.name);-1!==t.indexOf(n)&&(a=Object.assign({},a,(0,i.default)({},n,e.formData[n])))})),this.checkAll(a,[],r)},clearValidate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e=[].concat(e),this.childrens.forEach((function(t){if(0===e.length)t.errMsg="";else{var r=(0,s.realName)(t.name);-1!==e.indexOf(r)&&(t.errMsg="")}}))},submit:function(e,t,r){var a=this,n=function(e){var t=a.childrens.find((function(t){return t.name===e}));t&&void 0===a.formData[e]&&(a.formData[e]=a._getValue(e,a.dataValue[e]))};for(var u in this.dataValue)n(u);return r||console.warn("submit 方法即将废弃，请使用validate方法代替！"),this.checkAll(this.formData,e,t,"submit")},checkAll:function(e,t,r,a){var i=this;return(0,u.default)((0,n.default)().mark((function u(){var l,o,f,c,d,m,h,v,p,b,g;return(0,n.default)().wrap((function(u){while(1)switch(u.prev=u.next){case 0:if(i.validator){u.next=2;break}return u.abrupt("return");case 2:for(f in l=[],o=function(e){var t=i.childrens.find((function(t){return(0,s.realName)(t.name)===e}));t&&l.push(t)},e)o(f);r||"function"!==typeof t||(r=t),!r&&"function"!==typeof r&&Promise&&(c=new Promise((function(e,t){r=function(r,a){r?t(r):e(a)}}))),d=[],m=JSON.parse(JSON.stringify(e)),u.t0=(0,n.default)().keys(l);case 10:if((u.t1=u.t0()).done){u.next=23;break}return h=u.t1.value,v=l[h],p=(0,s.realName)(v.name),u.next=16,v.onFieldChange(m[p]);case 16:if(b=u.sent,!b){u.next=21;break}if(d.push(b),"toast"!==i.errShowType&&"modal"!==i.errShowType){u.next=21;break}return u.abrupt("break",23);case 21:u.next=10;break;case 23:if(Array.isArray(d)&&0===d.length&&(d=null),Array.isArray(t)&&t.forEach((function(e){var t=(0,s.realName)(e),r=(0,s.getDataValue)(e,i.localData);void 0!==r&&(m[t]=r)})),"submit"===a?i.$emit("submit",{detail:{value:m,errors:d}}):i.$emit("validate",d),{},g=(0,s.rawData)(m,i.name),r&&"function"===typeof r&&r(d,g),!c||!r){u.next=33;break}return u.abrupt("return",c);case 33:return u.abrupt("return",null);case 34:case"end":return u.stop()}}),u)})))()},validateCheck:function(e){this.$emit("validate",e)},_getValue:s.getValue,_isRequiredField:s.isRequiredField,_setDataValue:s.setDataValue,_getDataValue:s.getDataValue,_realName:s.realName,_isRealName:s.isRealName,_isEqual:s.isEqual}};t.default=f},"61ae":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){}));var a=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"uni-forms"},[t("v-uni-form",[this._t("default")],2)],1)},n=[]},ad66:function(e,t,r){"use strict";r.r(t);var a=r("431d"),n=r.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(u);t["default"]=n.a},d437:function(e,t,r){var a=r("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/**\n * 自定义颜色\n */',""]),e.exports=t},dcdd:function(e,t,r){"use strict";r.r(t);var a=r("61ae"),n=r("ad66");for(var u in n)["default"].indexOf(u)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(u);r("3dbb");var i=r("f0c5"),l=Object(i["a"])(n["default"],a["b"],a["c"],!1,null,"d3d14bf0",null,!1,a["a"],void 0);t["default"]=l.exports}}]);