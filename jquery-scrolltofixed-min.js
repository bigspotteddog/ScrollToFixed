!function(a){a.isScrollToFixed=function(b){return!!a(b).data("ScrollToFixed")},a.ScrollToFixed=function(b,c){function t(){f.trigger("preUnfixed.ScrollToFixed"),A(),f.trigger("unfixed.ScrollToFixed"),o=-1,l=f.offset().top,m=f.offset().left,d.options.offsets&&(m+=f.offset().left-f.position().left),-1==n&&(n=m),g=f.css("position"),e=!0,-1!=d.options.bottom&&(f.trigger("preFixed.ScrollToFixed"),y(),f.trigger("fixed.ScrollToFixed"))}function u(){var a=d.options.limit;return a?"function"==typeof a?a.apply(f):a:0}function v(){return"fixed"===g}function w(){return"absolute"===g}function x(){return!(v()||w())}function y(){if(!v()){var a=f[0].getBoundingClientRect();p.css({display:f.css("display"),width:a.width,height:a.height,"float":i}),cssOptions={"z-index":d.options.zIndex,position:"fixed",top:-1==d.options.bottom?C():"",bottom:-1==d.options.bottom?"":d.options.bottom,"margin-left":"0px"},d.options.dontSetWidth||(cssOptions.width=window.getComputedStyle(f[0],null).getPropertyValue("width")),f.css(cssOptions),f.addClass(d.options.baseClassName),d.options.className&&f.addClass(d.options.className),g="fixed"}}function z(){var a=u(),b=m;d.options.removeOffsets&&(b="",a-=l),cssOptions={position:"absolute",top:a,left:b,"margin-left":"0px",bottom:""},d.options.dontSetWidth||(cssOptions.width=window.getComputedStyle(f[0],null).getPropertyValue("width")),f.css(cssOptions),p.css("display",f.css("display")),g="absolute"}function A(){x()||(o=-1,p.css("display","none"),f.css({"z-index":k,width:"",position:h,left:"",top:j,"margin-left":""}),f.removeClass("scroll-to-fixed-fixed"),d.options.className&&f.removeClass(d.options.className),g=null)}function B(a){a!=o&&(f.css("left",m-a),o=a)}function C(){var a=d.options.marginTop;return a?"function"==typeof a?a.apply(f):a:0}function D(){if(a.isScrollToFixed(f)&&!f.is(":hidden")){var b=e,c=x();e?x()&&(l=f.offset().top,m=f.offset().left):t();var g=s.scrollLeft(),i=s.scrollTop(),j=u();d.options.minWidth&&s.width()<d.options.minWidth?x()&&b||(F(),f.trigger("preUnfixed.ScrollToFixed"),A(),f.trigger("unfixed.ScrollToFixed")):d.options.maxWidth&&s.width()>d.options.maxWidth?x()&&b||(F(),f.trigger("preUnfixed.ScrollToFixed"),A(),f.trigger("unfixed.ScrollToFixed")):-1==d.options.bottom?j>0&&i>=j-C()?c||w()&&b||(F(),f.trigger("preAbsolute.ScrollToFixed"),z(),f.trigger("unfixed.ScrollToFixed")):i>=l-C()?(v()&&b||(F(),f.trigger("preFixed.ScrollToFixed"),y(),o=-1,f.trigger("fixed.ScrollToFixed")),B(g)):x()&&b||(F(),f.trigger("preUnfixed.ScrollToFixed"),A(),f.trigger("unfixed.ScrollToFixed")):j>0?i+s.height()-f.outerHeight(!0)>=j-(C()||-E())?v()&&(F(),f.trigger("preUnfixed.ScrollToFixed"),"absolute"===h?z():A(),f.trigger("unfixed.ScrollToFixed")):(v()||(F(),f.trigger("preFixed.ScrollToFixed"),y()),B(g),f.trigger("fixed.ScrollToFixed")):B(g)}}function E(){return d.options.bottom?d.options.bottom:0}function F(){var a=f.css("position");"absolute"==a?f.trigger("postAbsolute.ScrollToFixed"):"fixed"==a?f.trigger("postFixed.ScrollToFixed"):f.trigger("postUnfixed.ScrollToFixed")}var d=this;d.$el=a(b),d.el=b,d.$el.data("ScrollToFixed",d);var g,h,i,j,k,e=!1,f=d.$el,l=0,m=0,n=-1,o=-1,p=null,s=a(window),G=function(){f.is(":visible")&&(e=!1,D())},H=function(){window.requestAnimationFrame?requestAnimationFrame(D):D()},J=function(a){a=a||window.event,a.preventDefault&&a.preventDefault(),a.returnValue=!1};d.init=function(){d.options=a.extend({},a.ScrollToFixed.defaultOptions,c),k=f.css("z-index"),d.$el.css("z-index",d.options.zIndex),p=a("<div />"),g=f.css("position"),h=f.css("position"),i=f.css("float"),j=f.css("top"),x()&&d.$el.after(p),s.bind("resize.ScrollToFixed",G),s.bind("scroll.ScrollToFixed",H),"ontouchmove"in window&&s.bind("touchmove.ScrollToFixed",D),d.options.preFixed&&f.bind("preFixed.ScrollToFixed",d.options.preFixed),d.options.postFixed&&f.bind("postFixed.ScrollToFixed",d.options.postFixed),d.options.preUnfixed&&f.bind("preUnfixed.ScrollToFixed",d.options.preUnfixed),d.options.postUnfixed&&f.bind("postUnfixed.ScrollToFixed",d.options.postUnfixed),d.options.preAbsolute&&f.bind("preAbsolute.ScrollToFixed",d.options.preAbsolute),d.options.postAbsolute&&f.bind("postAbsolute.ScrollToFixed",d.options.postAbsolute),d.options.fixed&&f.bind("fixed.ScrollToFixed",d.options.fixed),d.options.unfixed&&f.bind("unfixed.ScrollToFixed",d.options.unfixed),d.options.spacerClass&&p.addClass(d.options.spacerClass),f.bind("resize.ScrollToFixed",function(){p.height(f.height())}),f.bind("detach.ScrollToFixed",function(a){J(a),f.trigger("preUnfixed.ScrollToFixed"),A(),f.trigger("unfixed.ScrollToFixed"),s.unbind("resize.ScrollToFixed",G),s.unbind("scroll.ScrollToFixed",H),f.unbind(".ScrollToFixed"),p.remove(),d.$el.removeData("ScrollToFixed")}),G()},d.init()},a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1e3,baseClassName:"scroll-to-fixed-fixed"},a.fn.scrollToFixed=function(b){return this.each(function(){new a.ScrollToFixed(this,b)})}}(jQuery);