function tablaMult(num){
    if(!isNaN(num)){
        for (let i = 1; i < 11; i++ ){
            document.write((i*num) + "<br>" );
        }
    }
}

let numero = prompt("Ingrese un número");
tablaMult(numero);