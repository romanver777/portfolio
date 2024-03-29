'use strict';
// preloader
(function () {
  const preLoader = document.querySelector('.preloader');
  const preLoaderBg = document.querySelector('.preloader-bg');
  const containerIndex = document.querySelector('.container-index');

  const loaderUrl = ['./assets/img/content/forest_prel_bg.jpg'];
  const scriptUrl = ['./assets/js/foundation.js'];
  const pageImgUrls = [
    './assets/img/content/bg_forest_1800.jpg',
    './assets/img/content/water-maps.jpg',
  ];

  let progress = 0;
  let loaded = 0;
  let imgFromCss = 1;
  let maxLoaded =
    !isMobile() && window.innerWidth >= 1200
      ? [...loaderUrl, ...scriptUrl, ...pageImgUrls].length
      : loaderUrl.length + imgFromCss;

  function checkLoadingBgPreloader(url) {
    let image = new Image();
    image.src = url[0];
    image.onload = () => {
      loaded++;
      animateProgress(loaded);
      preLoaderBg.classList.add('preloader-bg_visible');

      if (!isMobile() && window.innerWidth >= 1200) {
        Promise.all(scriptUrl.map((url) => loadScript(url)))
          .then(() => Promise.all(pageImgUrls.map((url) => loadImg(url))))
          .then(() => {
            if (loaded === maxLoaded) {
              containerIndex.classList.remove('bg-forest-index');
              showPage();
            }
          });
      } else {
        let bg = document.querySelector('.bg-forest-index');
        const firstItem = 'url("';
        const lastItem = '")';

        let bgStyle = window.getComputedStyle(bg).backgroundImage;
        let index = bgStyle.indexOf(firstItem) + firstItem.length;

        // setMobileFullHeight(body);

        let image = new Image();
        image.src = bgStyle.slice(index, -lastItem.length);
        image.onload = () => {
          loaded++;
          animateProgress(loaded);
          showPage();
        };
      }
    };
  }
  checkLoadingBgPreloader(loaderUrl);

  function isMobile() {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || 'ontouchstart' in document.documentElement
    );
  }

  function loadScript(script) {
    return new Promise((res) => {
      let elem = document.createElement('script');
      elem.src = script;
      document.head.append(elem);
      elem.onload = () => {
        loaded++;
        animateProgress(loaded);
        res();
      };
    });
  }

  function loadImg(url) {
    return new Promise((res) => {
      let img = new Image();
      img.src = url;
      img.onload = () => {
        loaded++;
        animateProgress(loaded);
        res();
      };
    });
  }

  let intId;
  function animateProgress(count) {
    let elem = document.querySelector('.progress__number');
    let newNumber = (100 * count) / maxLoaded;
    const interval = 10;
    const step = 1;
    const time = Math.round(interval / maxLoaded);

    if (intId) {
      clearInterval(intId);
    }
    intId = setInterval(() => {
      progress += step;
      if (progress >= newNumber) {
        clearInterval(intId);
        progress = newNumber;
      }
      elem.innerHTML = progress;
    }, time);
  }

  function openAuthPage(){
    const authWrap = document.querySelector('.auth-wrap');
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');

    front.classList.add('front_flipped');
    back.classList.add('back_flipped');
    authWrap.classList.add('auth-wrap_display-none');
  }

  function showPage() {
    if(location.toString().includes('auth')) openAuthPage();
    setTimeout(() => {
      containerIndex.classList.add('container-index_visible');
      preLoader.classList.add('preloader_hided');
    }, 1000);
  }
})();
// flip form
(function () {
  const authWrap = document.querySelector('.auth-wrap');
  const authLink = document.querySelector('.auth__link');
  const front = document.querySelector('.front');
  const back = document.querySelector('.back');
  const homeLink = document.querySelector('.butt__link_home');

  authLink.addEventListener('click', () => {
    front.classList.add('front_flipped');
    back.classList.add('back_flipped');
    authWrap.classList.add('auth-wrap_display-none');
  });
  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    front.classList.remove('front_flipped');
    back.classList.remove('back_flipped');
    authWrap.classList.remove('auth-wrap_display-none');
  });
})();
// form auth
(function () {
  const loginLink = document.querySelector('.butt__link_login');
  const formName = document.querySelector('.form__name');
  const formPass = document.querySelector('.form__pass');
  const checkbox = document.querySelector('.checkbox__input');
  const radio = document.querySelector('.radio-btn__input_yes');
  const messageBox = document.querySelector('.messageBox');
  const messageBoxText = document.querySelector('.messageBox__text');
  let form = document.querySelector('.form-auth');
  let timeoutId;

  loginLink.addEventListener('click', (e) => {
    e.preventDefault();

    Promise.all([
      validateLogin(formName.value),
      validatePass(formPass.value),
      validateCheckbox(checkbox),
      validateRadio(radio),
    ])
      .then(() => {
        clearTimeout(timeoutId);
        messageBox.classList.remove('messageBox_visible');
        setTimeout(() => {
          messageBoxText.innerHTML = 'Форма отправлена';
          messageBox.classList.add('messageBox_visible');
          form.reset();
        }, 800);
        setTimeout(() => {
          messageBox.classList.remove('messageBox_visible');
        }, 3000);
      })
      .catch((error) => {
        if (!timeoutId) {
          messageBoxText.innerHTML = error;
          messageBox.classList.add('messageBox_visible');
        } else {
          clearTimeout(timeoutId);
          messageBox.classList.remove('messageBox_visible');
          setTimeout(() => {
            messageBoxText.innerHTML = error;
            messageBox.classList.add('messageBox_visible');
          }, 800);
        }

        timeoutId = setTimeout(() => {
          messageBox.classList.remove('messageBox_visible');
          timeoutId = null;
        }, 3000);
      });
  });

  function validateLogin(name){
    const min = 2;
    const reg = /^[a-zA-Z0-9]+$/;
    const filtered = name.trim();

    return new Promise((res, rej) => {
      return reg.test(filtered) && filtered.length > min 
        ? res(filtered)
        : rej(`Введите логин длиной от ${min+1} символов`);
    });
  }

  function validatePass(pass) {
    const limits = [4, 15];
    let passTrim = pass.trim();

    return new Promise((res, rej) => {
      return passTrim.length > limits[0] && passTrim.length <= limits[1]
        ? res(passTrim)
        : rej(`Введите пароль длиной от ${limits[0]+1} до ${limits[1]} символов`);
    });
  }

  function validateCheckbox(box) {
    return new Promise((res, rej) => {
      return box.checked ? res() : rej('Роботам вход воспрещен');
    });
  }

  function validateRadio(btn) {
    return new Promise((res, rej) => {
      return btn.checked ? res() : rej('Роботам вход воспрещен');
    });
  }
})();
