!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){r.start()})),e.addEventListener("click",(function(){r.stop()}));var r={intervalId:0,isActive:!1,start:function(){this.isActive,this.intervalId=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")},stop:function(){clearInterval(this.intervalId),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}}}();
//# sourceMappingURL=01-color-switcher.09634469.js.map
