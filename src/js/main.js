

$(document).ready(function () {


//маска телефона
  $('input[name="tel"]').mask("+7(999) 999-9999");
  


  $('.actions-slider').slick({
    prevArrow: '<div class="actions-slider-arrow actions-slider-arrow_left flex items-center justify-center"><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11.4585" y="0.0341797" width="2" height="15" transform="rotate(45 11.4585 0.0341797)" fill="currentColor"/><rect x="12.8727" y="19.8333" width="2" height="15" transform="rotate(135 12.8727 19.8333)" fill="currentColor"/></svg></div>',
    nextArrow: '<div class="actions-slider-arrow actions-slider-arrow_right flex items-center justify-center"><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.42139" y="21.2476" width="2" height="15" transform="rotate(-135 1.42139 21.2476)" fill="currentColor"/><rect x="0.00708008" y="1.44849" width="2" height="15" transform="rotate(-45 0.00708008 1.44849)" fill="currentColor"/></svg></div>'
  });

  $('.reviews-slider').slick({
    prevArrow: '<div class="reviews-slider-arrow reviews-slider-arrow_prev flex items-center"><svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.65775" y="6.40723" width="18.8348" height="1.5" fill="currentColor"/><rect y="7.15723" width="10" height="1.5" transform="rotate(-45 0 7.15723)" fill="currentColor"/><rect x="1.06067" y="6.09668" width="10" height="1.5" transform="rotate(45 1.06067 6.09668)" fill="currentColor"/></svg><div class="flex font-bold">Пред.</div></div>',
    nextArrow: '<div class="reviews-slider-arrow reviews-slider-arrow_next flex items-center"><div class="flex font-bold">След.</div><svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="19.5886" y="7.90674" width="18.8348" height="1.5" transform="rotate(-180 19.5886 7.90674)" fill="currentColor"/><rect x="21.2463" y="7.15674" width="10" height="1.5" transform="rotate(135 21.2463 7.15674)" fill="currentColor"/><rect x="20.1856" y="8.21729" width="10" height="1.5" transform="rotate(-135 20.1856 8.21729)" fill="currentColor"/></svg></div>',
    appendArrows: $(".reviews-slider-arrows"),
    fade: true,
    dots: true,
    appendDots: $('.reviews-dots')
  });

  let Scrollbar = window.Scrollbar;

  Scrollbar.init(document.querySelector('.delivery-cities__inner'), {
    alwaysShowTracks: true
  });




















});