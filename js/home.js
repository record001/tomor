// new collection 
new Swiper(".newCollectionSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    }, 
  },
  
});

// group collection

new Swiper(".groupCollectionSwiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 40,
  breakpoints: {
    0: {
      spaceBetween: 20,
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 40,      
    },
    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
        clickable: true,
  },
});

new Swiper(".groupCollectionSwiper2", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 40,
  breakpoints: {
    0: {
      spaceBetween: 20,
      slidesPerView: 2,

      grid: {
        rows: 1,
      },
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
      
    },
    
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
        clickable: true,
  },
});

let newProductRender = document.querySelector(".newProductRender");
let groupProductRender = document.querySelector(".groupProductRender");
let groupProductRender2 = document.querySelector(".groupProductRender2");

function renderProducts() {
  PRODUCT_LIST.forEach((item) => {
        newProductRender.innerHTML += `
      <div class="swiper-slide new-collection__card">
        <img class="heart" src="./image/home/heart-${item.heart ? "full": "empty"}.svg" alt="heart">
        <img src="${item.image}" alt="dress-blue">
        <div class="card__text">
          <h4>${item.title}</h4>
          <p>${item.subtitle}</p>
          <p>${item.price}</p>
        </div>
      </div>
        `
        groupProductRender.innerHTML += `
      <div class="swiper-slide new-collection__card">
        <img class="heart" src="./image/home/heart-${item.heart ? "full": "empty"}.svg" alt="heart">
        <img class = "card__img" src="${item.image}" alt="dress-blue">
        <div class="card__text">
          <h4>${item.title}</h4>
          <p>${item.subtitle}</p>
          <p>${item.price}</p>
        </div>
      </div>
        `
        groupProductRender2.innerHTML += `
      <div class="swiper-slide new-collection__card">
        <img class="heart" src="./image/home/heart-${item.heart ? "full": "empty"}.svg" alt="heart">
        <img class = "card__img" src="${item.image}" alt="dress-blue">
        <div class="card__text">
          <h4>${item.title}</h4>
          <p>${item.subtitle}</p>
          <p>${item.price}</p>
        </div>
      </div>
        `
  });

}
renderProducts();



// banner-slider

new Swiper(".bannerSlider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// designers slider
new Swiper(".designersSwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      spaceBetween: 9,
      slidesPerView: 2,

      
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 16,
      
    },
    
  },
});