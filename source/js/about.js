(function () {
  const body = document.querySelector('body');
  const menuLinkOpen = document.querySelector('.gamburger');
  const menuPop = document.querySelector('.menu-pop');
  const menuLinkClose = document.querySelector('.close__link');
  const arrowDown = document.querySelector('.arrow-down__link');

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
//skills animation
(function () {
  const maxPersents = 100;
  let skillsPersent = [
    [50, 33, 75],
    [15, 60, 88, 45],
    [90, 51, 32],
  ];
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75,
  };

  let callback = function (entries, observer) {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        let items = entry.target.querySelectorAll('.circles__sector');
        let itemStroke = window
          .getComputedStyle(items[0])
          .strokeDashoffset.slice(0, -2);
        let entryIndex = entry.target.id.slice(-1) - 1;
        const minTime = 100;

        items.forEach((item, i) => {
          setTimeout(() => {
            item.style.strokeDashoffset =
              (itemStroke * skillsPersent[entryIndex][i]) / maxPersents;
          }, (i+1) * minTime);
        });

        observer.unobserve(entry.target);
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);

  let targets = document.querySelectorAll('.skill__list');
  targets.forEach((target) => observer.observe(target));
})();
// map
(function setMapParams() {
  let width = window.innerWidth;

  if (width >= 1200) {
    mapInit(82.902, 55.013, 12.8);
  }
  if (width >= 900 && width < 1200) {
    mapInit(82.92, 55.013, 14.8);
  }
  if (width >= 768 && width < 900) {
    mapInit(82.9216, 55.013, 14.8);
  }
  if (width >= 550 && width < 768) {
    mapInit(82.92, 55.013, 14);
  }
  if (width < 550) {
    mapInit(82.928, 55.02, 13);
  }
})();

function mapInit(centerCoordLeft, centerCoordTop, zoom) {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY29udHJhNzciLCJhIjoiY2p0anR2MWEwMnZrMjN5cDhsbXczeDJ1cSJ9.Q9r4aUzdARiggKd4gEmFDA';
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/contra77/cju1na88e1fs41fpme09mg25a',
    center: [centerCoordLeft, centerCoordTop],
    zoom: zoom,
  });

  map.scrollZoom.disable();

  if (window.innerWidth > 550) {
    map.addControl(new mapboxgl.NavigationControl(), 'top-left');
  }

  let marker = new mapboxgl.Marker({ color: '#82a073' })
    .setLngLat([82.929158, 55.012969])
    .addTo(map);
}
