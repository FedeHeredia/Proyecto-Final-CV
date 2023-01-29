document.getElementById("boton_fondo1").addEventListener('click', function() {
    document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/22/4e/d0/224ed02c8cb2e6ecf4a457c6b0e74d63.png)";
    document.body.style.backgroundSize = "cover"; 
});


document.getElementById("boton_fondo2").addEventListener('click', function() {
    document.body.style.backgroundImage="url(https://marketplace.canva.com/EAE8rnSR--8/1/0/900w/canva-fondo-de-pantalla-para-telefono-natural-rosa-_ThrS375s80.jpg)";
    document.body.style.backgroundSize = "cover";
});

function MostrarReloj() {
var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();
var segundos = fechaHora.getSeconds();

if(horas < 10) { horas = '0' + horas; }
if(minutos < 10) { minutos = '0' + minutos; }
if(segundos < 10) { segundos = '0' + segundos; }

document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
}

window.onload = function() {
    setInterval(MostrarReloj, 1000);
  }