const button = document.getElementById("calcular");
const result = document.getElementById("resultado");

button.addEventListener("click", () => {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!peso || !altura) {
        result.textContent = "ingrese datos validos";
    }


    const imc = peso / (altura ** 2);


    let mensaje = "";

    if (imc > 35) mensaje = "diabetes";
    else if (imc > 30) mensaje = "prediabetes";
    else if (imc > 25) mensaje = "sobrepeso";
    else if (imc > 20) mensaje = "peso normal";
    else mensaje = "Desnutricion";

    document.getElementById("resultado").textContent = `${imc.toFixed(2)} - ${mensaje}`;
});
