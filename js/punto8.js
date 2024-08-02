function numMed(num1, num2, num3){
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
        if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)){
            document.write(num1 +" es el número del medio");
        } else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)){
            document.write(num2 +" es el número del medio");
        } else {
            document.write(num3 +" es el número del medio");
        }
    } else {
        document.write("No ingreso números");
    }
}

let num1 = prompt("Ingresa un número");
let num2 = prompt("Ingresa un número");
let num3 = prompt("Ingresa un número");
numMed(num1, num2, num3);