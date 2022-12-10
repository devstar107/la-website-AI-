"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5040],{5040:(t,a,e)=>{e.r(a),e.d(a,{default:()=>l});var i=e(7757),n=e.n(i),s=e(9669),r=e.n(s);function c(t,a,e,i,n,s,r){try{var c=t[s](r),o=c.value}catch(t){return void e(t)}c.done?a(o):Promise.resolve(o).then(i,n)}function o(t){return function(){var a=this,e=arguments;return new Promise((function(i,n){var s=t.apply(a,e);function r(t){c(s,i,n,r,o,"next",t)}function o(t){c(s,i,n,r,o,"throw",t)}r(void 0)}))}}const _={data:function(){return{category:"",card_number:"",expire_date:"",cvc:"",loading:!1,applicant_email:""}},methods:{getCategorydata:function(t,a){var e=this;return o(n().mark((function i(){var s,c;return n().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,r().get("/api/get/dealer_checkout/category/"+t+"/"+a);case 2:s=i.sent,c=s.data,e.category=c;case 5:case"end":return i.stop()}}),i)})))()},dealer_application_send:function(){var t=this;return o(n().mark((function a(){var e;return n().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading=!0,a.next=3,r().post("/api/payment/dealer/checkout/application/send",{applicant_email:t.applicant_email,category_id:t.category.id,order_number:t.$route.query.order_no});case 3:e=a.sent,e.data,t.loading=!1;case 6:case"end":return a.stop()}}),a)})))()}},created:function(){var t=this.$route.query.app_id,a=this.$route.query.cat_id;this.getCategorydata(t,a),this.email=this.user.email},computed:(0,e(629).Se)({user:"auth/user"}),mounted:function(){this.email=this.user.email}};const l=(0,e(1900).Z)(_,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"header"},[e("h1",[t._v(t._s(t.$t("checkout_title")))])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",{staticClass:"category_level"},[e("h4",[t._v(t._s(t.$t("category_level"))+" "),e("router-link",{staticClass:"change",attrs:{to:{name:t.$t("dealer.url")}}},[t._v("\n                        "+t._s(t.$t("change")))])],1),t._v(" "),e("div",{staticStyle:{"padding-left":"20px"}},[e("h6",[t._v("\n                        "+t._s(t.$t("category_application_description"))+"\n                        "),e("span",{staticClass:"category"},[t._v(t._s(t.category.app_name))]),t._v(".\n                    ")]),t._v(" "),e("h6",[t._v("\n                        "+t._s(t.$t("category_select_description"))+"\n                        "),e("span",{staticClass:"category"},[t._v(t._s(t.category.category_tab))]),t._v(".\n                    ")]),t._v(" "),e("h6",[t._v("\n                        "+t._s(t.$t("category_price_description"))+"\n                        "),e("span",{staticClass:"category"},[t._v(t._s(t.$t(t.category.price)))]),t._v(".\n                    ")]),t._v(" "),e("h6",{staticStyle:{color:"#007FED"}},[t._v("\n                        "+t._s(t.$t("category_discount_price_description"))+"\n                        "+t._s(t.$t("category_discount_rate_description"))+"\n                        "),e("span",{staticClass:"category"},[t._v(t._s(t.$t(t.category.discount))+"%")]),t._v(",\n                        "+t._s(t.$t("category_discounted_price_description"))+"\n                        "),e("span",{staticClass:"category"},[t._v(t._s(t.$t(t.category.discount_price)))]),t._v(".\n                    ")]),t._v(" "),e("h6",[t._v("\n                        "+t._s(t.$t("category_capacity_description"))+"\n                        "),e("span",{staticClass:"category"},[t._v("\n                            "+t._s(t.category.capacity)+t._s(t.category.capacity_unit)+"\n                        ")]),t._v(".\n                    ")]),t._v(" "),e("h6",[t._v("\n                        "+t._s(t.$t("category_period_description"))+"\n                        "),e("span",{staticClass:"category"},[t._v(t._s(t.category.period_date)+" "+t._s(t.$t("days")))]),t._v(".\n                    ")])])]),t._v(" "),e("div",{staticClass:"division"}),t._v(" "),e("div",{staticClass:"your_information_detail"},[e("h4",[t._v(t._s(t.$t("your_information_details")))]),t._v(" "),e("div",{staticStyle:{"padding-left":"20px"}},[e("h6",[t._v("\n                        "+t._s(t.$t("your_email_address_des"))+"\n                        "),e("span",{staticClass:"information_detail"},[t._v(t._s(t.user.email))]),t._v(".\n                    ")]),t._v(" "),e("h6",[t._v("\n                        "+t._s(t.$t("your_deposit_amount"))+"\n                        "),e("span",{staticClass:"information_detail"}),t._v(".\n                    ")])])]),t._v(" "),e("div",{staticClass:"division"}),t._v(" "),e("div",[e("form",{attrs:{method:"post"},on:{submit:function(a){return a.preventDefault(),t.dealer_application_send.apply(null,arguments)}}},[e("div",{staticClass:"dealer_application_form",staticStyle:{"padding-top":"15px"}},[e("h4",[t._v(t._s(t.$t("dealer_application_information_title")))]),t._v(" "),e("div",{staticStyle:{"padding-left":"20px"}},[e("div",{staticClass:"mb-3 row"},[e("div",{staticClass:"col-md-12"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.$t("applicant_email")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.applicant_email,expression:"applicant_email"}],staticClass:"form-control",attrs:{type:"email",name:"applicant_email"},domProps:{value:t.applicant_email},on:{input:function(a){a.target.composing||(t.applicant_email=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"mb-3 row",staticStyle:{"padding-top":"10px"}},[e("div",{staticClass:"col-md-12 d-flex"},[e("b-button",{attrs:{type:"submit",variant:"primary",disabled:t.loading}},[e("b-spinner",{attrs:{small:"",hidden:!t.loading}}),t._v("\n                                        "+t._s(t.$t("application_button"))+"\n                                    ")],1)],1)])])])])])])])])}),[],!1,null,"52ce8f14",null).exports}}]);