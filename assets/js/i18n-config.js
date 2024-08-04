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

  loadTranslations().then((resources) => {
    i18next.init(
      {
        lng: "sp", // Idioma por defecto
        resources: resources,
      },
      function (err, t) {
        if (err) return console.error("Error initializing i18next", err);
        updateContent();
      }
    );
  });

  function updateContent() {
    document.querySelectorAll("[id]").forEach(function (el) {
      const id = el.getAttribute("id");
      // Solo actualiza el contenido si el ID existe en las traducciones
      if (i18next.exists(id)) {
        el.innerHTML = i18next.t(id);
      }
    });
  }

  window.changeLanguage = function (lng) {
    i18next.changeLanguage(lng, function (err) {
      if (err) return console.error("Error changing language", err);
      updateContent();
    });
  };
});
