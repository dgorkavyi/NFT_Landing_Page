import * as webpFuncs from './modules/webpFunctions.js';

webpFuncs.isWebp();

$(document).ready(function () {
  $('.feedback__slider').slick({});
  $('.slick-prev').html('<img src="img/arrow-left.svg" />');
  $('.slick-next').html('<img src="img/arrow-right.svg" />');
});
