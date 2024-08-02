function calificationLetter(nota) {
    if(!isNaN(nota) && nota<=5.00){
        if(nota >= 3.67){
            document.write("La nota equivale a A");
        } else if(nota >= 2.67){
            document.write("La nota equivale a B");
        } else if(nota >= 1.67){
            document.write("La nota equivale a C");
        } else if(nota >= 0.67){
            document.write("La nota equivale a D");
        } else {
            document.write("La nota equivale a F");
        }
    } else {
        document.write("No ingreso un número, o el número ingresado es mayor a 5");
    }
}

let note = prompt("Ingrese una nota, la maxima nota puede ser 5.0");
calificationLetter(note);