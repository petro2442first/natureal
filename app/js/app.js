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
    pagination: {
      el: ".top-slider__pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });

  initSlider(".shop-slider", {
    modules: [Navigation],
    slidesPerView: 3,
    // loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".shop-slider__next",
      prevEl: ".shop-slider__prev",
    },
  });
});
