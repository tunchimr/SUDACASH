(() => {
  const toggle = document.getElementById("language-toggle");
  const html = document.documentElement;
  const setLanguage = (lang) => {
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-ar][data-en]").forEach((el) => {
      el.textContent = el.dataset[lang];
    });
    toggle.textContent = lang === "ar" ? "EN" : "عربي";
    document.title = lang === "ar"
      ? "SUDACASH | ساهل .. سريع .. سوداكاش"
      : "SUDACASH | Easy. Fast. Sudacash.";
    try { localStorage.setItem("sudacash-language", lang); } catch (_) {}
  };
  let initial = "ar";
  try {
    const saved = localStorage.getItem("sudacash-language");
    if (saved === "ar" || saved === "en") initial = saved;
  } catch (_) {}
  setLanguage(initial);
  toggle.addEventListener("click", () => setLanguage(html.lang === "ar" ? "en" : "ar"));
  document.getElementById("year").textContent = new Date().getFullYear();
})();