!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var a=e();for(var i in a)("object"==typeof exports?exports:t)[i]=a[i]}}(window,(function(){return function(t){var e={};function a(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=2)}([function(t,e,a){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a=function(t,e){var a=t[1]||"",i=t[3];if(!i)return a;if(e&&"function"==typeof btoa){var r=(o=i,f=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(f),"/*# ".concat(s," */")),n=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")}));return[a].concat(n).concat([r]).join("\n")}var o,f,s;return[a].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(a,"}"):a})).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var n=this[r][0];null!=n&&(i[n]=!0)}for(var o=0;o<t.length;o++){var f=t[o];null!=f[0]&&i[f[0]]||(a&&!f[2]?f[2]=a:a&&(f[2]="(".concat(f[2],") and (").concat(a,")")),e.push(f))}},e}},function(t,e,a){"use strict";var i,r={},n=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var t={};return function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}t[e]=a}return t[e]}}();function f(t,e){for(var a=[],i={},r=0;r<t.length;r++){var n=t[r],o=e.base?n[0]+e.base:n[0],f={css:n[1],media:n[2],sourceMap:n[3]};i[o]?i[o].parts.push(f):a.push(i[o]={id:o,parts:[f]})}return a}function s(t,e){for(var a=0;a<t.length;a++){var i=t[a],n=r[i.id],o=0;if(n){for(n.refs++;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(h(i.parts[o],e))}else{for(var f=[];o<i.parts.length;o++)f.push(h(i.parts[o],e));r[i.id]={id:i.id,refs:1,parts:f}}}}function l(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var i=a.nc;i&&(t.attributes.nonce=i)}if(Object.keys(t.attributes).forEach((function(a){e.setAttribute(a,t.attributes[a])})),"function"==typeof t.insert)t.insert(e);else{var r=o(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var c,m=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function u(t,e,a,i){var r=a?"":i.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var n=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(n,o[e]):t.appendChild(n)}}function p(t,e,a){var i=a.css,r=a.media,n=a.sourceMap;if(r&&t.setAttribute("media",r),n&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d=null,g=0;function h(t,e){var a,i,r;if(e.singleton){var n=g++;a=d||(d=l(e)),i=u.bind(null,a,n,!1),r=u.bind(null,a,n,!0)}else a=l(e),i=p.bind(null,a,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(a)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=n());var a=f(t,e);return s(a,e),function(t){for(var i=[],n=0;n<a.length;n++){var o=a[n],l=r[o.id];l&&(l.refs--,i.push(l))}t&&s(f(t,e),e);for(var c=0;c<i.length;c++){var m=i[c];if(0===m.refs){for(var u=0;u<m.parts.length;u++)m.parts[u]();delete r[m.id]}}}}},function(t,e,a){"use strict";a.r(e),a.d(e,"fasvgLoader",(function(){return n}));a(3),a(5);const i=["xs","sm","lg","2x","3x","4x","5x","6x","7x","8x","9x","10x","fw","ul","li","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","spin","pulse","spinner","border","pull-right","pull-left","fa-stack","fa-stack-1x","fa-stack-2x","fa-inverse","swap-opacity"];const r={url:"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/svgs",fetch:{cache:"force-cache"}},n=(t={})=>{const e={...r,...t},a=document.querySelectorAll("i.fab, i.fad, i.fal, i.far, i.fas");Array.from(a).forEach(async t=>{const a=Array.from(t.classList).filter(t=>t.startsWith("fa-")&&!i.includes(t.replace(/^fa-/,"")));let r=t.classList.contains("fab")?"brands":t.classList.contains("fas")?"solid":t.classList.contains("fad")?"duotone":t.classList.contains("fal")?"light":"regular";const n=a[0].replace(/^fa-/,""),o=`${e.url.replace(/\/$/,"")}/${r}/${n}.svg`,f=await fetch(o,e.fetch);if(200===f.status){const e=function(t){const e=document.createElement("div");return t=t.trim(),e.innerHTML=t,e.children[0]}(await f.text());e.classList.add(...Array.from(t.classList)),e.classList.add("svg-inline--fa"),t.replaceWith(e)}})};window.fasvgLoader},function(t,e,a){var i=a(4);"string"==typeof i&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};a(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,a){(t.exports=a(0)(!1)).push([t.i,'/*!\n * Font Awesome Free 5.11.2 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n.svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor)}.svg-inline--fa .fa-secondary,.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}',""])},function(t,e,a){var i=a(6);"string"==typeof i&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};a(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,a){(t.exports=a(0)(!1)).push([t.i,".fa,.fab,.fad,.fal,.far,.fas{fill:currentColor}\n",""])}])}));
//# sourceMappingURL=fontawesome-svg-loader.js.map