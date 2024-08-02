function menorDeTres(num1, num2, num3) {
    if(num1 >= num2 && num2 <= num3){
        return num2;
    } else if (num1 <= num2 && num1 <= num3){
        return num1;
    } else {
        return num3;
    }
}

let num1 = prompt("Ingrese un número");
let num2 = prompt("Ingrese un número");
let num3 =prompt("Ingrese un número");

document.write("El número menor es " + menorDeTres(num1,num2, num3));