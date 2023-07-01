var mySwiper1 = new Swiper(".slide-container", {
  slidesPerView: 2, // 一個頁面要展示的卡片數量
  centeredSlides: true, // 把展示的卡片置中
  spaceBetween: 30, // 卡片與卡片之間的距離
  loop: true, // 無限循環

  // pagination 分頁設定
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows 箭頭設定
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});


var mySwiper2 = new Swiper(".card-container", {
  slidesPerView: 4, // 一個頁面要展示的卡片數量
  // centeredSlides: true, // 把展示的卡片置中
  // spaceBetween: 30, // 卡片與卡片之間的距離
  loop: true, // 無限循環
  autoplay: true,
  // speed: 3000,
  // effect: 'slide'
});

