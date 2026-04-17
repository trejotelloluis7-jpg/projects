let count = 0;


// boton para sumar
const value = document.getElementById("value");
document.getElementById("increase").addEventListener("click", () => {
    count++;
    update();
});

// boton para restar

document.getElementById("recrease").addEventListener("click", () => {
    count--;
    update();
});

document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    update();
});



//Funcion principal


function update() {

    value.textContent = count;


    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "white";
    }
}



