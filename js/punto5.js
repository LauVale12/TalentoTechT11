function esPar(num) {
    if(!isNaN(num)){
        if(num%2===0){
            document.write("Es par");
        }else{
            document.write("Es impar");
        }
    } else {
        document.write("No ingreso un número");
    }
}

let num = prompt("Ingrese algún número");
esPar(num);