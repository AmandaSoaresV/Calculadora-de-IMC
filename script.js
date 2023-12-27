function calcular() {
    let nome = document.getElementById("input_nome").value
    let altura = parseFloat(document.getElementById("input_altura").value.replace(",", "."))
    let peso = parseFloat(document.getElementById("input_peso").value.replace(",", "."))
    let divResultado = document.getElementById("resultado")
    divResultado.style.background = "black"

    let imc = peso / (altura ** 2)
    
    if (imc < 18.5) {
        divResultado.innerText = `${nome} seu IMC é ${imc.toFixed(1)} você está abaixo do peso ideal. CUIDADO!!!`
    }
    else if (imc < 25.9) {
        divResultado.innerText = `${nome} seu IMC é ${imc.toFixed(1)} e você está com peso ideal. PARABÉNS!!!`
    }
    else if (imc < 29.9) {
        divResultado.innerText = `${nome} seu IMC é ${imc.toFixed(1)} e você está com sobrepeso. MUITO CUIDADO!!!`
    }
    else if (imc < 34.9) {
        divResultado.innerText = `${nome} seu IMC é ${imc.toFixed(1)} e você está com Obesidade grau I. CUIDADO!!!`
    }
    else if (imc <39.9) {
        divResultado.innerText = `${nome} seu IMC é ${imc.toFixed(1)} e você está com Obesidade grau II. CUIDADO!!!`
    }
    else {
        divResultado.innerText = `${nome} seu IMC é ${imc.toFixed(1)} e você está com Obesidade grau III. CUIDADO!!!`
    }

}
