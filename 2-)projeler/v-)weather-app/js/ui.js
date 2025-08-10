import { cities } from "./constants.js";

// arayüz elementleri
const uiElement = {
  themeBtn: document.querySelector(".theme-btn"),
  dataList: document.querySelector("#city-list"),
  searchForm: document.querySelector("#search-form"),
  searchInput: document.querySelector("#city-input"),
  errorContainer: document.querySelector("#error-message"),
  loader: document.querySelector("#loader"),
  weatherContainer: document.querySelector(".weather-container"),
};

// tema ikonunu güncelleycek bir fonksiyon
const updateThemeIcon = (theme) => {
  const icon = uiElement.themeBtn.querySelector("i");
  icon.className = theme === "light" ? "bi bi-moon-fill" : "bi bi-sun-fill";
};

// dataList içerisine şehirleri basıcak fonksiyon
const renderCityList = () => {
  cities.forEach((city) => {
    const opt = document.createElement("option");
    opt.value = city;
    uiElement.dataList.appendChild(opt);
  });
};

// hata mesajını ekrana bas
const renderError = (message) => {
  uiElement.errorContainer.textContent = message;
  uiElement.errorContainer.classList.add("show");
};

// hata mesajını kaldır
const clearError = () => {
  uiElement.errorContainer.textContent = "";
  uiElement.errorContainer.classList.remove("show");
};

// loaderı gizle/göster
const setLoader = (visible) => {
  uiElement.loader.classList.toggle("show", visible);
};

// ekrana havadurumu verilerini bas
const renderWeatherData = (data, flagUrl, units = "metric") => {
  // hata varsa temizle
  clearError();

  // unit parametresine göre ekrana basıalcak değeri belire
  const tempUnit = units === "imperial" ? "°F" : "°C";

  // içeriği ekrana bas
  // todo içeriği dinamik hale getir
  uiElement.weatherContainer.innerHTML = `
      <article class="weather-card">
            <!-- header -->
            <div class="weather-header">
              <div class="location-info">
                <h2>${data.name}, ${data.sys.country}</h2>
                <div> <img src="${flagUrl}" alt="bayrak" /> </div>
              </div>
              <p id="date">${new Date().toLocaleDateString("tr", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}</p>
            </div>

            <!-- havadurumu verisi -->
            <div class="weather-info">
              <div class="temperature">
                <h3>${data.main.temp} ${tempUnit}</h3>
                <p>Hissedilen <span>${data.main.feels_like} ${tempUnit}</span></p>
              </div>

              <div class="weather-icon">
                <img src="https://openweathermap.org/img/wn/01n@2x.png" />
                <p>açık</p>
              </div>
            </div>

            <!-- detaylar -->
            <div class="weather-details">
              <!-- detay -->
              <div class="details">
                <i class="bi bi-arrow-down"></i>
                <div>
                  <p>Min</p>
                  <b>27 °C</b>
                </div>
              </div>
              <!-- detay -->
              <div class="details">
                <i class="bi bi-arrow-up"></i>
                <div>
                  <p>Max</p>
                  <b>30 °C</b>
                </div>
              </div>
              <!-- detay -->
              <div class="details">
                <i class="bi bi-wind"></i>
                <div>
                  <p>Rüzgar Hızı</p>
                  <b>17 km/h</b>
                </div>
              </div>
              <!-- detay -->
              <div class="details">
                <i class="bi bi-wind"></i>
                <div>
                  <p>Rüzgar Derecesi</p>
                  <b>200 deg</b>
                </div>
              </div>
              <!-- detay -->
              <div class="details">
                <i class="bi bi-droplet"></i>
                <div>
                  <p>Nem</p>
                  <b>7 %</b>
                </div>
              </div>
              <!-- detay -->
              <div class="details">
                <i class="bi bi-speedometer2"></i>
                <div>
                  <p>Basınç</p>
                  <b>100 hPa</b>
                </div>
              </div>
              <!-- detay -->
              <div class="details">
                <i class="bi bi-eye"></i>
                <div>
                  <p>Görüş</p>
                  <b>20 km</b>
                </div>
              </div>
              <!-- detay -->
              <div class="details">
                <i class="bi bi-cloud"></i>
                <div>
                  <p>Bulut</p>
                  <b>40 %</b>
                </div>
              </div>
              <!-- detay -->
              <div class="details">
                <i class="bi bi-sun"></i>
                <div>
                  <p>Gün Doğumu</p>
                  <b>06:00</b>
                </div>
              </div>
              <!-- detay -->
              <div class="details">
                <i class="bi bi-moon"></i>
                <div>
                  <p>Gün Batımı</p>
                  <b>21:00</b>
                </div>
              </div>
            </div>
          </article>
  `;
};

// değişken/fonksiyonları diğer dosyalarda kullanmak için export ediyoruz
export { uiElement, updateThemeIcon, renderCityList, renderError, clearError, setLoader, renderWeatherData };
