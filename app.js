console.log("Mira y Aprende iniciado");
let asientoElegido = "";

const asientos =
document.querySelectorAll(".asiento");

asientos.forEach(asiento => {

asiento.addEventListener("click", () => {

document
.querySelectorAll(".asiento")
.forEach(a =>
a.classList.remove("seleccionado")
);

asiento.classList.add("seleccionado");

asientoElegido =
asiento.textContent;

document.getElementById(
"asientoSeleccionado"
).textContent =
"💺 Asiento seleccionado: " +
asientoElegido;

});

});

document
.getElementById("confirmarAsiento")
.addEventListener("click", () => {

if(asientoElegido===""){
alert("Selecciona un asiento.");
return;
}

alert(
"🎟 Has seleccionado el asiento " +
asientoElegido
);

});
