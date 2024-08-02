function esMayorDeEdad(edad) {
    if(edad >= 18){
        document.write("Es mayor de edad");
    }else {
        document.write("Es menor de edad");
    }
}

let age = prompt("Ingrese su edad");
esMayorDeEdad(age);