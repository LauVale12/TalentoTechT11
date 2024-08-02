function factorial(num){
    if(!isNaN(num)){
        let n = 1;
        for(let i = 1; i <= num; i++){
            n *=i; 
        }
        document.write(n);
    }
}

let numero = prompt("ingrese un número")
factorial(numero);