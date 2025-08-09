import { uiElement, updateThemeIcon } from "./ui.js";

// body
const body = document.body;

// varsayılan tema değeri
const theme = "dark";

// body'e tema değerini attribure olarak ekle
body.setAttribute("data-theme", theme);

// tema butonuna tıklanma olayını izle
uiElement.themeBtn.addEventListener("click", () => {
  // mevcut tema değerine eriş
  const currentTheme = body.getAttribute("data-theme");

  // erişilen tema değerinin tersini al
  // terneray operator (? :)
  // if else görevi görür ama daha pratiktir
  // '?' işaretinden sonraki kısım koşul gerçekleşirse ':' dan sonrası ise koşul gerçekleşmezse çalışır
  const newTheme = currentTheme === "light" ? "dark" : "light";

  // tema değerini body'e attribute olarak ekle
  body.setAttribute("data-theme", newTheme);
});
