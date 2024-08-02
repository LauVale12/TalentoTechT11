function esVocal(letra){
    let vocales = "aeiouAEIOU";
    if(isNaN(letra) && (letra.length === 1)){
        if(vocales.includes(letra)){
            document.write("Es una vocal");
        }else{
            document.write("Es una consonante");
        }
    } else {
        document.write("No ingreso una letra, ingreso un número o más de una letra");
    }
}

let letra = prompt("Ingrese una letra");
esVocal(letra);