!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");function u(e,n){return new Promise((function(t,o){var u=Math.random()>.3;setTimeout((function(){u?t(r.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))):o(r.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(n,"ms")))}),n)}))}({form:document.querySelector(".form"),delayForm:document.querySelector('[name="delay"]'),stepForm:document.querySelector('[name="step"]'),amountForm:document.querySelector('[name="amount"]'),buttonForm:document.querySelector("button")}).form.addEventListener("submit",(function(e){e.preventDefault();for(var n=1,t=e.currentTarget.elements,o=t.delay,r=t.step,c=t.amount,i=Number(o.value),a=Number(r.value),l=Number(c.value),f=0;f<l;f++)u(n,i).then((function(){})).catch((function(){})),n+=1,i+=a}))}();
//# sourceMappingURL=03-promises.de283f71.js.map
