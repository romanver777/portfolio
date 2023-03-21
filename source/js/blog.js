(function () {
  const body = document.querySelector('body');
  const menuLinkOpen = document.querySelector('.gamburger');
  const menuPop = document.querySelector('.menu-pop');
  const menuLinkClose = document.querySelector('.close__link');

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
})();
// article observer
(function () {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  let callback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const classNameActive = 'blog__link_act';
        const links = document.querySelectorAll('.blog__link');
        const targetId = entry.target.id;

        links.forEach((link) => {
          if (link.classList.contains(classNameActive)) {
            link.classList.remove(classNameActive);
          }
          if (targetId === link.href.slice(-targetId.length)) {
            link.classList.add(classNameActive);
          }
        });
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);

  let targets = document.querySelectorAll('.article');
  targets.forEach((target) => observer.observe(target));
})();

(function () {
  const list = document.querySelector('.blog__list');
  list.addEventListener('click', (e) => {
    e.preventDefault();

    const id = e.target.href.slice(e.target.href.indexOf('#') + 1);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  });

  const blogOpenLink = document.querySelector('.blog-left__link');
  const blog = document.querySelector('.blog-left');

  blogOpenLink.addEventListener('click', () => {
    blog.classList.toggle('blog-left_opened');
  });
  blog.addEventListener('click', (e) => {
    if (window.innerWidth <= 1100 && e.target == blog) {
      blog.classList.remove('blog-left_opened');
    }
  });
})();
