function diaSemana (numero) {
    if(!isNaN(numero) && (numero > 0 && numero < 7)){
        if(numero === 1){
            document.write("Es domingo");
        } else if(numero === 2){
            document.write("Es lunes");
        } else if(numero === 3){
            document.write("Es martes");
        } else if(numero === 4){
            document.write("Es miercoles");
        } else if(numero === 5){
            document.write("Es jueves");
        } else if(numero === 6){
            document.write("Es viernes");
        } else {
            document.write("Es sabado");
        }
    } else {
        document.write("No ingreso un número, o este se sale de los limites");
    }
}

let dia = prompt("Ingrese un número del 1 al 7 para saber el día de la semana");
diaSemana(dia);