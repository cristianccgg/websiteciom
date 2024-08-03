document.addEventListener("DOMContentLoaded", function () {
  // Cargar el footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      const footerElement = document.querySelector("#footer");
      if (footerElement) {
        footerElement.innerHTML = data;
      } else {
        document.body.insertAdjacentHTML("afterbegin", data);
      }
    })
    .catch((error) => console.error("Error al cargar el footer:", error));

  // Inicialización de Swiper para el slider principal
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
    },
  });

  // Cargar el primer bloque de testimonios y inicializar Swiper
  fetch("testimonios.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("testimonials-2").innerHTML = data;

      // Inicializar Swiper para testimonios después de cargar el contenido
      var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        },
      });

      // Inicialización de AOS
      AOS.init();
    })
    .catch((error) => console.error("Error al cargar testimonios:", error));

  // Cargar el segundo bloque de testimonios y inicializar Swiper
  fetch("testimonios-ciomers.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("testimonials-3").innerHTML = data;

      var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        },
      });

      AOS.init();
    })
    .catch((error) =>
      console.error("Error al cargar testimonios de clientes:", error)
    );

  // Inicialización del acordeón
  const accordionButtons = document.querySelectorAll(
    ".custom-accordion-button"
  );
  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
        this.classList.remove("active");
      } else {
        document
          .querySelectorAll(".custom-accordion-content")
          .forEach((item) => {
            if (item !== content) {
              item.style.display = "none";
              item.previousElementSibling.classList.remove("active");
            }
          });

        content.style.display = "block";
        this.classList.add("active");
      }
    });
  });
});
