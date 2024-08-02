function esIgual(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)){
        if (num1 === num2){
            document.write("Los número son iguales");
        } else {
            document.write("Los número son diferentes");
        }
    } else {
        document.write("Los dos valores no son números");
    }
}

let num1 = prompt("ingrese un número");
let num2 = prompt("ingrese un número");
esIgual(num1, num2);