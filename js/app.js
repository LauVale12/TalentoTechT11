//Punto 1
function mayorDeDos(num1, num2) {
    if (num1 <= num2){
        return num2;
    } else {
        return num1;
    }
}
let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese un número"));

document.write(mayorDeDos(num1, num2));