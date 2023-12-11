(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{174:function(t,e,s){"use strict";s(190)},175:function(t,e,s){"use strict";s.d(e,"b",(function(){return o})),s.d(e,"a",(function(){return a}));s(4);var i=s(26);const o=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.a;const s=e.getCustomer().favorites||[],o=a(t,e);if(o){const e=s.indexOf(t);s.splice(e,1)}else s.push(t);return e.requestApi("/me.json","patch",{favorites:s}),!o},a=(t,e)=>{const{favorites:s}=e.getCustomer();return s&&s.includes(t)}},176:function(t,e,s){"use strict";e.a=(t,e)=>new Promise((s=>{const i="object"==typeof window&&window.storefront;if(i){const o=()=>{let o=i.info&&i.info[t];return!!(o&&(e&&(o=o[e]),o&&Object.keys(o).length))&&(s(o),!0)};o()||i.on(`info:${t}`,o)}}))},187:function(t,e,s){"use strict";var i={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((t=>{let{path:e}=t;return e===this.href}))))}}},o=s(43),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},188:function(t,e,s){"use strict";var i=s(24),o=s(34),a=s(27),n=s(35),r=s(71),c=s(176);const l=(t,e)=>{const{type:s,value:i}=e;let o;if(i)return o="percentage"===s?t*(100-i)/100:t-i,o>0?o:0};var u={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""},canShowPriceOptions:{type:Boolean,default:!0}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0,min_amount:0},discountLabel:this.discountText,pointsProgramName:null,pointsMinPrice:0,earnPointsFactor:0}},computed:{i19asOf:()=>Object(o.a)(i.r),i19from:()=>Object(o.a)(i.Gb),i19interestFree:()=>Object(o.a)(i.Ub),i19of:()=>Object(o.a)(i.Ec),i19to:()=>Object(o.a)(i.be),i19upTo:()=>Object(o.a)(i.me),i19youEarn:()=>Object(o.a)(i.ue),price(){const t=Object(a.a)(this.product);return this.extraDiscount.value&&(!this.extraDiscount.min_amount||t>this.extraDiscount.min_amount)?l(t,this.extraDiscount):t},comparePrice(){return Object(n.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(a.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const e=Object(a.a)(this.product);for(let s=0;s<t.length;s++){if(Object(a.a)({...this.product,...t[s]})>e)return!0}}return!1},priceWithDiscount(){return this.canShowPriceOptions&&l(this.price,this.discount)},installmentValue(){if(this.canShowPriceOptions&&this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:r.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,s=parseInt(this.price/e,10);this.installmentsNumber=Math.min(s,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel=`via ${t.label}`))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){this.canShowPriceOptions&&(this.discountOption?this.updateDiscount(this.discountOption):Object(c.a)("apply_discount").then((t=>{t.available_extra_discount&&(this.extraDiscount=t.available_extra_discount)})),this.installmentsOption?this.updateInstallments(this.installmentsOption):Object(c.a)("list_payments").then((t=>{this.updateInstallments(t.installments_option),this.updateDiscount(t.discount_option);const e=t.loyalty_points_programs;this.isLiteral&&e&&this.$nextTick((()=>{for(const t in e){const s=e[t];if(s&&s.earn_percentage>0){this.pointsMinPrice=s.min_subtotal_to_earn,this.pointsProgramName=s.name,this.earnPointsFactor=s.earn_percentage/100;break}}}))})))}},d=(s(174),s(43)),h=Object(d.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?s("span",{staticClass:"prices__compare"},[t.isLiteral?[s("small",[t._v(" "+t._s(t.i19from)+" ")]),s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),s("small",[t._v(" "+t._s(t.i19to)+" ")])]:s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),s("strong",{staticClass:"prices__value"},[t.hasVariedPrices?s("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" ")]),s("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.earnPointsFactor>0&&!(t.pointsMinPrice>t.price)?s("div",{key:"points",staticClass:"prices__points"},[s("i",{staticClass:"i-check-circle"}),t._v(" "+t._s(t.i19youEarn)+" "),s("span",[t._v(" +"+t._s((t.earnPointsFactor*t.price).toFixed(1))+" ")]),s("em",[t._v(t._s(t.pointsProgramName))])]):t._e(),t.installmentsNumber>1&&t.installmentValue?s("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?s("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?s("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),s("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?s("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?s("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),s("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[s("small",[t._v(" "+t._s(t.i19asOf)+" ")]),s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=h.exports},189:function(t,e,s){"use strict";s(4);var i=s(23),o=s(86),a=s(41);var n={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[i.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],imgWidth:0,imgHeight:0,height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(o.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:s}=this;if(s)return s;const i="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return i?i.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:s}=this;return t||(e?s.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:s}=this.$el,i=((t,e,s,i)=>{let o,a;for(const n in i){const r=i[n];if(void 0!==r&&t[n]){if(void 0!==a)if(null===r){if(a>=e)continue}else if(r<e||r-50<=s||null!==a&&r>a)continue;o=n,a=r}}return o})(this.src,t,s,this.containerBreakpoints),o=this.src[i],{url:a,size:n}=o||this.defaultImgObj;e=a,n&&([this.imgWidth,this.imgHeight]=n.split("x").map((t=>parseInt(t,10))),t&&this.imgHeight&&this.canCalcHeight&&(this.height=(t>=this.imgWidth?this.imgHeight:t*this.imgHeight/this.imgWidth)+"px"))}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/"+(".png"===e.substr(-9,4)?"png":"jpeg")}):e.endsWith(".avif")?t.push({srcset:e,type:"image/avif"},{srcset:e.replace(".avif",".webp"),type:"image/webp"}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(a.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,s="IMG"===t.tagName?t:t.lastChild;s.style.opacity=0,this.imgHeight&&(s.height=this.imgHeight,s.width=this.imgWidth),s.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const s=document.createElement("IMG");s.src=e,t.parentNode.insertBefore(s,t.nextSibling)},s.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=s.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},r=(s(174),s(43)),c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var i=t.srcset,o=t.type;return s("source",{key:e,attrs:{srcset:i,type:o}})})):s("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},190:function(t,e,s){var i=s(217);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(173).default)("083be3a1",i,!0,{})},191:function(t,e,s){"use strict";var i=s(177),o=s(24),a=s(34),n=s(27),r=s(21),c=s(73),l=s(35),u=s(25),d=s(2),h=s(5),p=s(187),m=s(189),b=s(188),g=s(26),_=s(175);const f=(t,e)=>{if("object"==typeof window){t=`productCard${t}Html`;const s="function"==typeof window[t]?window[t](e):window[t];if("string"==typeof s)return s}};var y={name:"ProductCard",components:{ALink:p.a,APicture:m.a,APrices:b.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},ecomPassport:{type:Object,default:()=>g.a},accountUrl:{type:String,default:"/app/#/account/"},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,isFavorite:!1,error:""}),computed:{i19addToFavorites:()=>Object(a.a)(o.m),i19outOfStock:()=>Object(a.a)(o.Qc),i19unavailable:()=>Object(a.a)(o.he),i19uponRequest:()=>"Sob consulta",isWithoutPrice(){return!Object(n.a)(this.body)},ratingHtml(){return f("Rating",this.body)},buyHtml(){return f("Buy",this.body)},footerHtml(){return f("Footer",this.body)},name(){return Object(r.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(a.a)(o.z)},isInStock(){return Object(c.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},isLogged:()=>g.a.checkAuthorization(),discount(){const{body:t}=this;return Object(l.a)(t)?Math.round(100*(t.base_price-Object(n.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records,this.isFavorite=Object(_.a)(this.body._id,this.ecomPassport)},fetchItem(){this.productId&&(this.isLoading=!0,Object(d.g)({url:`/products/${this.productId}.json`}).then((t=>{let{data:e}=t;this.$emit("update:product",e),this.setBody(e),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(a.a)(o.W))})).finally((()=>{this.isLoading=!1})))},toggleFavorite(){this.isLogged&&(this.isFavorite=Object(_.b)(this.body._id,this.ecomPassport))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(d.g)({url:`/products/${t._id}.json`}).then((e=>{let{data:i}=e;const o=["variations","customizations","kit_composition"];for(let t=0;t<o.length;t++){const e=i[o[t]];if(e&&e.length)return Promise.all([s.e(0),s.e(2),s.e(5),s.e(18),s.e(25)]).then(s.bind(null,404)).then((t=>{new u.a({render:e=>e(t.default,{props:{product:i}})}).$mount(this.$refs.quickview)}))}const{quantity:a,price:n}=i;h.a.addProduct({...t,quantity:a,price:n})})).catch((e=>{console.error(e),window.location=`/${t.slug}`})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},v=(s(174),s(43)),A=Object(v.a)(y,i.a,i.b,!1,null,null,null);e.a=A.exports},217:function(t,e,s){(e=s(172)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"empty.scss"}]),t.exports=e},219:function(t,e,s){"use strict";s.r(e);var i=s(27),o=s(71),a=s(81),n=s(2),r=s(5),c=s(51),l=s(188),u=s(191);const d="object"==typeof window&&window.storefront||{};var h={name:"BuyTogether",components:{APrices:l.a,ProductCard:u.a},props:{baseProduct:{type:Object,default:()=>d.context&&d.context.body||{}},ecomCart:{type:Object,default:()=>r.a},productCardProps:{type:Object,default:()=>({isSmall:!0})},fallbackMatchType:{type:String,default:"object"==typeof window&&window.ecomRecommendationsType||"recommended"}},data:()=>({ecomSearch:(new c.a).mergeFilter({range:{quantity:{gt:0}}}).mergeFilter({term:{available:!0}}),hasLoadedIds:!1,hasLoadedItems:!1,productQnts:{},recommendedItems:[],discount:0,discountType:"fixed",discountValue:0}),computed:{i19buyTogether:()=>"Compre junto",i19buyTogetherWith:()=>"Compre junto com",items(){return[this.baseProduct,...this.recommendedItems]},productIds(){return Object.keys(this.productQnts)},relatedProducts(){const t=this.baseProduct.related_products&&this.baseProduct.related_products[0];return t&&t.product_ids.length?t.product_ids:[]},subtotal(){return this.items.reduce(((t,e)=>t+(this.productQnts[e._id]||1)*Object(i.a)(e)),0)},canAddToCart(){return!this.items.find((t=>t.variations||t.customizations||t.kit_composition))}},methods:{formatMoney:o.a,buy(){const t=(this.subtotal-this.discount)/this.subtotal;this.items.forEach((e=>{const s=this.ecomCart.parseProduct({...e,base_price:Object(i.a)(e),price:Object(i.a)(e)*t,price_effective_date:{}});s.quantity=this.productQnts[e._id]||1,s.keep_item_quantity=!0,this.ecomCart.addItem(s)}))},calcDiscount(){"fixed"===this.discountType?this.discount=this.discountValue:this.discount=this.subtotal*this.discountValue/100},setProductQnts(t){if(t.length){const e={};t.slice(0,3).forEach((t=>{e[t]=1})),this.productQnts=e}},fetchItems(){this.productIds.length?(this.ecomSearch.setProductIds(this.productIds),delete this.ecomSearch.dsl.aggs,this.ecomSearch.fetch().then((()=>{this.recommendedItems=this.recommendedItems.concat(this.ecomSearch.getItems())})).finally((()=>{this.hasLoadedItems=!0}))):this.hasLoadedItems=!0}},watch:{subtotal:{handler(t,e){t!==e&&this.calcDiscount()},immediate:!0}},created(){if(this.baseProduct&&this.baseProduct._id){const t=r.a.parseProduct((t=>{const e=Object.assign({},t);return delete e.body_html,delete e.body_text,delete e.specifications,delete e.inventory_records,delete e.price_change_records,e})(this.baseProduct)),e=Object(i.a)(t)*t.quantity;Object(n.c)({url:"/apply_discount.json",method:"POST",data:{amount:{subtotal:e,total:e,discount:0},items:[t]}}).then((t=>{let{data:e}=t;for(let t=0;t<e.result.length;t++){const{validated:s,error:i,response:o}=e.result[t];if(s&&!i&&o.buy_together){const t=o.buy_together.sort(((t,e)=>t.products&&t.products.length?e.products&&e.products.length?t.products.length<=e.products.length&&t.discount.value>=e.discount.value?-1:0:-1:1));if(t[0]){const{products:e,discount:s}=t[0];this.productQnts=e||[],this.discountType=s.type,this.discountValue=s.value,this.$nextTick((()=>{this.calcDiscount()}))}}}})).finally((()=>{this.hasLoadedIds=!0,this.$nextTick((()=>{this.productIds.length?this.fetchItems():this.relatedProducts.length?(this.setProductQnts(this.relatedProducts),this.fetchItems()):this.fallbackMatchType&&Object(n.b)({url:`/products/${this.baseProduct._id}/${this.fallbackMatchType}.json`}).then((t=>{let{data:e}=t;this.setProductQnts(Object(a.a)(e)),this.$nextTick((()=>{this.fetchItems()}))}))}))}))}}},p=(s(334),s(43)),m=Object(p.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"buy-together"},[s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.hasLoadedItems&&t.recommendedItems.length?s("div",[s("div",{staticClass:"buy-together__title"},[s("div",{staticClass:"buy-together__discount lead mb-3"},[t._v(" "+t._s(t.i19buyTogether)+" "),t.discount?s("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(t.formatMoney(t.discount))+" "),s("span",[t._v("OFF")])]):t._e()])]),s("div",{staticClass:"buy-together__row row"},[s("div",{staticClass:"col-12",class:t.productIds.length>1?"col-md":"col-md-6 col-lg-4"},[s("div",{staticClass:"row"},t._l(t.items,(function(e){return t.items.length?s("div",{key:e._id,staticClass:"buy-together__item col-12",class:"col-md-"+12/t.items.length},[s("product-card",t._b({attrs:{product:e,productId:e._id,"is-loaded":!0}},"product-card",t.productCardProps,!1))],1):t._e()})),0)]),s("div",{staticClass:"buy-together__cta col-auto"},[s("a-prices",{attrs:{product:{price:t.subtotal-t.discount,base_price:t.subtotal},"is-literal":!0,"is-big":!0}}),t.canAddToCart?s("button",{staticClass:"btn btn-lg btn-primary mt-3",on:{click:t.buy}},[s("i",{staticClass:"i-shopping-basket mr-1"}),t._v(" "+t._s(t.i19buyTogether)+" ")]):t._e()],1)])]):t._e()]),s("transition",{attrs:{"leave-active-class":"animated fadeOut"}},[t.hasLoadedItems?t._e():t._t("default")],2)],1)}),[],!1,null,null,null);e.default=m.exports},293:function(t,e,s){var i=s(335);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(173).default)("718c747a",i,!0,{})},334:function(t,e,s){"use strict";s(293)},335:function(t,e,s){(e=s(172)(!0)).push([t.i,'.buy-together__title{text-align:center}.buy-together__row{align-items:center;justify-content:center}.buy-together__item{margin:0 auto;max-width:275px;padding-bottom:2rem!important}.buy-together__item:after{content:"+";font-size:1.5rem;position:absolute;right:50%}.buy-together__item:last-child:after{content:"="}@media(min-width:767px){.buy-together__item{max-width:none;padding-left:var(--spacer-2);padding-right:var(--spacer-2)}.buy-together__item:after{right:0;top:50%}}',"",{version:3,sources:["BuyTogether.scss"],names:[],mappings:"AAAA,qBAAqB,iBAAiB,CAAC,mBAAmB,kBAAkB,CAAC,sBAAsB,CAAC,oBAAoB,aAAa,CAAC,eAAe,CAAC,6BAA6B,CAAC,0BAA0B,WAAW,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,SAAS,CAAC,qCAAqC,WAAW,CAAC,wBAAwB,oBAAoB,cAAc,CAAC,4BAA4B,CAAC,6BAA6B,CAAC,0BAA0B,OAAO,CAAC,OAAO,CAAC",file:"BuyTogether.scss",sourcesContent:['.buy-together__title{text-align:center}.buy-together__row{align-items:center;justify-content:center}.buy-together__item{margin:0 auto;max-width:275px;padding-bottom:2rem!important}.buy-together__item:after{content:"+";font-size:1.5rem;position:absolute;right:50%}.buy-together__item:last-child:after{content:"="}@media(min-width:767px){.buy-together__item{max-width:none;padding-left:var(--spacer-2);padding-right:var(--spacer-2)}.buy-together__item:after{right:0;top:50%}}']}]),t.exports=e}}]);