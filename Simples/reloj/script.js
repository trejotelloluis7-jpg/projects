const clock = document.getElementById("clock");
const dateElement = document.getElementById("date");


//funcion que obtiene la hora actual

function updateclock() {
    const now = new Date();

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();


    // formato de agregar 0 si es menor a 10

    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;


    clock.textContent = `${hours}:${minutes}:${seconds}`;


    //fecha

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const Year = now.getFullYear();


    // dias de la semana

    const days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes",
        "Sabado"
    ]

    const dayname = days[now.getDay()];

    dateElement.textContent = `${dayname} ${day}/${month}/${Year}`;





}

setInterval(updateclock, 1000);

updateclock();

console.log("js funcionando juasjuasjuasjuas");