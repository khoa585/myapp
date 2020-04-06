import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
export const Param_ = {
    Swiper,
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    freeMode: true,
    freeModeSticky: true,
    loop: true,
    autoplay: {
      delay: 8000000,
      disableOnInteraction: false
    },
    height: 50,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true
    }
};
export const Paramc = {
    direction: "vertical",
    Swiper,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next" + ".btN",
      prevEl: ".swiper-button-prev" + ".btP"
    },
    autoplay: {
      delay: 80000,
      disableOnInteraction: false
    }
  };