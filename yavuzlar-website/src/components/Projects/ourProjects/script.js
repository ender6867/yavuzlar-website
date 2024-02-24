// var Slider = (function () {
//   var total,
//     $slide,
//     $slider,
//     sliderWidth,
//     increment = 120;
//   var on = function () {
//     $slider = $(".slider");
//     $slide = $(".slide");
//     sliderWidth = $slider.width();
//     total = $slide.length;
//     position();
//   };

//   var position = function () {
//     var sign,
//       half = $(".active").index(),
//       x = 0,
//       z = 0,
//       zindex,
//       scaleX = 1.3,
//       scaleY = 1.3,
//       transformOrigin;
//     $slide.each(function (index, element) {
//       scaleX = scaleY = 1;
//       transformOrigin = sliderWidth / 2;
//       if (index < half) {
//         sign = 1;
//         zindex = index + 1;
//         x = sliderWidth / 2 - increment * (half - index + 1);
//         z = -increment * (half - index + 1);
//       } else if (index > half) {
//         sign = -1;
//         zindex = total - index;
//         x = sliderWidth / 2 + increment * (index - half + 1);
//         z = -increment * (index - half + 1);
//       } else {
//         sign = 0;
//         zindex = total;
//         x = sliderWidth / 2;
//         z = 1;
//         scaleX = scaleY = 1.2;
//         transformOrigin = "initial";
//       }
//       $(element).css({
//         transform:
//           "translate3d(" +
//           calculateX(x, sign, 300) +
//           "px, 0," +
//           z +
//           "px) scale3d(" +
//           scaleX +
//           "," +
//           scaleY +
//           ", 1)",
//         "z-index": zindex,
//         "transform-origin-x": transformOrigin,
//       });
//     });
//   };

//   var calculateX = function (position, sign, width) {
//     switch (sign) {
//       case 1:
//       case 0:
//         return position - width / 2;
//       case -1:
//         return position - width / 2;
//     }
//   };

//   var imageSize = function () {
//     return $slider.width() / 3;
//   };

//   var recalculateSizes = function () {
//     sliderWidth = $slider.width();
//     position();
//   };

//   var clickedImage = function () {
//     $(".active").removeClass("active");
//     $(this).addClass("active");
//     position();
//   };

//   var addEvents = function () {
//     $(window).resize(recalculateSizes);
//     $(document).on("click", ".slide", clickedImage);
//   };

//   return {
//     init: function () {
//       on();
//       addEvents();
//     },
//   };
// })();

// $(function () {
//   var slider = Slider.init();
// });

// function Slider() {
//   var total,
//     slideElements,
//     sliderElement,
//     sliderWidth,
//     increment = 120;

//   function on() {
//     sliderElement = document.querySelector(".slider");
//     slideElements = document.querySelectorAll(".slide");
//     sliderWidth = sliderElement.offsetWidth;
//     total = slideElements.length;
//     position();
//   }

//   function position() {
//     var sign,
//       half = document.querySelector(".active").dataset.index,
//       x = 0,
//       z = 0,
//       zIndex,
//       scaleX = 1.3,
//       scaleY = 1.3,
//       transformOrigin;
//     slideElements.forEach(function (element, index) {
//       scaleX = scaleY = 1;
//       transformOrigin = sliderWidth / 2;
//       if (index < half) {
//         sign = 1;
//         zIndex = index + 1;
//         x = sliderWidth / 2 - increment * (half - index + 1);
//         z = -increment * (half - index + 1);
//       } else if (index > half) {
//         sign = -1;
//         zIndex = total - index;
//         x = sliderWidth / 2 + increment * (index - half + 1);
//         z = -increment * (index - half + 1);
//       } else {
//         sign = 0;
//         zIndex = total;
//         x = sliderWidth / 2;
//         z = 1;
//         scaleX = scaleY = 1.2;
//         transformOrigin = "initial";
//       }
//       element.style.transform =
//         "translate3d(" +
//         calculateX(x, sign, 300) +
//         "px, 0," +
//         z +
//         "px) scale3d(" +
//         scaleX +
//         "," +
//         scaleY +
//         ", 1)";
//       element.style.zIndex = zIndex;
//       element.style.transformOriginX = transformOrigin;
//     });
//   }

//   function calculateX(position, sign, width) {
//     switch (sign) {
//       case 1:
//       case 0:
//         return position - width / 2;
//       case -1:
//         return position - width / 2;
//     }
//   }

//   function imageSize() {
//     return sliderElement.offsetWidth / 3;
//   }

//   function recalculateSizes() {
//     sliderWidth = sliderElement.offsetWidth;
//     position();
//   }

//   function clickedImage() {
//     document.querySelector(".active").classList.remove("active");
//     this.classList.add("active");
//     position();
//   }

//   function addEvents() {
//     window.addEventListener("resize", recalculateSizes);
//     document.addEventListener("click", function (event) {
//       if (event.target.classList.contains("slide")) {
//         clickedImage.call(event.target);
//       }
//     });
//   }

//   return {
//     init: function () {
//       on();
//       addEvents();
//     },
//   };
// }

// document.addEventListener("DOMContentLoaded", function () {
//   var slider = Slider();
//   slider.init();
// });
