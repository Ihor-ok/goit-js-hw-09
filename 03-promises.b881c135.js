var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("iQIUW");function u(e,t){return new Promise(((r,o)=>{const u=Math.random()>.3;setTimeout((()=>{u?r(n.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)):o(n.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`))}),t)}))}({form:document.querySelector(".form"),delayForm:document.querySelector('[name="delay"]'),stepForm:document.querySelector('[name="step"]'),amountForm:document.querySelector('[name="amount"]'),buttonForm:document.querySelector("button")}).form.addEventListener("submit",(function(e){e.preventDefault();let t=1;const{elements:{delay:r,step:o,amount:n}}=e.currentTarget;let l=Number(r.value),i=Number(o.value),a=Number(n.value);for(let e=0;e<a;e++)u(t,l).then((()=>{})).catch((()=>{})),t+=1,l+=i}));
//# sourceMappingURL=03-promises.b881c135.js.map