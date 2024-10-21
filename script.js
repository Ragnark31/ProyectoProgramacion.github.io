let currentSession = 1;

function checkAnswers(session) {
    const form = document.getElementById(`form${session}`);
    const inputs = form.querySelectorAll('input[type="radio"]');
    let score = 0;

    inputs.forEach(input => {
        if (input.checked) {
            if (input.value === "correcto") {
                score++;
            }
        }
    });

    alert(`Has obtenido ${score} de 5 en la Sesión ${session}.`);

    if (score >= 3 && currentSession < 5) {
        currentSession++;
        document.getElementById(`session${currentSession}`).classList.remove('locked');
    }
}

// Mostrar la primera sesión al cargar la página
document.getElementById('session1').classList.remove('locked');
