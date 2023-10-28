
function generateProblem() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operator = Math.random() < 0.5 ? '+' : '-';
    const problem = `${num1} ${operator} ${num2}`;
    return {
        problem: problem,
        answer: eval(problem) 
    };
}

const problemContainer = document.getElementById('problem');
const answerInput = document.getElementById('answer');
const messageElement = document.getElementById('message');


let currentProblem = generateProblem();
problemContainer.textContent = `¿Cuánto es ${currentProblem.problem}?`;


document.getElementById('submit').addEventListener('click', function() {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === currentProblem.answer) {
        messageElement.textContent = '¡Correcto! 🎉';
    } else {
        messageElement.textContent = 'Incorrecto. Intenta de nuevo.';
    }
    
    currentProblem = generateProblem();
    problemContainer.textContent = `¿Cuánto es ${currentProblem.problem}?`;
    answerInput.value = ''; 
});