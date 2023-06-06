import Swiper, {
  Pagination,
  Autoplay,
  EffectFade,
  Navigation,
  Thumbs,
} from "swiper";

function initSlider(selector, options) {
  const container = document.querySelector(selector) ?? null;

  if (container === null) return;

  const slider = new Swiper(container, options);
  return slider;
}
function header() {
  const searchBtn = document.querySelector(".header__search-btn img") ?? null;
  if (searchBtn !== null) {
    searchBtn.addEventListener("click", (e) => {
      searchBtn.parentElement.classList.toggle("open");
    });
  }

  function mobileMenu() {
    const burger = document.querySelector(".header__burger") ?? null;
    const mobileMenu = document.querySelector(".mobile-menu") ?? null;

    if (burger !== null && mobileMenu !== null) {
      burger.addEventListener("click", (e) => {
        mobileMenu.classList.add("show");
        document.body.style = "overflow:hidden";
      });

      const mobileMenuCloseBtn = document.querySelector(".mobile-menu__close");

      mobileMenuCloseBtn.addEventListener("click", (e) => {
        mobileMenu.classList.remove("show");
        document.body.style = "";
      });

      const mobileMenuItems = document.querySelectorAll(
        ".mobile-menu__item > a"
      );
      mobileMenuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          item.parentElement.classList.toggle("show-sub-menu");
        });
      });
    }
  }
  mobileMenu();
}
function home() {
  initSlider(".top-slider", {
    modules: [Pagination, Autoplay, EffectFade],
    effect: "fade",
    loop: true,
    preventClicks: false,
    pagination: {
      el: ".top-slider__pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });

  if (screen.availWidth > 768) {
    const shopSlider = document.querySelector(".shop-slider") ?? null;
    if (shopSlider !== null) {
      const slidesPerView = shopSlider.classList.contains("shop-slider--2")
        ? 2
        : 3;
      initSlider(".shop-slider", {
        modules: [Navigation],
        slidesPerView,
        spaceBetween: 30,
        preventClicks: false,
        navigation: {
          nextEl: "#shop-slider__next",
          prevEl: "#shop-slider__prev",
        },
        breakpoints: {
          1921: {
            slidesPerView: slidesPerView + 1,
          },
          1025: {
            slidesPerView,
          },
          769: {
            slidesPerView: slidesPerView - 1,
          },
          320: {
            slidesPerView: 1,
          },
        },
      });
    }
  }

  initSlider("#reviews-slider", {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    preventClicks: false,
    pagination: {
      el: "#reviews-slider__pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: "#reviews-slider__next",
      prevEl: "#reviews-slider__prev",
    },
  });
}
function productFeatures() {
  initSlider(".product-features-slider", {
    modules: [EffectFade, Navigation, Pagination, Autoplay],
    navigation: {
      nextEl: "#features-next",
      prevEl: "#features-prev",
    },
    pagination: {
      el: "#features-pagination",
      type: "bullets",
      clickable: true,
    },
  });
}
function product() {
  const thumbsSlider = initSlider(".product-thumbnails__thumbs", {
    slidesPerView: 5,
    spaceBetween: 10,
  });
  initSlider(".product-thumbnails", {
    modules: [Autoplay, Thumbs, EffectFade],
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
    },
    thumbs: {
      swiper: thumbsSlider,
    },
  });
  productFeatures();
}

document.addEventListener("DOMContentLoaded", (e) => {
  header();
  home();
  product();

  document.addEventListener("scroll", (e) => {
    const scrollTop = document.documentElement.scrollTop;

    const header = document.querySelector(".header");

    if (scrollTop > 0) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
});
