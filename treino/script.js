 // calcular aceleração gravitacional
function ex1(){

 var v0 = document.getElementById('v0').value; // pegar o valor digitado no input
 const g = 10; // aceleração gravitacional 10m/s^2

 tSubida = v0/g;
 document.getElementById('vem').innerHTML = "Tempo de subida = " + tSubida + " m/s²"; // Imprimir no p
 console.log("TEMPO DE SUBIDA = " + tSubida); // imprimir no console
 alert("TEMPO DE SUBIDA " + tSubida); // imprimir no alert

}
