(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-list"],{"1bc9":function(e,t,a){"use strict";a.r(t);var s=a("7bc1"),n=a("60a2");for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);a("616a");var d=a("f0c5"),r=Object(d["a"])(n["default"],s["b"],s["c"],!1,null,"4c1e064a",null,!1,s["a"],void 0);t["default"]=r.exports},"60a2":function(e,t,a){"use strict";a.r(t);var s=a("64a6"),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);t["default"]=n.a},"616a":function(e,t,a){"use strict";var s=a("9757"),n=a.n(s);n.a},"64a6":function(e,t,a){"use strict";(function(e){a("7a82");var s=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a("c7eb")),i=s(a("1da1")),d=e.importObject("mall-address"),r={data:function(){return{addressList:[]}},onShow:function(){this.getAddressData()},methods:{getAddressData:function(){var e=this;return(0,i.default)((0,n.default)().mark((function t(){var a;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.getList();case 2:a=t.sent,e.addressList=a.data;case 4:case"end":return t.stop()}}),t)})))()},setDefault:function(e){var t=this;return(0,i.default)((0,n.default)().mark((function a(){return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,d.updateDef(e);case 2:a.sent,t.getAddressData();case 4:case"end":return a.stop()}}),a)})))()},goUpdate:function(e){uni.navigateTo({url:"./edit?id="+e})},selectAddress:function(e){var t=e.address,a=e.area_name,s=e.username,n=e.mobile,i={address:a+t,username:s,mobile:n};uni.$emit("selectAddressEvent",i),uni.navigateBack()},deleteaddress:function(e){return(0,i.default)((0,n.default)().mark((function t(){return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:uni.showModal({title:"提示",content:"确定删除",success:function(){var t=(0,i.default)((0,n.default)().mark((function t(a){var s;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.confirm){t.next=11;break}return console.log("用户点击确定"),t.next=4,d.removeAddRessById(e);case 4:if(s=t.sent,-1!=s.code){t.next=8;break}return uni.showToast({title:s.msg,icon:"error"}),t.abrupt("return");case 8:uni.redirectTo({url:"/pages/address/list"}),t.next=12;break;case 11:a.cancel&&console.log("用户点击取消");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});case 1:case"end":return t.stop()}}),t)})))()}}};t.default=r}).call(this,a("a9ff")["default"])},"7bc1":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return s}));var s={uButton:a("330f").default,uniIcons:a("4947").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"selfAddress"},[a("v-uni-view",{staticClass:"headTop"},[a("v-uni-view",{staticClass:"title"},[e._v("地址簿")]),a("v-uni-navigator",{staticClass:"addressBtn",attrs:{url:"/pages/address/edit"}},[e._v("+ 添加地址")])],1),a("v-uni-view",{staticClass:"list"},e._l(e.addressList,(function(t){return a("v-uni-view",{key:t._id,staticClass:"item",on:{longpress:function(a){arguments[0]=a=e.$handleEvent(a),e.goUpdate(t._id)}}},[a("v-uni-view",{staticClass:"head"},[a("v-uni-view",{staticClass:"user"},[e._v(e._s(t.username)+","+e._s(t.mobile))]),a("v-uni-view",{staticClass:"select",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.selectAddress(t)}}},[t.selected?a("u-button",{attrs:{color:"#EC544F",plain:!0,size:"mini",text:"默认地址"}}):a("u-button",{attrs:{color:"#666",plain:!0,size:"mini",text:"设为默认"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.setDefault(t._id)}}})],1)],1),a("v-uni-view",{staticClass:"buttomdown"},[a("v-uni-view",{staticClass:"more"},[e._v(e._s(t.area_name+t.address))]),a("v-uni-view",{staticClass:"deleteicon",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.deleteaddress(t._id)}}},[a("uni-icons",{attrs:{"custom-prefix":"custom-icon",type:"trash",size:"30"}})],1)],1)],1)})),1)],1)},i=[]},9757:function(e,t,a){var s=a("d6f2");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=a("4f06").default;n("8f81a6f6",s,!0,{sourceMap:!1,shadowMode:!1})},d6f2:function(e,t,a){var s=a("24fb");t=s(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/**\n * 自定义颜色\n */uni-page-body[data-v-4c1e064a]{background:#f7f7f7}body.?%PAGE?%[data-v-4c1e064a]{background:#f7f7f7}.selfAddress[data-v-4c1e064a]{padding:%?30?%}.selfAddress .headTop[data-v-4c1e064a]{display:flex;justify-content:space-between;align-items:center;font-size:%?30?%;font-weight:700}.selfAddress .headTop .addressBtn[data-v-4c1e064a]{border:1px solid #000;border-radius:%?50?%;padding:%?6?% %?15?%}.selfAddress .list[data-v-4c1e064a]{padding-top:%?30?%}.selfAddress .list .item[data-v-4c1e064a]{background:#fff;padding:%?40?% %?20?%;margin-bottom:%?30?%;border-radius:%?15?%}.selfAddress .list .item .head[data-v-4c1e064a]{display:flex;justify-content:space-between;align-items:center;font-weight:700}.selfAddress .list .item .head .left[data-v-4c1e064a]{display:flex;flex-direction:column;justify-content:center}.selfAddress .list .item .more[data-v-4c1e064a]{font-size:%?28?%;color:#a7a7a7;padding-top:%?10?%}.selfAddress .list .item .buttomdown[data-v-4c1e064a]{display:flex;justify-content:space-between}.selfAddress .list .item .buttomdown .deleteicon[data-v-4c1e064a]{display:flex;flex-direction:column;justify-content:center}',""]),e.exports=t}}]);