// Pensar en HTML, escucho lo que pasa y hay en mi página, Importo/invoco mis funciones
import cipher from './cipher.js';

document.getElementById("botonencode").addEventListener("click", function(){ //Llamo un evento del DOM
    let numero=document.getElementById("offset").value; //value me muestra el valor de mi elemento
    let texto=document.getElementById("textoencode").value; //entro solo al elemento id del html 
    let offset=parseInt(numero);
    let cifrado=cipher.encode(offset, texto);
    document.getElementById("resultadoencode").value=cifrado;
    
})

document.getElementById("botondecode").addEventListener("click", function(){
    let numero=document.getElementById("offset").value;
    let texto=document.getElementById("textodecode").value; 
    let offsetd=parseInt(numero);
    let descifrar=cipher.decode(offsetd, texto);
    document.getElementById("resultadodecode").value=descifrar;
    
})

document.getElementById("otrocodigo").addEventListener("click", function(){
    document.getElementById('offset').value = '';
    document.getElementById("textoencode").value = '';
    document.getElementById("resultadoencode").value = '';
    document.getElementById("textodecode").value = '';
    document.getElementById("resultadodecode").value = '';
    

})