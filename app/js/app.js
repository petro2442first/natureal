// import Swiper bundle with all modules installed
import Swiper, { Pagination, Autoplay, EffectFade } from "swiper";
// import "swiper/swiper.scss";
function topSlider() {
  const swiper = new Swiper(".swiper", {
    modules: [Pagination, Autoplay, EffectFade],
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    autoplay: {
      delay: 5000,
    },
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  topSlider();
});
