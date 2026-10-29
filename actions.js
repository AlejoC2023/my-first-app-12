// Variable que almacena el número de clicks
let clicks = 0;

// Obtener los elementos HTML
const counter = document.getElementById("counter");
const clickButton = document.getElementById("clickButton");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("message");
const titleInput = document.getElementById("titleInput");
const eventTitle = document.getElementById("eventTitle");

// Registrar un click
clickButton.addEventListener("click", function () {
    clicks++;
    counter.textContent = clicks;

    if (clicks === 1) {
        message.textContent =
            "¡Tu primer click ha sido registrado!";
    } else if (clicks % 10 === 0) {
        message.textContent =
            "¡Excelente! Has alcanzado " + clicks + " clicks.";
    } else {
        message.textContent =
            "¡Sigue participando! Cada click cuenta.";
    }
});

// Reiniciar el contador a cero
resetButton.addEventListener("click", function () {
    clicks = 0;
    counter.textContent = clicks;

    message.textContent =
        "Contador reiniciado a cero. ¡Empecemos de nuevo!";
});

// Actualizar el título mientras el usuario escribe
titleInput.addEventListener("input", function () {
    const newTitle = titleInput.value.trim();

    eventTitle.textContent = newTitle || "COLEGIO BOLÍVAR";

    document.title = newTitle
        ? newTitle + " | Contador de Eventos"
        : "Contador de Eventos | Colegio Bolívar";