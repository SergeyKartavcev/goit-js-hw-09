!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("iU1Pc");e(r).Notify.init({width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"50px",timeout:5e3});var u=document.querySelector(".form");function a(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}u.addEventListener("submit",a),u.addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.value,o=u.step.value,i=u.amount.value;!function(t,n,o){for(var i=0,u=0;u<o;u+=1)a(i+=1,t).then((function(t){e(r).Notify.success(t)})).catch((function(t){e(r).Notify.failure(t)})),t=Number(t)+Number(n)}(n,o,i)}))}();
//# sourceMappingURL=03-promises.cc39624f.js.map