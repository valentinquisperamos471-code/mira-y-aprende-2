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
let total = 0;

function agregarCombo(nombre, precio){

const lista =
document.getElementById("listaCarrito");

const item =
document.createElement("li");

item.textContent =
nombre + " - S/ " + precio;

lista.appendChild(item);

total += precio;

document.getElementById("total")
.textContent =
"Total: S/ " + total;

}
document
.getElementById("generarTicket")
.addEventListener("click", () => {

const nombre =
document.getElementById("nombre").value;

const grado =
document.getElementById("grado").value;

const pelicula =
document.getElementById("pelicula").value;

if(nombre===""){
alert("Ingresa tu nombre.");
return;
}

if(grado===""){
alert("Selecciona tu grado.");
return;
}

if(asientoElegido===""){
alert("Selecciona un asiento.");
return;
}

document.getElementById(
"ticketFinal"
).innerHTML = `

<h3>🎬 MIRA Y APRENDE</h3>

<p><strong>Nombre:</strong> ${nombre}</p>

<p><strong>Grupo:</strong> ${grado}</p>

<p><strong>Película:</strong> ${pelicula}</p>

<p><strong>Asiento:</strong> ${asientoElegido}</p>

<p><strong>Entrada:</strong> 8 Botellas</p>

<p><strong>Total Combos:</strong> S/ ${total}</p>

`;

});
