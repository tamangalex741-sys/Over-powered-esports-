const swiper = new Swiper(".mySwiper", {
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // Responsive breakpoints
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    });
	function addToCart() {
    const message = document.getElementById("cartMessage");
    message.style.display = "block";
	}