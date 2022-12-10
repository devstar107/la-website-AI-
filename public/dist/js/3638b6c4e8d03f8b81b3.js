"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2086],{2086:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var n=a(7757),i=a.n(n),s=a(9669),o=a.n(s),r=a(629),l=a(8764),c=a.n(l);function u(t,e,a,n,i,s,o){try{var r=t[s](o),l=r.value}catch(t){return void a(t)}r.done?e(l):Promise.resolve(l).then(n,i)}function d(t){return function(){var e=this,a=arguments;return new Promise((function(n,i){var s=t.apply(e,a);function o(t){u(s,n,i,o,r,"next",t)}function r(t){u(s,n,i,o,r,"throw",t)}o(void 0)}))}}const v={data:function(){return{dealer_informations:"",loading:!1,title:"",content:"",lang:"",display_page:"",date:""}},methods:{getInformations:function(t){var e=this;return d(i().mark((function a(){var n;return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o().get("/api/get/new_informations/dealer/"+t+"/all");case 2:n=a.sent,e.dealer_informations=n.data;case 4:case"end":return a.stop()}}),a)})))()},new_information_post:function(){var t=this;return d(i().mark((function e(){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,o().post("/api/new_information/create",{user_id:t.userid,lang_page:t.lang,display_page:t.display_page,date:t.date,title:t.title,content:t.content});case 3:a=e.sent,n=a.data,t.loading=!1,n?c().fire({icon:"success",title:t.$t("successTitle"),text:t.$t("successText"),reverseButtons:!0,confirmButtonText:t.$t("ok"),cancelButtonText:t.$t("cancel")}).then((function(){t.$router.push({name:"jp"})})):c().fire({icon:"warning",title:t.$t("warningTitle"),text:t.$t("warningText"),reverseButtons:!0,confirmButtonText:t.$t("ok"),cancelButtonText:t.$t("cancel")});case 7:case"end":return e.stop()}}),e)})))()}},computed:(0,r.Se)({user:"auth/user"}),created:function(){this.getInformations("jp"),this.userid=this.user.id},mounted:function(){this.userid=this.user.id}};const m=(0,a(1900).Z)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header"},[a("h1",[t._v(t._s(t.$t("informations.title")))])]),t._v(" "),a("div",{staticClass:"container content"},["0"==t.dealer_informations.length?a("div",{staticClass:"no_datas"},[a("h5",[t._v("新しい情報はありません")])]):a("div",{staticClass:"datas row"},t._l(t.dealer_informations,(function(e){return a("div",{key:e.id,staticClass:"pannels col-md-3 col-sm-12"},[a("div",{staticClass:"pannel"},[a("div",{staticClass:"info_title"},[a("h4",[a("router-link",{attrs:{to:{name:"information_detail_jp",query:{id:e.id,author:e.nikename?e.nikename:e.name}}}},[t._v("\n                                "+t._s(null!=e.title&&e.title.length>80?e.title.slice(0,80)+"...":e.title)+"\n                            ")])],1)]),t._v(" "),a("div",{staticClass:"info_date"},[a("h6",[t._v(t._s(e.created_at))]),a("br"),t._v(" "),a("h6",[t._v("著者: "),a("a",{attrs:{href:"#"}},[a("i",[t._v(t._s(e.nikename?e.nikename:e.name))])])])]),t._v(" "),a("div",{staticClass:"info_content"},[a("h5",[t._v(t._s(null!=e.content&&e.content.length>120?e.content.slice(0,120)+"...":e.content))])]),t._v(" "),a("div",{staticClass:"info_readmore"},[a("h6",[a("router-link",{attrs:{to:{name:"information_detail_jp",query:{id:e.id,author:e.nikename?e.nikename:e.name}}}},[t._v("\n                                詳細を読む\n                            ")])],1)])])])})),0),t._v(" "),t.user&&"admin"==t.user.role?a("div",{staticClass:"info_post_content"},[a("div",{staticClass:"new_info_form"},[t._m(0),t._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.new_information_post.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userid,expression:"userid"}],attrs:{type:"hidden",name:"userid"},domProps:{value:t.userid},on:{input:function(e){e.target.composing||(t.userid=e.target.value)}}}),t._v(" "),a("div",{staticClass:"mb-3 row"},[a("div",{staticClass:"col-md-4"},[a("label",{staticClass:"col-form-label"},[t._v("情報の言語を選択してください")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.lang,expression:"lang"}],staticClass:"form-control",attrs:{name:"lang"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.lang=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"en"}},[t._v("英語")]),t._v(" "),a("option",{attrs:{value:"jp"}},[t._v("日本語")])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("label",{staticClass:"col-form-label"},[t._v("ホームページを選択してください")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.display_page,expression:"display_page"}],staticClass:"form-control",attrs:{name:"display_page"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.display_page=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"top"}},[t._v("ホーム")]),t._v(" "),a("option",{attrs:{value:"customer"}},[t._v("お客様")]),t._v(" "),a("option",{attrs:{value:"dealer"}},[t._v("ディーラー")])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("label",{staticClass:"col-form-label"},[t._v("日にち")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date",name:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"mb-3 row"},[a("div",{staticClass:"col-md-12"},[a("label",{staticClass:"col-form-label"},[t._v("タイトル")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"title",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"mb-3 row"},[a("div",{staticClass:"col-md-12"},[a("label",{staticClass:"col-form-label"},[t._v("コンテンツ")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{type:"text",name:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"mb-3 row"},[a("div",{staticClass:"col-md-12 d-flex"},[a("b-button",{attrs:{type:"submit",variant:"primary",disabled:t.loading}},[a("b-spinner",{attrs:{small:"",hidden:!t.loading}}),t._v("\n                                新しい情報を作成する\n                            ")],1)],1)])])])]):t.user?t._e():a("div",{staticClass:"info_post_content"},[a("h5",[t._v("新しい情報を編集するには、"),a("router-link",{attrs:{to:{name:"login"}}},[t._v(t._s(t.$t("login")))]),t._v(".")],1)])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-title"},[a("h4",[t._v("情報詳細フィールドに入力してください。")])])}],!1,null,"9977c4e4",null).exports}}]);