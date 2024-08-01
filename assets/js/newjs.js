document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      const headerElement = document.querySelector("#header");
      if (headerElement) {
        headerElement.innerHTML = data;
        initializeNavbar();
      } else {
        document.body.insertAdjacentHTML("afterbegin", data);
        initializeNavbar();
      }
    });
});

document.addEventListener("DOMContentLoaded", function () {
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
});

function initializeNavbar() {
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navbar = document.getElementById("navbar-2");

  if (mobileNavToggle && navbar) {
    mobileNavToggle.addEventListener("click", function () {
      navbar.classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    document.addEventListener("click", function (event) {
      if (
        !navbar.contains(event.target) &&
        !mobileNavToggle.contains(event.target) &&
        !dropdownToggle.contains(event.target)
      ) {
        navbar.classList.remove("navbar-mobile");
        mobileNavToggle.classList.remove("bi-x");
        mobileNavToggle.classList.add("bi-list");
        dropdownMenu.classList.remove("show");
      }
    });
  } else {
    console.error("Elementos de navbar no encontrados.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Inicialización de Swiper
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

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
});
