const answerQ = document.getElementById("answer");
const scoreQ = document.getElementById("score");
const nextQ = document.getElementById("next");
const questionQ = document.getElementById("question");

const timerQ = document.getElementById("timer")

const questions = [
    {
        question: "Cual es la capital de Peru?",
        answer: ["lima", "ica", "Ayacucho"],
        correct: 0
    },
    {
        question: "Quien es la loca de las locas",
        answer: ["Mayu", "la loca de las locas", "la bluja enojona", "todas las anteriores"],
        correct: 3
    },
    {
        question: "Cuanto es 1+1+1*1",
        answer: ["2", "3", "4"],
        correct: 1
    },
    {
        question: "Cuantos años tiene messi?",
        answer: ["40", "41", "42", "39"],
        correct: 3
    }
];

let current = 0;
let score = 0;
let time = 10;
let timer;




// temporizador 


function startTimer() {
    time = 10;
    timerQ.textContent = `Tiempo : ${time}`;

    timer = setInterval(() => {
        time--;
        timerQ.textContent = `Tiempo : ${time}`;

        if (time === 0) {
            clearInterval(timer);


            //
            const correct = questions[current].correct;
            const buttons = answerQ.children;

            for (let i = 0; i < buttons.length; i++) {
                if (i === correct) {
                    buttons[i].style.background = "green";
                } else {
                    buttons[i].style.background = "red";
                }
                buttons[i].disabled = true;
            }
            nextQ.style.display = "block";

        }

    }, 1000);
}





// mostrar pregunta
function loadquestion() {

    clearInterval(timer);
    const q = questions[current];


    questionQ.textContent = q.question;
    answerQ.innerHTML = "";
    nextQ.style.display = "none";

    startTimer();
    updateProgress();

    q.answer.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;

        button.addEventListener("click", () => selectAnswer(index));

        answerQ.appendChild(button);
    });
}


//validar respuesta
function selectAnswer(index) {
    clearInterval(timer);

    const correct = questions[current].correct;
    const buttons = answerQ.children;


    for (let i = 0; i < buttons.length; i++) {
        if (i === correct) {
            buttons[i].style.background = "green";
        } else {
            buttons[i].style.background = "red"
        }
        buttons[i].disabled = true;
    }

    if (index === correct) {
        score++;
    }
    nextQ.style.display = "block";
}


const progressQ = document.getElementById("progress");

function updateProgress() {
    progressQ.textContent = ` Pregunta: ${current + 1}/ ${questions.length}`;
}


const restbutton = document.getElementById("reiniciar");
restbutton.addEventListener("click", () => {
    clearInterval(timer);
    current = 0;
    score = 0;
    loadquestion();
    scoreQ.textContent = "";
});




// Resultado final 

function showScore() {
    clearInterval(timer);

    questionQ.textContent = "Quiz terminado";
    answerQ.innerHTML = "";
    scoreQ.textContent = `Su puntaje es: ${score}/ ${questions.length}`;
}


nextQ.addEventListener("click", () => {
    current++;

    if (current < questions.length) {
        loadquestion();
        nextQ.style.display = "none";
    } else {
        showScore();
    }
});


loadquestion();