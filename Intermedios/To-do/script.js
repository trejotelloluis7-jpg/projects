const button = document.getElementById("Agregar");
const list = document.getElementById("lista");
const input = document.getElementById("input");




const buttonall = document.getElementById("all");
const buttonpend = document.getElementById("pendient");
const buttoncomplet = document.getElementById("complet")


// array donde se guardan tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

button.addEventListener("click", () => {
    const text = input.value;

    if (text === "") return;

    tasks.push({ text: text, done: false });  // Guardar en el arrar
    render();

    input.value = ""; // limpiar input

});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});


buttonall.addEventListener("click", () => {
    filter = "all";
    render();
});


buttonpend.addEventListener("click", () => {
    filter = "pendient";
    render();
});


buttoncomplet.addEventListener("click", () => {
    filter = "complet";
});

// tasks => guarda datos        render => Dibuja lo visual


function render() {
    list.innerHTML = "";  // limpiar lista



    // aplicar filtro

    const filteredTasks = tasks.filter(tasks => {
        if (filter === "pendient") return !tasks.done;
        if (filter === "complet") return !tasks.done;
        return true;
    });
    filteredTasks.forEach((tasks) => {

        const li = document.createElement("li");
        li.textContent = task.text;


        // marcar completada
        if (task.done) {
            li.style.textDecoration = "line-trought";
        }

        // click = completar 

        li.addEventListener("click", () => {
            task.done = !task.done;
            render();
        });


        // boton eliminar
        const deletebutt = document.createElement("button");
        deletebutt.textContent = "O"


        deletebutt.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            render();

        });


        li.appendChild(deletebutt);
        list.appendChild(li);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function edit_task(li, index) {
    const edit_input = document.createElement("Input");
    edit_input.value = tasks[index].text;

    li.innerHTML = "";
    li.appendChild(edit_input);

    edit_input.focus();

    edit_input.addEventListener("keypress", (a) => {
        if (a.key === "Enter") {
            tasks[index].text = edit_input.value;
            render();
        }
    });
    edit_input.addEventListener("blur", () => {
        tasks[index].text = edit_input.value;
        render();

    });

}



render();