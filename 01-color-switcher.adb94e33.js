!function(){var t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),body:document.querySelector("body")},o=null,n=!0;console.log(t.body),t.startButton.addEventListener("click",(function(){n&&(o=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),n=!1)})),t.stopButton.addEventListener("click",(function(){clearInterval(o),n=!0}))}();
//# sourceMappingURL=01-color-switcher.adb94e33.js.map