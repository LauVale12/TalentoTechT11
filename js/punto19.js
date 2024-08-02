function divisores(num){
    if(!isNaN(num)){
        document.write(`Los divisores de ${num} son: <br>`)
        for(let i = num; i > 0; i--){
            if(num%i === 0){
                document.write(i+ "<br>")
            }
        }
    } else {
        document.write("El valor ingresado no es un número");
    }
}

let numero = prompt("ingrese un número");
divisores(numero);