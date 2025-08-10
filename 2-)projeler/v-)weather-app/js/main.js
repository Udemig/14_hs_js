import { getWeatherData } from "./api.js";
import {
  uiElement,
  updateThemeIcon,
  renderCityList,
  renderError,
  clearError,
  setLoader,
  renderWeatherData,
} from "./ui.js";

//! projede tutulan veriler
const STATE = {
  theme: localStorage.getItem("theme") || "dark",
};

//! proje yüklendiği anda yapılacaklar
// body elmentine eriş
const body = document.body;
// body'e tema değerini attribure olarak ekle
body.setAttribute("data-theme", STATE.theme);
// sayfa ilk yüklendiğinde doğru ikonun ekrana gelmesini sağla
updateThemeIcon(STATE.theme);

//! fonksiyonlar
// mevcut değerleri local storage'a kaydet
const persist = () => {
  localStorage.setItem("theme", STATE.theme);
};

// form gönderilince çalışan fonksiyon
const handleSearch = async (city) => {
  // şehir ismini al
  const name = city.trim();

  // şehir ismi girilmediyse ekrana hatayı bas
  if (!name) {
    renderError("Şehir ismi zorunludur");
    return;
  }

  // önceden hata varsa temizle
  clearError();

  // ekrana loader bas
  setLoader(true);

  try {
    // api'dan havadurumu verilerini al
    const data = await getWeatherData(city);

    // şehir bulunamazsa ekrana hatayı bas
    if (data.cod === "404") {
      return renderError("Şehir bulunamadı");
    }

    // ekrana havadurumu verisini bas
    renderWeatherData(data);
  } catch (error) {
    // api'dan hata geldiyse ekrana bas
    renderError(error.message || "Şehir bulunamadı");
  } finally {
    // api'dan cevap gelince loader'ı ekrandan kaldır
    setLoader(false);
  }
};

//! events
// sayfa içierği yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
  renderCityList();
});

// form gönderildiğinde
uiElement.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = uiElement.searchInput.value;

  handleSearch(city);
});

// tema butonuna tıklanma olayını izle
uiElement.themeBtn.addEventListener("click", () => {
  // STATE'de tutulan tema değerinin tersini al
  // terneray operator (? :)
  // if else görevi görür ama daha pratiktir
  // '?' işaretinden sonraki kısım koşul gerçekleşirse ':' dan sonrası ise koşul gerçekleşmezse çalışır
  STATE.theme = STATE.theme === "light" ? "dark" : "light";

  // tema değerini body'e attribute olarak ekle
  body.setAttribute("data-theme", STATE.theme);

  // son temayı local storage'a kaydet
  persist();

  // iconu güncelle
  updateThemeIcon(STATE.theme);
});
