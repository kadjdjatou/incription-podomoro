
/*let timer;
let timeLeft = 1500;
let isRunning = false;
let sessionCount = 0;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const pomodoroBtn = document.getElementById("pomodoro-btn");
const shortBreakBtn = document.getElementById("short-break-btn");
const longBreakBtn = document.getElementById("long-break-btn");
const sessionCounter = document.getElementById("session-count");
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const currentDate = document.getElementById("current-date");

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                sessionCount++;
                sessionCounter.textContent = sessionCount;
                alert("Session terminée!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 1500;
    updateTimerDisplay();
}

function switchMode(time) {
    clearInterval(timer);
    isRunning = false;
    timeLeft = time;
    updateTimerDisplay();
}

function addTask() {
    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        deleteBtn.onclick = () => li.remove();
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let today = new Date();
    currentDate.textContent = today.toLocaleDateString("fr-FR");
});

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
pomodoroBtn.addEventListener("click", () => switchMode(1500));
shortBreakBtn.addEventListener("click", () => switchMode(300));
longBreakBtn.addEventListener("click", () => switchMode(900));
addTaskBtn.addEventListener("click", addTask);
*/
// gestion du minuteur
let timer;
let timeLeft = 1500;
let isRunning = false;
let sessionCount = 0;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const pomodoroBtn = document.getElementById("pomodoro-btn");
const shortBreakBtn = document.getElementById("short-break-btn");
const longBreakBtn = document.getElementById("long-break-btn");
const sessionCounter = document.getElementById("session-count");
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const currentDate = document.getElementById("current-date");

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                sessionCount++;
                sessionCounter.textContent = sessionCount;
                alert("Session terminée!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 1500;
    updateTimerDisplay();
}

function switchMode(time) {
    clearInterval(timer);
    isRunning = false;
    timeLeft = time;
    updateTimerDisplay();
}

function addTask() {
    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        let taskText = document.createElement("span");
        taskText.textContent = taskInput.value;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        deleteBtn.onclick = () => li.remove();

        let editBtn = document.createElement("button");
        editBtn.textContent = "Modifier";
        editBtn.onclick = () => {
            let newTaskText = prompt("Modifier la tâche :", taskText.textContent);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                taskText.textContent = newTaskText;
            }
        };

        li.appendChild(taskText);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let today = new Date();
    currentDate.textContent = today.toLocaleDateString("fr-FR");
});

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
pomodoroBtn.addEventListener("click", () => switchMode(1500));
shortBreakBtn.addEventListener("click", () => switchMode(300));
longBreakBtn.addEventListener("click", () => switchMode(900));
addTaskBtn.addEventListener("click", addTask);














