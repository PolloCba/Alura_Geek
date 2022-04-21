const nombre = document.getElementById("nombre");
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
