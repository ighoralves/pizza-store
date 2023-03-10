// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

var swiper = new Swiper(".mySwiper", {

  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

