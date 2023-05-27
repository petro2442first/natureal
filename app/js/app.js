import Swiper, { Pagination, Autoplay, EffectFade, Navigation } from "swiper";

function initSlider(selector, options) {
  const container = document.querySelector(selector) ?? null;

  if (container === null) return;

  const slider = new Swiper(container, options);
}

document.addEventListener("DOMContentLoaded", (e) => {
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
    initSlider(".shop-slider", {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 30,
      preventClicks: false,
      navigation: {
        nextEl: "#shop-slider__next",
        prevEl: "#shop-slider__prev",
      },
      breakpoints: {
        1921: {
          slidesPerView: 4,
        },
        1025: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });
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
