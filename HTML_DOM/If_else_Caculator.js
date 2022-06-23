function Caculator() {
    let number1 = +document.getElementById("num1").value;
    let caculator = document.getElementById("cal").value;
    let number2 = +document.getElementById("num2").value;
    let result = 0;
    if (caculator == "+") {
        result = number1 + number2;
    }else if (caculator == "-") {
        result = number1 - number2;
    }else if (caculator == "*") {
        result = number1 * number2;
    }else if (caculator == "/") {
        result = number1 / number2;
    }
    let display = 'Đáp án là : ' + number1 + caculator + number2 + '=' + result;
    document.getElementById("result").innerHTML = display;
}