document.addEventListener("DOMContentLoaded", function () {
  function loadTranslations() {
    return Promise.all([
      fetch("assets/js/translations/en.json").then((response) =>
        response.json()
      ),
      fetch("assets/js/translations/sp.json").then((response) =>
        response.json()
      ),
      fetch("assets/js/translations/pt.json").then((response) =>
        response.json()
      ),
      fetch("assets/js/translations/fr.json").then((response) =>
        response.json()
      ),
    ]).then(([en, sp, pt, fr]) => ({
      en: { translation: en },
      sp: { translation: sp },
      pt: { translation: pt },
      fr: { translation: fr },
    }));
  }

  function saveLanguageToLocalStorage(language) {
    localStorage.setItem("language", language);
  }

  function getLanguageFromLocalStorage() {
    return localStorage.getItem("language") || "sp"; // Idioma por defecto si no hay ninguno guardado
  }

  function initializeI18n() {
    loadTranslations().then((resources) => {
      const savedLanguage = getLanguageFromLocalStorage();
      i18next.init(
        {
          lng: savedLanguage,
          resources: resources,
        },
        function (err, t) {
          if (err) return console.error("Error initializing i18next", err);
          updateContent();
        }
      );
    });
  }

  function updateContent() {
    document.querySelectorAll("[id]").forEach(function (el) {
      const id = el.getAttribute("id");
      // Solo actualiza el contenido si el ID existe en las traducciones
      if (i18next.exists(id)) {
        el.innerHTML = i18next.t(id);
      }
    });

    // Actualizar el contenido del navbar después de actualizar el contenido
    updateNavbarContent();
  }

  function updateNavbarContent() {
    const navbar = document.querySelector("#navbar-container");
    if (navbar) {
      navbar.querySelectorAll("[id]").forEach(function (el) {
        const id = el.getAttribute("id");
        if (i18next.exists(id)) {
          el.innerHTML = i18next.t(id);
        }
      });
    }
  }

  function loadNavbar() {
    fetch("navbar.html")
      .then((response) => response.text())
      .then((data) => {
        document.querySelector("body").insertAdjacentHTML("afterbegin", data);
        // Asegurarse de que el script del navbar se ejecute después de cargar el HTML
        const script = document.createElement("script");
        script.src = "assets/js/navbar.js";
        document.body.appendChild(script);
        // Actualizar el contenido del navbar después de cargarlo
        script.onload = function () {
          updateNavbarContent();
        };
      })
      .catch((error) => console.error("Error loading the navbar:", error));
  }

  window.changeLanguage = function (lng) {
    i18next.changeLanguage(lng, function (err) {
      if (err) return console.error("Error changing language", err);
      updateContent();
      saveLanguageToLocalStorage(lng); // Guardar el idioma en localStorage
    });
  };

  // Inicializar i18next y cargar el navbar al cargar la página
  initializeI18n();
  loadNavbar();
});
