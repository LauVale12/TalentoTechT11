function contVocalCons(palabra) {
  if (isNaN(palabra)) {
    const nPalabra = palabra.replace(/\s/g, "");
    let contV = 0;
    let contC = 0;
    for (let i = 0; i < nPalabra.length; i++) {
      if (esVocal(nPalabra.charAt(i))) {
        contV++;
      } else {
        contC++;
      }
    }
    document.write(`Tiene ${contV} vocales, y ${contC} consonantes`);
  } else {
    document.write("Ingreso un número");
  }
}

function esVocal(letra) {
  let vocales = "aeiouAEIOU";
  if (vocales.includes(letra)) {
    return true;
  } else {
    return false;
  }
}

let word = prompt("Ingrese una palabra u oración");
contVocalCons(word);
