"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9952,9568],{5714:(e,t,s)=>{s.d(t,{ZP:()=>_});var r=s(9669),o=s.n(r),n=Object.defineProperty,a=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,l=(e,t,s)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t)=>{for(var s in t||(t={}))a.call(t,s)&&l(e,s,t[s]);if(i)for(var s of i(t))c.call(t,s)&&l(e,s,t[s]);return e};const d=e=>void 0===e,p=e=>Array.isArray(e),h=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,f=(e,t,s,r)=>((t=t||{}).indices=!d(t.indices)&&t.indices,t.nullsAsUndefineds=!d(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!d(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!d(t.allowEmptyArrays)&&t.allowEmptyArrays,s=s||new FormData,d(e)||(null===e?t.nullsAsUndefineds||s.append(r,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?s.append(r,e?1:0):s.append(r,e):p(e)?e.length?e.forEach(((e,o)=>{const n=r+"["+(t.indices?o:"")+"]";f(e,t,s,n)})):t.allowEmptyArrays&&s.append(r+"[]",""):(e=>e instanceof Date)(e)?s.append(r,e.toISOString()):!(e=>e===Object(e))(e)||(e=>h(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||h(e)?s.append(r,e):Object.keys(e).forEach((o=>{const n=e[o];if(p(n))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);f(n,t,s,r?r+"["+o+"]":o)}))),s);var m={serialize:f};function v(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((s=>{t[s]=v(e[s])})),t}function g(e){return Array.isArray(e)?e:[e]}function y(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>y(e)))}class w{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(u(u({},this.errors),{[e]:g(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return g(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const s=this.get(e);s&&t.push(s)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((s=>{s!==e&&(t[s]=this.errors[s])})),this.set(t)}}class b{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new w,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,v(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>u(u({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!b.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),b.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!b.ignore.includes(e))).forEach((e=>{this[e]=v(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,s={}){return this.startProcessing(),s=u({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===e.toLowerCase()?s.params=u(u({},this.data()),s.params):(s.data=u(u({},this.data()),s.data),y(s.data)&&(s.transformRequest=[e=>m.serialize(e)])),new Promise(((e,t)=>{(b.axios||o()).request(s).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?u({},e.data.errors):e.data.message?{error:e.data.message}:u({},e.data):{error:b.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let s=e;return Object.prototype.hasOwnProperty.call(b.routes,e)&&(s=decodeURI(b.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{s=s.replace(`{${e}}`,t[e])})),s}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}b.routes={},b.errorMessage="Something went wrong. Please try again.",b.recentlySuccessfulTimeout=2e3,b.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const _=b},7133:(e,t,s)=>{s.d(t,{Z:()=>a});var r=s(8764),o=s.n(r);const n={data:function(){return{}},computed:(0,s(629).Se)({user:"auth/user"}),beforeMount:function(){var e=this;"customer"==this.user.role?o().fire({icon:"warning",title:this.$t("agencyalertTitle"),text:this.$t("agencyalertText"),reverseButtons:!0,confirmButtonText:this.$t("ok"),cancelButtonText:this.$t("cancel")}).then((function(){e.$router.push({name:"home"})})):"agency"==this.user.role&&o().fire({icon:"warning",title:this.$t("customeralertTitle"),text:this.$t("customeralertText"),reverseButtons:!0,confirmButtonText:this.$t("ok"),cancelButtonText:this.$t("cancel")}).then((function(){e.$router.push({name:"home"})}))}};const a=(0,s(1900).Z)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports},3050:(e,t,s)=>{s.d(t,{Z:()=>p});var r=s(7757),o=s.n(r);function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,s,r,o,n,a){try{var i=e[n](a),c=i.value}catch(e){return void s(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function u(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===c(e)&&(s=e,e=""),s=a({url:e,title:t,width:600,height:720},s);var r=void 0!==window.screenLeft?window.screenLeft:window.screen.left,o=void 0!==window.screenTop?window.screenTop:window.screen.top,n=window.innerWidth||document.documentElement.clientWidth||window.screen.width,i=window.innerHeight||document.documentElement.clientHeight||window.screen.height;s.left=n/2-s.width/2+r,s.top=i/2-s.height/2+o;var l=Object.keys(s).reduce((function(e,t){return e.push("".concat(t,"=").concat(s[t])),e}),[]).join(","),u=window.open(e,t,l);return window.focus&&u.focus(),u}const d={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var e,t=this;return(e=o().mark((function e(){var s,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u("",t.$t("login")),e.next=3,t.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 3:r=e.sent,s.location.href=r;case 5:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(r,o){var n=e.apply(t,s);function a(e){l(n,r,o,a,i,"next",e)}function i(e){l(n,r,o,a,i,"throw",e)}a(void 0)}))})()},onMessage:function(e){e.origin===window.origin&&e.data.token&&(this.$store.dispatch("auth/saveToken",{token:e.data.token}),this.$router.push({name:"home"}))}}};const p=(0,s(1900).Z)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.githubAuth?s("button",{staticClass:"btn btn-dark ms-auto",attrs:{type:"button"},on:{click:e.login}},[e._v("\n  "+e._s(e.$t("login_with"))+"\n  "),s("fa",{attrs:{icon:["fab","github"]}})],1):e._e()}),[],!1,null,null,null).exports},9568:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var r=s(7757),o=s.n(r),n=s(5714),a=s(6808),i=s.n(a);function c(e,t,s,r,o,n,a){try{var i=e[n](a),c=i.value}catch(e){return void s(e)}i.done?t(c):Promise.resolve(c).then(r,o)}const l={components:{LoginWithGithub:s(3050).Z},middleware:"guest",metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new n.ZP({email:"",password:""}),remember:!1,passwordType:"password"}},methods:{passwordTypeChange:function(){"password"==this.passwordType?this.passwordType="text":this.passwordType="password"},login:function(){var e,t=this;return(e=o().mark((function e(){var s,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.post("/api/login");case 2:return s=e.sent,r=s.data,t.$store.dispatch("auth/saveToken",{token:r.token,remember:t.remember}),e.next=7,t.$store.dispatch("auth/fetchUser");case 7:t.redirect();case 8:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(r,o){var n=e.apply(t,s);function a(e){c(n,r,o,a,i,"next",e)}function i(e){c(n,r,o,a,i,"throw",e)}a(void 0)}))})()},redirect:function(){var e=i().get("intended_url");e?(i().remove("intended_url"),this.$router.push({path:e}).catch((function(e){"NavigationDuplicated"===e.name||e.message.includes("Avoided redundant navigation to current location")||logError(e)}))):this.$router.push({name:this.locale}).catch((function(e){"NavigationDuplicated"===e.name||e.message.includes("Avoided redundant navigation to current location")||logError(e)}))}},created:function(){this.locale=i().get("locale")},props:{registername:{default:!0}}};const u=(0,s(1900).Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-7 m-auto"},[s("card",{attrs:{title:e.$t("login")}},[s("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)},keydown:function(t){return e.form.onKeydown(t)}}},[s("div",{staticClass:"mb-3 row"},[s("label",{staticClass:"col-md-3 col-form-label text-md-end"},[e._v(e._s(e.$t("email")))]),e._v(" "),s("div",{staticClass:"col-md-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),s("has-error",{attrs:{form:e.form,field:"email"}})],1)]),e._v(" "),s("div",{staticClass:"mb-3 row"},[s("label",{staticClass:"col-md-3 col-form-label text-md-end"},[e._v(e._s(e.$t("password")))]),e._v(" "),s("div",{staticClass:"col-md-7"},[s("div",{staticStyle:{display:"flex"}},["checkbox"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("password")},attrs:{name:"password",type:"checkbox"},domProps:{checked:Array.isArray(e.form.password)?e._i(e.form.password,null)>-1:e.form.password},on:{change:function(t){var s=e.form.password,r=t.target,o=!!r.checked;if(Array.isArray(s)){var n=e._i(s,null);r.checked?n<0&&e.$set(e.form,"password",s.concat([null])):n>-1&&e.$set(e.form,"password",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.form,"password",o)}}}):"radio"===e.passwordType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("password")},attrs:{name:"password",type:"radio"},domProps:{checked:e._q(e.form.password,null)},on:{change:function(t){return e.$set(e.form,"password",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("password")},attrs:{name:"password",type:e.passwordType},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),"password"==e.passwordType?s("b-icon",{staticClass:"border rounded password-display",attrs:{icon:"eye-fill"},on:{click:e.passwordTypeChange}}):s("b-icon",{staticClass:"border rounded password-display",attrs:{icon:"eye-slash-fill"},on:{click:e.passwordTypeChange}})],1),e._v(" "),s("has-error",{attrs:{form:e.form,field:"password"}})],1)]),e._v(" "),s("div",{staticClass:"mb-3 row"},[s("div",{staticClass:"col-md-3"}),e._v(" "),s("div",{staticClass:"col-md-7 d-flex"},[s("checkbox",{attrs:{name:"remember"},model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}},[e._v("\n              "+e._s(e.$t("remember_me"))+"\n            ")]),e._v(" "),s("router-link",{staticClass:"small ms-auto my-auto",attrs:{to:{name:"password.request"}}},[e._v("\n              "+e._s(e.$t("forgot_password"))+"\n            ")])],1)]),e._v(" "),s("div",{staticClass:"mb-3 row"},[s("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[s("v-button",{attrs:{loading:e.form.busy}},[e._v("\n              "+e._s(e.$t("login"))+"\n            ")]),e._v(" "),s("b-button",{attrs:{variant:"outline-primary",to:{name:e.registername?"registerCustomer":"registerAgency"}}},[e._v("\n              "+e._s(e.$t("register"))+"\n            ")])],1)])])])],1)])}),[],!1,null,"1302d762",null).exports},9952:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var r=s(1900);const o=(0,r.Z)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container catalog_ias"},[s("div",{staticClass:"title"},[s("h2",[e._v(e._s(e.$t("catalog.ias_title")))])]),e._v(" "),e._m(0)])}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"body row"},[s("div",{staticClass:"body-pannel col-md-3 col-sm-12"},[s("div",{staticClass:"pannel"},[s("a",{attrs:{href:"/upload/pdf/ias_campain_en.pdf",target:"_black"}},[s("img",{attrs:{src:"/upload/img/ias_campain_en.png"}})])])]),e._v(" "),s("div",{staticClass:"body-pannel col-md-3 col-sm-12"},[s("div",{staticClass:"pannel"},[s("a",{attrs:{href:"/upload/pdf/ias_catalog_4_06 _en_ver1.7.pdf",target:"_black"}},[s("img",{attrs:{src:"/upload/img/ias_catalog_4_06 _en_ver1.7.png"}})])])])])}],!1,null,"3dc05ee5",null).exports;const n=(0,r.Z)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container catalog_flowcal"},[s("div",{staticClass:"title"},[s("h2",[e._v(e._s(e.$t("catalog.flowcal_title")))])]),e._v(" "),s("div",{staticClass:"body row"},[s("div",{staticClass:"text col-md-9 col-sm-12"},[s("h1",[e._v(e._s(e.$t("comming_soon")))])])])])}),[],!1,null,"f9dc2828",null).exports;var a=s(9568),i=s(7133),c=s(629),l=s(6808),u=s.n(l);const d={components:{IAS:o,Flowcal:n,Loginsection:a.default,Alertsection:i.Z},computed:(0,c.Se)({user:"auth/user"}),created:function(){u().set("intended_url",this.$route.path)}};const p=(0,r.Z)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.user?s("div",["agency"==e.user.role?s("div",[s("Alertsection")],1):s("div",[s("IAS"),e._v(" "),s("Flowcal")],1)]):s("div",[s("Loginsection",{attrs:{registername:!0}})],1)])}),[],!1,null,null,null).exports}}]);