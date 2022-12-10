"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3853,9568],{5714:(t,e,s)=>{s.d(e,{ZP:()=>w});var r=s(9669),o=s.n(r),n=Object.defineProperty,i=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,l=(t,e,s)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))i.call(e,s)&&l(t,s,e[s]);if(a)for(var s of a(e))c.call(e,s)&&l(t,s,e[s]);return t};const d=t=>void 0===t,h=t=>Array.isArray(t),p=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,m=(t,e,s,r)=>((e=e||{}).indices=!d(e.indices)&&e.indices,e.nullsAsUndefineds=!d(e.nullsAsUndefineds)&&e.nullsAsUndefineds,e.booleansAsIntegers=!d(e.booleansAsIntegers)&&e.booleansAsIntegers,e.allowEmptyArrays=!d(e.allowEmptyArrays)&&e.allowEmptyArrays,s=s||new FormData,d(t)||(null===t?e.nullsAsUndefineds||s.append(r,""):(t=>"boolean"==typeof t)(t)?e.booleansAsIntegers?s.append(r,t?1:0):s.append(r,t):h(t)?t.length?t.forEach(((t,o)=>{const n=r+"["+(e.indices?o:"")+"]";m(t,e,s,n)})):e.allowEmptyArrays&&s.append(r+"[]",""):(t=>t instanceof Date)(t)?s.append(r,t.toISOString()):!(t=>t===Object(t))(t)||(t=>p(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||p(t)?s.append(r,t):Object.keys(t).forEach((o=>{const n=t[o];if(h(n))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);m(n,e,s,r?r+"["+o+"]":o)}))),s);var v={serialize:m};function f(t){if(null===t||"object"!=typeof t)return t;const e=Array.isArray(t)?[]:{};return Object.keys(t).forEach((s=>{e[s]=f(t[s])})),e}function _(t){return Array.isArray(t)?t:[t]}function y(t){return t instanceof File||t instanceof Blob||t instanceof FileList||"object"==typeof t&&null!==t&&void 0!==Object.values(t).find((t=>y(t)))}class b{constructor(){this.errors={},this.errors={}}set(t,e){"object"==typeof t?this.errors=t:this.set(u(u({},this.errors),{[t]:_(e)}))}all(){return this.errors}has(t){return Object.prototype.hasOwnProperty.call(this.errors,t)}hasAny(...t){return t.some((t=>this.has(t)))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return _(this.errors[t]||[])}only(...t){const e=[];return t.forEach((t=>{const s=this.get(t);s&&e.push(s)})),e}flatten(){return Object.values(this.errors).reduce(((t,e)=>t.concat(e)),[])}clear(t){const e={};t&&Object.keys(this.errors).forEach((s=>{s!==t&&(e[s]=this.errors[s])})),this.set(e)}}class g{constructor(t={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new b,this.progress=void 0,this.update(t)}static make(t){return new this(t)}update(t){this.originalData=Object.assign({},this.originalData,f(t)),Object.assign(this,t)}fill(t={}){this.keys().forEach((e=>{this[e]=t[e]}))}data(){return this.keys().reduce(((t,e)=>u(u({},t),{[e]:this[e]})),{})}keys(){return Object.keys(this).filter((t=>!g.ignore.includes(t)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),g.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((t=>!g.ignore.includes(t))).forEach((t=>{this[t]=f(this.originalData[t])}))}get(t,e={}){return this.submit("get",t,e)}post(t,e={}){return this.submit("post",t,e)}patch(t,e={}){return this.submit("patch",t,e)}put(t,e={}){return this.submit("put",t,e)}delete(t,e={}){return this.submit("delete",t,e)}submit(t,e,s={}){return this.startProcessing(),s=u({data:{},params:{},url:this.route(e),method:t,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===t.toLowerCase()?s.params=u(u({},this.data()),s.params):(s.data=u(u({},this.data()),s.data),y(s.data)&&(s.transformRequest=[t=>v.serialize(t)])),new Promise(((t,e)=>{(g.axios||o()).request(s).then((e=>{this.finishProcessing(),t(e)})).catch((t=>{this.handleErrors(t),e(t)}))}))}handleErrors(t){this.busy=!1,this.progress=void 0,t.response&&this.errors.set(this.extractErrors(t.response))}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?u({},t.data.errors):t.data.message?{error:t.data.message}:u({},t.data):{error:g.errorMessage}}handleUploadProgress(t){this.progress={total:t.total,loaded:t.loaded,percentage:Math.round(100*t.loaded/t.total)}}route(t,e={}){let s=t;return Object.prototype.hasOwnProperty.call(g.routes,t)&&(s=decodeURI(g.routes[t])),"object"!=typeof e&&(e={id:e}),Object.keys(e).forEach((t=>{s=s.replace(`{${t}}`,e[t])})),s}onKeydown(t){const e=t.target;e.name&&this.errors.clear(e.name)}}g.routes={},g.errorMessage="Something went wrong. Please try again.",g.recentlySuccessfulTimeout=2e3,g.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const w=g},7133:(t,e,s)=>{s.d(e,{Z:()=>i});var r=s(8764),o=s.n(r);const n={data:function(){return{}},computed:(0,s(629).Se)({user:"auth/user"}),beforeMount:function(){var t=this;"customer"==this.user.role?o().fire({icon:"warning",title:this.$t("agencyalertTitle"),text:this.$t("agencyalertText"),reverseButtons:!0,confirmButtonText:this.$t("ok"),cancelButtonText:this.$t("cancel")}).then((function(){t.$router.push({name:"home"})})):"agency"==this.user.role&&o().fire({icon:"warning",title:this.$t("customeralertTitle"),text:this.$t("customeralertText"),reverseButtons:!0,confirmButtonText:this.$t("ok"),cancelButtonText:this.$t("cancel")}).then((function(){t.$router.push({name:"home"})}))}};const i=(0,s(1900).Z)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null).exports},3050:(t,e,s)=>{s.d(e,{Z:()=>h});var r=s(7757),o=s.n(r);function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e,s,r,o,n,i){try{var a=t[n](i),c=a.value}catch(t){return void s(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function u(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===c(t)&&(s=t,t=""),s=i({url:t,title:e,width:600,height:720},s);var r=void 0!==window.screenLeft?window.screenLeft:window.screen.left,o=void 0!==window.screenTop?window.screenTop:window.screen.top,n=window.innerWidth||document.documentElement.clientWidth||window.screen.width,a=window.innerHeight||document.documentElement.clientHeight||window.screen.height;s.left=n/2-s.width/2+r,s.top=a/2-s.height/2+o;var l=Object.keys(s).reduce((function(t,e){return t.push("".concat(e,"=").concat(s[e])),t}),[]).join(","),u=window.open(t,e,l);return window.focus&&u.focus(),u}const d={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t,e=this;return(t=o().mark((function t(){var s,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=u("",e.$t("login")),t.next=3,e.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 3:r=t.sent,s.location.href=r;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,s=arguments;return new Promise((function(r,o){var n=t.apply(e,s);function i(t){l(n,r,o,i,a,"next",t)}function a(t){l(n,r,o,i,a,"throw",t)}i(void 0)}))})()},onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}};const h=(0,s(1900).Z)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.githubAuth?s("button",{staticClass:"btn btn-dark ms-auto",attrs:{type:"button"},on:{click:t.login}},[t._v("\n  "+t._s(t.$t("login_with"))+"\n  "),s("fa",{attrs:{icon:["fab","github"]}})],1):t._e()}),[],!1,null,null,null).exports},9568:(t,e,s)=>{s.r(e),s.d(e,{default:()=>u});var r=s(7757),o=s.n(r),n=s(5714),i=s(6808),a=s.n(i);function c(t,e,s,r,o,n,i){try{var a=t[n](i),c=a.value}catch(t){return void s(t)}a.done?e(c):Promise.resolve(c).then(r,o)}const l={components:{LoginWithGithub:s(3050).Z},middleware:"guest",metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new n.ZP({email:"",password:""}),remember:!1,passwordType:"password"}},methods:{passwordTypeChange:function(){"password"==this.passwordType?this.passwordType="text":this.passwordType="password"},login:function(){var t,e=this;return(t=o().mark((function t(){var s,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/login");case 2:return s=t.sent,r=s.data,e.$store.dispatch("auth/saveToken",{token:r.token,remember:e.remember}),t.next=7,e.$store.dispatch("auth/fetchUser");case 7:e.redirect();case 8:case"end":return t.stop()}}),t)})),function(){var e=this,s=arguments;return new Promise((function(r,o){var n=t.apply(e,s);function i(t){c(n,r,o,i,a,"next",t)}function a(t){c(n,r,o,i,a,"throw",t)}i(void 0)}))})()},redirect:function(){var t=a().get("intended_url");t?(a().remove("intended_url"),this.$router.push({path:t}).catch((function(t){"NavigationDuplicated"===t.name||t.message.includes("Avoided redundant navigation to current location")||logError(t)}))):this.$router.push({name:this.locale}).catch((function(t){"NavigationDuplicated"===t.name||t.message.includes("Avoided redundant navigation to current location")||logError(t)}))}},created:function(){this.locale=a().get("locale")},props:{registername:{default:!0}}};const u=(0,s(1900).Z)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-7 m-auto"},[s("card",{attrs:{title:t.$t("login")}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[s("div",{staticClass:"mb-3 row"},[s("label",{staticClass:"col-md-3 col-form-label text-md-end"},[t._v(t._s(t.$t("email")))]),t._v(" "),s("div",{staticClass:"col-md-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),s("div",{staticClass:"mb-3 row"},[s("label",{staticClass:"col-md-3 col-form-label text-md-end"},[t._v(t._s(t.$t("password")))]),t._v(" "),s("div",{staticClass:"col-md-7"},[s("div",{staticStyle:{display:"flex"}},["checkbox"===t.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{name:"password",type:"checkbox"},domProps:{checked:Array.isArray(t.form.password)?t._i(t.form.password,null)>-1:t.form.password},on:{change:function(e){var s=t.form.password,r=e.target,o=!!r.checked;if(Array.isArray(s)){var n=t._i(s,null);r.checked?n<0&&t.$set(t.form,"password",s.concat([null])):n>-1&&t.$set(t.form,"password",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.form,"password",o)}}}):"radio"===t.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{name:"password",type:"radio"},domProps:{checked:t._q(t.form.password,null)},on:{change:function(e){return t.$set(t.form,"password",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{name:"password",type:t.passwordType},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),"password"==t.passwordType?s("b-icon",{staticClass:"border rounded password-display",attrs:{icon:"eye-fill"},on:{click:t.passwordTypeChange}}):s("b-icon",{staticClass:"border rounded password-display",attrs:{icon:"eye-slash-fill"},on:{click:t.passwordTypeChange}})],1),t._v(" "),s("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),s("div",{staticClass:"mb-3 row"},[s("div",{staticClass:"col-md-3"}),t._v(" "),s("div",{staticClass:"col-md-7 d-flex"},[s("checkbox",{attrs:{name:"remember"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("\n              "+t._s(t.$t("remember_me"))+"\n            ")]),t._v(" "),s("router-link",{staticClass:"small ms-auto my-auto",attrs:{to:{name:"password.request"}}},[t._v("\n              "+t._s(t.$t("forgot_password"))+"\n            ")])],1)]),t._v(" "),s("div",{staticClass:"mb-3 row"},[s("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[s("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")]),t._v(" "),s("b-button",{attrs:{variant:"outline-primary",to:{name:t.registername?"registerCustomer":"registerAgency"}}},[t._v("\n              "+t._s(t.$t("register"))+"\n            ")])],1)])])])],1)])}),[],!1,null,"1302d762",null).exports},3853:(t,e,s)=>{s.r(e),s.d(e,{default:()=>y});var r=s(7757),o=s.n(r),n=s(9669),i=s.n(n),a=s(629);function c(t,e,s,r,o,n,i){try{var a=t[n](i),c=a.value}catch(t){return void s(t)}a.done?e(c):Promise.resolve(c).then(r,o)}const l={data:function(){return{ias_name:!1,ias_cat_id:""}},computed:(0,a.Se)({user:"auth/user"}),created:function(){var t=this.user.id;this.getpurchaseIdByUserid(t)},methods:{getpurchaseIdByUserid:function(t){var e,s=this;return(e=o().mark((function e(){var r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/api/get/purchase/appID_catID/"+t);case 2:if(r=e.sent,n=r.data)for(a=0;a<n.length;a++)"IAS"==n[a].app_name&&(s.ias_name=!0,s.ias_cat_id=n[a].cat_id);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(r,o){var n=e.apply(t,s);function i(t){c(n,r,o,i,a,"next",t)}function a(t){c(n,r,o,i,a,"throw",t)}i(void 0)}))})()}}};var u=s(1900);const d=(0,u.Z)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container ias"},[s("div",{staticClass:"title"},[s("h2",[t._v(t._s(t.$t("ias_title")))])]),t._v(" "),s("div",{staticClass:"body row"},[s("div",{staticClass:"body-pannel col-md-3 col-sm-12"},[s("div",{staticClass:"pannel",style:{border:1==t.ias_name&&1==t.ias_cat_id?"#007FED 2px solid":""}},[s("div",{staticClass:"head"},[s("h4",[t._v(t._s(t.$t("ias_1_month")))]),t._v(" "),s("h6",[t._v("500G")])]),t._v(" "),s("div",{staticClass:"cost"},[s("h2",{staticStyle:{display:"false"}},[t._v(t._s(t.$t("360")))])]),t._v(" "),s("div",{staticClass:"content"},[s("ul",[s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_license")))],1),t._v(" "),s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_500server")))],1),t._v(" "),s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_chat")))],1)])]),t._v(" "),s("div",{staticClass:"foot"},[s("b-button",{attrs:{variant:"outline-primary",to:{name:"plan",query:{app_id:"1",cat_id:"1",amount:"360",currency:"USD"}}}},[t._v(t._s(t.$t("subscribe")))])],1)])]),t._v(" "),s("div",{staticClass:"body-pannel col-md-3 col-sm-12"},[s("div",{staticClass:"pannel",style:{border:1==t.ias_name&&2==t.ias_cat_id?"#007FED 2px solid":""}},[s("div",{staticClass:"head"},[s("h4",[t._v(t._s(t.$t("ias_3_month")))]),t._v(" "),s("h6",[t._v("500G")])]),t._v(" "),s("div",{staticClass:"cost"},[s("h2",[t._v(t._s(t.$t("1000")))])]),t._v(" "),s("div",{staticClass:"content"},[s("ul",[s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_license")))],1),t._v(" "),s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_500server")))],1),t._v(" "),s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_chat")))],1)])]),t._v(" "),s("div",{staticClass:"foot"},[s("b-button",{attrs:{variant:"outline-primary",to:{name:"plan",query:{app_id:"1",cat_id:"2",amount:"1000",currency:"USD"}}}},[t._v(t._s(t.$t("subscribe")))])],1)])]),t._v(" "),s("div",{staticClass:"body-pannel col-md-3 col-sm-12"},[s("div",{staticClass:"pannel",style:{border:1==t.ias_name&&3==t.ias_cat_id?"#007FED 2px solid":""}},[s("div",{staticClass:"head"},[s("h4",[t._v(t._s(t.$t("ias_1_year")))]),t._v(" "),s("h6",[t._v("500G")])]),t._v(" "),s("div",{staticClass:"cost"},[s("h2",[t._v(t._s(t.$t("3600")))])]),t._v(" "),s("div",{staticClass:"content"},[s("ul",[s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_license")))],1),t._v(" "),s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_500server")))],1),t._v(" "),s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_chat")))],1)])]),t._v(" "),s("div",{staticClass:"foot"},[s("b-button",{attrs:{variant:"outline-primary",to:{name:"plan",query:{app_id:"1",cat_id:"3",amount:"3600",currency:"USD"}}}},[t._v(t._s(t.$t("subscribe")))])],1)])]),t._v(" "),s("div",{staticClass:"body-pannel col-md-3 col-sm-12"},[s("div",{staticClass:"pannel",style:{border:1==t.ias_name&&4==t.ias_cat_id?"#007FED 2px solid":""}},[s("div",{staticClass:"head"},[s("h4",[t._v(t._s(t.$t("ias_1_year_special")))]),t._v(" "),s("h6",[t._v("2T")])]),t._v(" "),s("div",{staticClass:"cost"},[s("h2",[t._v(t._s(t.$t("14400")))])]),t._v(" "),s("div",{staticClass:"content"},[s("ul",[s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_license")))],1),t._v(" "),s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_2Tserver")))],1),t._v(" "),s("li",[s("b-icon",{attrs:{icon:"check-circle"}}),t._v(t._s(t.$t("ias_chat")))],1)])]),t._v(" "),s("div",{staticClass:"foot"},[s("b-button",{attrs:{variant:"outline-primary",to:{name:"plan",query:{app_id:"1",cat_id:"4",amount:"14400",currency:"USD"}}}},[t._v(t._s(t.$t("subscribe")))])],1)])])]),t._v(" "),s("div",{staticClass:"description"},[s("h5",[t._v(t._s(t.$t("purchase.ias_des")))])])])}),[],!1,null,"002cf1bc",null).exports;const h=(0,u.Z)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container flowcal"},[s("div",{staticClass:"title"},[s("h2",[t._v(t._s(t.$t("flowcal_title")))])]),t._v(" "),s("div",{staticClass:"body row"},[s("div",{staticClass:"text col-md-9 col-sm-12"},[s("h1",[t._v(t._s(t.$t("comming_soon")))]),t._v(" "),s("h5",[t._v(t._s(t.$t("purchase.flowcal_des")))])]),t._v(" "),s("div",{staticClass:"button col-md-3 col-sm-12"},[s("b-button",{attrs:{variant:"outline-primary",to:{name:t.$t("contact.url")}}},[t._v(t._s(t.$t("contact.text")))])],1)])])}),[],!1,null,"d12096c6",null).exports;var p=s(9568),m=s(7133),v=s(6808),f=s.n(v);const _={components:{IAS:d,Flowcal:h,Loginsection:p.default,Alertsection:m.Z},computed:(0,a.Se)({user:"auth/user"}),mounted:function(){window.scrollTo(0,0)},created:function(){console.log(this.$route.path),f().set("intended_url",this.$route.path)}};const y=(0,u.Z)(_,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.user?s("div",["agency"==t.user.role?s("div",[s("Alertsection")],1):s("div",[s("IAS"),t._v(" "),s("Flowcal")],1)]):s("div",[s("Loginsection",{attrs:{registername:!0}})],1)])}),[],!1,null,null,null).exports}}]);