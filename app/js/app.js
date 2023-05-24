// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import "swiper/swiper.scss";
function topSlider() {
  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  topSlider();
});
