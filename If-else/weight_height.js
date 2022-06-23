function check(){
    let height = document.getElementById("hei").value;
    let weight = document.getElementById("wei").value;
    let bmi = weight / (Math.pow(height,2));
    if(bmi <16){
        result = ("Gầy độ III")
    }else if (bmi >= 16 && bmi < 17) {
        result = ("Gầy độ II")
    }else if (bmi >= 17 && bmi < 18.5) {
        result = ("Gầy độ I")
    }else if (bmi >= 18.5 && bmi < 25) {
        result = ("Bình Thường")
    }else if (bmi >= 25 && bmi < 30) {
        result = ("Thừa Cân")
    }else if (bmi >= 30 && bmi < 35) {
        result = ("Béo Phì độ I")
    }else if (bmi >= 35 && bmi < 40) {
        result = ("Béo Phì độ II")
    }else if (bmi > 40) {
        result = ("Béo Phì độ III")
    }
    document.getElementById("result").innerHTML = result;
}
