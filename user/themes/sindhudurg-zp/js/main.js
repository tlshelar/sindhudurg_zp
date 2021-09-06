$(function () {
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // autoplay: {
      //   delay: 3000,
      // },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
 
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
    $(window).on('load', function () {
      var delayMs = 1500; // delay in milliseconds
 
      setTimeout(function () {
        $('#myModal').modal('show');
      }, delayMs);
    });
    var youtube = document.querySelectorAll(".youtube");
 
    for (var i = 0; i < youtube.length; i++) {
 
      var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";
 
      var image = new Image();
      image.src = source;
      image.addEventListener("load", function () {
        youtube[i].appendChild(image);
      }(i));
 
      youtube[i].addEventListener("click", function () {
 
        var iframe = document.createElement("iframe");
 
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
 
        this.innerHTML = "";
        this.appendChild(iframe);
      });
    };
       $('.demo1').easyTicker({
         direction: 'up',
         visible: 6,
         interval: 2000
       });
       $('.owl-popular').owlCarousel({
         loop: true,
         autoplay: true,
         margin: 20,
         nav: false,
         responsive: {
           0: {
             items: 1
           },
           600: {
             items: 3
           },
           1000: {
             items: 6
           }
         }
       })
       $('.owl-carousel').owlCarousel({
         loop: true,
         autoplay: true,
         margin: 20,
         nav: false,
         responsive: {
           0: {
             items: 1
           },
           600: {
             items: 3
           },
           1000: {
             items: 5
           }
         }
       })
       $('.simple-marquee-container').SimpleMarquee();
       $('#lightgallery').lightGallery({
         pager: true
       });
        if($.fn.makeitchangefs){
             $('body').makeitchangefs({defSize: 16, upperLimit: 20, lowerLimit: 12});
         };
              $('map').imageMapResize();
 
     });