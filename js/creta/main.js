!function(e){var a={};function t(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="/",t(t.s=47)}({47:function(e,a,t){e.exports=t("Td31")},Td31:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("dwwU");$(function(){$.ajax({url:r.a.API.CAR_LIST,success:function(e){e&&e.cars&&(e.cars[22]?e.cars[22].minPrice&&e.cars[22].payment&&($("#price-from").text(e.cars[22].minPrice.toString().replace(/\D/g,"").replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g," ")),$("#credit-from").text(e.cars[22].payment.toString().replace(/\D/g,"").replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/g," "))):console.error("wrong car id 22")),$(".banner").addClass("isEntered")}});var e=new ScrollMagic.Controller;if($(window).outerWidth()>1262)var a=new ScrollMagic.Controller({globalSceneOptions:{offset:-48,triggerHook:"0"}});else a=new ScrollMagic.Controller({globalSceneOptions:{offset:-104,triggerHook:"0"}});e.scrollTo(function(e){$("html, body").animate({scrollTop:e})}),$("a.scroll").on("click",function(a){a.preventDefault();var t=$(this).attr("href");$(window).outerWidth()>1262?e.scrollTo($(t).offset().top-47):e.scrollTo($(t).offset().top-103)});var t=new ScrollMagic.Scene({triggerElement:"#design"}).addTo(a);t.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#design"]').addClass("active"),c()}),t.on("leave",function(e){$("a.scroll").removeClass("active"),c()});var o=new ScrollMagic.Scene({triggerElement:"#dynamics"}).addTo(a);o.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#dynamics"]').addClass("active"),c()}),o.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#design"]').addClass("active"),c()});var n=new ScrollMagic.Scene({triggerElement:"#comfort"}).addTo(a);n.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#comfort"]').addClass("active"),c()}),n.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#dynamics"]').addClass("active"),c()});var s=new ScrollMagic.Scene({triggerElement:"#safety"}).addTo(a);s.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#safety"]').addClass("active"),c()}),s.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#comfort"]').addClass("active"),c()});var i=new ScrollMagic.Scene({triggerElement:"#specs"}).addTo(a);function c(){var e=$("a.scroll.active"),a=$(window).width(),t=$(".nav").scrollLeft();e.length>0&&(e.offset().left<t||e.offset().left+e.width()>=a)&&($(".nav").animate({scrollLeft:e.position().left}),console.log(e.position().left))}i.on("enter",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#specs"]').addClass("active"),c()}),i.on("leave",function(e){$("a.scroll").removeClass("active"),$('a.scroll[href="#safety"]').addClass("active"),c()}),$.extend($.lazyLoadXT,{edgeY:500});var l,d=new ScrollMagic.Scene({triggerElement:".nav",duration:"0",triggerHook:"0"}).setPin(".nav").addTo(e);function p(){$(window).outerWidth()<1263?d.offset(-56):d.offset(0)}function u(){$(window).outerWidth()>1262?(l&&l.destroy(),l=new Rellax(".s-parallax__list--right",{center:!0,speed:5}),$(".s-parallax").each(function(){$(this).find(".s-parallax__list--right").append($(this).find(".s-parallax__list--right").prev(".s-parallax__list--left").find(".s-parallax__item--right"))})):(l&&l.destroy(),$(".s-parallax").each(function(){$(this).find(".s-parallax__list--left").append($(this).find(".s-parallax__list--left").next(".s-parallax__list--right").find(".s-parallax__item"))}));$(".s-parallax__item").each(function(){$(this).data("order")&&$(this).css("order",$(this).data("order"))})}$(window).on("resize",function(){p()}),p(),$(window).on("resize",function(){u()}),u(),new TimelineMax({repeat:-1,yoyo:!0,repeatDelay:1}).staggerFrom(".design .s-parallax__bg",.3,{opacity:0},3),new TimelineMax({repeat:-1,yoyo:!0,repeatDelay:1}).staggerFrom(".comfort .s-parallax__bg",.3,{opacity:0},3);var f={score:0,update:function(){$("#count1").text(this.score)}},g={score:0,update:function(){$("#count2").text(this.score)}},v={score:0,update:function(){$("#count3").text(this.score)}},m={score:0,update:function(){$("#count4").text(this.score)}},C=new TimelineMax({paused:!0}),S=new TimelineMax({paused:!0});C.add("start").to(f,2,{score:"+=123",roundProps:"score",onUpdate:f.update.bind(f),ease:Linear.easeNone},"start").to(g,2,{score:"+=10",roundProps:"score",onUpdate:g.update.bind(g),ease:Linear.easeNone},"start"),S.add("start").to(v,2,{score:"+=149",roundProps:"score",onUpdate:v.update.bind(v),ease:Linear.easeNone},"start").to(m,2,{score:"+=10",roundProps:"score",onUpdate:m.update.bind(m),ease:Linear.easeNone},"start"),$(".js-change-view").on("click",function(e){e.preventDefault();var a=$(this).data("view");$(".js-change-view").each(function(){$(this).parents(".dynamics").removeClass($(this).data("view"))}).removeClass("active"),$(this).addClass("active"),$(this).parents(".dynamics").addClass(a),"view1"===a&&S.play()});var _=new ScrollMagic.Scene({triggerElement:".dynamics--1",duration:"0",triggerHook:"0.45"}).addTo(e);_.on("enter",function(e){$(".dynamics--1").addClass("isEntered"),_.destroy()});var T=new ScrollMagic.Scene({triggerElement:".dynamics--1",duration:$(".dynamics--1").height(),triggerHook:"0.5"}).addTo(e);T.on("enter",function(e){C.play()}),T.on("leave",function(e){C.kill()});var y=new ScrollMagic.Scene({triggerElement:".dynamics--2",duration:$(".dynamics--2").height(),triggerHook:"0.5"}).addTo(e);y.on("enter",function(e){}),y.on("leave",function(e){});var h=new ScrollMagic.Scene({triggerElement:".safety--1",duration:"0",triggerHook:"0.45"}).addTo(e);h.on("enter",function(e){$(".safety--1").addClass("isEntered"),h.destroy()}),new ScrollMagic.Scene({triggerElement:".safety--2",duration:"0",triggerHook:"0.45"}).addTo(e).on("enter",function(e){$(".safety--2").addClass("isEntered"),h.destroy()}),new ScrollMagic.Scene({triggerElement:".safety--3",duration:"0",triggerHook:"0.45"}).addTo(e).on("enter",function(e){$(".safety--3").addClass("isEntered"),h.destroy()}),new ScrollMagic.Scene({triggerElement:".safety--4",duration:"0",triggerHook:"0.45"}).addTo(e).on("enter",function(e){$(".safety--4").addClass("isEntered"),h.destroy()})})},dwwU:function(e,a,t){"use strict";var r="https://api.cofigurator.hyundai.ru/";a.a={openFindDealerPopup:!1,openSendDealerPopup:!1,openOfferCreditPopup:!1,openBackCallPopup:!1,openEventPopup:!1,openCheckoutEventPopup:!1,openTestDrivePopup:!1,openSendEmailPopup:!1,openSendApprovalPopup:!1,openRules:!1,openSuccess:!1,API:{CAR:r+"car/",CAR_LIST:r+"carList",CAR_LIST2:"/api/carList",CAR_LIST3:"/ajax/getServiceJSON",CAR_MODIFICATIONS:r+"car/modifications/",CAR_COMPLECTATIONS:r+"car/complectations/",DEALERS_LIST:"/requestapi/getDealers?notest=1",GET_DEALERS_CREDIT:r+"dealersCredit",ENGINES_LIST:"/ajax/getServiceJSON",TO_CALC_COST:"/ajax/calculator",START_CALC_COST:r+"credit/startNew/",CHECK_VIN:"/api/service/checkVin",CONTACT_FORM:"/api/send/servicerequest",OFFER_CREDIT_FORM:"/api/send/offercreditrequest",START_CONTACT_FORM:"/api/send/start",SERVICE_FORM:"/api/send/servicerequest",TD_FORM:"/api/send/testdrive",CONTACT_US_FORM:"/api/send/contactus",MOTORSTUDIO_CHECKOUT_FORM:"/api/send/motorstudio_request",VACANCY_FORM:"/api/send/jobseeker",NEW_EVENT_MOTORSTUDION_FORM:"/api/send/eventRequest"},car:{code:"",id:0,image:"",link:"",name:""},savedModel:"",engine:"",vEngine:"",mileage:15,user:{phone:""},engines:{},vEngines:[],city:"",dealer:"",cost:{works:"0 &#8381;",parts:"0 &#8381;",total:"0 &#8381;"},data:[],dataEngines:[],dealersData:[],dealers:[],dealersCities:[],selectedEvents:[],selectedEvent:0,start:{carcaseList:[],modelsList:[],currentCar:{name:"",id:0},currentCarSpec:{name:""},modificationList:{},modification:{name:""},dataModifications:{},complectationList:{},complectation:{name:"",price:0},dataComplectations:{},packets:{},selectedPackets:[],activeColorObj:{nameRus:"",cost:"",carImage:""},activeColor:0,colorsAPI:{},prevColor:0,spritespin:{},selectedPrograms:[],currentTerm:36,includeKASKO:!1,compareSelected:"",creditPack:{pay:0,prepay:0,prepayRub:0,sum:0,addCost:0,lastPay:0},openMobileLine:!1},dealerCars:{carId:0},tradein:{currentCar:null,sendUrl:"",state:{step1:!1,step2:!1,step3:!1},step2:{brand:"",model:"",age:"",year:"",complectation:"",body:"",condition:"",milleage:void 0,vin:""},step3:{name:"",surname:"",patronymic:"",tel:"",email:"",city:""}}}}});