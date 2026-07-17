// Szablon — skopiuj ten plik jako "config.js" i wpisz tam swój prawdziwy klucz API.
// "config.js" jest w .gitignore, więc nigdy nie trafi do publicznego repozytorium.
(function () {
  var GEMINI_API_KEY = "WKLEJ_TUTAJ_SWOJ_KLUCZ";

  if (GEMINI_API_KEY && GEMINI_API_KEY !== "WKLEJ_TUTAJ_SWOJ_KLUCZ") {
    localStorage.setItem("gemini_api_key", GEMINI_API_KEY);
  }
})();
