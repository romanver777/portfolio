(function () {
  const body = document.querySelector('body');
  const menuLinkOpen = document.querySelector('.gamburger');
  const menuPop = document.querySelector('.menu-pop');
  const menuLinkClose = document.querySelector('.close__link');
  const arrowDown = document.querySelector('.arrow-down__link');
  const arrowUp = document.querySelector('.arrow-up__link');

  menuLinkOpen.addEventListener('click', (e) => {
    e.preventDefault();

    menuPop.classList.add('menu-pop__open');
    menuLinkOpen.classList.add('gamburger__hide');
    body.classList.add('stop-scroll-but-visible');
  });

  menuLinkClose.addEventListener('click', (e) => {
    e.preventDefault();

    menuPop.classList.remove('menu-pop__open');
    menuLinkOpen.classList.remove('gamburger__hide');
    body.classList.remove('stop-scroll-but-visible');
  });

  arrowDown.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: window.innerHeight, behavior: 'smooth' });
  });

  arrowUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: window.innerHeight, behavior: 'smooth' });
  });
})();
//set first block height 100vh for mobile
(function () {
  function isMobile() {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || 'ontouchstart' in document.documentElement
    );
  }
  function setElemHeight(elem) {
    let vh = window.innerHeight * 0.01;
    document.querySelector(elem).style.setProperty('--vh', `${vh}px`);
  }
  
  if (isMobile()) {
    setElemHeight('.wrap__header');

    window.addEventListener('resize', () => {
      setElemHeight('.wrap__header');
    });
  }
})();
//slider size
(function () {
  const sliderList = document.querySelector('.pict__list');
  const sliderItems = document.querySelectorAll('.pict__item');
  const control = document.querySelector('.slider__control');
  const controlItems = document.querySelectorAll('.control__item');
  let timer;

  let sliderPictWidth = sliderList.getBoundingClientRect().width + 'px';
  sliderItems.forEach((item) => (item.style.width = sliderPictWidth));

  const controlHeight = control.getBoundingClientRect().height + 'px';
  controlItems.forEach((item) => (item.style.height = controlHeight));

  window.addEventListener('resize', () => {
    if (!timer) {
      timer = setTimeout(() => {
        sliderPictWidth = sliderList.getBoundingClientRect().width + 'px';
        sliderItems.forEach((item) => (item.style.width = sliderPictWidth));
        timer = null;
      }, 300);
    }
  });
})();
//slider
(function () {
  const downLink = document.querySelector('.control-down__link');
  const upLink = document.querySelector('.control-up__link');
  const downWr = document.querySelector('.control-down__wr');
  const upWr = document.querySelector('.control-up__wr');
  const pictWr = document.querySelector('.pict__wr');
  const cardItems = document.querySelectorAll('.p-card');
  let timeout = false;

  downLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (!timeout) {
      timeout = true;
      startSliderByClicking('down');
    }
  });
  upLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (!timeout) {
      timeout = true;
      startSliderByClicking('up');
    }
  });

  function slideMoves(direction, sliderList, position) {
    let size;

    if (position == 'top') {
      const control = document.querySelector('.slider__control');
      size = control.getBoundingClientRect().height;
    }

    if (position == 'left') {
      const sliderPict = document.querySelector('.slider__pict');
      size = sliderPict.getBoundingClientRect().width;
    }

    switch (direction) {
      case 'forward':
        {
          if (position == 'top') sliderList.style.top = -size + 'px';
          if (position == 'left') sliderList.style.left = -size + 'px';

          setTimeout(() => {
            sliderList.style.transition = 'none';

            let lastChild = sliderList.firstElementChild;
            let result = sliderList.removeChild(lastChild);
            sliderList.append(result);

            if (position == 'top') sliderList.style.top = 0 + 'px';
            if (position == 'left') sliderList.style.left = 0 + 'px';

            setTimeout(() => {
              sliderList.style.transition = '0.5s';
              timeout = false;
            }, 100);
          }, 500);
        }
        break;
      case 'backward':
        {
          sliderList.style.transition = 'none';

          let lastChild = sliderList.lastElementChild;
          let result = sliderList.removeChild(lastChild);
          sliderList.prepend(result);

          if (position == 'top') sliderList.style.top = -size + 'px';
          if (position == 'left') sliderList.style.left = -size + 'px';

          setTimeout(() => {
            sliderList.style.transition = '0.5s';

            if (position == 'top') sliderList.style.top = 0 + 'px';
            if (position == 'left') sliderList.style.left = 0 + 'px';
            setTimeout(() => (timeout = false), 500);
          }, 100);
        }
        break;
    }
  }

  function titleSlideMoves(direction, cards) {
    let activeCard;

    [...cards].map((el, i) => {
      if (el.classList.contains('p-card_active')) activeCard = i;
    });

    cards[activeCard].classList.remove('p-card_active');

    switch (direction) {
      case 'forward':
        {
          if (activeCard == cards.length - 1) {
            activeCard = 0;
          } else {
            activeCard++;
          }
        }
        break;
      case 'backward':
        {
          if (activeCard == 0) {
            activeCard = cards.length - 1;
          } else {
            activeCard--;
          }
        }
        break;
    }
    setTimeout(() => {
      cards[activeCard].classList.add('p-card_active');
    }, 200);
  }

  function startSliderByClicking(button) {
    switch (button) {
      case 'up':
        {
          slideMoves('forward', upWr, 'top');
          slideMoves('backward', downWr, 'top');
          slideMoves('forward', pictWr, 'left');
          titleSlideMoves('forward', cardItems);
        }
        break;
      case 'down':
        {
          slideMoves('backward', upWr, 'top');
          slideMoves('forward', downWr, 'top');
          slideMoves('backward', pictWr, 'left');
          titleSlideMoves('backward', cardItems);
        }
        break;
    }
  }
})();
//comments form
(function () {
  const sendLink = document.querySelector('.butt__link_send');
  const clearLink = document.querySelector('.butt__link_clear');

  const form = document.querySelector('.form-log');
  const formName = document.querySelector('.form__inp-contact_name');
  const formEmail = document.querySelector('.form__inp-contact_email');
  const formText = document.querySelector('.form__textarea');

  const messageBox = document.querySelector('.messageBox');
  const messageBoxText = document.querySelector('.messageBox__text');
  let messageTimer;

  sendLink.addEventListener('click', (e) => {
    e.preventDefault();

    if (messageTimer) {
      clearTimeout(messageTimer);
      messageBox.classList.remove('messageBox_visible');
    }
    if (
      formName.value.trim() &&
      formEmail.value.trim() &&
      formText.value.trim()
    ) {
      setTimeout(() => {
        messageBoxText.innerHTML = 'Форма отправлена';
        messageBox.classList.add('messageBox_visible');
        form.reset();
      }, 800);
    } else {
      if (messageTimer) {
        setTimeout(() => {
          messageBoxText.innerHTML = 'Заполните все поля';
          messageBox.classList.add('messageBox_visible');
        }, 800);
      } else {
        messageBoxText.innerHTML = 'Заполните все поля';
        messageBox.classList.add('messageBox_visible');
      }
    }

    messageTimer = setTimeout(() => {
      messageBox.classList.remove('messageBox_visible');
    }, 3000);
  });

  clearLink.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
  });
})();
