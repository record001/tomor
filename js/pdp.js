// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

new Swiper(".mySwiper2", {
  spaceBetween: 10,
  // direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  thumbs: {
    swiper: swiper,
  },

  // breakpoints: {
  //   300: {
  //     direction: "horizontal",

  //   },
  //   600:{
  //     direction: "vertical",
  //   },
  //   800:{
  //     direction: "vertical",
  //   },

  // }
});

function renderProducts() {
  let pair__slider = document.querySelector(".pair__slider");
  let pair__slider_liked = document.querySelector(".pair__slider--liked");

  PRODUCT_LIST.forEach((item) => {
    pair__slider.innerHTML += `
         <div class="swiper-slide new-collection__card">
            <img class="heart" src="./image/home/heart-empty.svg" alt="heart">
             <img class="card__img" src="./image/home/dress-black.png" alt="dress-blue">
               <div class="card__text">
                   <h4>Gucci</h4>
                   <p>Zipper Mini Dress</p>
                   <p>$879.00</p>
               </div>
          </div>         
    
        `;
        pair__slider_liked.innerHTML += `
         <div class="swiper-slide new-collection__card">
            <img class="heart" src="./image/home/heart-empty.svg" alt="heart">
             <img class="card__img" src="./image/home/dress-black.png" alt="dress-blue">
               <div class="card__text">
                   <h4>Gucci</h4>
                   <p>Zipper Mini Dress</p>
                   <p>$879.00</p>
               </div>
          </div>         
    
        `;
  });
}
renderProducts();

new Swiper(".pairSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
new Swiper(".pairSwiperLiked", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
