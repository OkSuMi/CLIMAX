$(function () {
  $(".menu>li").mouseenter(function () {
    $(this).children(".menu_in").stop().slideDown();
  });
  $(".menu>li").mouseleave(function () {
    $(this).children(".menu_in").stop().slideUp();
  });
});


var swiper = new Swiper(".goods", {
  slidesPerView: "auto",
  spaceBetween: 70,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});


$(function () {
  $(".faq li").click(function () {
    $(this).children("div").slideToggle()
    $(this).siblings().children("div").slideUp();
    $(this).toggleClass("on").siblings().removeClass("on")
  });
});