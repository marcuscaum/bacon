function ssc_init(){"use strict";if(document.body){var e=document.body,t=document.documentElement,n=window.innerHeight,r=e.scrollHeight;if(ssc_root=document.compatMode.indexOf("CSS")>=0?t:e,ssc_activeElement=e,ssc_initdone=!0,top!=self)ssc_frame=!0;else if(r>n&&(e.offsetHeight<=n||t.offsetHeight<=n)&&(ssc_root.style.height="auto",ssc_root.offsetHeight<=n)){var i=document.createElement("div");i.style.clear="both",e.appendChild(i)}ssc_fixedback||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll"),ssc_keyboardsupport&&ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,t,n,r){if(r||(r=1e3),ssc_directionCheck(t,n),ssc_que.push({x:t,y:n,lastX:0>t?.99:-.99,lastY:0>n?.99:-.99,start:+new Date}),!ssc_pending){var i=function(){for(var s=+new Date,o=0,u=0,a=0;a<ssc_que.length;a++){var f=ssc_que[a],l=s-f.start,c=l>=ssc_animtime,h=c?1:l/ssc_animtime;ssc_pulseAlgorithm&&(h=ssc_pulse(h));var p=f.x*h-f.lastX>>0,d=f.y*h-f.lastY>>0;o+=p,u+=d,f.lastX+=p,f.lastY+=d,c&&(ssc_que.splice(a,1),a--)}if(t){var v=e.scrollLeft;e.scrollLeft+=o,o&&e.scrollLeft===v&&(t=0)}if(n){var m=e.scrollTop;e.scrollTop+=u,u&&e.scrollTop===m&&(n=0)}t||n||(ssc_que=[]),ssc_que.length?setTimeout(i,r/ssc_framerate+1):ssc_pending=!1};setTimeout(i,0),ssc_pending=!0}}function ssc_wheel(e){ssc_initdone||ssc_init();var t=e.target,n=ssc_overflowingAncestor(t);if(!n||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(t,"embed")&&/\.pdf/i.test(t.src))return!0;var r=e.wheelDeltaX||0,i=e.wheelDeltaY||0;r||i||(i=e.wheelDelta||0),Math.abs(r)>1.2&&(r*=ssc_stepsize/120),Math.abs(i)>1.2&&(i*=ssc_stepsize/120),ssc_scrollArray(n,-r,-i),e.preventDefault()}function ssc_keydown(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n)return!0;if(ssc_isNodeName(t,"button")&&e.keyCode===ssc_key.spacebar)return!0;var r,i=0,s=0,o=ssc_overflowingAncestor(ssc_activeElement),u=o.clientHeight;switch(o==document.body&&(u=window.innerHeight),e.keyCode){case ssc_key.up:s=-ssc_arrowscroll;break;case ssc_key.down:s=ssc_arrowscroll;break;case ssc_key.spacebar:r=e.shiftKey?1:-1,s=-r*u*.9;break;case ssc_key.pageup:s=.9*-u;break;case ssc_key.pagedown:s=.9*u;break;case ssc_key.home:s=-o.scrollTop;break;case ssc_key.end:var a=o.scrollHeight-o.scrollTop-u;s=a>0?a+10:0;break;case ssc_key.left:i=-ssc_arrowscroll;break;case ssc_key.right:i=ssc_arrowscroll;break;default:return!0}ssc_scrollArray(o,i,s),e.preventDefault()}function ssc_mousedown(e){ssc_activeElement=e.target}function ssc_setCache(e,t){for(var n=e.length;n--;)ssc_cache[ssc_uniqueID(e[n])]=t;return t}function ssc_overflowingAncestor(e){var t=[],n=ssc_root.scrollHeight;do{var r=ssc_cache[ssc_uniqueID(e)];if(r)return ssc_setCache(t,r);if(t.push(e),n===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<n)return ssc_setCache(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow"),"scroll"===overflow||"auto"===overflow))return ssc_setCache(t,e)}while(e=e.parentNode)}function ssc_addEvent(e,t,n){window.addEventListener(e,t,n||!1)}function ssc_removeEvent(e,t,n){window.removeEventListener(e,t,n||!1)}function ssc_isNodeName(e,t){return e.nodeName.toLowerCase()===t.toLowerCase()}function ssc_directionCheck(e,t){e=e>0?1:-1,t=t>0?1:-1,(ssc_direction.x!==e||ssc_direction.y!==t)&&(ssc_direction.x=e,ssc_direction.y=t,ssc_que=[])}function ssc_pulse_(e){var t,n,r;return e*=ssc_pulseScale,1>e?t=e-(1-Math.exp(-e)):(n=Math.exp(-1),e-=1,r=1-Math.exp(-e),t=n+r*(1-n)),t*ssc_pulseNormalize}function ssc_pulse(e){return e>=1?1:0>=e?0:(1==ssc_pulseNormalize&&(ssc_pulseNormalize/=ssc_pulse_(1)),ssc_pulse_(e))}var ssc_framerate=150,ssc_animtime=500,ssc_stepsize=100,ssc_pulseAlgorithm=!0,ssc_pulseScale=6,ssc_pulseNormalize=1,ssc_keyboardsupport=!0,ssc_arrowscroll=80,ssc_frame=!1,ssc_direction={x:0,y:0},ssc_initdone=!1,ssc_fixedback=!0,ssc_root=document.documentElement,ssc_activeElement,ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},ssc_que=[],ssc_pending=!1,ssc_cache={};setInterval(function(){ssc_cache={}},1e4);var ssc_uniqueID=function(){var e=0;return function(t){return t.ssc_uniqueID||(t.ssc_uniqueID=e++)}}(),ischrome=/chrome/.test(navigator.userAgent.toLowerCase());ischrome&&(ssc_addEvent("mousedown",ssc_mousedown),ssc_addEvent("mousewheel",ssc_wheel),ssc_addEvent("load",ssc_init));