const button = document.getElementById("search");
const input = document.getElementById("city");
const result = document.getElementById("result");
const butlocation = document.getElementById("location");


const API_KEY = "22a3463aa45efea4c1bc35069f0eb987";



//manipulacion de botones

button.addEventListener("click", getWeather);
input.addEventListener("keypress", (a) => {
    if (a.key === "Enter") {
        getWeather();
    }

});

butlocation.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(success, error);
});




async function getWeather() {
    const city = input.value.trim();

    if (city === "") return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 404) {
            result.textContent = "ciudad no encontrada";
            return;
        }



        showeather(data);


    } catch {
        result.textContent = "Sin conexion";
    }

}
//Reutilizable para mostrar datos


function showeather(data) {
    const temp = data.main.temp;
    const weather = data.weather[0].main;
    const country = data.sys.country;
    const city = data.name;
    const humidity = data.main.humidity;
    const icon = data.weather[0].icon;
    const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`;


    const iconimg = document.getElementById("icon");
    iconimg.src = icon_url;



    result.textContent = `${city}, ${country}
         🌡️${temp}°C
         ☁️${weather} 
         💧 Humedad: ${humidity}%
         `;
    result.style.whiteSpace = "pre-line";
}


//geolocalizacion 

function success(position) {
    const lan = position.coords.latitude;
    const lon = position.coords.longitude;

    getWeatherByCoords(lan, lon);
}

function error() {
    result.textContent = "No se pudo obtener ubicacion";
}

async function getWeatherBycoords(lan, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${lon}&appid=${API_KEY}&units=metric`;


    try {
        const response = await fetch(url);
        const data = await response.json();

        showeather(data);
    } catch {
        result.textContent = "Error al obtener ubicacion";
    }

}



