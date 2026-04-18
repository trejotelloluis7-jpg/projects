// genera numero aleatorio entre 1 y 100

let number_secret = Math.floor(Math.random() * 100) + 1;

const input = document.getElementById("guess");
const button = document.getElementById("check");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    let usernumber = parseInt(input.value);


    if (!usernumber) {
        message.textContent = "ingresa un numero valido";
        return;
    }

    // comparaciones

    if (usernumber > number_secret) {
        message.textContent = "el numero es muy alto";
    } else if (usernumber < number_secret) {
        message.textContent = "el numero es muy bajo";
    } else {
        message.textContent = "  Felicidades acertaste";
        message.style.color = "green";
    }
});