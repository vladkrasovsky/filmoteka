!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var a=o("18uf9"),d=o("4s6iC"),i=o("9XBOy"),r=o("UL92Z");o("8AEpj"),o("kvep9"),o("dzn3T");var u={moviesList:document.querySelector(".moviesListRef"),watchedBtn:document.querySelector("button[data-btn-watched]"),queueBtn:document.querySelector("button[data-btn-queue]")};function c(){l(a.default.load(d.storageKey.WATCHED_LIST),"Watched"),s(u.watchedBtn,u.queueBtn)}function l(e,t){u.moviesList.innerHTML=(null==e?void 0:e.length)?(0,i.createMarkup)(e):function(e){return'<li class="no-movies">No movies were added to '.concat(e," List</li>")}(t)}function s(e,t){e.classList.add("header-btn-active"),e.disabled=!0,t.classList.remove("header-btn-active"),t.disabled=!1}(0,r.getLocalStorageData)(),c(),u.watchedBtn.addEventListener("click",c),u.queueBtn.addEventListener("click",(function(){l(a.default.load(d.storageKey.QUEUE_LIST),"Queue"),s(u.queueBtn,u.watchedBtn)}))}();
//# sourceMappingURL=library.da40289b.js.map