const cipher = {
  // ...Aqui van tus funciones 
  //esto es un objeto
  //Función para cifrar
  encode : function (offset, texto){
    //if(!offset){ trhrow new typeError ('tu input en invalido')}
    if (offset === null && texto === null){
      throw new TypeError ('Bla bla bla');
    } else
    if (offset === null || texto === []){
      throw new TypeError ('Bla bla bla');
    } else 
    if (offset === 0 || texto === 0){
      throw new TypeError ('Bla bla bla');
    } else {
      let cifrado='';
      for (let i = 0; i < texto.length; i++) {
  
        let ascii = texto.charCodeAt(i);
        let formula = (ascii - 65 + offset) % 26 + 65;
        cifrado += String.fromCharCode(formula);
      } 
      //Regresa cifrado ok
        return cifrado;
    }
  },
  //Función para descifrar
  decode : function (offset, texto){
    if (offset === null && texto === null){
      throw new TypeError ('Bla bla bla');
    } else
    if (offset === null || texto === []){
      throw new TypeError ('Bla bla bla');
    } else 
    if (offset === 0 || texto === 0){
      throw new TypeError ('Bla bla bla');
    } else { 
      let cifrado='';
      for (let i = 0; i < texto.length; i++) {
        let ascii = texto.charCodeAt(i);
        let formula = (ascii + 65 - offset) % 26 + 65;
        cifrado += String.fromCharCode(formula);  
        }
        //Regresa descifrado ok
        return cifrado;
    }
  },  
};
//recuerda el proposito
//mandar a consolas
//detecta el error
export default cipher;
