const nombre = document.getElementById("nombre");
const text = document.getElementById("mensaje");
const form = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    parrafo.innerHTML = "";
    if(nombre.value == null || nombre.value.length == 0 || nombre.value.length >= 40 || /^\s*$/.test(nombre.value)){
        warnings += `El nombre no es valido, no puede quedar en blanco, maximo 40 caracteres <br><br>`;
        entrar = true;
    }
    if(text.value == null || text.value.length == 0 || text.value.length > 120 || /^\s*$/.test(text.value)){
        warnings += `El texto no es valido, no puede quedar en blanco, maximo 120 caracteres`;
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
    }
});

document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(){
      formulario.reset();
    });
  });

