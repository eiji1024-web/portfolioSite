const hamburgerTrigger = document.getElementById('hamburger-menu');
const drawerMenu = document.getElementById('drawer-menu');
const drawerBg = document.getElementById('drawer-bg');

hamburgerTrigger.addEventListener('click', () => {
    hamburgerTrigger.classList.toggle('is-active');
    drawerMenu.classList.toggle('is-active');
    drawerBg.classList.toggle('is-active');
});

drawerBg.addEventListener('click', () => {
   hamburgerTrigger.classList.remove('is-active'); 
   drawerMenu.classList.remove('is-active');
   drawerBg.classList.remove('is-active');
});

const headerScroll = document.getElementById('header');
window.addEventListener('scroll', () => {
    headerScroll.classList.toggle('addColor', window.scrollY > 0)
});

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));
        
        const rect = targetElement.getBoundingClientRect().top;//ブラウザからの高さを取得する
        const offset = window.pageYOffset;
        const gap = 80;
        const target = rect + offset - gap;

        window.scrollTo ({
           top: target,
           behavior: 'smooth', 
        });
    });
}

function showElementAnimation () {
    let element = document.getElementsByClassName('js-fadein');
    if (!element) return;

    let showTiming = window.innerHeight > 768 ? 200 : 80;
    let scrollY = window.pageYOffset;
    let windowH = window.innerHeight;

    for (let i = 0; i < element.length; i++) {
      let elemClientRect =  element[i].getBoundingClientRect();
      let elemY = scrollY + elemClientRect.top;
      if (scrollY + windowH - showTiming > elemY) {
          element[i].classList.add('is-show');
      }else if (scrollY + windowH > elemY) {
          element[i].classList.remove('is-show');
      }
    };
};
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);