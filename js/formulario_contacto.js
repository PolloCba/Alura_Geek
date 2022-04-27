/*const nombre = document.getElementById("nombre");
const text = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    parrafo.innerHTML = "";
    if(nombre.value == " " || nombre.value.length == 0 || nombre.value.length >= 40){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }
    if(text.value == " " || text.value.length == 0 || text.value.length > 120){
        warnings += `El texto no es valido <br>`;
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
    }
});

document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('form');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });*/

  const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const formulario = document.getElementById("formulario");
  const input = document.getElementById("nombre");
  const textarea = document.getElementById("mensaje");
  const parrafo = document.getElementById("warnings");

  const validarFormulario = (evento)=>{
      switch (evento.target.name){
          case "nombre":
             if (expresiones.nombre.test(evento.target.value)){
                console.log("El nombre es correcto");
             }else {
                console.log("El nombre no es correcto");
             }
          break;
      }
  }

  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);

  formulario.addEventListener("submit", (evento)=>{
      evento.preventDefault();
  });