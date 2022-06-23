function Add(){
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let sum = number1 + number2;
    let result = "Đáp Án là " + number1 + "+" + number2 + "=" + sum;
    document.getElementById("result").innerHTML = result;
}
function Sub(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let sub = number1 - number2;
    let result = "Đáp Án là " + number1 + "-" + number2 + "=" + sub;
    document.getElementById("result").innerHTML = result;
}
function Mul(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let mul = number1 * number2;
    let result = "Đáp Án là " + number1 + "*" + number2 + "=" + mul;
    document.getElementById("result").innerHTML = result;
}
function Div(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let div = number1 / number2;
    let result = "Đáp Án là " + number1 + "/" + number2 + "=" + div;
    document.getElementById("result").innerHTML = result;
}