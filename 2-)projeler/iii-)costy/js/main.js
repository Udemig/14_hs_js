import { uiElements } from "./ui.js";

// menuBtn'e tıklanınca nav kısmını aç-kapa yap
uiElements.menuBtn.addEventListener("click", () => {
  // uiElements içerisindeki nav elemanına class ekle çıkar
  uiElements.nav.classList.toggle("open");
});
