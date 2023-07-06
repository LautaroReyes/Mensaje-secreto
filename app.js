function desencriptarMensaje() {
  let palabra = prompt("Ingrese el mensaje a desencriptar");

  do {
    if (palabra.includes("(")) {
      palabra = desencriptarTrozo(palabra);
    }
  } while (palabra.includes("("));

  document.write("La palabra desencriptada es: <br>" + palabra);
}

function desencriptarTrozo(palabra) {
  let fraseDesencriptada = "";
  let palabraSeparada = palabra.substring(0, palabra.indexOf("("));
  let separada = palabra.substring(palabra.indexOf(")") + 1);
  let parentesis = palabra.substring(
    palabra.indexOf("(") + 1,
    palabra.indexOf(")")
  );

  parentesis = parentesis.split("").reverse().join("");
  fraseDesencriptada = palabraSeparada + parentesis + separada;

  return fraseDesencriptada;
}

desencriptarMensaje();
