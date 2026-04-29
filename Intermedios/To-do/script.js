const button = document.getElementById("Agregar");
const list = document.getElementById("lista");
const input = document.getElementById("input");



// array donde se guardan tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

button.addEventListener("click", () => {
    const text = input.value;

    if (text === "") return;

    tasks.push(text);  // Guardar en el arrar
    render();

    input.value = ""; // limpiar input

});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});




// tasks => guarda datos        render => Dibuja lo visual


function render() {
    list.innerHTML = "";  // limpiar lista

    tasks.forEach((task, index) => {

        const li = document.createElement("li");
        li.textContent = task;


        // marcar completada
        li.addEventListener("click", () => {
            li.style.textDecoration = "line -trough";
        });



        // boton eliminar
        const deletebutt = document.createElement("button");
        deletebutt.textContent = "X";



        deletebutt.addEventListener("click", () => {
            tasks.splice(index, 1);
            render();

        });

        li.appendChild(deletebutt);
        list.appendChild(li);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
render();