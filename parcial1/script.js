const boton = document.getElementById("btn-enviar");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form-contacto");


boton.addEventListener("click", function () {

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  mensaje.textContent = "Gracias por contactar a AXON. Tu consulta fue enviada a Jared Aguirre Rosas :)";
  mensaje.classList.remove("oculto");
});