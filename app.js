const API_KEY = "f5a48b34daaaa3ea881fc7c45fc9033e";

const getWeatherData = (cityName) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => loadWeather(data));
};
const getElement = (elem, id) => (document.getElementById(elem).innerText = id);

document.getElementById("searchBtn").addEventListener("click", () => {
  const cityNameText = document.getElementById("city-input");
  getWeatherData(cityNameText.value);
  cityNameText.value = "";
});
const loadWeather = (weather) => {
  const url = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  document.getElementById("imgId").setAttribute("src", url);

  getElement("city", weather.name);
  getElement("temp", weather.main.temp);
  getElement("leadId", weather.weather[0].main);
};