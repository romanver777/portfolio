"use strict";function mapInit(e,t,n){mapboxgl.accessToken="pk.eyJ1IjoiY29udHJhNzciLCJhIjoiY2p0anR2MWEwMnZrMjN5cDhsbXczeDJ1cSJ9.Q9r4aUzdARiggKd4gEmFDA";e=new mapboxgl.Map({container:"map",style:"mapbox://styles/contra77/cju1na88e1fs41fpme09mg25a",center:[e,t],zoom:n});e.scrollZoom.disable(),550<window.innerWidth&&e.addControl(new mapboxgl.NavigationControl,"top-left"),new mapboxgl.Marker({color:"#82a073"}).setLngLat([82.929158,55.012969]).addTo(e)}!function(){var t=document.querySelector("body"),n=document.querySelector(".gamburger"),o=document.querySelector(".menu-pop"),e=document.querySelector(".close__link"),r=document.querySelector(".arrow-down__link");n.addEventListener("click",function(e){e.preventDefault(),o.classList.add("menu-pop__open"),n.classList.add("gamburger__hide"),t.classList.add("stop-scroll-but-visible")}),e.addEventListener("click",function(e){e.preventDefault(),o.classList.remove("menu-pop__open"),n.classList.remove("gamburger__hide"),t.classList.remove("stop-scroll-but-visible")}),r.addEventListener("click",function(e){e.preventDefault(),window.scroll({top:window.innerHeight,behavior:"smooth"})})}(),function(){function e(e){var t=.01*window.innerHeight;document.querySelector(e).style.setProperty("--vh","".concat(t,"px"))}(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in document.documentElement)&&(e(".wrap__header"),window.addEventListener("resize",function(){e(".wrap__header")}))}(),function(){var i=[[50,33,75],[15,60,88,45],[90,51,32]],t=new IntersectionObserver(function(e,r){e.forEach(function(e){var t,n,o;e.isIntersecting&&(t=e.target.querySelectorAll(".circles__sector"),n=window.getComputedStyle(t[0]).strokeDashoffset.slice(0,-2),o=e.target.id.slice(-1)-1,t.forEach(function(e,t){setTimeout(function(){e.style.strokeDashoffset=n*i[o][t]/100},100*(t+1))}),r.unobserve(e.target))})},{root:null,rootMargin:"0px",threshold:.75});document.querySelectorAll(".skill__list").forEach(function(e){return t.observe(e)})}(),function(){var e=window.innerWidth;1200<=e&&mapInit(82.902,55.013,12.8),900<=e&&e<1200&&mapInit(82.92,55.013,14.8),768<=e&&e<900&&mapInit(82.9216,55.013,14.8),550<=e&&e<768&&mapInit(82.92,55.013,14),e<550&&mapInit(82.928,55.02,13)}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmpzIl0sIm5hbWVzIjpbIm1hcEluaXQiLCJjZW50ZXJDb29yZExlZnQiLCJjZW50ZXJDb29yZFRvcCIsInpvb20iLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwibWFwIiwiTWFwIiwiY29udGFpbmVyIiwic3R5bGUiLCJjZW50ZXIiLCJzY3JvbGxab29tIiwiZGlzYWJsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRDb250cm9sIiwiTmF2aWdhdGlvbkNvbnRyb2wiLCJNYXJrZXIiLCJjb2xvciIsInNldExuZ0xhdCIsImFkZFRvIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVMaW5rT3BlbiIsIm1lbnVQb3AiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNsYXNzTGlzdCIsImFkZCIsIm1lbnVMaW5rQ2xvc2UiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsImFycm93RG93biIsImJlaGF2aW9yIiwic2Nyb2xsIiwidG9wIiwiaW5uZXJIZWlnaHQiLCJpc01vYmlsZSIsImVsZW0iLCJzZXRFbGVtSGVpZ2h0Iiwic2V0UHJvcGVydHkiLCJjb25jYXQiLCJ2aCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJkb2N1bWVudEVsZW1lbnQiLCJtYXhQZXJzZW50cyIsImNhbGxiYWNrIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaXRlbXMiLCJ3aWR0aCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJ1bm9ic2VydmUiLCJ0YXJnZXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFyZ2V0cyIsIm9ic2VydmUiLCJpZCIsInNsaWNlIiwiaXRlbSIsImkiLCJzZXRNYXBQYXJhbXMiLCJpdGVtU3Ryb2tlIiwic2tpbGxzUGVyc2VudCIsImVudHJ5SW5kZXgiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJhQWlIQSxTQUFT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QVcsU0FBRUksR0FBQSxPQUFBRixFQUFBSyxRQUFBSCxDQUFBLENBQUEsQ0FBQSxDQWpCbEIsRUFBQSxFQW9CRCxXQUVBLElBQUFKLEVBQVN0RCxPQUFRQyxXQUdMLE1BQU5LLEdBQ0ZFLFFBQUFBLE9BQWdCLE9BQUEsSUFBQSxFQUVQUCxLQUFUUyxHQUFTVCxFQUFpQkMsTUFDMUJDLFFBQU1BLE1BQUFBLE9BQUFBLElBQUFBLEVBR0pRLEtBQUFBLEdBQVdDLEVBQVMsS0FFeEJaLFFBQVUsUUFBQ2MsT0FBZ0IsSUFBRSxFQUU3QixLQUFBd0MsR0FBQUEsRUFBQSxLQUVBdEQsUUFBVSxNQUFPSSxPQUFRLEVBQUNhLEVBQ3ZCRSxFQUFTLEtBRWRuQixRQUFBLE9BQUEsTUFBQSxFQUFBLENBckJDLEVBQUEiLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgY29uc3QgbWVudUxpbmtPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWJ1cmdlcicpO1xyXG4gIGNvbnN0IG1lbnVQb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wb3AnKTtcclxuICBjb25zdCBtZW51TGlua0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlX19saW5rJyk7XHJcbiAgY29uc3QgYXJyb3dEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWRvd25fX2xpbmsnKTtcclxuXHJcbiAgbWVudUxpbmtPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBtZW51UG9wLmNsYXNzTGlzdC5hZGQoJ21lbnUtcG9wX19vcGVuJyk7XHJcbiAgICBtZW51TGlua09wZW4uY2xhc3NMaXN0LmFkZCgnZ2FtYnVyZ2VyX19oaWRlJyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3N0b3Atc2Nyb2xsLWJ1dC12aXNpYmxlJyk7XHJcbiAgfSk7XHJcblxyXG4gIG1lbnVMaW5rQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIG1lbnVQb3AuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1wb3BfX29wZW4nKTtcclxuICAgIG1lbnVMaW5rT3Blbi5jbGFzc0xpc3QucmVtb3ZlKCdnYW1idXJnZXJfX2hpZGUnKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcC1zY3JvbGwtYnV0LXZpc2libGUnKTtcclxuICB9KTtcclxuXHJcbiAgYXJyb3dEb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHdpbmRvdy5zY3JvbGwoeyB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4vL3NldCBmaXJzdCBibG9jayBoZWlnaHQgMTAwdmggZm9yIG1vYmlsZVxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxyXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgKSB8fCAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuICAgICk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldEVsZW1IZWlnaHQoZWxlbSkge1xyXG4gICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSkuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xyXG4gIH1cclxuICBcclxuICBpZiAoaXNNb2JpbGUoKSkge1xyXG4gICAgc2V0RWxlbUhlaWdodCgnLndyYXBfX2hlYWRlcicpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgIHNldEVsZW1IZWlnaHQoJy53cmFwX19oZWFkZXInKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSkoKTtcclxuLy9za2lsbHMgYW5pbWF0aW9uXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgbWF4UGVyc2VudHMgPSAxMDA7XHJcbiAgbGV0IHNraWxsc1BlcnNlbnQgPSBbXHJcbiAgICBbNTAsIDMzLCA3NV0sXHJcbiAgICBbMTUsIDYwLCA4OCwgNDVdLFxyXG4gICAgWzkwLCA1MSwgMzJdLFxyXG4gIF07XHJcbiAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICByb290OiBudWxsLFxyXG4gICAgcm9vdE1hcmdpbjogJzBweCcsXHJcbiAgICB0aHJlc2hvbGQ6IDAuNzUsXHJcbiAgfTtcclxuXHJcbiAgbGV0IGNhbGxiYWNrID0gZnVuY3Rpb24gKGVudHJpZXMsIG9ic2VydmVyKSB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnLmNpcmNsZXNfX3NlY3RvcicpO1xyXG4gICAgICAgIGxldCBpdGVtU3Ryb2tlID0gd2luZG93XHJcbiAgICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShpdGVtc1swXSlcclxuICAgICAgICAgIC5zdHJva2VEYXNob2Zmc2V0LnNsaWNlKDAsIC0yKTtcclxuICAgICAgICBsZXQgZW50cnlJbmRleCA9IGVudHJ5LnRhcmdldC5pZC5zbGljZSgtMSkgLSAxO1xyXG4gICAgICAgIGNvbnN0IG1pblRpbWUgPSAxMDA7XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPVxyXG4gICAgICAgICAgICAgIChpdGVtU3Ryb2tlICogc2tpbGxzUGVyc2VudFtlbnRyeUluZGV4XVtpXSkgLyBtYXhQZXJzZW50cztcclxuICAgICAgICAgIH0sIChpKzEpICogbWluVGltZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xyXG5cclxuICBsZXQgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbF9fbGlzdCcpO1xyXG4gIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCkpO1xyXG59KSgpO1xyXG4vLyBtYXBcclxuKGZ1bmN0aW9uIHNldE1hcFBhcmFtcygpIHtcclxuICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgaWYgKHdpZHRoID49IDEyMDApIHtcclxuICAgIG1hcEluaXQoODIuOTAyLCA1NS4wMTMsIDEyLjgpO1xyXG4gIH1cclxuICBpZiAod2lkdGggPj0gOTAwICYmIHdpZHRoIDwgMTIwMCkge1xyXG4gICAgbWFwSW5pdCg4Mi45MiwgNTUuMDEzLCAxNC44KTtcclxuICB9XHJcbiAgaWYgKHdpZHRoID49IDc2OCAmJiB3aWR0aCA8IDkwMCkge1xyXG4gICAgbWFwSW5pdCg4Mi45MjE2LCA1NS4wMTMsIDE0LjgpO1xyXG4gIH1cclxuICBpZiAod2lkdGggPj0gNTUwICYmIHdpZHRoIDwgNzY4KSB7XHJcbiAgICBtYXBJbml0KDgyLjkyLCA1NS4wMTMsIDE0KTtcclxuICB9XHJcbiAgaWYgKHdpZHRoIDwgNTUwKSB7XHJcbiAgICBtYXBJbml0KDgyLjkyOCwgNTUuMDIsIDEzKTtcclxuICB9XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBtYXBJbml0KGNlbnRlckNvb3JkTGVmdCwgY2VudGVyQ29vcmRUb3AsIHpvb20pIHtcclxuICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9XHJcbiAgICAncGsuZXlKMUlqb2lZMjl1ZEhKaE56Y2lMQ0poSWpvaVkycDBhblIyTVdFd01uWnJNak41Y0Roc2JYY3plREoxY1NKOS5ROXI0YVV6ZEFSaWdnS2Q0Z0VtRkRBJztcclxuICBsZXQgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XHJcbiAgICBjb250YWluZXI6ICdtYXAnLFxyXG4gICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvY29udHJhNzcvY2p1MW5hODhlMWZzNDFmcG1lMDltZzI1YScsXHJcbiAgICBjZW50ZXI6IFtjZW50ZXJDb29yZExlZnQsIGNlbnRlckNvb3JkVG9wXSxcclxuICAgIHpvb206IHpvb20sXHJcbiAgfSk7XHJcblxyXG4gIG1hcC5zY3JvbGxab29tLmRpc2FibGUoKTtcclxuXHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNTUwKSB7XHJcbiAgICBtYXAuYWRkQ29udHJvbChuZXcgbWFwYm94Z2wuTmF2aWdhdGlvbkNvbnRyb2woKSwgJ3RvcC1sZWZ0Jyk7XHJcbiAgfVxyXG5cclxuICBsZXQgbWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcih7IGNvbG9yOiAnIzgyYTA3MycgfSlcclxuICAgIC5zZXRMbmdMYXQoWzgyLjkyOTE1OCwgNTUuMDEyOTY5XSlcclxuICAgIC5hZGRUbyhtYXApO1xyXG59XHJcbiJdfQ==
