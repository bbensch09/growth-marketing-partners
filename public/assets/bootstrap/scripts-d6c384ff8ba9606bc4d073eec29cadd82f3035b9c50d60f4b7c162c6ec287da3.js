function Alkaline(){_topNav(),_maximageSlider(),_animate(),_owl_carousel(),_popover(),_lightbox(),_scrollTo(),_isotope(),_toggle(),_placeholder(),_niceScroll(),_lazyImage(),jQuery("a[data-toggle=tooltip]").tooltip(),jQuery("#maximage").length<1&&jQuery("body").fitVids(),jQuery().slider&&jQuery(".price-slider").length>0&&jQuery("#Slider2").slider(slider_config)}function _topNav(){var e=!1;jQuery("button.btn-mobile").bind("click",function(){if(jQuery("#header .navbar-collapse").hasClass("in"))return jQuery("#header .navbar-collapse").removeClass("in"),!1}),jQuery("#topMain li.dropdown > a, #topMain li.dropdown-submenu > a").bind("click",function(t){t.preventDefault(),jQuery(window).width()>979||(e=jQuery(this).parent().hasClass("resp-active"),jQuery("#topMain").find(".resp-active").removeClass("resp-active"),e||jQuery(this).parents("li").addClass("resp-active"))}),jQuery("button.btn-mobile").bind("click",function(){_reset()}),jQuery("div.topShopCart").bind("click",function(){var e=jQuery("#topCart");_reset(),e.is(":visible")?(e.fadeOut(150),_overlay("remove")):(e.fadeIn(150),_overlay("append"))}),jQuery("button.topSearchBtn").bind("click",function(){var e=jQuery("#topSearch");_reset(),e.is(":visible")?(e.fadeOut(150),_overlay("remove")):(e.fadeIn(150),_overlay("append"))}),jQuery(document).keydown(function(e){var t=e.keyCode?e.keyCode:e.which;27==t&&_reset()})}function _maximageSlider(){jQuery("#slider").length>0&&(jQuery("#slider").maximage({cycleOptions:{fx:"fade",speed:1e3,timeout:0,prev:"#slider_prev",next:"#slider_next",pause:1,before:function(e,t){is_msie||jQuery(t).find("video").length>0&&jQuery(t).find("video")[0].play()},after:function(e){is_msie||jQuery(e).find("video").length>0&&jQuery(e).find("video")[0].pause()}},onFirstImageLoaded:function(){jQuery("#cycle-loader").hide(),jQuery("#slider").fadeIn("fast")}}),jQuery("video,object").maximage("maxcover"),jQuery(".in-slide-content").delay(1200).fadeIn())}function _overlay(e){"append"==e?(jQuery("#overlay").remove(),jQuery("body").append('<div id="overlay"></div>'),jQuery(this).fadeIn(500),jQuery("#overlay").fadeIn(),_overlayResetBind()):jQuery("#overlay").fadeOut(500,function(){jQuery(this).remove()})}function _overlayResetBind(){jQuery("#overlay").bind("click",function(){_reset()})}function _reset(){var e=jQuery("#topCart");e.is(":visible")&&(e.fadeOut(150),_overlay("remove"));var t=jQuery(".centerBox");t.is(":visible")&&(t.fadeOut(150),_overlay("remove"));var e=jQuery("#topSearch");e.is(":visible")&&(e.fadeOut(150),_overlay("remove")),jQuery("#header .navbar-collapse").hasClass("in")&&jQuery("#header .navbar-collapse").removeClass("in")}function _animate(){jQuery("[data-appear-progress-animation]").each(function(){var e=jQuery(this);jQuery(window).width()>767?e.appear(function(){_delay=1,e.attr("data-appear-progress-animation-delay")&&(_delay=e.attr("data-appear-progress-animation-delay")),_delay>1&&e.css("animation-delay",_delay+"ms"),e.addClass(e.attr("data-appear-progress-animation")),setTimeout(function(){e.addClass("animation-visible")},_delay)},{accX:0,accY:-150}):e.addClass("animation-visible")}),jQuery("[data-appear-progress-animation]").each(function(){var e=jQuery(this);e.appear(function(){var t=e.attr("data-appear-animation-delay")?e.attr("data-appear-animation-delay"):1;t>1&&e.css("animation-delay",t+"ms"),e.addClass(e.attr("data-appear-animation")),setTimeout(function(){e.animate({width:e.attr("data-appear-progress-animation")},1e3,"easeOutQuad",function(){e.find(".progress-bar-tooltip").animate({opacity:1},500,"easeOutQuad")})},t)},{accX:0,accY:-50})}),jQuery(".countTo [data-to]").each(function(){var e=jQuery(this);e.appear(function(){e.countTo()},{accX:0,accY:-150})}),jQuery().knob&&jQuery(".knob").knob(),jQuery(".animate_from_top").each(function(){jQuery(this).appear(function(){jQuery(this).delay(150).animate({opacity:1,top:"0px"},1e3)})}),jQuery(".animate_from_bottom").each(function(){jQuery(this).appear(function(){jQuery(this).delay(150).animate({opacity:1,bottom:"0px"},1e3)})}),jQuery(".animate_from_left").each(function(){jQuery(this).appear(function(){jQuery(this).delay(150).animate({opacity:1,left:"0px"},1e3)})}),jQuery(".animate_from_right").each(function(){jQuery(this).appear(function(){jQuery(this).delay(150).animate({opacity:1,right:"0px"},1e3)})}),jQuery(".animate_fade_in").each(function(){jQuery(this).appear(function(){jQuery(this).delay(350).animate({opacity:1,right:"0px"},1e3)})})}function _owl_carousel(){jQuery("div.owl-carousel").length;jQuery("div.owl-carousel").each(function(){var e=jQuery(this),t=e.attr("data-plugin-options"),a={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[980,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!0,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:window,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,transitionStyle:!1,addClassActive:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1},o=jQuery.extend({},a,t,e.data("plugin-options"));e.owlCarousel(o).addClass("owl-carousel-init")})}function _popover(){jQuery("a[data-toggle=popover]").bind("click",function(e){e.preventDefault()});var e=!1,t=!1;jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover({html:!0,trigger:"manual"}).click(function(a){jQuery(this).popover("show"),jQuery(".popover-title").append('<button type="button" class="close">&times;</button>'),t=!1,e=!0,a.preventDefault()}),jQuery(document).click(function(){e&t?(jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover("hide"),e=t=!1):t=!0}),jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover({html:!0,trigger:"manual"}).click(function(e){$(this).popover("show"),$(".popover-title").append('<button type="button" class="close">&times;</button>'),$(".close").click(function(){jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover("hide")}),e.preventDefault()})}function _lightbox(){return"undefined"!=typeof jQuery.magnificPopup&&(jQuery.extend(!0,jQuery.magnificPopup.defaults,{tClose:"Close",tLoading:"Loading...",gallery:{tPrev:"Previous",tNext:"Next",tCounter:"%curr% / %total%"},image:{tError:"Image not loaded!"},ajax:{tError:"Content not loaded!"}}),void jQuery(".lightbox").each(function(){var e=jQuery(this),t=e.attr("data-plugin-options"),a={},o={type:"image",fixedContentPos:!1,fixedBgPos:!1,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},zoom:{enabled:!1,duration:300},gallery:{enabled:!1,navigateByImgClick:!0,preload:[0,1],arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',tPrev:"Previou",tNext:"Next",tCounter:'<span class="mfp-counter">%curr% / %total%</span>'}};e.data("plugin-options")&&(a=jQuery.extend({},o,t,e.data("plugin-options"))),jQuery(this).magnificPopup(a)}))}function _scrollTo(){jQuery("a.scrollTo").bind("click",function(e){e.preventDefault();var t=jQuery(this).attr("href");"#"!=t&&jQuery("html,body").animate({scrollTop:jQuery(t).offset().top-60},1e3,"easeInOutExpo")}),jQuery("a.toTop").bind("click",function(e){e.preventDefault(),jQuery("html,body").animate({scrollTop:0},1e3,"easeInOutExpo")})}function _isotope(){jQuery("ul.isotope-filter").each(function(){var e=jQuery(this),t=jQuery("ul.sort-destination[data-sort-id="+jQuery(this).attr("data-sort-id")+"]");t.get(0)&&jQuery(window).load(function(){t.isotope({itemSelector:"li",layoutMode:"sloppyMasonry"}),e.find("a").click(function(a){a.preventDefault();var o=jQuery(this),r=o.parents(".sort-source").attr("data-sort-id"),i=o.parent().attr("data-option-value");return e.find("li.active").removeClass("active"),o.parent().addClass("active"),t.isotope({filter:i}),jQuery(".sort-source-title[data-sort-id="+r+"] strong").html(o.html()),!1})})}),jQuery(window).load(function(){jQuery("ul.isotope").addClass("fadeIn")})}function _toggle(){var e=25;jQuery("div.toggle.active > p").addClass("preview-active"),jQuery("div.toggle.active > div.toggle-content").slideDown(400),jQuery("div.toggle > label").click(function(t){var a=jQuery(this).parent(),o=jQuery(this).parents("div.toogle"),r=!1,i=o.hasClass("toogle-accordion");if(i&&"undefined"!=typeof t.originalEvent&&o.find("div.toggle.active > label").trigger("click"),a.toggleClass("active"),a.find("> p").get(0)){r=a.find("> p");var n=r.css("height"),l=r.css("height");r.css("height","auto"),r.css("height",n)}var s=a.find("> div.toggle-content");a.hasClass("active")?(jQuery(r).animate({height:l},350,function(){jQuery(this).addClass("preview-active")}),s.slideDown(350)):(jQuery(r).animate({height:e},350,function(){jQuery(this).removeClass("preview-active")}),s.slideUp(350))})}function _placeholder(){navigator.appVersion.indexOf("MSIE")!=-1&&jQuery("[placeholder]").focus(function(){var e=jQuery(this);e.val()==e.attr("placeholder")&&(e.val(""),e.removeClass("placeholder"))}).blur(function(){var e=jQuery(this);""!=e.val()&&e.val()!=e.attr("placeholder")||(e.addClass("placeholder"),e.val(e.attr("placeholder")))}).blur()}function contactMap(){var e=new google.maps.LatLng($googlemap_latitude,$googlemap_longitude),t={zoom:$googlemap_zoom,center:e,disableDefaultUI:!1,navigationControl:!1,mapTypeControl:!1,scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP},a=new google.maps.Map(document.getElementById("gmap"),t);google.maps.event.trigger(a,"resize"),a.setZoom(a.getZoom());var o=new google.maps.Marker({icon:"data:image/png;base64,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",position:e,map:a,title:""});o.setMap(a),google.maps.event.addListener(o,"click",function(){}),google.maps.event.addDomListener(window,"resize",function(){a.setCenter(e)})}function showMap(e){var t=document.createElement("script");t.type="text/javascript",t.src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&callback="+e,document.body.appendChild(t)}function _niceScroll(){jQuery().niceScroll&&jQuery(".nicescroll").niceScroll({scrollspeed:60,mousescrollstep:35,cursorborder:0,cursorcolor:"rgba(0,0,0,.6)",horizrailenabled:!1,zindex:99999,autohidemode:!1,cursorwidth:8})}function _lazyImage(){jQuery().lazyload&&jQuery("img.lazy").lazyload({effect:"fadeIn"})}function wheel(e){e.preventDefault()}function disable_scroll(){window.addEventListener&&window.addEventListener("DOMMouseScroll",wheel,!1),window.onmousewheel=document.onmousewheel=wheel}function enable_scroll(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",wheel,!1),window.onmousewheel=document.onmousewheel=document.onkeydown=null}var is_msie=navigator.appVersion.indexOf("MSIE")!=-1;jQuery(window).ready(function(){Alkaline()}),jQuery("#gmap").length>0&&showMap("contactMap"),function(e){function t(e,t){return e.toFixed(t.decimals)}e.fn.countTo=function(t){return t=t||{},jQuery(this).each(function(){function a(){d+=n,u++,o(d),"function"==typeof r.onUpdate&&r.onUpdate.call(l,d),u>=i&&(s.removeData("countTo"),clearInterval(c.interval),d=r.to,"function"==typeof r.onComplete&&r.onComplete.call(l,d))}function o(e){var t=r.formatter.call(l,e,r);s.html(t)}var r=jQuery.extend({},e.fn.countTo.defaults,{from:jQuery(this).data("from"),to:jQuery(this).data("to"),speed:jQuery(this).data("speed"),refreshInterval:jQuery(this).data("refresh-interval"),decimals:jQuery(this).data("decimals")},t),i=Math.ceil(r.speed/r.refreshInterval),n=(r.to-r.from)/i,l=this,s=jQuery(this),u=0,d=r.from,c=s.data("countTo")||{};s.data("countTo",c),c.interval&&clearInterval(c.interval),c.interval=setInterval(a,r.refreshInterval),o(d)})},e.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:t,onUpdate:null,onComplete:null}}(jQuery),function(e){"use strict";e.fn.fitVids=function(e){var t={customSelector:null};if(!document.getElementById("fit-vids-style")){var a=document.createElement("div"),o=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];a.className="fit-vids-style",a.id="fit-vids-style",a.style.display="none",a.innerHTML="&shy;<style>         \t\t\t.fluid-width-video-wrapper {        \t\t\t   width: 100%;                     \t\t\t   position: relative;              \t\t\t   padding: 0;                      \t\t\t}                                   \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.fluid-width-video-wrapper iframe,  \t\t\t.fluid-width-video-wrapper object,  \t\t\t.fluid-width-video-wrapper embed {  \t\t\t   position: absolute;              \t\t\t   top: 0;                          \t\t\t   left: 0;                         \t\t\t   width: 100%;                     \t\t\t   height: 100%;                    \t\t\t}                                   \t\t  </style>",o.parentNode.insertBefore(a,o)}return e&&jQuery.extend(t,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];t.customSelector&&e.push(t.customSelector);var a=jQuery(this).find(e.join(","));a=a.not("object object"),a.each(function(){var e=jQuery(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var t="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),a=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),o=t/a;if(!e.attr("id")){var r="fitvid"+Math.floor(999999*Math.random());e.attr("id",r)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),e.removeAttr("height").removeAttr("width")}})})}}(jQuery),jQuery.fn.unFitVids=function(){var e=jQuery(this).attr("id"),t=jQuery("#"+e+" .fluid-width-video-wrapper").children().clone();jQuery("#"+e+" .fluid-width-video-wrapper").remove(),jQuery("#"+e).append(t)},function(e){var t="waitForImages";e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"]},e.expr[":"].uncached=function(t){if(!e(t).is('img[src!=""]'))return!1;var a=new Image;return a.src=t.src,!a.complete},e.fn.waitForImages=function(a,o,r){var i=0,n=0;if(e.isPlainObject(arguments[0])&&(r=arguments[0].waitForAll,o=arguments[0].each,a=arguments[0].finished),a=a||e.noop,o=o||e.noop,r=!!r,!e.isFunction(a)||!e.isFunction(o))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var l=e(this),s=[],u=e.waitForImages.hasImageProperties||[],d=/url\(\s*(['"]?)(.*?)\1\s*\)/g;r?l.find("*").addBack().each(function(){var t=e(this);t.is("img:uncached")&&s.push({src:t.attr("src"),element:t[0]}),e.each(u,function(e,a){var o,r=t.css(a);if(!r)return!0;for(;o=d.exec(r);)s.push({src:o[2],element:t[0]})})}):l.find("img:uncached").each(function(){s.push({src:this.src,element:this})}),i=s.length,n=0,0===i&&a.call(l[0]),e.each(s,function(r,s){var u=new Image;e(u).on("load."+t+" error."+t,function(e){if(n++,o.call(s.element,n,i,"load"==e.type),n==i)return a.call(l[0]),!1}),u.src=s.src})})}}(jQuery),function(e,t,a,o){var r=e(t);e.fn.lazyload=function(i){function n(){var t=0;s.each(function(){var a=e(this);if(!u.skip_invisible||a.is(":visible"))if(e.abovethetop(this,u)||e.leftofbegin(this,u));else if(e.belowthefold(this,u)||e.rightoffold(this,u)){if(++t>u.failure_limit)return!1}else a.trigger("appear"),t=0})}var l,s=this,u={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return i&&(o!==i.failurelimit&&(i.failure_limit=i.failurelimit,delete i.failurelimit),o!==i.effectspeed&&(i.effect_speed=i.effectspeed,delete i.effectspeed),e.extend(u,i)),l=u.container===o||u.container===t?r:e(u.container),0===u.event.indexOf("scroll")&&l.bind(u.event,function(){return n()}),this.each(function(){var t=this,a=e(t);t.loaded=!1,a.attr("src")!==o&&a.attr("src")!==!1||a.attr("src",u.placeholder),a.one("appear",function(){if(!this.loaded){if(u.appear){var o=s.length;u.appear.call(t,o,u)}e("<img />").bind("load",function(){var o=a.data(u.data_attribute);a.hide(),a.is("img")?a.attr("src",o):a.css("background-image","url('"+o+"')"),a[u.effect](u.effect_speed),t.loaded=!0;var r=e.grep(s,function(e){return!e.loaded});if(s=e(r),u.load){var i=s.length;u.load.call(t,i,u)}}).attr("src",a.data(u.data_attribute))}}),0!==u.event.indexOf("scroll")&&a.bind(u.event,function(){t.loaded||a.trigger("appear")})}),r.bind("resize",function(){n()}),/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)&&r.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&s.each(function(){e(this).trigger("appear")})}),e(a).ready(function(){n()}),this},e.belowthefold=function(a,i){var n;return n=i.container===o||i.container===t?(t.innerHeight?t.innerHeight:r.height())+r.scrollTop():e(i.container).offset().top+e(i.container).height(),n<=e(a).offset().top-i.threshold},e.rightoffold=function(a,i){var n;return n=i.container===o||i.container===t?r.width()+r.scrollLeft():e(i.container).offset().left+e(i.container).width(),n<=e(a).offset().left-i.threshold},e.abovethetop=function(a,i){var n;return n=i.container===o||i.container===t?r.scrollTop():e(i.container).offset().top,n>=e(a).offset().top+i.threshold+e(a).height()},e.leftofbegin=function(a,i){var n;return n=i.container===o||i.container===t?r.scrollLeft():e(i.container).offset().left,n>=e(a).offset().left+i.threshold+e(a).width()},e.inviewport=function(t,a){return!(e.rightoffold(t,a)||e.leftofbegin(t,a)||e.belowthefold(t,a)||e.abovethetop(t,a))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document);