const API_KEY = "40e7ee4a6de50f10ca31c0283e5c0132";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = async (city, units = "metric") => {
  // istek atılacak url'i hazırla
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=${units}&lang=tr`;

  // api'a istek at
  const res = await fetch(url);

  // reponse'u js formatına çevir
  const data = await res.json(); // json ====> js

  // datayı döndür
  return data;
};
