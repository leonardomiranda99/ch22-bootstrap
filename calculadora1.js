console.log("conectado")
//funciones
//funcion suma
/*
function suma(){
    let number1 = parseInt(document.getElementById("number1").value)
    let number2 = parseInt(document.getElementById("number2").value)
    suma = number1 + number2
    document.getElementById("resultado").value = suma;  
  }
*/
// funcion suma flecha 
  let suma = () => {
  let number1 = parseInt(document.getElementById("number1").value)
    let number2 = parseInt(document.getElementById("number2").value)
    suma = number1 + number2
    document.getElementById("resultado").value = suma;
  }
  //funcion resta
  function resta (){
    let number1 = parseInt(document.getElementById("number1").value)
    let number2 = parseInt(document.getElementById("number2").value)
    resta = number1 - number2
    
    document.getElementById("resultado").value =resta;
  }
  //funcion multiplicación
  function multipli (){
    let number1 = parseInt(document.getElementById("number1").value)
    let number2 = parseInt(document.getElementById("number2").value)
    multipli = number1 * number2
    
    document.getElementById("resultado").value =multipli;
  }
  //funcion división
  function divi (){
    let number1 = parseInt(document.getElementById("number1").value)
    let number2 = parseInt(document.getElementById("number2").value)
    divi = number1 / number2
    
    document.getElementById("resultado").value =divi;
  }
  //addEvenet suma
  let sumele = document.getElementById("sumele");
  sumele.addEventListener("click",suma,true);
//addEvenet resta
  let restele = document.getElementById("restele");
  restele.addEventListener("click",resta,true);
  //addEvenet multiplicación
  let multipliquese = document.getElementById("multipliquese");
  multipliquese.addEventListener("click",multipli,true);
  //addEvenet division 
  let dividase = document.getElementById("dividase");
  dividase.addEventListener("click",divi,true);