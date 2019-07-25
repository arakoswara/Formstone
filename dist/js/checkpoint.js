/*! formstone v1.4.15 [checkpoint.js] 2019-07-25 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(s,e){"use strict";function t(){p=h.height(),d.iterate.call(g,o)}function a(){g=s(r.base),t()}function i(e){if(e.hasParent){var t=e.$parent.scrollTop();t!==e.parentScroll&&(n(e),e.parentScroll=t)}}function o(e){if(e.initialized){switch(e.parentHeight=e.hasParent?e.$parent.outerHeight(!1):p,e.windowIntersect){case"top":e.windowCheck=0-e.offset;break;case"middle":case"center":e.windowCheck=e.parentHeight/2-e.offset;break;case"bottom":e.windowCheck=e.parentHeight-e.offset}switch(e.elOffset=e.$target.offset(),e.elIntersect){case"top":e.elCheck=e.elOffset.top;break;case"middle":e.elCheck=e.elOffset.top+e.$target.outerHeight()/2;break;case"bottom":e.elCheck=e.elOffset.top+e.$target.outerHeight()}if(e.hasParent){var t=e.$parent.offset();e.elCheck-=t.top}n(e)}}function n(e){e.initialized&&(e.windowCheck+(e.hasParent?e.parentScroll:v)>=e.elCheck?(e.active||e.$el.trigger(f.activate),e.active=!0,e.$el.addClass(l.active)):e.reverse&&(e.active&&e.$el.trigger(f.deactivate),e.active=!1,e.$el.removeClass(l.active)))}var c=e.Plugin("checkpoint",{widget:!0,defaults:{intersect:"bottom-top",offset:0,reverse:!1},classes:["active"],events:{activate:"activate",deactivate:"deactivate"},methods:{_construct:function(e){e.initialized=!1;var t=s(e.$el.data("checkpoint-parent")),a=s(e.$el.data("checkpoint-container")),i=e.$el.data("checkpoint-intersect"),n=e.$el.data("checkpoint-offset");i&&(e.intersect=i),n&&(e.offset=n);var c=e.intersect.split("-");e.windowIntersect=c[0],e.elIntersect=c[1],e.visible=!1,e.$target=a.length?a:e.$el,e.hasParent=0<t.length,e.$parent=t;var r=e.$target.find("img");r.length&&r.on(f.load,e,o),e.$el.addClass(l.base),e.initialized=!0},_postConstruct:function(e){a(),t()},_destruct:function(e){e.$el.removeClass(l.base),a()},_resize:t,_raf:function(){(v=h.scrollTop())<0&&(v=0),v!==u&&(d.iterate.call(g,n),u=v),d.iterate.call(g,i)},resize:o}}),r=(c.namespace,c.classes),l=r.raw,f=c.events,d=c.functions,h=(e.window,e.$window),p=0,v=0,u=0,g=[]});