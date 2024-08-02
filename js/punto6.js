function esPositivo(num) {
    if (!isNaN(num)){
        if(num>0){
            document.write("Es positivo");
        } else if(num<0){
            document.write("Es negativo");   
        } else {
            document.write("Es cero");
        }
    }
}

let num = prompt("Ingresa algún número");
esPositivo(num);