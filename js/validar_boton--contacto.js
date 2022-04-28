function habilitar(){
    const text = document.getElementById("mensaje");
    const nombre = document.getElementById("nombre");
    const boton = document.getElementById("boton");
    let valor = 0;

    if (text.value.length == 0 || /^\s*$/.test(text.value)  || nombre.value.length == 0 || /^\s*$/.test(nombre.value)){
        valor++;
    }

    if(valor == 0){
        document.getElementById("boton").disabled = false;
        boton.classList.add("boton__enabled");
        boton.classList.remove("boton__disabled");
        console.log("El boton esta habilitado");
    }else{
        document.getElementById("boton").disabled = true;
        boton.classList.add("boton__disabled");
        boton.classList.remove("boton__enabled");
        console.log("El boton esta deshabilitado");
    }
}

document.getElementById("mensaje").addEventListener("keyup", habilitar);
document.getElementById("boton").addEventListener("click", ()=>{
    console.log("Formulario completo");
    boton.classList.add("boton__disabled");
})