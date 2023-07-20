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
  // loop: true, // 無限循環
  // autoplay: true,
  // speed: 3000,
  // effect: 'slide'
  spaceBetween: 10,
  pagination: {
    el: '.card-pagination',
    clickable: true,
  },


});

const itemArr = [
  { title: "一萬皮卡幣", img: "./img/card1.png", kind: "商城", info: "精靈寶可夢世界裡隨處可見的一種道具，可以用於捕捉寶可夢", newPrice: "NT$600元", oldPrice: "原價$800元" },
  { title: "精靈球X3", img: "./img/card2.png", kind: "商城", info: "精靈寶可夢世界裡隨處可見的一種道具，可以用於捕捉寶可夢", newPrice: "NT$300元", oldPrice: "原價$599元" },
  { title: "精靈球", img: "./img/card3.png", kind: "商城", info: "精靈寶可夢世界裡隨處可見的一種道具，可以用於捕捉寶可夢", newPrice: "NT$500元", oldPrice: "原價$799元" },
  { title: "500皮卡幣", img: "./img/card4.png", kind: "商城", info: "精靈寶可夢世界裡隨處可見的一種道具，可以用於捕捉寶可夢", newPrice: "NT$998元", oldPrice: "原價$999元" },
  { title: "100皮卡幣", img: "./img/card5.png", kind: "商城", info: "精靈寶可夢世界裡隨處可見的一種道具，可以用於捕捉寶可夢", newPrice: "NT$50元", oldPrice: "原價$629元" },
  { title: "相機", img: "./img/card6.png", kind: "商城", info: "精靈寶可夢世界裡隨處可見的一種道具，可以用於捕捉寶可夢", newPrice: "NT$89元", oldPrice: "原價$399元" },
  { title: "幸運蛋X3", img: "./img/card7.png", kind: "商城", info: "精靈寶可夢世界裡隨處可見的一種道具，可以用於捕捉寶可夢", newPrice: "NT$59元", oldPrice: "原價$299元" },
  { title: "精靈球X5", img: "./img/card8.png", kind: "商城", info: "精靈寶可夢世界裡隨處可見的一種道具，可以用於捕捉寶可夢", newPrice: "NT$399元", oldPrice: "原價$700元" },
  { title: "復活石X3", img: "./img/card9.png", kind: "商城", info: "精靈寶可夢世界裡隨處可見的一種道具，可以用於捕捉寶可夢", newPrice: "NT$699元", oldPrice: "原價$1200元" },
  { title: "綜合大禮包", img: "./img/card10.png", kind: "商城", info: "精靈寶可夢世界裡隨處可見的一種道具，可以用於捕捉寶可夢", newPrice: "NT$199元", oldPrice: "原價$900元" },
]
const cardWrapper = document.querySelector('.card-wrapper')
// const cardWrap = document.querySelector('.card-wrap')


for (let i = 0; i < itemArr.length; i++) {
  cardWrapper.innerHTML += `
    <div class="swiper-slide card-wrap">
      <div class="card-img">
        <img src="${itemArr[i].img}" alt="">
      </div>
      <span class="card-kind">${itemArr[i].kind}</span>
      <p class="card-title">${itemArr[i].title}</p>
      <p class="card-info">${itemArr[i].info}</p>
      <div class="price-wrap">
        <p class="new-price">${itemArr[i].newPrice}</p>
        <p class="old-price">${itemArr[i].oldPrice}</p>
      </div>
      <div class="button-wrap">
        <a href="##">詳細介紹</a>
        <button>加入購物車</button>
      </div>
    </div>
  `
}