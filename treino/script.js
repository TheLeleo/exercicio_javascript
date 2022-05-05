 // calcular aceleração gravitacional
function ex1(){

 var v0 = document.getElementById('v0').value; // pegar o valor digitado no input
 const g = 10; // aceleração gravitacional 10m/s^2

 tSubida = v0/g;
 alturaM = ((v0*v0)/(g*2));

 document.getElementById('vem').innerHTML = "Tempo de subida = " + alturaM + " m/s²"; // Imprimir no p
 console.log("TEMPO DE SUBIDA = " + tSubida + " m/s²"); // imprimir no console
 alert("TEMPO DE SUBIDA = " + tSubida + " m/s²"); // imprimir no alert

 document.getElementById('altura').innerHTML = "Altura Máxima = " + alturaM + "m";
 console.log("ALTURA MÁXIMA = " + alturaM + "m");
 alert("ALTURA MÁXIMA = " + alturaM + "m");

}
