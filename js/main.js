;(function(){
    
    const burgerIcn = document.querySelector('.menu-btn')
    const mobileMenu = document.querySelector('.header-mobile-nav')

    burgerIcn.addEventListener('click', function() {
        burgerIcn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })


    // Плавный скролл до меню

    const menuLinks = document.querySelectorAll('.link[data-goto]')
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLinks => {
            menuLinks.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                if(burgerIcn.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    burgerIcn.classList.remove('active');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }

   //Параметры Слайдера

    const swiper = new Swiper ('.reviews__body', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 3,
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                centeredSlides: true,
                spaceBetween: 60,
            },
            470: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                spaceBetween: 60,
            },
        },

    })


    //FAQ блок

    var accpage = document.querySelector('.accordeon-page-wrap')
  
    if (accpage) {
      var accBtn = document.getElementsByClassName('accordeon-btn')
      var i;
  
      for (i = 0; i < accBtn.length; i++) {
        accBtn[i].addEventListener('click', function() {
            this.classList.toggle('active')
            var accInfo = this.nextElementSibling;
  
            if (accInfo.style.maxHeight) {
                accInfo.style.maxHeight = null;
            } else {
                accInfo.style.maxHeight = accInfo.scrollHeight + 'px';
            }
        });
      }
    } else {
      return;
    }

})();