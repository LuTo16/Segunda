function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (num1 >= 0 && num2 >= 0) {
        var resultado = num1 + num2;
        document.getElementById("resultado").textContent = resultado;
    } else {
        alert("Por favor, ingresa números positivos.");
    }
}

function restar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (num1 >= 0 && num2 >= 0) {
        var resultado = num1 - num2;
        document.getElementById("resultado").textContent = resultado;
    } else {
        alert("Por favor, ingresa números positivos.");
    }
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (num1 >= 0 && num2 >= 0) {
        var resultado = num1 * num2;
        document.getElementById("resultado").textContent = resultado;
    } else {
        alert("Por favor, ingresa números positivos.");
    }
}