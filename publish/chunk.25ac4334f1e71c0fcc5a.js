(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{238:function(t,i,e){var s=e(246);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(173).default)("9248a57e",s,!0,{})},239:function(t,i,e){"use strict";i.a=(t,i)=>t.sort(((t,e)=>{if(t.app_id===e.app_id)return 0;const s=i.indexOf(t.app_id),a=i.indexOf(e.app_id);return s>-1?a>-1?s<a?-1:1:s>-1?-1:1:a>-1?1:0}))},241:function(t,i,e){"use strict";e(4);var s=e(24),a=e(23),o=e(34),n=e(71),p=e(27),r=e(2),l=e(239),c=e(243),u=e.n(c),d=e(247);const h="object"==typeof window&&window.localStorage,m="shipping-to-zip",g=t=>{const i={};return["product_id","variation_id","sku","name","quantity","inventory","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((e=>{void 0!==t[e]&&(i[e]=t[e])})),i};var _={name:"ShippingCalculator",components:{CleaveInput:u.a,ShippingLine:d.a},props:{zipCode:String,canSelectServices:Boolean,canInputZip:{type:Boolean,default:!0},countryCode:{type:String,default:a.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},skipAppIds:Array,shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasPaidOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(o.a)(s.j),i19calculateShipping:()=>Object(o.a)(s.E),i19zipCode:()=>Object(o.a)(s.ve),i19freeShipping:()=>Object(o.a)(s.Cb).toLowerCase(),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return this.hasPaidOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null},productionDeadline(){let t=0;return this.shippedItems.forEach((i=>{if(i.quantity&&i.production_time){const{days:e,cumulative:s}=i.production_time,a=s?e*i.quantity:e;a>t&&(t=a)}})),t}},methods:{formatMoney:n.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freeFromValue=null,this.shippingServices=[],t.length&&(t.forEach((i=>{const{validated:e,error:s,response:a}=i;if(!e||s)return;if(this.skipAppIds&&this.skipAppIds.includes(i.app_id)&&t.filter((t=>{let{app_id:i}=t;return!this.skipAppIds.includes(i)})).length)return;a.shipping_services.forEach((t=>{this.shippingServices.push({app_id:i.app_id,...t})}));const o=a.free_shipping_from_value;o&&(!this.freeFromValue||this.freeFromValue>o)&&(this.freeFromValue=o)})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((t,i)=>{const e=t.shipping_line.total_price-i.shipping_line.total_price;return e<0?-1:e>0?1:t.shipping_line.delivery_time&&i.shipping_line.delivery_time&&t.shipping_line.delivery_time.days<i.shipping_line.delivery_time.days?-1:1})),this.setSelectedService(0),this.hasPaidOption=Boolean(this.shippingServices.find((t=>t.shipping_line.total_price||t.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(l.a)(this.shippingServices,this.shippingAppsSort))):i?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.shippedItems.length&&this.fetchShippingServices(!0)}),t)},fetchShippingServices(t){this.isScheduled||(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:i}=this;let e="/calculate_shipping.json";this.skipAppIds&&this.skipAppIds.length&&(e+="?skip_ids=",this.skipAppIds.forEach(((t,i)=>{i>0&&(e+=","),e+=`${t}`})));const s={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(s.items=this.localShippedItems,s.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(r.c)({url:e,method:"POST",storeId:i,data:s}).then((i=>{let{data:e}=i;return this.parseShippingOptions(e.result,t)})).catch((i=>{t||this.scheduleRetry(4e3),console.error(i)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),h&&h.setItem(m,this.localZipCode),this.fetchShippingServices()},setSelectedService(t){this.canSelectServices&&(this.$emit("select-service",this.shippingServices[t]),this.selectedService=t)}},watch:{shippedItems:{handler(){setTimeout((()=>{this.localShippedItems=this.shippedItems.map(g);const{amountSubtotal:t}=this;this.amountSubtotal=this.shippedItems.reduce(((t,i)=>t+Object(p.a)(i)*i.quantity),0),this.hasCalculated&&(this.canSelectServices||t!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()}),50)},deep:!0,immediate:!0},localZipCode(t){"BR"===this.countryCode&&8===t.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(t){t&&(this.localZipCode=t)},immediate:!0},skipAppIds(){this.fetchShippingServices()},shippingResult:{handler(t){t.length&&this.parseShippingOptions(t)},immediate:!0}},created(){if(!this.zipCode&&h){const t=h.getItem(m);t&&(this.localZipCode=t)}}},A=_,C=(e(245),e(43)),f=Object(C.a)(A,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"shipping-calculator"},[t.canInputZip?e("form",{staticClass:"shipping-calculator__form",on:{submit:function(i){return i.preventDefault(),t.submitZipCode.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"shipping-calculator-zip"}},[t._v(" "+t._s(t.i19calculateShipping)+" ")]),e("div",{staticClass:"input-group"},[e("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:t.i19zipCode,"aria-label":t.i19zipCode,options:t.cleaveOptions},model:{value:t.localZipCode,callback:function(i){t.localZipCode=i},expression:"localZipCode"}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit","aria-label":t.i19calculateShipping}},[e("i",{staticClass:"i-shipping-fast"})])])],1)])]):t._e(),e("div",{staticClass:"shipping-calculator__services"},[e("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[t.isWaiting?e("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])]):e("div",{key:"services",staticClass:"list-group"},t._l(t.shippingServices,(function(i,s){return e(t.canSelectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":t.canSelectServices,active:t.canSelectServices&&t.selectedService===s},attrs:{href:t.canSelectServices&&"#"},on:{click:function(i){return i.preventDefault(),t.setSelectedService(s)}}},[e("span",{staticClass:"shipping-calculator__option"},[t._t("option",(function(){return[e("shipping-line",{attrs:{"shipping-line":i.shipping_line,"production-deadline":t.productionDeadline,"data-service-code":i.service_code}}),e("small",[t._v(t._s(i.label))])]}),null,{service:i})],2)])})),1)]),e("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[t.freeFromPercentage?e("div",{staticClass:"shipping-calculator__free-from-value"},[t._t("free-from-value",(function(){return[e("span",[t._v(" "+t._s(t.i19add$1ToEarn.replace("$1",t.formatMoney(t.freeFromValue-t.amountSubtotal)))+" "),e("strong",[t._v(t._s(t.i19freeShipping))])]),t.freeFromPercentage>=33?e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+t.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":t.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[e("span",[t._v(" "+t._s(t.i19freeShipping)+" "),e("i",{staticClass:"i-truck mx-1"}),e("strong",[t._v(t._s(t.freeFromPercentage)+"%")])])])]):t._e()]}),null,{amountSubtotal:t.amountSubtotal,freeFromValue:t.freeFromValue,freeFromPercentage:t.freeFromPercentage})],2):t._e()])],1)])}),[],!1,null,null,null);i.a=f.exports},245:function(t,i,e){"use strict";e(238)},246:function(t,i,e){(i=e(172)(!0)).push([t.i,".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}","",{version:3,sources:["ShippingCalculator.scss"],names:[],mappings:"AAAA,4BAA4B,eAAe,CAAC,+BAA+B,6BAA6B,CAAC,eAAe,CAAC,uCAAuC,WAAW,CAAC,6BAA6B,YAAY,CAAC,6BAA6B,CAAC,UAAU,CAAC,mCAAmC,cAAc,CAAC,gBAAgB,CAAC,yBAAyB,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,mCAAmC,iBAAiB,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,sCAAsC,0BAA0B,CAAC,gDAAgD,aAAa,CAAC,0BAA0B,CAAC,oDAAoD,4BAA4B",file:"ShippingCalculator.scss",sourcesContent:[".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}"]}]),t.exports=i},298:function(t,i,e){var s=e(345);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(173).default)("25d3c122",s,!0,{})},318:function(t,i,e){"use strict";e(99);var s=e(24),a=e(34),o=e(71),n=e(2),p=e(5),r=e(26),l=e(237);var c={name:"DiscountApplier",components:{AAlert:l.a},props:{amount:Object,couponCode:String,hasCouponInput:{type:Boolean,default:!0},isFormAlwaysVisible:Boolean,isCouponApplied:Boolean,isAttentionWanted:Boolean,canAddFreebieItems:{type:Boolean,default:!0},modulesPayload:Object,ecomCart:{type:Object,default:()=>p.a},customer:Object,canPassManyDiscountApps:Boolean,ecomPassport:{type:Object,default:()=>r.a}},data(){return{alertText:null,alertVariant:null,isFormVisible:this.isFormAlwaysVisible||this.couponCode,isLoading:!1,localCouponCode:this.couponCode,localAmountTotal:null,isUpdateSheduled:!1}},computed:{i19add$1ToGetDiscountMsg:()=>Object(a.a)({en_us:"Add more $1 to cart to get the discount.",pt_br:"Adicione mais $1 ao carrinho para ganhar o desconto."}),i19add:()=>Object(a.a)(s.i),i19addDiscountCoupon:()=>Object(a.a)(s.k),i19code:()=>Object(a.a)(s.R),i19couponAppliedMsg:()=>Object(a.a)(s.eb),i19discountCoupon:()=>Object(a.a)(s.jb),i19hasCouponOrVoucherQn:()=>Object(a.a)(s.Lb),i19invalidCouponMsg:()=>Object(a.a)(s.Xb),i19campaignAppliedMsg:()=>Object(a.a)(s.F),canAddCoupon(){return!this.couponCode||!this.isCouponApplied||this.couponCode!==this.localCouponCode}},methods:{fixAmount(){const t=this.amount||{subtotal:this.ecomCart.data.subtotal};this.localAmountTotal=(t.subtotal||0)+(t.freight||0)},parseDiscountOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=0;if(t.length){let e,s,a;t.forEach((t=>{const{validated:p,error:r,response:l}=t;if(p&&!r){const p=l.discount_rule;if(p)if(this.canPassManyDiscountApps)i?(p.extra_discount.value+=i,e=p):e={app_id:t.app_id,...p},i=p.extra_discount.value;else{const s=p.extra_discount.value;i>s||(i=s,e={app_id:t.app_id,...p})}else l.available_extra_discount&&l.available_extra_discount.min_amount&&(s=this.i19add$1ToGetDiscountMsg.replace("$1",Object(o.a)(l.available_extra_discount.min_amount-this.amount.subtotal)),a="info");l.invalid_coupon_message&&(s=l.invalid_coupon_message),this.canAddFreebieItems&&(c=this.ecomCart,u=l.freebie_product_ids,Array.isArray(u)&&(c.data.items.forEach((t=>{let{_id:i,product_id:e,flags:s}=t;s&&s.includes("freebie")&&!u.includes(e)&&c.removeItem(i)})),u.forEach((t=>{!c.data.items.find((i=>i.product_id===t&&i.flags&&i.flags.includes("freebie")))&&Object(n.g)({url:`/products/${t}.json`}).then((i=>{let{data:e}=i;!(e.quantity>0)||e.variations&&e.variations.length||c.addProduct({...e,flags:["freebie","__tmp"]},null,u.reduce(((i,e)=>e===t?i+1:i),0))})).catch(console.error)}))))}var c,u})),i?(this.localCouponCode?s?(this.alertText=s,this.alertVariant=a||"warning"):(this.$emit("update:coupon-code",this.localCouponCode),this.alertText=this.i19couponAppliedMsg,this.alertVariant="info"):(this.alertText=this.i19campaignAppliedMsg,this.alertVariant="info"),this.$emit("set-discount-rule",e)):(this.localCouponCode?(this.alertText=s||this.i19invalidCouponMsg,this.alertVariant=a||"warning"):this.alertText=null,this.$emit("set-discount-rule",{}))}},fetchDiscountOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.isLoading=!0;const i=this.customer||this.ecomPassport.getCustomer();i&&(i._id||i.doc_number)&&(t.customer={},i._id&&(t.customer._id=i._id),i.display_name&&(t.customer.display_name=i.display_name),i.doc_number&&(t.customer.doc_number=i.doc_number)),Object(n.c)({url:"/apply_discount.json",method:"POST",data:{...this.modulesPayload,amount:{subtotal:this.localAmountTotal,...this.amount,total:this.localAmountTotal,discount:0},items:this.ecomCart.data.items,...t}}).then((t=>{let{data:i}=t;return this.parseDiscountOptions(i.result)})).catch((t=>{console.error(t),this.alertVariant="danger",this.alertText=Object(a.a)(s.wb)})).finally((()=>{this.isLoading=!1}))},submitCoupon(t){if(t||this.canAddCoupon){const{localCouponCode:t}=this,i={discount_coupon:t};this.fetchDiscountOptions(i)}},updateDiscount(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.couponCode?!t&&this.isCouponApplied||this.submitCoupon(t):(t||!this.isUpdateSheduled&&this.amount&&this.localAmountTotal)&&this.fetchDiscountOptions()}},watch:{couponCode(t){t!==this.couponCode&&(this.localCouponCode=t,t&&!this.isFormVisible&&(this.isFormVisible=!0))},isFormAlwaysVisible(t){t&&(this.isFormVisible=!0)},isFormVisible(t){t&&this.$nextTick((()=>{this.$refs.input.focus()}))},localAmountTotal(t,i){null!==i&&Math.abs(t-i)>.01&&!this.isUpdateSheduled&&(this.isUpdateSheduled=!0,this.$nextTick((()=>{setTimeout((()=>{this.updateDiscount(),this.isUpdateSheduled=!1}),600)})))},amount:{handler(){this.fixAmount()},deep:!0}},mounted(){this.fixAmount(),this.updateDiscount(!1)}},u=c,d=(e(344),e(43)),h=Object(d.a)(u,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"discount-applier"},[t.hasCouponInput?[e("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[t.isFormVisible?e("form",{key:"form",staticClass:"discount-applier__form",on:{submit:function(i){return i.preventDefault(),t.submitCoupon.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"discount-applier-coupon"}},[t._v(" "+t._s(t.i19discountCoupon)+" ")]),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.localCouponCode,expression:"localCouponCode"}],ref:"input",staticClass:"form-control discount-applier__input",attrs:{type:"text",id:"discount-applier-coupon",required:"",readonly:t.isLoading,placeholder:t.i19code,"aria-label":t.i19code},domProps:{value:t.localCouponCode},on:{input:function(i){i.target.composing||(t.localCouponCode=i.target.value)}}}),e("div",{staticClass:"input-group-append"},[t.isLoading?e("span",{staticClass:"input-group-text"},[e("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}}),e("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t.canAddCoupon?e("button",{key:"add",staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[t._v(" "+t._s(t.i19add)+" ")]):e("button",{key:"applied",staticClass:"btn btn-outline-success",attrs:{disabled:"",type:"button"}},[e("i",{staticClass:"i-check-circle"})])])])])]):e("div",{key:"button"},[t.isAttentionWanted?e("h6",{staticClass:"discount-applier__intro"},[t._v(" "+t._s(t.i19hasCouponOrVoucherQn)+" ")]):t._e(),e("button",{staticClass:"discount-applier__coupon-btn btn btn-sm",class:"btn-"+(t.isAttentionWanted?"secondary":"light"),attrs:{type:"button"},on:{click:function(i){i.preventDefault(),t.isFormVisible=!t.isFormVisible}}},[e("i",{staticClass:"i-tag mr-1"}),t._v(" "+t._s(t.i19addDiscountCoupon)+" ")])])])]:t._e(),e("a-alert",{key:"alert-"+t.alertVariant,attrs:{"can-show":!t.isLoading&&Boolean(t.alertText),variant:t.alertVariant},on:{dismiss:function(i){t.alertText=null}}},[t._v(" "+t._s(t.alertText)+" ")])],2)}),[],!1,null,null,null);i.a=h.exports},344:function(t,i,e){"use strict";e(298)},345:function(t,i,e){(i=e(172)(!0)).push([t.i,".discount-applier{max-width:30rem}.discount-applier__intro{color:var(--secondary)}.discount-applier .alert,.discount-applier__form{margin-top:var(--spacer-3)}.discount-applier .alert{font-size:var(--font-size-sm)}.discount-applier__input{max-width:200px}","",{version:3,sources:["DiscountApplier.scss"],names:[],mappings:"AAAA,kBAAkB,eAAe,CAAC,yBAAyB,sBAAsB,CAAC,iDAAiD,0BAA0B,CAAC,yBAAyB,6BAA6B,CAAC,yBAAyB,eAAe",file:"DiscountApplier.scss",sourcesContent:[".discount-applier{max-width:30rem}.discount-applier__intro{color:var(--secondary)}.discount-applier .alert,.discount-applier__form{margin-top:var(--spacer-3)}.discount-applier .alert{font-size:var(--font-size-sm)}.discount-applier__input{max-width:200px}"]}]),t.exports=i}}]);