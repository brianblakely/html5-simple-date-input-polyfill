/*MIT licence - https://github.com/brianblakely/nodep-date-input-polyfill
*/(function(){'use strict';(function(){var a=document.createElement("input");a.setAttribute("type","date");return a.setAttribute("value","not-a-date"),document.currentScript&&!document.currentScript.hasAttribute("data-nodep-date-input-polyfill-debug")&&"not-a-date"!==a.value})()||function(a,b){if(!~a.indexOf("/")&&document.currentScript){var c=document.currentScript.getAttribute("src");if(c){var d=c.lastIndexOf("/");~d&&(a=c.substring(0,d+1)+a)}}var e=document.createElement("script");e.src=a,e.onload=function(){b()},e.onerror=function(){b(new Error("Failed to load script "+a))},document.head.appendChild(e)}("nodep-date-input-pollyfill.dist.js",function(){if("complete"===document.readyState)datePolyfill.addPickers();else{var a=!1;document.addEventListener("DOMContentLoaded",function(){a=!0,datePolyfill.addPickers()}),window.addEventListener("load",function(){a||datePolyfill.addPickers()})}})})();
