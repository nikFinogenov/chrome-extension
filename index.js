const apiKey = '408e224aa237a96f16800dbfd57490dc';
let cityName = "Kharkiv";

const forecastElement = document.getElementById('forecast');
const cityElement = document.getElementById('city-name');

function getWeatherForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => displayWeatherForecast(data))
        .catch((error) => console.error(error));
}
function displayWeatherForecast(weatherData) {
    let days = [];
    if(Number(weatherData.list[0].dt_txt.split(" ")[1].split(":")[0]) > 12) days.push(weatherData.list[0]);
    weatherData.list.filter((day) => day.dt_txt.includes("12:00:00") ? true : false).map((day) => days.push(day));
    document.getElementById("today").innerHTML = `${days[0].main.temp}°C`
    document.getElementById("tommorow").innerHTML = `${days[1].main.temp}°C`
    document.getElementById("tommorowplus").innerHTML = `${days[2].main.temp}°C`
    document.getElementById("tommorowplusplus").innerHTML = `${days[3].main.temp}°C`
}

getWeatherForecast(cityName);
