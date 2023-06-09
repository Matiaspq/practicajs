function verificarEdad(){
    var edadInput = document.getElementById("edad-input").value;
    var edad = parseInt(edadInput);

    var resultadoElement = document.getElementById("resultado");
    if (edad >=18){
        resultadoElement.textContent = "Sos mayor de edad.";
        resultadoElement.style.color = "green";
    } else{
        resultadoElement.textContent = "Sos menor de edad.";
        resultadoElement.style.color = "red";
    }
    }