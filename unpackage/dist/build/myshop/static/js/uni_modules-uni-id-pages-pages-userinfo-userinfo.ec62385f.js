(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-userinfo-userinfo"],{"0e80":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var a=i(n("cb93")),o=n("37dc"),u=i(n("b75a")),r=(0,o.initVueI18n)(u.default),c=r.t,s={name:"uniPopupDialog",mixins:[a.default],emits:["confirm","close"],props:{inputType:{type:String,default:"text"},value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return this.confirmText||c("uni-popup.ok")},closeText:function(){return this.cancelText||c("uni-popup.cancel")},placeholderText:function(){return this.placeholder||c("uni-popup.placeholder")},titleText:function(){return this.title||c("uni-popup.title")}},watch:{type:function(e){this.dialogType=e},mode:function(e){"input"===e&&(this.dialogType="info")},value:function(e){this.val=e}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};t.default=s},1691:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniPopup:n("51e6").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[n("v-uni-view",{staticClass:"box"},[n("v-uni-text",{staticClass:"headBox"},[e._v("绑定资料")]),n("v-uni-text",{staticClass:"tip"},[e._v("将一键获取你的手机号码绑定你的个人资料")]),n("v-uni-view",{staticClass:"btnBox"},[n("v-uni-text",{staticClass:"close",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeMe.apply(void 0,arguments)}}},[e._v("关闭")]),n("v-uni-button",{staticClass:"agree uni-btn",attrs:{type:"primary","open-type":"getPhoneNumber"},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.bindMobileByMpWeixin.apply(void 0,arguments)}}},[e._v("获取")])],1)],1)],1)},o=[]},"206c":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-popup-dialog"},[n("v-uni-view",{staticClass:"uni-dialog-title"},[n("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+e.dialogType]},[e._v(e._s(e.titleText))])],1),"base"===e.mode?n("v-uni-view",{staticClass:"uni-dialog-content"},[e._t("default",[n("v-uni-text",{staticClass:"uni-dialog-content-text"},[e._v(e._s(e.content))])])],2):n("v-uni-view",{staticClass:"uni-dialog-content"},[e._t("default",["checkbox"===e.inputType?n("v-uni-input",{staticClass:"uni-dialog-input",attrs:{placeholder:e.placeholderText,focus:e.focus,type:"checkbox"},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}}):"radio"===e.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:e.placeholderText,focus:e.focus,type:"radio"},domProps:{checked:e._q(e.val,null)},on:{change:function(t){e.val=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:e.placeholderText,focus:e.focus,type:e.inputType},domProps:{value:e.val},on:{input:function(t){t.target.composing||(e.val=t.target.value)}}})])],2),n("v-uni-view",{staticClass:"uni-dialog-button-group"},[n("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeDialog.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text"},[e._v(e._s(e.closeText))])],1),n("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onOk.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[e._v(e._s(e.okText))])],1)],1)],1)},a=[]},"22c1":function(e,t,n){"use strict";var i=n("7fc5"),a=n.n(i);a.a},2408:function(e,t,n){"use strict";n.r(t);var i=n("63fe"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"259e":function(e,t,n){var i=n("b0fc");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("f2f96230",i,!0,{sourceMap:!1,shadowMode:!1})},"27e6":function(e,t,n){var i=n("a91d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("953ae900",i,!0,{sourceMap:!1,shadowMode:!1})},"27e7":function(e,t,n){"use strict";n.r(t);var i=n("8895"),a=n("8c67");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("57f0");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"aa49a584",null,!1,i["a"],void 0);t["default"]=r.exports},"2a7b":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniIdPagesAvatar:n("27e7").default,uniList:n("791c").default,uniListItem:n("9c90").default,uniPopup:n("51e6").default,uniPopupDialog:n("565b").default,uniIdPagesBindMobile:n("f029").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-content"},[n("v-uni-view",{staticClass:"avatar"},[n("uni-id-pages-avatar",{attrs:{width:"260rpx",height:"260rpx"}})],1),n("uni-list",[n("uni-list-item",{staticClass:"item",attrs:{title:"昵称",rightText:e.userInfo.nickname||"未设置",link:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setNickname("")}}}),n("uni-list-item",{staticClass:"item",attrs:{title:"手机号",rightText:e.userInfo.mobile||"未绑定",link:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindMobile.apply(void 0,arguments)}}}),e.userInfo.email?n("uni-list-item",{staticClass:"item",attrs:{title:"电子邮箱",rightText:e.userInfo.email}}):e._e(),e.hasPwd?n("uni-list-item",{staticClass:"item",attrs:{title:"修改密码",link:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changePassword.apply(void 0,arguments)}}}):e._e()],1),n("uni-list",{staticClass:"mt10"},[n("uni-list-item",{attrs:{title:"注销账号",link:"navigateTo"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deactivate.apply(void 0,arguments)}}})],1),n("uni-popup",{ref:"dialog",attrs:{type:"dialog"}},[n("uni-popup-dialog",{attrs:{mode:"input",value:e.userInfo.nickname,inputType:e.setNicknameIng?"nickname":"text",title:"设置昵称",placeholder:"请输入要设置的昵称"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.setNickname.apply(void 0,arguments)}}})],1),n("uni-id-pages-bind-mobile",{ref:"bind-mobile-by-sms",on:{success:function(t){arguments[0]=t=e.$handleEvent(t),e.bindMobileSuccess.apply(void 0,arguments)}}}),e.showLoginManage?[e.userInfo._id?n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.logout.apply(void 0,arguments)}}},[e._v("退出登录")]):n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v("去登录")])]:e._e()],2)},o=[]},"478f":function(e,t,n){"use strict";n.r(t);var i=n("9221"),a=n("8bf3");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=r.exports},"4bcd":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/**\n * 自定义颜色\n */.input-box[data-v-088aa68e]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-088aa68e]{padding:0 %?60?%}.login-logo[data-v-088aa68e]{display:none}@media screen and (min-width:690px){.uni-content[data-v-088aa68e]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-088aa68e]{display:flex;justify-content:center}.login-logo uni-image[data-v-088aa68e]{width:60px;height:60px}.register-back[data-v-088aa68e]{display:none}uni-button[data-v-088aa68e]{padding-bottom:1px}}.uni-content uni-view[data-v-088aa68e]{box-sizing:border-box}.title[data-v-088aa68e]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-088aa68e]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-088aa68e]  .uni-easyinput__content,\n.input-box[data-v-088aa68e]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-088aa68e]{color:#04498c;cursor:pointer}.uni-content[data-v-088aa68e]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-088aa68e]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-088aa68e]{height:auto!important}.uni-content[data-v-088aa68e]{padding:0}uni-view[data-v-088aa68e]{display:flex;box-sizing:border-box;flex-direction:column}@media screen and (min-width:690px){.uni-content[data-v-088aa68e]{padding:0;max-width:690px;margin-left:calc(50% - 345px);border:none;max-height:none;border-radius:0;box-shadow:none}}.avatar[data-v-088aa68e]{align-items:center;justify-content:center;margin:22px 0;width:100%}.item[data-v-088aa68e]{flex:1;flex-direction:row;justify-content:space-between;align-items:center}uni-button[data-v-088aa68e]{margin:10%;margin-top:40px;border-radius:0;background-color:#fff;width:80%}.mt10[data-v-088aa68e]{margin-top:10px}',""]),e.exports=t},5194:function(e,t,n){"use strict";var i=n("259e"),a=n.n(i);a.a},"565b":function(e,t,n){"use strict";n.r(t);var i=n("206c"),a=n("ee28");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("f454");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"56681c50",null,!1,i["a"],void 0);t["default"]=r.exports},"57f0":function(e,t,n){"use strict";var i=n("6ccd"),a=n.n(i);a.a},"61b4":function(e){e.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},"63fe":function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7");var a=i(n("c7eb")),o=i(n("1da1")),u=n("8a91"),r=e.importObject("uni-id-co"),c={computed:{userInfo:function(){return u.store.userInfo},realNameStatus:function(){return this.userInfo.realNameAuth?this.userInfo.realNameAuth.authStatus:0}},data:function(){return{univerifyStyle:{authButton:{title:"本机号码一键绑定"},otherLoginButton:{title:"其他号码绑定"}},hasPwd:!1,showLoginManage:!1,setNicknameIng:!1}},onShow:function(){var e=this;return(0,o.default)((0,a.default)().mark((function t(){return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.univerifyStyle.authButton.title="本机号码一键绑定",e.univerifyStyle.otherLoginButton.title="其他号码绑定";case 2:case"end":return t.stop()}}),t)})))()},onLoad:function(e){var t=this;return(0,o.default)((0,a.default)().mark((function n(){var i;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.showLoginManage&&(t.showLoginManage=!0),n.next=3,r.getAccountInfo();case 3:i=n.sent,t.hasPwd=i.isPasswordSet;case 5:case"end":return n.stop()}}),n)})))()},methods:{login:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd",complete:function(e){}})},logout:function(){u.mutations.logout()},bindMobileSuccess:function(){u.mutations.updateUserInfo()},changePassword:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd",complete:function(e){}})},bindMobile:function(){this.bindMobileBySmsCode()},univerify:function(){var e=this;uni.login({provider:"univerify",univerifyStyle:this.univerifyStyle,success:function(){var e=(0,o.default)((0,a.default)().mark((function e(t){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r.bindMobileByUniverify(t.authResult).then((function(e){u.mutations.updateUserInfo()})).catch((function(e){console.log(e)})).finally((function(e){uni.closeAuthView()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fail:function(t){console.log(t),"30002"!=t.code&&"30001"!=t.code||e.bindMobileBySmsCode()}})},bindMobileBySmsCode:function(){uni.navigateTo({url:"./bind-mobile/bind-mobile"})},setNickname:function(e){e?(u.mutations.updateUserInfo({nickname:e}),this.setNicknameIng=!1,this.$refs.dialog.close()):this.$refs.dialog.open()},deactivate:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate"})},bindThirdAccount:function(t){var n=this;return(0,o.default)((0,a.default)().mark((function i(){var r,c;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(r=e.importObject("uni-id-co"),c={weixin:"wx_openid",alipay:"ali_openid",apple:"apple_openid",qq:"qq_openid"}[t.toLowerCase()],!n.userInfo[c]){i.next=9;break}return i.next=5,r["unbind"+t]();case 5:return i.next=7,u.mutations.updateUserInfo();case 7:i.next=10;break;case 9:uni.login({provider:t.toLowerCase(),onlyAuthorize:!0,success:function(){var e=(0,o.default)((0,a.default)().mark((function e(n){var i;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r["bind"+t]({code:n.code});case 2:return i=e.sent,i.errCode&&uni.showToast({title:i.errMsg||"绑定失败",duration:3e3}),e.next=6,u.mutations.updateUserInfo();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fail:function(){var e=(0,o.default)((0,a.default)().mark((function e(t){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t),uni.hideLoading();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});case 10:case"end":return i.stop()}}),i)})))()},realNameVerify:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/realname-verify/realname-verify"})}}};t.default=c}).call(this,n("a9ff")["default"])},"69cb":function(e,t,n){"use strict";n.r(t);var i=n("8162"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"6ccd":function(e,t,n){var i=n("abce");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("17ed96a9",i,!0,{sourceMap:!1,shadowMode:!1})},"7fc5":function(e,t,n){var i=n("4bcd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("12361c3e",i,!0,{sourceMap:!1,shadowMode:!1})},8162:function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7");var a=i(n("c7eb")),o=i(n("1da1")),u=e.database(),r=(u.collection("uni-id-users"),e.importObject("uni-id-co")),c={emits:["success"],computed:{},data:function(){return{}},methods:{beforeGetphonenumber:function(){return(0,o.default)((0,a.default)().mark((function t(){return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,n){uni.showLoading({mask:!0}),wx.checkSession({success:function(){t(),uni.hideLoading()},fail:function(){wx.login({success:function(i){var a=i.code;e.importObject("uni-id-co",{customUI:!0}).loginByWeixin({code:a}).then((function(e){t()})).catch((function(e){console.log(e),n()})).finally((function(e){uni.hideLoading()}))},fail:function(e){console.error(e),n()}})}})}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},bindMobileByMpWeixin:function(e){var t=this;return(0,o.default)((0,a.default)().mark((function n(){return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("getPhoneNumber:ok"!=e.detail.errMsg){n.next=6;break}return n.next=3,t.beforeGetphonenumber();case 3:r.bindMobileByMpWeixin(e.detail).then((function(e){t.$emit("success")})).finally((function(e){t.closeMe()})),n.next=7;break;case 6:t.closeMe();case 7:case"end":return n.stop()}}),n)})))()},open:function(){var e=this;return(0,o.default)((0,a.default)().mark((function t(){return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.popup.open();case 1:case"end":return t.stop()}}),t)})))()},closeMe:function(e){this.$refs.popup.close()}}};t.default=c}).call(this,n("a9ff")["default"])},8895:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={cloudImage:n("478f").default,uniIcons:n("4947").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-button",{staticClass:"box",class:{showBorder:e.border},style:{width:e.width,height:e.height,lineHeight:e.height},attrs:{"open-type":"chooseAvatar"},on:{chooseavatar:function(t){arguments[0]=t=e.$handleEvent(t),e.bindchooseavatar.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadAvatarImg.apply(void 0,arguments)}}},[e.avatar_file?n("cloud-image",{attrs:{src:e.avatar_file.url,width:e.width,height:e.height}}):n("uni-icons",{staticClass:"chooseAvatar",style:{width:e.width,height:e.height,lineHeight:e.height},attrs:{type:"plusempty",size:"30",color:"#dddddd"}})],1)},o=[]},"8a91":function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.mutations=void 0;var a=i(n("c7eb")),o=i(n("5530")),u=i(n("1da1"));n("b64b"),n("d3b7"),n("159b"),n("99af");var r=i(n("51b5")),c=i(n("dee0")),s=i(n("e143")),l=e.importObject("uni-id-co"),d=e.database(),f=d.collection("uni-id-users"),p=uni.getStorageSync("uni-id-pages-userInfo")||{},v={userInfo:p,hasLogin:0!=Object.keys(p).length},h={updateUserInfo:function(){var t=arguments,n=this;return(0,u.default)((0,a.default)().mark((function i(){var u,r,c,s;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(u=t.length>0&&void 0!==t[0]&&t[0],!u){i.next=5;break}f.where("_id==$env.uid").update(u).then((function(e){e.result.updated?(uni.showToast({title:"更新成功",icon:"none",duration:3e3}),n.setUserInfo(u)):uni.showToast({title:"没有改变",icon:"none",duration:3e3})})),i.next=20;break;case 5:return r=e.importObject("uni-id-co",{customUI:!0}),i.prev=6,i.next=9,f.where("'_id' == $cloudEnv_uid").field("mobile,nickname,username,email,avatar_file").get();case 9:return c=i.sent,i.next=12,r.getRealNameInfo();case 12:s=i.sent,n.setUserInfo((0,o.default)((0,o.default)({},c.result.data[0]),{},{realNameAuth:s})),i.next=20;break;case 16:i.prev=16,i.t0=i["catch"](6),n.setUserInfo({},{cover:!0}),console.error(i.t0.message,i.t0.errCode);case 20:case"end":return i.stop()}}),i,null,[[6,16]])})))()},setUserInfo:function(e){var t=arguments;return(0,u.default)((0,a.default)().mark((function n(){var i,o,u;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.length>1&&void 0!==t[1]?t[1]:{cover:!1},o=i.cover,u=o?e:Object.assign(g.userInfo,e),g.userInfo=Object.assign({},u),g.hasLogin=0!=Object.keys(g.userInfo).length,uni.setStorageSync("uni-id-pages-userInfo",g.userInfo),n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})))()},logout:function(){var t=this;return(0,u.default)((0,a.default)().mark((function n(){return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(e.getCurrentUserInfo().tokenExpired>Date.now())){n.next=9;break}return n.prev=1,n.next=4,l.logout();case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),console.error(n.t0);case 9:uni.removeStorageSync("uni_id_token"),uni.setStorageSync("uni_id_token_expired",0),uni.redirectTo({url:"/".concat(r.default.uniIdRouter&&r.default.uniIdRouter.loginPage?r.default.uniIdRouter.loginPage:"uni_modules/uni-id-pages/pages/login/login-withoutpwd")}),uni.$emit("uni-id-pages-logout"),t.setUserInfo({},{cover:!0});case 14:case"end":return n.stop()}}),n,null,[[1,6]])})))()},loginBack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.uniIdRedirectUrl,n=void 0===t?"":t,i=0,a=getCurrentPages();if(a.forEach((function(e,t){"login"==a[a.length-t-1].route.split("/")[3]&&i++})),n)return uni.redirectTo({url:n,fail:function(e){uni.switchTab({url:n,fail:function(t){console.log(e,t)}})}});if("weixin"==e.loginType)return window.history.go(-3);if(i){var o=r.default.pages[0];return uni.reLaunch({url:"/".concat(o.path)})}uni.navigateBack({delta:i})},loginSuccess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showToast,n=void 0===t||t,i=e.toastText,a=void 0===i?"登录成功":i,o=e.autoBack,u=void 0===o||o,r=e.uniIdRedirectUrl,s=void 0===r?"":r,l=e.passwordConfirmed;if(n&&uni.showToast({title:a,icon:"none",duration:3e3}),this.updateUserInfo(),uni.$emit("uni-id-pages-login-success"),c.default.setPasswordAfterLogin&&!l)return uni.redirectTo({url:s?"/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?uniIdRedirectUrl=".concat(s,"&loginType=").concat(e.loginType):"/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?loginType=".concat(e.loginType),fail:function(e){console.log(e)}});u&&this.loginBack({uniIdRedirectUrl:s})}};t.mutations=h;var g=s.default.observable(v);t.store=g}).call(this,n("a9ff")["default"])},"8bf3":function(e,t,n){"use strict";n.r(t);var i=n("d83d"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"8c67":function(e,t,n){"use strict";n.r(t);var i=n("cbc2"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},9221:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticStyle:{"justify-content":"center"},style:{width:e.width,height:e.height},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.cSrc?n("v-uni-image",{style:{width:e.width,height:e.height},attrs:{src:e.cSrc,mode:e.mode}}):e._e()],1)},a=[]},a91d:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/**\n * 自定义颜色\n */.uni-popup-dialog[data-v-56681c50]{width:300px;border-radius:11px;background-color:#fff}.uni-dialog-title[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-56681c50]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.uni-dialog-content-text[data-v-56681c50]{font-size:14px;color:#6c6c6c}.uni-dialog-button-group[data-v-56681c50]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-56681c50]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-56681c50]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-56681c50]{font-size:16px;color:#333}.uni-button-color[data-v-56681c50]{color:#007aff}.uni-dialog-input[data-v-56681c50]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-56681c50]{color:#4cd964}.uni-popup__warn[data-v-56681c50]{color:#f0ad4e}.uni-popup__error[data-v-56681c50]{color:#dd524d}.uni-popup__info[data-v-56681c50]{color:#909399}',""]),e.exports=t},abce:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"\n.box[data-v-aa49a584]{overflow:hidden}\n.box[data-v-aa49a584]{padding:0}.chooseAvatar[data-v-aa49a584]{\ndisplay:inline-block;box-sizing:border-box;\nborder-radius:10px;text-align:center;padding:1px}.showBorder[data-v-aa49a584]{border:solid 1px #ddd}",""]),e.exports=t},ac65:function(e){e.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},b0fc:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/**\n * 自定义颜色\n */.input-box[data-v-accfeb5e]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-accfeb5e]{padding:0 %?60?%}.login-logo[data-v-accfeb5e]{display:none}@media screen and (min-width:690px){.uni-content[data-v-accfeb5e]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-accfeb5e]{display:flex;justify-content:center}.login-logo uni-image[data-v-accfeb5e]{width:60px;height:60px}.register-back[data-v-accfeb5e]{display:none}uni-button[data-v-accfeb5e]{padding-bottom:1px}}.uni-content uni-view[data-v-accfeb5e]{box-sizing:border-box}.title[data-v-accfeb5e]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-accfeb5e]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-accfeb5e]  .uni-easyinput__content,\n.input-box[data-v-accfeb5e]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-accfeb5e]{color:#04498c;cursor:pointer}.uni-content[data-v-accfeb5e]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-accfeb5e]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-accfeb5e]{height:auto!important}uni-view[data-v-accfeb5e]{display:flex}.box[data-v-accfeb5e]{background-color:#fff;height:200px;width:%?750?%;flex-direction:column;border-top-left-radius:15px;border-top-right-radius:15px}.headBox[data-v-accfeb5e]{padding:%?20?%;height:%?80?%;line-height:%?80?%;text-align:left;font-size:16px;color:#333;margin-left:%?15?%}.tip[data-v-accfeb5e]{color:#666;text-align:left;justify-content:center;margin:%?10?% %?30?%;font-size:18px}.btnBox[data-v-accfeb5e]{margin-top:%?45?%;justify-content:center;flex-direction:row}.close[data-v-accfeb5e],\n.agree[data-v-accfeb5e]{text-align:center;width:%?200?%;height:%?80?%;line-height:%?80?%;border-radius:5px;margin:0 %?20?%;font-size:14px}.close[data-v-accfeb5e]{color:#999;border-color:#eee;border-style:solid;border-width:1px;background-color:#fff}.close[data-v-accfeb5e]:active{color:#989898;background-color:#e2e2e2}.agree[data-v-accfeb5e]{color:#fff}.agree[data-v-accfeb5e]:active{background-color:#f5f5f6}',""]),e.exports=t},b75a:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("ac65")),o=i(n("ba7a")),u=i(n("61b4")),r={en:a.default,"zh-Hans":o.default,"zh-Hant":u.default};t.default=r},ba7a:function(e){e.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},cb93:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",t=this.$parent,n=t.$options.name;while(n!==e){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};t.default=i},cbc2:function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("caad"),n("d3b7"),n("e9c4");var a=i(n("c7eb")),o=i(n("1da1")),u=n("8a91"),r={data:function(){return{isPC:!1}},props:{width:{type:String,default:function(){return"50px"}},height:{type:String,default:function(){return"50px"}},border:{type:Boolean,default:function(){return!1}}},mounted:function(){var e=this;return(0,o.default)((0,a.default)().mark((function t(){return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.isPC=!["ios","android"].includes(uni.getSystemInfoSync().platform);case 1:case"end":return t.stop()}}),t)})))()},computed:{hasLogin:function(){return u.store.hasLogin},userInfo:function(){return u.store.userInfo},avatar_file:function(){return u.store.userInfo.avatar_file}},methods:{setAvatarFile:function(e){u.mutations.updateUserInfo({avatar_file:e})},bindchooseavatar:function(t){var n=this;return(0,o.default)((0,a.default)().mark((function i(){var o,u,r,c,s;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return o=t.detail.avatarUrl,u={extname:o.split(".")[o.split(".").length-1],name:"",url:""},r=n.userInfo._id+""+Date.now(),u.name=r,i.prev=4,uni.showLoading({title:"更新中",mask:!0}),i.next=8,e.uploadFile({filePath:o,cloudPath:r,fileType:"image"});case 8:c=i.sent,s=c.fileID,u.url=s,uni.hideLoading(),i.next=17;break;case 14:i.prev=14,i.t0=i["catch"](4),console.error(i.t0);case 17:console.log("avatar_file",u),n.setAvatarFile(u);case 19:case"end":return i.stop()}}),i,null,[[4,14]])})))()},uploadAvatarImg:function(t){var n=this;if(!this.hasLogin)return uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"});var i={quality:100,width:600,height:600,resize:!0};uni.chooseImage({count:1,crop:i,success:function(){var t=(0,o.default)((0,a.default)().mark((function t(o){var u,r,c,s,l,d;return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u=o.tempFiles[0],r={extname:u.name.split(".")[u.name.split(".").length-1]},c=o.tempFilePaths[0],t.next=3,new Promise((function(e){n.isPC||uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage?path="+c+"&options=".concat(JSON.stringify(i)),animationType:"fade-in",events:{success:function(t){e(t)}},complete:function(e){}})}));case 3:return c=t.sent,s=n.userInfo._id+""+Date.now(),r.name=s,uni.showLoading({title:"更新中",mask:!0}),t.next=9,e.uploadFile({filePath:c,cloudPath:s,fileType:"image"});case 9:l=t.sent,d=l.fileID,r.url=d,uni.hideLoading(),n.setAvatarFile(r);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})}}};t.default=r}).call(this,n("a9ff")["default"])},d83d:function(e,t,n){"use strict";(function(e){n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"cloud-image",emits:["click"],props:{mode:{type:String,default:function(){return"widthFix"}},src:{default:function(){return""}},width:{type:String,default:function(){return"100rpx"}},height:{type:String,default:function(){return"100rpx"}}},watch:{src:{handler:function(t){var n=this;t&&"cloud://"==t.substring(0,8)?e.getTempFileURL({fileList:[t]}).then((function(e){n.cSrc=e.fileList[0].tempFileURL})):this.cSrc=t},immediate:!0}},methods:{onClick:function(){this.$emit("click")}},data:function(){return{cSrc:!1}}};t.default=i}).call(this,n("a9ff")["default"])},d978:function(e,t,n){"use strict";n.r(t);var i=n("2a7b"),a=n("2408");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("22c1");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"088aa68e",null,!1,i["a"],void 0);t["default"]=r.exports},dee0:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={debug:!1,isAdmin:!1,loginTypes:["username"],agreements:{serviceUrl:"https://xxx",privacyUrl:"https://xxx",scope:["register","login","realNameVerify"]},appid:{weixin:{h5:"xxxxxx",web:"xxxxxx"}},passwordStrength:"medium",setPasswordAfterLogin:!1}},ee28:function(e,t,n){"use strict";n.r(t);var i=n("0e80"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},f029:function(e,t,n){"use strict";n.r(t);var i=n("1691"),a=n("69cb");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("5194");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"accfeb5e",null,!1,i["a"],void 0);t["default"]=r.exports},f454:function(e,t,n){"use strict";var i=n("27e6"),a=n.n(i);a.a}}]);