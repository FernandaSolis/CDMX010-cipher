const cipher = {
  //Función para cifrar
  encode : function (offset, texto){
    //if(!offset){ trhrow new typeError ('tu input es invalido')}
    if (offset === null && texto === null){ 
      throw new TypeError ('Caracter no válido');
    } else
    if (offset === null || texto === []){
      throw new TypeError ('Caracter no válido');
    } else 
    if (offset === 0 || texto === 0){
      throw new TypeError ('Caracter no válido');
    } else {
      let cifrado='';
      for (let i = 0; i < texto.length; i++) { 
  
        let ascii = texto.charCodeAt(i); 
        let formula = (ascii - 65 + offset) % 26 + 65; 
        cifrado += String.fromCharCode(formula); 
      } 
        return cifrado; 
    }
  },
  //Función para descifrar
  decode : function (offset, texto){
    if (offset === null && texto === null){
      throw new TypeError ('Caracter no válido');
    } else
    if (offset === null || texto === []){
      throw new TypeError ('Caracter no válido');
    } else 
    if (offset === 0 || texto === 0){
      throw new TypeError ('Caracter no válido');
    } else { 
      let cifrado='';
      for (let i = 0; i < texto.length; i++) {
        let ascii = texto.charCodeAt(i);
        let formula = (ascii + 65 - offset) % 26 + 65;
        cifrado += String.fromCharCode(formula);  
        }
        return cifrado; 
    }
  },  
};
export default cipher;
