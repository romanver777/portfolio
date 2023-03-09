"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var r;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}!function(){var t=document.querySelector("body"),r=document.querySelector(".gamburger"),o=document.querySelector(".menu-pop"),e=document.querySelector(".close__link"),n=document.querySelector(".arrow-down__link"),i=document.querySelector(".arrow-up__link");r.addEventListener("click",function(e){e.preventDefault(),o.classList.add("menu-pop__open"),r.classList.add("gamburger__hide"),t.classList.add("stop-scroll-but-visible")}),e.addEventListener("click",function(e){e.preventDefault(),o.classList.remove("menu-pop__open"),r.classList.remove("gamburger__hide"),t.classList.remove("stop-scroll-but-visible")}),n.addEventListener("click",function(e){e.preventDefault(),window.scroll({top:window.innerHeight,behavior:"smooth"})}),i.addEventListener("click",function(e){e.preventDefault(),window.scroll({top:window.innerHeight,behavior:"smooth"})})}(),function(){var e,t=document.querySelector(".pict__list"),r=document.querySelectorAll(".pict__item"),o=document.querySelector(".slider__control"),n=document.querySelectorAll(".control__item"),i=t.getBoundingClientRect().width+"px",c=(r.forEach(function(e){return e.style.width=i}),o.getBoundingClientRect().height+"px");n.forEach(function(e){return e.style.height=c}),window.addEventListener("resize",function(){e=e||setTimeout(function(){i=t.getBoundingClientRect().width+"px",r.forEach(function(e){return e.style.width=i}),e=null},300)})}(),function(){var e=document.querySelector(".control-down__link"),t=document.querySelector(".control-up__link"),r=document.querySelector(".control-down__wr"),o=document.querySelector(".control-up__wr"),n=document.querySelector(".pict__wr"),i=document.querySelectorAll(".p-card"),c=!1;function l(e,t,r){var o;switch("top"==r&&(o=document.querySelector(".slider__control").getBoundingClientRect().height),"left"==r&&(o=document.querySelector(".slider__pict").getBoundingClientRect().width),e){case"forward":"top"==r&&(t.style.top=-o+"px"),"left"==r&&(t.style.left=-o+"px"),setTimeout(function(){t.style.transition="none";var e=t.firstElementChild,e=t.removeChild(e);t.append(e),"top"==r&&(t.style.top="0px"),"left"==r&&(t.style.left="0px"),setTimeout(function(){t.style.transition="0.5s",c=!1},100)},500);break;case"backward":t.style.transition="none";var n=t.lastElementChild,n=t.removeChild(n);t.prepend(n),"top"==r&&(t.style.top=-o+"px"),"left"==r&&(t.style.left=-o+"px"),setTimeout(function(){t.style.transition="0.5s","top"==r&&(t.style.top="0px"),"left"==r&&(t.style.left="0px"),setTimeout(function(){return c=!1},500)},100)}}function a(e,t){var r;switch(_toConsumableArray(t).map(function(e,t){e.classList.contains("p-card_active")&&(r=t)}),t[r].classList.remove("p-card_active"),e){case"forward":r==t.length-1?r=0:r++;break;case"backward":0==r?r=t.length-1:r--}setTimeout(function(){t[r].classList.add("p-card_active")},200)}function u(e){switch(e){case"up":l("forward",o,"top"),l("backward",r,"top"),l("forward",n,"left"),a("forward",i);break;case"down":l("backward",o,"top"),l("forward",r,"top"),l("backward",n,"left"),a("backward",i)}}e.addEventListener("click",function(e){e.preventDefault(),c||(c=!0,u("down"))}),t.addEventListener("click",function(e){e.preventDefault(),c||(c=!0,u("up"))})}(),function(){var t,e=document.querySelector(".butt__link_send"),r=document.querySelector(".butt__link_clear"),o=document.querySelector(".form-log"),n=document.querySelector(".form__inp-contact_name"),i=document.querySelector(".form__inp-contact_email"),c=document.querySelector(".form__textarea"),l=document.querySelector(".messageBox"),a=document.querySelector(".messageBox__text");e.addEventListener("click",function(e){e.preventDefault(),t&&(clearTimeout(t),l.classList.remove("messageBox_visible"),console.log(t)),n.value.trim()&&i.value.trim()&&c.value.trim()?setTimeout(function(){a.innerHTML="Форма отправлена",l.classList.add("messageBox_visible"),o.reset()},800):t?setTimeout(function(){a.innerHTML="Заполните все поля",l.classList.add("messageBox_visible")},800):(a.innerHTML="Заполните все поля",l.classList.add("messageBox_visible")),t=setTimeout(function(){l.classList.remove("messageBox_visible")},3e3)}),r.addEventListener("click",function(e){e.preventDefault(),o.reset()})}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51TGlua09wZW4iLCJtZW51UG9wIiwibWVudUxpbmtDbG9zZSIsImFycm93RG93biIsImFycm93VXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwid2luZG93Iiwic2Nyb2xsIiwidG9wIiwiaW5uZXJIZWlnaHQiLCJiZWhhdmlvciIsInRpbWVyIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRyb2xJdGVtcyIsInNsaWRlclBpY3RXaWR0aCIsInNsaWRlckxpc3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInNsaWRlckl0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJzdHlsZSIsImhlaWdodCIsImNvbnRyb2xIZWlnaHQiLCJkb3duV3IiLCJ1cFdyIiwiY2FyZEl0ZW1zIiwidGltZW91dCIsInNsaWRlTW92ZXMiLCJkaXJlY3Rpb24iLCJwb3NpdGlvbiIsInNpemUiLCJzbGlkZXJQaWN0Iiwic2V0VGltZW91dCIsInRyYW5zaXRpb24iLCJhcHBlbmQiLCJyZXN1bHQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwibGFzdEVsZW1lbnRDaGlsZCIsImxlZnQiLCJhY3RpdmVDYXJkIiwiY2FyZHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJtYXAiLCJlbCIsImkiLCJsZW5ndGgiLCJzdGFydFNsaWRlckJ5Q2xpY2tpbmciLCJidXR0b24iLCJhZGQiLCJwaWN0V3IiLCJ0aXRsZVNsaWRlTW92ZXMiLCJkb3duTGluayIsInVwTGluayIsIm1lc3NhZ2VUaW1lciIsImZvcm1UZXh0IiwibWVzc2FnZUJveCIsInNlbmRMaW5rIiwiY29uc29sZSIsIm1lc3NhZ2VCb3hUZXh0IiwiZm9ybSIsImNsZWFyVGltZW91dCIsImZvcm1OYW1lIiwiZm9ybUVt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QUEsaUJBQUEsRUFFaEIrRCxFQUFXdEQsU0FBVUMsY0FBTyxhQUFxQixFQUNqRHVELEVBQVlKLFNBQWE3RCxjQUFBLG1CQUFBLEVBTjdCZ0UsRUFhSTFCLGlCQUFXLFFBQU0sU0FBQS9CLEdBWm5CQSxFQUFFQyxlQWFFMEQsRUFFQUMsSUFDRkMsYUFBT1AsQ0FBQSxFQUNSRSxFQUFNdEQsVUFBQUMsT0FBQSxvQkFBQSxFQUNMdUQsUUFBSUosSUFBQUEsQ0FBYyxHQVZsQlEsRUFhSU4sTUFBV3RELEtBQUFBLEdBWmY2RCxFQWFTQyxNQUFBQyxLQUFBLEdBQ1RWLEVBQU9TLE1BQUFDLEtBQUEsRUFYUGxDLFdBYUV5QixXQUNGRyxFQUFBTyxVQUFBLG1CQUNGVixFQUFBdEQsVUFBQStDLElBQUEsb0JBQUEsRUFFQUssRUFBQUEsTUFBWSxDQUNWRSxFQUFBQSxHQUFBQSxFQUVGRixFQUVGYSxXQUFVcEUsV0FDTkUsRUFBZ0JpRSxVQUFBLHFCQUNiRSxFQUFPbEUsVUFBQStDLElBQUEsb0JBQUEsQ0FDWixFQUFBLEdBQUEsR0FiSVUsRUFBZU8sVUFBWSxxQkFDM0JWLEVBQVd0RCxVQUFVK0MsSUFBSSxvQkFBb0IsR0FJakRLLEVBQWV2QixXQUFXLFdBQ3hCeUIsRUFBV3RELFVBQVVDLE9BQU8sb0JBQW9CLENBQ2xELEVBQUcsR0FBSSxDQUNULENBQUMsRUFFRGdFLEVBQVVwRSxpQkFBaUIsUUFBUyxTQUFDQyxHQUNuQ0EsRUFBRUMsZUFBYyxFQUNoQjJELEVBQUtRLE1BQUssQ0FDWixDQUFDLENBQ0YsRUFBQSIsImZpbGUiOiJ3b3Jrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBjb25zdCBtZW51TGlua09wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtYnVyZ2VyJyk7XHJcbiAgY29uc3QgbWVudVBvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBvcCcpO1xyXG4gIGNvbnN0IG1lbnVMaW5rQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VfX2xpbmsnKTtcclxuICBjb25zdCBhcnJvd0Rvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctZG93bl9fbGluaycpO1xyXG4gIGNvbnN0IGFycm93VXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctdXBfX2xpbmsnKTtcclxuXHJcbiAgbWVudUxpbmtPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBtZW51UG9wLmNsYXNzTGlzdC5hZGQoJ21lbnUtcG9wX19vcGVuJyk7XHJcbiAgICBtZW51TGlua09wZW4uY2xhc3NMaXN0LmFkZCgnZ2FtYnVyZ2VyX19oaWRlJyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsLWJ1dC12aXNpYmxlJyk7XHJcbiAgfSk7XHJcblxyXG4gIG1lbnVMaW5rQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIG1lbnVQb3AuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1wb3BfX29wZW4nKTtcclxuICAgIG1lbnVMaW5rT3Blbi5jbGFzc0xpc3QucmVtb3ZlKCdnYW1idXJnZXJfX2hpZGUnKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwtYnV0LXZpc2libGUnKTtcclxuICB9KTtcclxuXHJcbiAgYXJyb3dEb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHdpbmRvdy5zY3JvbGwoeyB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH0pO1xyXG5cclxuICBhcnJvd1VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHdpbmRvdy5zY3JvbGwoeyB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4vL3NsaWRlciBzaXplXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3Qgc2xpZGVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWN0X19saXN0Jyk7XHJcbiAgY29uc3Qgc2xpZGVySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGljdF9faXRlbScpO1xyXG4gIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19jb250cm9sJyk7XHJcbiAgY29uc3QgY29udHJvbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRyb2xfX2l0ZW0nKTtcclxuICBsZXQgdGltZXI7XHJcblxyXG4gIGxldCBzbGlkZXJQaWN0V2lkdGggPSBzbGlkZXJMaXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4JztcclxuICBzbGlkZXJJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zdHlsZS53aWR0aCA9IHNsaWRlclBpY3RXaWR0aCkpO1xyXG5cclxuICBjb25zdCBjb250cm9sSGVpZ2h0ID0gY29udHJvbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyAncHgnO1xyXG4gIGNvbnRyb2xJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zdHlsZS5oZWlnaHQgPSBjb250cm9sSGVpZ2h0KSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICBpZiAoIXRpbWVyKSB7XHJcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2xpZGVyUGljdFdpZHRoID0gc2xpZGVyTGlzdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArICdweCc7XHJcbiAgICAgICAgc2xpZGVySXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc3R5bGUud2lkdGggPSBzbGlkZXJQaWN0V2lkdGgpKTtcclxuICAgICAgICB0aW1lciA9IG51bGw7XHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKCk7XHJcbi8vc2xpZGVyXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgZG93bkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC1kb3duX19saW5rJyk7XHJcbiAgY29uc3QgdXBMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtdXBfX2xpbmsnKTtcclxuICBjb25zdCBkb3duV3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC1kb3duX193cicpO1xyXG4gIGNvbnN0IHVwV3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC11cF9fd3InKTtcclxuICBjb25zdCBwaWN0V3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGljdF9fd3InKTtcclxuICBjb25zdCBjYXJkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucC1jYXJkJyk7XHJcbiAgbGV0IHRpbWVvdXQgPSBmYWxzZTtcclxuXHJcbiAgZG93bkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0aW1lb3V0KSB7XHJcbiAgICAgIHRpbWVvdXQgPSB0cnVlO1xyXG4gICAgICBzdGFydFNsaWRlckJ5Q2xpY2tpbmcoJ2Rvd24nKTtcclxuICAgIH1cclxuICB9KTtcclxuICB1cExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0aW1lb3V0KSB7XHJcbiAgICAgIHRpbWVvdXQgPSB0cnVlO1xyXG4gICAgICBzdGFydFNsaWRlckJ5Q2xpY2tpbmcoJ3VwJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNsaWRlTW92ZXMoZGlyZWN0aW9uLCBzbGlkZXJMaXN0LCBwb3NpdGlvbikge1xyXG4gICAgbGV0IHNpemU7XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uID09ICd0b3AnKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19jb250cm9sJyk7XHJcbiAgICAgIHNpemUgPSBjb250cm9sLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9zaXRpb24gPT0gJ2xlZnQnKSB7XHJcbiAgICAgIGNvbnN0IHNsaWRlclBpY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19waWN0Jyk7XHJcbiAgICAgIHNpemUgPSBzbGlkZXJQaWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICBjYXNlICdmb3J3YXJkJzpcclxuICAgICAge1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAndG9wJykgc2xpZGVyTGlzdC5zdHlsZS50b3AgPSAtc2l6ZSArICdweCc7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09ICdsZWZ0Jykgc2xpZGVyTGlzdC5zdHlsZS5sZWZ0ID0gLXNpemUgKyAncHgnO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNsaWRlckxpc3Quc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcclxuXHJcbiAgICAgICAgICBsZXQgbGFzdENoaWxkID0gc2xpZGVyTGlzdC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgIGxldCByZXN1bHQgPSBzbGlkZXJMaXN0LnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XHJcbiAgICAgICAgICBzbGlkZXJMaXN0LmFwcGVuZChyZXN1bHQpO1xyXG5cclxuICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSAndG9wJykgc2xpZGVyTGlzdC5zdHlsZS50b3AgPSAwICsgJ3B4JztcclxuICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSAnbGVmdCcpIHNsaWRlckxpc3Quc3R5bGUubGVmdCA9IDAgKyAncHgnO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzbGlkZXJMaXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnMC41cyc7XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBmYWxzZTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2JhY2t3YXJkJzpcclxuICAgICAge1xyXG4gICAgICAgIHNsaWRlckxpc3Quc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcclxuXHJcbiAgICAgICAgbGV0IGxhc3RDaGlsZCA9IHNsaWRlckxpc3QubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc2xpZGVyTGlzdC5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xyXG4gICAgICAgIHNsaWRlckxpc3QucHJlcGVuZChyZXN1bHQpO1xyXG5cclxuICAgICAgICBpZiAocG9zaXRpb24gPT0gJ3RvcCcpIHNsaWRlckxpc3Quc3R5bGUudG9wID0gLXNpemUgKyAncHgnO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAnbGVmdCcpIHNsaWRlckxpc3Quc3R5bGUubGVmdCA9IC1zaXplICsgJ3B4JztcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzbGlkZXJMaXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnMC41cyc7XHJcblxyXG4gICAgICAgICAgaWYgKHBvc2l0aW9uID09ICd0b3AnKSBzbGlkZXJMaXN0LnN0eWxlLnRvcCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgaWYgKHBvc2l0aW9uID09ICdsZWZ0Jykgc2xpZGVyTGlzdC5zdHlsZS5sZWZ0ID0gMCArICdweCc7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aW1lb3V0ID0gZmFsc2UpLCA1MDApO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0aXRsZVNsaWRlTW92ZXMoZGlyZWN0aW9uLCBjYXJkcykge1xyXG4gICAgbGV0IGFjdGl2ZUNhcmQ7XHJcblxyXG4gICAgWy4uLmNhcmRzXS5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3AtY2FyZF9hY3RpdmUnKSkgYWN0aXZlQ2FyZCA9IGk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYXJkc1thY3RpdmVDYXJkXS5jbGFzc0xpc3QucmVtb3ZlKCdwLWNhcmRfYWN0aXZlJyk7XHJcblxyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgIGNhc2UgJ2ZvcndhcmQnOlxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUNhcmQgPT0gY2FyZHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgYWN0aXZlQ2FyZCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjdGl2ZUNhcmQrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdiYWNrd2FyZCc6XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoYWN0aXZlQ2FyZCA9PSAwKSB7XHJcbiAgICAgICAgICBhY3RpdmVDYXJkID0gY2FyZHMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlQ2FyZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjYXJkc1thY3RpdmVDYXJkXS5jbGFzc0xpc3QuYWRkKCdwLWNhcmRfYWN0aXZlJyk7XHJcbiAgICB9LCAyMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRTbGlkZXJCeUNsaWNraW5nKGJ1dHRvbikge1xyXG4gICAgc3dpdGNoIChidXR0b24pIHtcclxuICAgIGNhc2UgJ3VwJzpcclxuICAgICAge1xyXG4gICAgICAgIHNsaWRlTW92ZXMoJ2ZvcndhcmQnLCB1cFdyLCAndG9wJyk7XHJcbiAgICAgICAgc2xpZGVNb3ZlcygnYmFja3dhcmQnLCBkb3duV3IsICd0b3AnKTtcclxuICAgICAgICBzbGlkZU1vdmVzKCdmb3J3YXJkJywgcGljdFdyLCAnbGVmdCcpO1xyXG4gICAgICAgIHRpdGxlU2xpZGVNb3ZlcygnZm9yd2FyZCcsIGNhcmRJdGVtcyk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdkb3duJzpcclxuICAgICAge1xyXG4gICAgICAgIHNsaWRlTW92ZXMoJ2JhY2t3YXJkJywgdXBXciwgJ3RvcCcpO1xyXG4gICAgICAgIHNsaWRlTW92ZXMoJ2ZvcndhcmQnLCBkb3duV3IsICd0b3AnKTtcclxuICAgICAgICBzbGlkZU1vdmVzKCdiYWNrd2FyZCcsIHBpY3RXciwgJ2xlZnQnKTtcclxuICAgICAgICB0aXRsZVNsaWRlTW92ZXMoJ2JhY2t3YXJkJywgY2FyZEl0ZW1zKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn0pKCk7XHJcbi8vY29tbWVudHMgZm9ybVxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNlbmRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRfX2xpbmtfc2VuZCcpO1xyXG4gIGNvbnN0IGNsZWFyTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0X19saW5rX2NsZWFyJyk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1sb2cnKTtcclxuICBjb25zdCBmb3JtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19pbnAtY29udGFjdF9uYW1lJyk7XHJcbiAgY29uc3QgZm9ybUVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2lucC1jb250YWN0X2VtYWlsJyk7XHJcbiAgY29uc3QgZm9ybVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fdGV4dGFyZWEnKTtcclxuXHJcbiAgY29uc3QgbWVzc2FnZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlQm94Jyk7XHJcbiAgY29uc3QgbWVzc2FnZUJveFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZUJveF9fdGV4dCcpO1xyXG4gIGxldCBtZXNzYWdlVGltZXI7XHJcblxyXG4gIHNlbmRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAobWVzc2FnZVRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dChtZXNzYWdlVGltZXIpO1xyXG4gICAgICBtZXNzYWdlQm94LmNsYXNzTGlzdC5yZW1vdmUoJ21lc3NhZ2VCb3hfdmlzaWJsZScpO1xyXG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlVGltZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBmb3JtTmFtZS52YWx1ZS50cmltKCkgJiZcclxuICAgICAgZm9ybUVtYWlsLnZhbHVlLnRyaW0oKSAmJlxyXG4gICAgICBmb3JtVGV4dC52YWx1ZS50cmltKClcclxuICAgICkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBtZXNzYWdlQm94VGV4dC5pbm5lckhUTUwgPSAn0KTQvtGA0LzQsCDQvtGC0L/RgNCw0LLQu9C10L3QsCc7XHJcbiAgICAgICAgbWVzc2FnZUJveC5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlQm94X3Zpc2libGUnKTtcclxuICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgIH0sIDgwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWVzc2FnZVRpbWVyKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBtZXNzYWdlQm94VGV4dC5pbm5lckhUTUwgPSAn0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjyc7XHJcbiAgICAgICAgICBtZXNzYWdlQm94LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2VCb3hfdmlzaWJsZScpO1xyXG4gICAgICAgIH0sIDgwMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZUJveFRleHQuaW5uZXJIVE1MID0gJ9CX0LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y8nO1xyXG4gICAgICAgIG1lc3NhZ2VCb3guY2xhc3NMaXN0LmFkZCgnbWVzc2FnZUJveF92aXNpYmxlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXNzYWdlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbWVzc2FnZUJveC5jbGFzc0xpc3QucmVtb3ZlKCdtZXNzYWdlQm94X3Zpc2libGUnKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH0pO1xyXG5cclxuICBjbGVhckxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZm9ybS5yZXNldCgpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4iXX0=
