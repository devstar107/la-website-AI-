"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5141],{5141:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var s=a(7757),l=a.n(s),r=a(9669),i=a.n(r);function n(t,e,a,s,l,r,i){try{var n=t[r](i),o=n.value}catch(t){return void a(t)}n.done?e(o):Promise.resolve(o).then(s,l)}const o={data:function(){return{items:[],fields:[{key:"index",label:""},{key:"app_name",label:this.$root.$i18n.tc("applications.app_name")},{key:"cat_tab",label:this.$root.$i18n.tc("applications.cat_tab")},{key:"period_date",label:this.$root.$i18n.tc("expire_date")},{key:"capacity",label:this.$root.$i18n.tc("applications.capacity")},{key:"created_at",label:this.$root.$i18n.tc("created_date")}],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15,{value:100,text:this.$root.$i18n.tc("show_a_lot")}],filter:null,filterOn:[]}},mounted:function(){this.totalRows=this.items.length},created:function(){var t=this.user.id;this.getPurchaseListById(t)},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},removeRow:function(t){this.items.splice(t,1)},getPurchaseListById:function(t){var e,a=this;return(e=l().mark((function e(){var s,r,n,o,c,p,u,b,m,f,d;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/api/get/purchase/customer/purchase_list/"+t);case 2:for(s=e.sent,r=s.data,n=0;n<r.length;n++)o=new Date(r[n].created_at),c=o.getFullYear(),p=o.getMonth()+1,u=o.getDate(),r[n].created_at=c+"-"+p+"-"+u,(b=new Date(r[n].created_at)).setDate(o.getDate()+r[n].period_date),m=b.getFullYear(),f=b.getMonth()+1,d=b.getDate(),r[n].period_date=m+"-"+f+"-"+d;a.items=r,a.totalRows=a.items.length;case 7:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(s,l){var r=e.apply(t,a);function i(t){n(r,s,l,i,o,"next",t)}function o(t){n(r,s,l,i,o,"throw",t)}i(void 0)}))})()}},computed:(0,a(629).Se)({user:"auth/user"})};const c=(0,a(1900).Z)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header"},[a("h1",[t._v(t._s(t.$t("purchase_list.title")))])]),t._v(" "),a("div",{staticClass:"content container"},[a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{staticClass:"my-1",attrs:{lg:"5"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:t.$t("filter"),"label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:t.$t("type_to_search")},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._v(" "),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(t._s(t.$t("clear")))])],1)],1)],1)],1),t._v(" "),a("b-col",{staticClass:"my-1",attrs:{lg:"7"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:t.$t("filter_on"),"label-cols-sm":"3","label-align-sm":"right","label-size":"sm"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.ariaDescribedby;return[a("b-form-checkbox-group",{staticClass:"mt-1",attrs:{"aria-describedby":s},model:{value:t.filterOn,callback:function(e){t.filterOn=e},expression:"filterOn"}},[a("b-form-checkbox",{attrs:{value:"app_name"}},[t._v(t._s(t.$t("applications.app_name")))]),t._v(" "),a("b-form-checkbox",{attrs:{value:"cat_tab"}},[t._v(t._s(t.$t("applications.cat_tab")))])],1)]}}])})],1),t._v(" "),a("b-col",{staticClass:"my-1",attrs:{md:"5"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:t.$t("per_page"),"label-for":"per-page-select","label-cols-lg":"4","label-align-sm":"center","label-size":"sm"}},[a("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),a("b-col",{attrs:{md:"4"}}),t._v(" "),a("b-col",{staticClass:"my-1",attrs:{md:"3"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),t._v(" "),a("b-table",{attrs:{responsive:"",striped:"",hover:"",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,stacked:"md","show-empty":"",small:""},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v("\n                    "+t._s(e.index+1)+"\n                ")]}},{key:"cell(capacity)",fn:function(e){return[t._v("\n                    "+t._s(e.item.capacity)+" "+t._s(e.item.capacity_unit)+"                      \n                ")]}}])}),t._v(" "),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{md:"5"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:t.$t("per_page"),"label-for":"per-page-select","label-cols-lg":"4","label-align-sm":"center","label-size":"sm"}},[a("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),a("b-col",{attrs:{md:"4"}}),t._v(" "),a("b-col",{staticClass:"my-1",attrs:{md:"3"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)])}),[],!1,null,"724e2f51",null).exports}}]);