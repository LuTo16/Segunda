// Función para generar un problema aleatorio
function generateProblem() {
    let num1 = Math.floor(Math.random() * 10) + 1; // Número aleatorio del 1 al 10
    let num2 = Math.floor(Math.random() * 10) + 1; // Número aleatorio del 1 al 10
    let operators = ['+', '-', '*'];
    let operator = operators[Math.floor(Math.random() * operators.length)]; // Operador aleatorio: suma, resta o multiplicación

    let problemText = `${num1} ${operator} ${num2}`;
    document.getElementById('problem').innerText = problemText;

    // Guardar la respuesta correcta en un atributo del elemento #problem
    document.getElementById('problem').setAttribute('data-answer', eval(problemText));
}

// Función para comprobar la respuesta del usuario
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    let correctAnswer = parseInt(document.getElementById('problem').getAttribute('data-answer'));

    if (userAnswer === correctAnswer) {
        alert('¡Correcto! ¡Bien hecho!');
    } else {
        alert('Incorrecto. Inténtalo de nuevo.');
    }
}
