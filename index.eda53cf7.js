function e(e,o,r,n){Object.defineProperty(e,o,{get:r,set:n,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},r.parcelRequired7c6=i),i.register("kyEFX",(function(o,r){var n,t;e(o.exports,"register",(function(){return n}),(function(e){return n=e})),e(o.exports,"resolve",(function(){return t}),(function(e){return t=e}));var i={};n=function(e){for(var o=Object.keys(e),r=0;r<o.length;r++)i[o[r]]=e[o[r]]},t=function(e){var o=i[e];if(null==o)throw new Error("Could not resolve bundle with id "+e);return o}})),i("kyEFX").register(JSON.parse('{"lT5Uv":"index.eda53cf7.js","54qLb":"Vladyslav_Krasovsky.c7af8749.webp","lKRqx":"Veronika_Moskaliuk.216c57c3.webp","4HSDA":"Stanyslav_Cherniakov.012987dd.webp","ipARG":"Aleksieieva_Viktoriia.2f9cada0.webp","lbppH":"Denys_Korsukov.f2e9139e.webp","6X3qj":"Iryna_Diukova.6df6589e.webp","3YcaB":"Lizogub_Yana.4487faec.webp","caZ1Q":"Mariia_Prokopenko.ac0507b5.webp","5q2KO":"Oleksii_Zablotskyi.826c7b5d.webp","64wwq":"Serhii_Denysiuk.d99557dd.webp","fbhC2":"Serhii_Padalka.509cf52c.webp","3N7Fb":"Oleksii_Vitomskyi.2d8cb8f0.webp"}'));var a={};a=function e(o,r,n){function t(a,l){if(!r[a]){if(!o[a]){var s=void 0;if(!l&&s)return s(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[a]={exports:{}};o[a][0].call(u.exports,(function(e){return t(o[a][1][e]||e)}),u,u.exports,e,o,r,n)}return r[a].exports}for(var i=void 0,a=0;a<n.length;a++)t(n[a]);return t}({1:[function(e,o,r){Object.defineProperty(r,"__esModule",{value:!0}),r.create=r.visible=void 0;var n=function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.createElement("div");return r.innerHTML=e.trim(),!0===o?r.children:r.firstChild},t=function(e,o){var r=e.children;return 1===r.length&&r[0].tagName===o},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};r.visible=i,r.create=function(e,o){var r=function(e,o){var r=n('\n\t\t<div class="basicLightbox '.concat(o.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=r.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var a=t(i,"IMG"),l=t(i,"VIDEO"),s=t(i,"IFRAME");return!0===a&&r.classList.add("basicLightbox--img"),!0===l&&r.classList.add("basicLightbox--video"),!0===s&&r.classList.add("basicLightbox--iframe"),r}(e=function(e){var o="string"==typeof e,r=e instanceof HTMLElement==1;if(!1===o&&!1===r)throw new Error("Content must be a DOM element/node or string");return!0===o?Array.from(n(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(o)),a=function(e){return!1!==o.onClose(l)&&function(e,o){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),o()}),410),!0}(r,(function(){if("function"==typeof e)return e(l)}))};!0===o.closable&&r.addEventListener("click",(function(e){e.target===r&&a()}));var l={element:function(){return r},visible:function(){return i(r)},show:function(e){return!1!==o.onShow(l)&&function(e,o){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),o()}))}),10),!0}(r,(function(){if("function"==typeof e)return e(l)}))},close:a};return l}},{}]},{},[1])(1);var l;l=new URL(i("kyEFX").resolve("54qLb"),import.meta.url).toString();var s;s=new URL(i("kyEFX").resolve("lKRqx"),import.meta.url).toString();var c;c=new URL(i("kyEFX").resolve("4HSDA"),import.meta.url).toString();var u;u=new URL(i("kyEFX").resolve("ipARG"),import.meta.url).toString();var f;f=new URL(i("kyEFX").resolve("lbppH"),import.meta.url).toString();var p;p=new URL(i("kyEFX").resolve("6X3qj"),import.meta.url).toString();var v;v=new URL(i("kyEFX").resolve("3YcaB"),import.meta.url).toString();var d;d=new URL(i("kyEFX").resolve("caZ1Q"),import.meta.url).toString();var m;m=new URL(i("kyEFX").resolve("5q2KO"),import.meta.url).toString();var b;b=new URL(i("kyEFX").resolve("64wwq"),import.meta.url).toString();var h;h=new URL(i("kyEFX").resolve("fbhC2"),import.meta.url).toString();var w;w=new URL(i("kyEFX").resolve("3N7Fb"),import.meta.url).toString();const _=`<p class="team_title"> TEAM CREATORS </p>\n<ul class="team_box">\n${[{photo:`${o(l)}`,name:"Vladyslav Krasovsky",role:"Team-Lead"},{photo:`${o(s)}`,name:"Veronika Moskaliuk",role:"Scrum-Master"},{photo:`${o(c)}`,name:"Stanyslav Cherniakov",role:"Developer"},{photo:`${o(u)}`,name:"Aleksieieva Viktoriia",role:"Developer"},{photo:`${o(f)}`,name:"Denys Korsukov",role:"Developer"},{photo:`${o(p)}`,name:"Iryna Diukova",role:"Developer"},{photo:`${o(v)}`,name:"Yana Lizogub",role:"Developer"},{photo:`${o(d)}`,name:"Mariia Prokopenko",role:"Developer"},{photo:`${o(m)}`,name:"Oleksii Zablotskyi",role:"Developer"},{photo:`${o(b)}`,name:"Serhii Denysiuk",role:"Developer"},{photo:`${o(h)}`,name:"Serhii Padalka",role:"Developer"},{photo:`${o(w)}`,name:"Oleksii Vitomskyi",role:"Developer"}].map((({photo:e,name:o,role:r})=>`<li class="team_card">\n             \n               <img loading="lazy" src="${e}" alt="${o}" class="team_photo">\n               <div class = "team_info">\n              <p class="team_name">${o}</p>\n               </div>\n              <p class="team_role">${r}</p>\n              \n              </li>`)).join("")}\n</ul>`;document.querySelector(".footer__team-modal-btn").addEventListener("click",(function(e){e.preventDefault(),y.show(),window.addEventListener("keydown",(function e(o){"Escape"===o.code&&(y.close(),window.removeEventListener("keydown",e))}))}));const y=a.create(_);
//# sourceMappingURL=index.eda53cf7.js.map