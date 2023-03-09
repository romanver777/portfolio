"use strict";!function(){var e,o,r=document.querySelector("body"),i=document.querySelector(".preloader"),s=document.querySelector(".preloader-bg"),c=document.querySelector(".container-index"),t=["./assets/img/content/forest_prel_bg.jpg"],a=["./assets/js/foundation.js"],u=["./assets/img/content/bg_forest_1800.jpg","./assets/img/content/water-maps.jpg"],l=0,d=0,m=!f()&&1200<=window.innerWidth?[].concat(t,a,u).length:t.length+1;function f(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in document.documentElement}function p(e){var t=document.querySelector(".progress__number"),n=100*e/m,e=Math.round(10/m);o&&clearInterval(o),o=setInterval(function(){n<=(l+=1)&&(clearInterval(o),l=n),t.innerHTML=l},e)}function _(){setTimeout(function(){var e,t,n;location.toString().includes("auth")&&(e=document.querySelector(".auth-wrap"),t=document.querySelector(".front"),n=document.querySelector(".back"),t.classList.add("front_flipped"),n.classList.add("back_flipped"),e.classList.add("auth-wrap_display-none")),c.classList.add("container-index_visible"),i.classList.add("preloader_hided")},1e3)}t=t,(e=new Image).src=t[0],e.onload=function(){var e,t,n;p(++d),s.classList.add("preloader-bg_visible"),!f()&&1200<=window.innerWidth?Promise.all(a.map(function(e){return n=e,new Promise(function(e){var t=document.createElement("script");t.src=n,document.head.append(t),t.onload=function(){p(++d),e()}});var n})).then(function(){return Promise.all(u.map(function(e){return n=e,new Promise(function(e){var t=new Image;t.src=n,t.onload=function(){p(++d),e()}});var n}))}).then(function(){d===m&&(c.classList.remove("bg-forest-index"),_())}):(e=document.querySelector(".bg-forest-index"),t='url("',t=(e=window.getComputedStyle(e).backgroundImage).indexOf(t)+t.length,(n=r).style.height=window.innerHeight+"px",n.style.position="fixed",(n=new Image).src=e.slice(t,-'")'.length),n.onload=function(){p(++d),_()})}}(),function(){var t=document.querySelector(".auth-wrap"),e=document.querySelector(".auth__link"),n=document.querySelector(".front"),o=document.querySelector(".back"),r=document.querySelector(".butt__link_home");e.addEventListener("click",function(){n.classList.add("front_flipped"),o.classList.add("back_flipped"),t.classList.add("auth-wrap_display-none")}),r.addEventListener("click",function(e){e.preventDefault(),n.classList.remove("front_flipped"),o.classList.remove("back_flipped"),t.classList.remove("auth-wrap_display-none")})}(),function(){var t,e=document.querySelector(".butt__link_login"),a=document.querySelector(".form__name"),u=document.querySelector(".form__pass"),l=document.querySelector(".checkbox__input"),d=document.querySelector(".radio-btn__input_yes"),m=document.querySelector(".messageBox"),f=document.querySelector(".messageBox__text"),p=document.querySelector(".form-auth");e.addEventListener("click",function(e){var n,o,r,i,s,c;e.preventDefault(),Promise.all([(e=a.value,s=/^\S+@\S+\.\S+$/,c=e.trim(),new Promise(function(e,t){return s.test(c)?e(c):t("Введите правильный адрес почты")})),(e=u.value,r=[4,15],i=e.trim(),new Promise(function(e,t){return i.length>r[0]&&i.length<=r[1]?e(i):t("Введите пароль длиной от 4 до 15 символов")})),(o=l,new Promise(function(e,t){return o.checked?e():t("Роботам вход воспрещен")})),(n=d,new Promise(function(e,t){return n.checked?e():t("Роботам вход воспрещен")}))]).then(function(){clearTimeout(t),m.classList.remove("messageBox_visible"),setTimeout(function(){f.innerHTML="Форма отправлена",m.classList.add("messageBox_visible"),p.reset()},800),setTimeout(function(){m.classList.remove("messageBox_visible")},3e3)}).catch(function(e){t?(clearTimeout(t),m.classList.remove("messageBox_visible"),setTimeout(function(){f.innerHTML=e,m.classList.add("messageBox_visible")},800)):(f.innerHTML=e,m.classList.add("messageBox_visible")),t=setTimeout(function(){m.classList.remove("messageBox_visible"),t=null},3e3)})})}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW1hZ2UiLCJpbnRJZCIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmVMb2FkZXIiLCJwcmVMb2FkZXJCZyIsImxvYWRlclVybCIsInNjcmlwdFVybCIsInBhZ2VJbWdVcmxzIiwicHJvZ3Jlc3MiLCJjaGVja0xvYWRpbmdCZ1ByZWxvYWRlciIsImxvYWRlZCIsImlzTW9iaWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFuaW1hdGVQcm9ncmVzcyIsImxlbmd0aCIsImNsYXNzTGlzdCIsImVsZW0iLCJ0ZXN0IiwidXNlckFnZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY291bnQiLCJvcGVuQXV0aFBhZ2UiLCJhdXRoV3JhcCIsImFkZCIsIm1heExvYWRlZCIsImNsZWFySW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwibmV3TnVtYmVyIiwiaW5uZXJIVE1MIiwidGltZSIsInByZXZlbnREZWZhdWx0IiwiZnJvbnQiLCJob21lTGluayIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJiYWNrIiwidXJsIiwic2NyaXB0IiwibG9hZFNjcmlwdCIsInNyYyIsIm9ubG9hZCIsIlByb21pc2UiLCJjb250YWluZXJJbmRleCIsInNob3dQYWdlIiwibWFwIiwicmVzIiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmQiLCJ0aGVuIiwiYWxsIiwiTWF0aCIsInJvdW5kIiwiSW1hZ2UiLCJpbWciLCJyZW1vdmUiLCJmaXJzdEl0ZW0iLCJzZXRNb2JpbGVGdWxsSGVpZ2h0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJnIiwiYmFja2dyb3VuZEltYWdlIiwic3R5bGUiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImxvYWRJbWciLCJiZ1N0eWxlIiwic2xpY2UiLCJpbmRleCIsImZvcm1QYXNzIiwiY2hlY2tib3giLCJyYWRpbyIsIm1lc3NhZ2VCb3giLCJtZXNzYWdlQm94VGV4dCIsImF1dGhMaW5rIiwidGltZW91dElkIiwibG9naW5MaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ2YWxpZGF0ZUVtYWlsIiwidmFsaWRhdGVQYXNzIiwicmVzZXQiLCJlcnJvciIsImZvcm1OYW1lIiwiY2xlYXJUaW1lb3V0IiwiZm9ybSIsImJ0biIsImJveCIsImxpbWl0cyIsInBhc3NUcmltIiwicmVnIiwibWFpbFRyaW0iLCJtYWlsIiwidmFsdWUiLCJ0cmltIiwicmVqIiwicGFzcyIsImNoZWNrZWQiLCJ2YWxpZGF0ZUNoZWNrYm94IiwidmFsaWRhdGVSYWRpbyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFDQSxDQUFBLFdBQ0MsSUFzQk9BLEVBOEZIQyxFQXBISkMsRUFBWUMsU0FBQUMsY0FBQSxNQUFBLEVBQ0xGLEVBQU9DLFNBQVNDLGNBQXFCLFlBQUEsRUFDckNDLEVBQVlGLFNBQVNDLGNBQWMsZUFBYSxFQUNoREUsRUFBY0gsU0FBU0MsY0FBYyxrQkFBZ0IsRUFHckRHLEVBQWEsQ0FBQSwyQ0FDYkMsRUFBYSxDQUFBLDZCQUNiQyxFQUNKLENBSUYsMENBQ0EsdUNBT0FDLEVBQVNDLEVBQ1BDLEVBQVMsRUFFVFosRUFQQSxDQUFDYSxFQVFPLEdBQUUsTUFBQUMsT0FBQUMsV0FDUkMsR0FBQUEsT0FBQUEsRUFBZ0JKLEVBQU9ILENBQUEsRUFBQVEsT0FDdkJYLEVBQVlZLE9BSkMsRUFxQ2pCLFNBZVFDLElBZE4sTUFnQkVoQixpRUFBMEJpQixLQUMxQkQsVUFBV0UsU0FBRyxHQUNaVCxpQkFBUVQsU0FBQW1CLGVBYmQsQ0FtREEsU0FBQU4sRUFBQU8sR0FFQSxJQUFBSixFQUFTSyxTQUFZcEIsY0FBRSxtQkFBQSxFQUNmcUIsRUFBV3RCLElBQVFvQixFQUFDbkIsRUFJcEJjLEVBQUFBLEtBQVVRLE1BSEZ2QixHQUdxQndCLENBQUMsRUFFcENGLEdBQ0ZHLGNBQUEzQixDQUFBLEVBR0U0QixFQUFBQSxZQUFXLFdBRU1YLElBRGZSLEdBVFdQLEtBV1hFLGNBQVVhLENBQVVRLEVBQ25CaEIsRUFBS29CLEdBRVJYLEVBQUFZLFVBQUFyQixD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bihmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBjb25zdCBwcmVMb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJyk7XHJcbiAgY29uc3QgcHJlTG9hZGVyQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyLWJnJyk7XHJcbiAgY29uc3QgY29udGFpbmVySW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWluZGV4Jyk7XHJcblxyXG4gIGNvbnN0IGxvYWRlclVybCA9IFsnLi9hc3NldHMvaW1nL2NvbnRlbnQvZm9yZXN0X3ByZWxfYmcuanBnJ107XHJcbiAgY29uc3Qgc2NyaXB0VXJsID0gWycuL2Fzc2V0cy9qcy9mb3VuZGF0aW9uLmpzJ107XHJcbiAgY29uc3QgcGFnZUltZ1VybHMgPSBbXHJcbiAgICAnLi9hc3NldHMvaW1nL2NvbnRlbnQvYmdfZm9yZXN0XzE4MDAuanBnJyxcclxuICAgICcuL2Fzc2V0cy9pbWcvY29udGVudC93YXRlci1tYXBzLmpwZycsXHJcbiAgXTtcclxuXHJcbiAgbGV0IHByb2dyZXNzID0gMDtcclxuICBsZXQgbG9hZGVkID0gMDtcclxuICBsZXQgaW1nRnJvbUNzcyA9IDE7XHJcbiAgbGV0IG1heExvYWRlZCA9XHJcbiAgICAhaXNNb2JpbGUoKSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjAwXHJcbiAgICAgID8gWy4uLmxvYWRlclVybCwgLi4uc2NyaXB0VXJsLCAuLi5wYWdlSW1nVXJsc10ubGVuZ3RoXHJcbiAgICAgIDogbG9hZGVyVXJsLmxlbmd0aCArIGltZ0Zyb21Dc3M7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrTG9hZGluZ0JnUHJlbG9hZGVyKHVybCkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5zcmMgPSB1cmxbMF07XHJcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGxvYWRlZCsrO1xyXG4gICAgICBhbmltYXRlUHJvZ3Jlc3MobG9hZGVkKTtcclxuICAgICAgcHJlTG9hZGVyQmcuY2xhc3NMaXN0LmFkZCgncHJlbG9hZGVyLWJnX3Zpc2libGUnKTtcclxuXHJcbiAgICAgIGlmICghaXNNb2JpbGUoKSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjAwKSB7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoc2NyaXB0VXJsLm1hcCgodXJsKSA9PiBsb2FkU2NyaXB0KHVybCkpKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4gUHJvbWlzZS5hbGwocGFnZUltZ1VybHMubWFwKCh1cmwpID0+IGxvYWRJbWcodXJsKSkpKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobG9hZGVkID09PSBtYXhMb2FkZWQpIHtcclxuICAgICAgICAgICAgICBjb250YWluZXJJbmRleC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1mb3Jlc3QtaW5kZXgnKTtcclxuICAgICAgICAgICAgICBzaG93UGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctZm9yZXN0LWluZGV4Jyk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gJ3VybChcIic7XHJcbiAgICAgICAgY29uc3QgbGFzdEl0ZW0gPSAnXCIpJztcclxuXHJcbiAgICAgICAgbGV0IGJnU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiZykuYmFja2dyb3VuZEltYWdlO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGJnU3R5bGUuaW5kZXhPZihmaXJzdEl0ZW0pICsgZmlyc3RJdGVtLmxlbmd0aDtcclxuXHJcbiAgICAgICAgc2V0TW9iaWxlRnVsbEhlaWdodChib2R5KTtcclxuXHJcbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gYmdTdHlsZS5zbGljZShpbmRleCwgLWxhc3RJdGVtLmxlbmd0aCk7XHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgbG9hZGVkKys7XHJcbiAgICAgICAgICBhbmltYXRlUHJvZ3Jlc3MobG9hZGVkKTtcclxuICAgICAgICAgIHNob3dQYWdlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgY2hlY2tMb2FkaW5nQmdQcmVsb2FkZXIobG9hZGVyVXJsKTtcclxuXHJcbiAgZnVuY3Rpb24gaXNNb2JpbGUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICApIHx8ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldE1vYmlsZUZ1bGxIZWlnaHQoZWxlbSkge1xyXG4gICAgZWxlbS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyAncHgnO1xyXG4gICAgZWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2FkU2NyaXB0KHNjcmlwdCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcclxuICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgZWxlbS5zcmMgPSBzY3JpcHQ7XHJcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGVsZW0pO1xyXG4gICAgICBlbGVtLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBsb2FkZWQrKztcclxuICAgICAgICBhbmltYXRlUHJvZ3Jlc3MobG9hZGVkKTtcclxuICAgICAgICByZXMoKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbG9hZEltZyh1cmwpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XHJcbiAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgaW1nLnNyYyA9IHVybDtcclxuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBsb2FkZWQrKztcclxuICAgICAgICBhbmltYXRlUHJvZ3Jlc3MobG9hZGVkKTtcclxuICAgICAgICByZXMoKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbGV0IGludElkO1xyXG4gIGZ1bmN0aW9uIGFuaW1hdGVQcm9ncmVzcyhjb3VudCkge1xyXG4gICAgbGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NfX251bWJlcicpO1xyXG4gICAgbGV0IG5ld051bWJlciA9ICgxMDAgKiBjb3VudCkgLyBtYXhMb2FkZWQ7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IDEwO1xyXG4gICAgY29uc3Qgc3RlcCA9IDE7XHJcbiAgICBjb25zdCB0aW1lID0gTWF0aC5yb3VuZChpbnRlcnZhbCAvIG1heExvYWRlZCk7XHJcblxyXG4gICAgaWYgKGludElkKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50SWQpO1xyXG4gICAgfVxyXG4gICAgaW50SWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHByb2dyZXNzICs9IHN0ZXA7XHJcbiAgICAgIGlmIChwcm9ncmVzcyA+PSBuZXdOdW1iZXIpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludElkKTtcclxuICAgICAgICBwcm9ncmVzcyA9IG5ld051bWJlcjtcclxuICAgICAgfVxyXG4gICAgICBlbGVtLmlubmVySFRNTCA9IHByb2dyZXNzO1xyXG4gICAgfSwgdGltZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuQXV0aFBhZ2UoKXtcclxuICAgIGNvbnN0IGF1dGhXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGgtd3JhcCcpO1xyXG4gICAgY29uc3QgZnJvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJvbnQnKTtcclxuICAgIGNvbnN0IGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFjaycpO1xyXG5cclxuICAgIGZyb250LmNsYXNzTGlzdC5hZGQoJ2Zyb250X2ZsaXBwZWQnKTtcclxuICAgIGJhY2suY2xhc3NMaXN0LmFkZCgnYmFja19mbGlwcGVkJyk7XHJcbiAgICBhdXRoV3JhcC5jbGFzc0xpc3QuYWRkKCdhdXRoLXdyYXBfZGlzcGxheS1ub25lJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93UGFnZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZihsb2NhdGlvbi50b1N0cmluZygpLmluY2x1ZGVzKCdhdXRoJykpIG9wZW5BdXRoUGFnZSgpO1xyXG4gICAgICBjb250YWluZXJJbmRleC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItaW5kZXhfdmlzaWJsZScpO1xyXG4gICAgICBwcmVMb2FkZXIuY2xhc3NMaXN0LmFkZCgncHJlbG9hZGVyX2hpZGVkJyk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbn0pKCk7XHJcbi8vIGZsaXAgZm9ybVxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGF1dGhXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGgtd3JhcCcpO1xyXG4gIGNvbnN0IGF1dGhMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGhfX2xpbmsnKTtcclxuICBjb25zdCBmcm9udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcm9udCcpO1xyXG4gIGNvbnN0IGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFjaycpO1xyXG4gIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRfX2xpbmtfaG9tZScpO1xyXG5cclxuICBhdXRoTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGZyb250LmNsYXNzTGlzdC5hZGQoJ2Zyb250X2ZsaXBwZWQnKTtcclxuICAgIGJhY2suY2xhc3NMaXN0LmFkZCgnYmFja19mbGlwcGVkJyk7XHJcbiAgICBhdXRoV3JhcC5jbGFzc0xpc3QuYWRkKCdhdXRoLXdyYXBfZGlzcGxheS1ub25lJyk7XHJcbiAgfSk7XHJcbiAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZnJvbnQuY2xhc3NMaXN0LnJlbW92ZSgnZnJvbnRfZmxpcHBlZCcpO1xyXG4gICAgYmFjay5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrX2ZsaXBwZWQnKTtcclxuICAgIGF1dGhXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2F1dGgtd3JhcF9kaXNwbGF5LW5vbmUnKTtcclxuICB9KTtcclxufSkoKTtcclxuLy8gZm9ybSBhdXRoXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgbG9naW5MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRfX2xpbmtfbG9naW4nKTtcclxuICBjb25zdCBmb3JtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19uYW1lJyk7XHJcbiAgY29uc3QgZm9ybVBhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fcGFzcycpO1xyXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrYm94X19pbnB1dCcpO1xyXG4gIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhZGlvLWJ0bl9faW5wdXRfeWVzJyk7XHJcbiAgY29uc3QgbWVzc2FnZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlQm94Jyk7XHJcbiAgY29uc3QgbWVzc2FnZUJveFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZUJveF9fdGV4dCcpO1xyXG4gIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYXV0aCcpO1xyXG4gIGxldCB0aW1lb3V0SWQ7XHJcblxyXG4gIGxvZ2luTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICB2YWxpZGF0ZUVtYWlsKGZvcm1OYW1lLnZhbHVlKSxcclxuICAgICAgdmFsaWRhdGVQYXNzKGZvcm1QYXNzLnZhbHVlKSxcclxuICAgICAgdmFsaWRhdGVDaGVja2JveChjaGVja2JveCksXHJcbiAgICAgIHZhbGlkYXRlUmFkaW8ocmFkaW8pLFxyXG4gICAgXSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICAgIG1lc3NhZ2VCb3guY2xhc3NMaXN0LnJlbW92ZSgnbWVzc2FnZUJveF92aXNpYmxlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBtZXNzYWdlQm94VGV4dC5pbm5lckhUTUwgPSAn0KTQvtGA0LzQsCDQvtGC0L/RgNCw0LLQu9C10L3QsCc7XHJcbiAgICAgICAgICBtZXNzYWdlQm94LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2VCb3hfdmlzaWJsZScpO1xyXG4gICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBtZXNzYWdlQm94LmNsYXNzTGlzdC5yZW1vdmUoJ21lc3NhZ2VCb3hfdmlzaWJsZScpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aW1lb3V0SWQpIHtcclxuICAgICAgICAgIG1lc3NhZ2VCb3hUZXh0LmlubmVySFRNTCA9IGVycm9yO1xyXG4gICAgICAgICAgbWVzc2FnZUJveC5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlQm94X3Zpc2libGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICBtZXNzYWdlQm94LmNsYXNzTGlzdC5yZW1vdmUoJ21lc3NhZ2VCb3hfdmlzaWJsZScpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VCb3hUZXh0LmlubmVySFRNTCA9IGVycm9yO1xyXG4gICAgICAgICAgICBtZXNzYWdlQm94LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2VCb3hfdmlzaWJsZScpO1xyXG4gICAgICAgICAgfSwgODAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbWVzc2FnZUJveC5jbGFzc0xpc3QucmVtb3ZlKCdtZXNzYWdlQm94X3Zpc2libGUnKTtcclxuICAgICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKG1haWwpIHtcclxuICAgIGNvbnN0IHJlZyA9IC9eXFxTK0BcXFMrXFwuXFxTKyQvO1xyXG4gICAgbGV0IG1haWxUcmltID0gbWFpbC50cmltKCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVnLnRlc3QobWFpbFRyaW0pXHJcbiAgICAgICAgPyByZXMobWFpbFRyaW0pXHJcbiAgICAgICAgOiByZWooJ9CS0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5INCw0LTRgNC10YEg0L/QvtGH0YLRiycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZVBhc3MocGFzcykge1xyXG4gICAgY29uc3QgbGltaXRzID0gWzQsIDE1XTtcclxuICAgIGxldCBwYXNzVHJpbSA9IHBhc3MudHJpbSgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuICAgICAgcmV0dXJuIHBhc3NUcmltLmxlbmd0aCA+IGxpbWl0c1swXSAmJiBwYXNzVHJpbS5sZW5ndGggPD0gbGltaXRzWzFdXHJcbiAgICAgICAgPyByZXMocGFzc1RyaW0pXHJcbiAgICAgICAgOiByZWooJ9CS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjCDQtNC70LjQvdC+0Lkg0L7RgiA0INC00L4gMTUg0YHQuNC80LLQvtC70L7QsicpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUNoZWNrYm94KGJveCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICByZXR1cm4gYm94LmNoZWNrZWQgPyByZXMoKSA6IHJlaign0KDQvtCx0L7RgtCw0Lwg0LLRhdC+0LQg0LLQvtGB0L/RgNC10YnQtdC9Jyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlUmFkaW8oYnRuKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgIHJldHVybiBidG4uY2hlY2tlZCA/IHJlcygpIDogcmVqKCfQoNC+0LHQvtGC0LDQvCDQstGF0L7QtCDQstC+0YHQv9GA0LXRidC10L0nKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSkoKTtcclxuIl19
