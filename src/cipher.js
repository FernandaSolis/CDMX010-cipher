const cipher = {
  // ...Aqui van tus funciones 
  //esto es un objeto
  //encode()
  //decode()
 // fer:function(){
   // return "Hola Soy FER"
  //}
  encode : function (offset, texto){
    let cifrado='';
    for (let i = 0; i < texto.length; i++) {

      let ascii = texto.charCodeAt(i);
      let formula = (ascii - 65 + offset) % 26 + 65;
      cifrado += String.fromCharCode(formula);
     
    }
    //console.log(cifrado); 
      return cifrado;
    },//cifrar

  decode : function (offset, texto){
    let cifrado='';
    for (let i = 0; i < texto.length; i++) {
  
      let ascii = texto.charCodeAt(i);
      let formula = (ascii + 65 - offset) % 26 + 65;
      cifrado += String.fromCharCode(formula);
        
      }
     
      return cifrado;
      },//descifrar  
   


  
  //cipher.encode(offset, string): offset
  //cipher.decode(offset, string): offset


};

//recuerda el proposito
//mandar a consolas
//detecta el error

export default cipher;
