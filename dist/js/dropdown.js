/*! formstone v1.4.15 [dropdown.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./scrollbar","./touch"],e):e(jQuery,Formstone)}(function(c,u){"use strict";function f(e){for(var t="",l=0,i=e.$allOptions.length;l<i;l++){var s=e.$allOptions.eq(l),o=[];if("OPTGROUP"===s[0].tagName)o.push(I.group),s.prop("disabled")&&o.push(I.disabled),t+='<span class="'+o.join(" ")+'">'+s.attr("label")+"</span>";else{var a=s.val(),d=s.data("label"),n=e.links?"a":'button type="button"';s.attr("value")||s.attr("value",a),o.push(I.item),s.hasClass(I.item_placeholder)&&(o.push(I.item_placeholder),n="span"),s.prop("selected")&&o.push(I.item_selected),s.prop("disabled")&&o.push(I.item_disabled),t+="<"+n+' class="'+o.join(" ")+'"',e.links?"span"===n?t+=' aria-hidden="true"':(t+=' href="'+a+'"',e.external&&(t+=' target="_blank"')):t+=' data-value="'+a+'"',t+=' role="option"',s.prop("selected")&&(t+=' "aria-selected"="true"'),t+=">",t+=d||r.decodeEntities(g(s.text(),e.trim)),t+="</"+n+">",0}}e.$items=e.$wrapper.html(c.parseHTML(t)).find(C.item)}function m(e){r.killEvent(e);var t=e.data;t.disabled||t.useNative||(t.closed?i(t):a(t)),l(t)}function l(e){c(C.base).not(e.$dropdown).trigger(k.close,[e])}function i(e){if(e.closed){var t=_.height(),l=e.$wrapper.outerHeight(!0);e.$dropdown[0].getBoundingClientRect().bottom+l>t-e.bottomEdge&&e.$dropdown.addClass(I.bottom),y.on(k.click+e.dotGuid,":not("+C.options+")",e,s),e.$dropdown.trigger(k.focusIn),e.$dropdown.addClass(I.open),d(e),e.closed=!1}}function a(e){e&&!e.closed&&(y.off(k.click+e.dotGuid),e.$dropdown.removeClass([I.open,I.bottom].join(" ")),e.closed=!0)}function s(e){r.killEvent(e);var t=e.data;t&&0===c(e.currentTarget).parents(C.base).length&&(a(t),t.$dropdown.trigger(k.focusOut))}function b(e){var t=e.data;t&&(a(t),t.$dropdown.trigger(k.focusOut))}function $(e){var t=c(this),l=e.data;if(r.killEvent(e),!l.disabled){var i=l.$items.index(t);l.focusIndex=i,l.$wrapper.is(":visible")&&(w(i,l,e.shiftKey,e.metaKey||e.ctrlKey),n(l)),l.multiple||a(l),l.$dropdown.trigger(k.focus)}}function v(e,t){c(this);var l=e.data;if(!t&&!l.multiple){var i=l.$options.index(l.$options.filter(":selected"));w(l.focusIndex=i,l),n(l,!0)}}function h(e){r.killEvent(e);c(e.currentTarget);var t=e.data;t.disabled||t.multiple||t.focused||(l(t),t.focused=!0,t.focusIndex=t.index,t.input="",t.$dropdown.addClass(I.focus).on(k.keyDown+t.dotGuid,t,o))}function x(e){r.killEvent(e);c(e.currentTarget);var t=e.data;t.focused&&t.closed&&(t.focused=!1,t.$dropdown.removeClass(I.focus).off(k.keyDown+t.dotGuid),t.multiple||(a(t),t.index!==t.focusIndex&&(n(t),t.focusIndex=t.index)))}function o(e){var t=e.data;if(t.keyTimer=r.startTimer(t.keyTimer,1e3,function(){t.input=""}),13===e.keyCode)t.closed||(a(t),w(t.index,t)),n(t);else if(!(9===e.keyCode||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){r.killEvent(e);var l=t.$items.length-1,i=t.index<0?0:t.index;if(-1<c.inArray(e.keyCode,u.isFirefox?[38,40,37,39]:[38,40]))(i+=38===e.keyCode||u.isFirefox&&37===e.keyCode?-1:1)<0&&(i=0),l<i&&(i=l);else{var s,o=String.fromCharCode(e.keyCode).toUpperCase();for(t.input+=o,s=t.index+1;s<=l;s++)if(t.$options.eq(s).text().substr(0,t.input.length).toUpperCase()===t.input){i=s;break}if(i<0||i===t.index)for(s=0;s<=l;s++)if(t.$options.eq(s).text().substr(0,t.input.length).toUpperCase()===t.input){i=s;break}}0<=i&&(w(i,t),d(t))}}function w(e,t,l,i){var s=t.$items.eq(e),o=t.$options.eq(e),a=s.hasClass(I.item_selected);if(!s.hasClass(I.item_disabled))if(t.multiple)if(t.useNative)a?(o.prop("selected",null).attr("aria-selected",null),s.removeClass(I.item_selected)):(o.prop("selected",!0).attr("aria-selected",!0),s.addClass(I.item_selected));else if(l&&!1!==t.lastIndex){var d=t.lastIndex>e?e:t.lastIndex,n=(t.lastIndex>e?t.lastIndex:e)+1;t.$options.prop("selected",null).attr("aria-selected",null),t.$items.filter(C.item_selected).removeClass(I.item_selected),t.$options.slice(d,n).not("[disabled]").prop("selected",!0),t.$items.slice(d,n).not(C.item_disabled).addClass(I.item_selected)}else i||t.selectMultiple?a?(o.prop("selected",null).attr("aria-selected",null),s.removeClass(I.item_selected)):(o.prop("selected",!0).attr("aria-selected",!0),s.addClass(I.item_selected)):(t.$options.prop("selected",null).attr("aria-selected",null),t.$items.filter(C.item_selected).removeClass(I.item_selected),o.prop("selected",!0).attr("aria-selected",!0),s.addClass(I.item_selected)),t.lastIndex=e;else if(-1<e&&e<t.$items.length){if(e!==t.index){var r=o.data("label")||s.html();t.$selected.html(r).removeClass(C.item_placeholder),t.$items.filter(C.item_selected).removeClass(I.item_selected),t.$el[0].selectedIndex=e,s.addClass(I.item_selected),t.index=e}}else""!==t.label&&t.$selected.html(t.label)}function d(e){var t=e.$items.eq(e.index),l=0<=e.index&&!t.hasClass(I.item_placeholder)?t.position():{left:0,top:0},i=(e.$wrapper.outerHeight()-t.outerHeight())/2;void 0!==c.fn.fsScrollbar?e.$wrapper.fsScrollbar("resize").fsScrollbar("scroll",e.$wrapper.find(".fs-scrollbar-content").scrollTop()+l.top):e.$wrapper.scrollTop(e.$wrapper.scrollTop()+l.top-i)}function n(e,t){e.links?function(e){var t=e.$el.val();e.external?p.open(t):p.location.href=t}(e):t||e.$el.trigger(k.raw.change,[!0])}function g(e,t){return 0===t?e:e.length>t?e.substring(0,t)+"...":e}var e=u.Plugin("dropdown",{widget:!0,defaults:{bottomEdge:0,cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,native:!1,theme:"fs-light",trim:0,selectMultiple:!1},methods:{_construct:function(e){e.multiple=this.prop("multiple"),e.disabled=this.prop("disabled")||this.is("[readonly]"),e.lastIndex=!1,e.native=e.mobile||e.native,e.useNative=e.native||u.isMobile,e.multiple?e.links=!1:e.external&&(e.links=!0);var t=this.find("[selected]").not(":disabled"),l=this.find(":selected").not(":disabled"),i=l.text(),s=this.find("option").index(l);e.multiple||""===e.label||t.length?e.label="":(l=this.prepend('<option value="" class="'+I.item_placeholder+'" selected>'+e.label+"</option>"),i=e.label,s=0);var o=this.find("option, optgroup"),a=o.filter("option"),d=c('[for="'+this.attr("id")+'"]');e.tabIndex=this[0].tabIndex,this[0].tabIndex=-1,d.length&&(d[0].tabIndex=-1);var n=[I.base,e.theme,e.customClass];e.useNative?n.push(I.native):e.cover&&n.push(I.cover),e.multiple&&n.push(I.multiple),e.disabled&&n.push(I.disabled),e.id=this.attr("id"),e.id?e.ariaId=e.id:e.ariaId=e.rawGuid,e.ariaId+="-dropdown",e.selectedAriaId=e.ariaId+"-selected";var r="",p="";r+='<div class="'+n.join(" ")+'"id="'+e.ariaId+'" tabindex="'+e.tabIndex+'" role="listbox"',e.multiple?r+=' aria-label="multi select"':r+=' aria-haspopup="true" aria-live="polite" aria-labelledby="'+e.selectedAriaId+'"',r+="></div>",e.multiple||(p+='<button type="button" class="'+I.selected+'" id="'+e.selectedAriaId+'" tabindex="-1">',p+=c("<span></span>").text(g(i,e.trim)).html(),p+="</button>"),p+='<div class="'+I.options+'">',p+="</div>",this.wrap(r).after(p),e.$dropdown=this.parent(C.base),e.$label=d,e.$allOptions=o,e.$options=a,e.$selected=e.$dropdown.find(C.selected),e.$wrapper=e.$dropdown.find(C.options),e.$placeholder=e.$dropdown.find(C.placeholder),e.index=-1,e.closed=!0,e.focused=!1,f(e),e.multiple||w(s,e),void 0!==c.fn.fsScrollbar&&e.$wrapper.fsScrollbar({theme:e.theme}).find(".fs-scrollbar-content").attr("tabindex",null),e.$dropdown.on(k.click,e,m),e.$selected.on(k.click,e,m),e.$dropdown.on(k.click,C.item,e,$).on(k.close,e,b),this.on(k.change,e,v),e.useNative||(this.on(k.focusIn,e,function(e){e.data.$dropdown.trigger(k.raw.focus)}),e.$dropdown.on(k.focusIn,e,h).on(k.focusOut,e,x))},_destruct:function(e){e.$dropdown.hasClass(I.open)&&e.$selected.trigger(k.click),void 0!==c.fn.fsScrollbar&&e.$wrapper.fsScrollbar("destroy"),e.$el[0].tabIndex=e.tabIndex,e.$label.length&&(e.$label[0].tabIndex=e.tabIndex),e.$dropdown.off(k.namespace),e.$options.off(k.namespace),e.$placeholder.remove(),e.$selected.remove(),e.$wrapper.remove(),e.$el.off(k.namespace).show().unwrap()},disable:function(e,t){if(void 0!==t){var l=e.$items.index(e.$items.filter("[data-value="+t+"]"));e.$items.eq(l).addClass(I.item_disabled),e.$options.eq(l).prop("disabled",!0)}else e.$dropdown.hasClass(I.open)&&e.$selected.trigger(k.click),e.$dropdown.addClass(I.disabled),e.$el.prop("disabled",!0),e.disabled=!0},enable:function(e,t){if(void 0!==t){var l=e.$items.index(e.$items.filter("[data-value="+t+"]"));e.$items.eq(l).removeClass(I.item_disabled),e.$options.eq(l).prop("disabled",!1)}else e.$dropdown.removeClass(I.disabled),e.$el.prop("disabled",!1),e.disabled=!1},update:function(e){void 0!==c.fn.fsScrollbar&&e.$wrapper.fsScrollbar("destroy");var t=e.index;e.$allOptions=e.$el.find("option, optgroup"),e.$options=e.$allOptions.filter("option"),e.index=-1,t=e.$options.index(e.$options.filter(":selected")),f(e),e.multiple||w(t,e),void 0!==c.fn.fsScrollbar&&e.$wrapper.fsScrollbar({theme:e.theme}).find(".fs-scrollbar-content").attr("tabindex",null)},open:i,close:a},classes:["cover","bottom","multiple","mobile","native","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{close:"close"}}),C=e.classes,I=C.raw,k=e.events,r=e.functions,p=u.window,_=u.$window,y=(u.document,null);u.Ready(function(){y=u.$body})});