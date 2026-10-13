const boton = document.getElementById("btn-enviar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  mensaje.textContent = "Gracias por contactar a AXON. Tu consulta fue enviada a Jared Aguirre Rosas :)";
  mensaje.classList.remove("oculto");
});