const API_KEY = `85aa5018b9228b66f2470e5d4ffd1e2f`
const searchTemperature = () => {
    const city = document.getElementById("city-name").value
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}

const displayWeather = (temp) => {
    setInnerText("city", temp.name)
    setInnerText("temperature", temp.main.temp)
    setInnerText("condition", temp.weather[0].main)

    const url = ` http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const imageIcon = document.getElementById("weather-icon");
    imageIcon.setAttribute('src', url)

}