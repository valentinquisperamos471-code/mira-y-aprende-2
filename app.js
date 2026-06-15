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
alert("Selecciona tu grado o grupo.");
return;
}

if(asientoElegido===""){
alert("Selecciona un asiento.");
return;
}

const numeroTicket =
Math.floor(Math.random()*9000)+1000;

const fecha =
new Date().toLocaleDateString("es-PE");

const hora =
new Date().toLocaleTimeString("es-PE");

document.getElementById("ticketFinal").innerHTML = `

<div class="ticket-header">

<h3>🎬 MIRA Y APRENDE</h3>

<p>Cine Reciclable Escolar</p>

</div>

<div class="ticket-info">
🎟 Ticket N° ${numeroTicket}
</div>

<div class="ticket-info">
👤 ${nombre}
</div>

<div class="ticket-info">
🎓 ${grado}
</div>

<div class="ticket-info">
🎬 ${pelicula}
</div>

<div class="ticket-info">
💺 Asiento ${asientoElegido}
</div>

<div class="ticket-info">
♻️ Entrada: 8 Botellas
</div>

<div class="ticket-info">
🥤 Total Combos: S/ ${total}
</div>

<div class="ticket-info">
📅 ${fecha}
</div>

<div class="ticket-info">
🕒 ${hora}
</div>

<div class="ticket-footer">

🏫 Mira y Aprende

<br>

📱 WhatsApp: 955 057 190

<br>

¡Disfruta la función!

</div>

`;

});
