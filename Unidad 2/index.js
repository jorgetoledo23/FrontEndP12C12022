document.getElementById("titulo").innerHTML = "JavaScript"
const h2 = document.createElement("h2");
h2.innerHTML = "Subtitulo"

function addH2(){
    document.getElementById("contenedor").appendChild(h2)
}

function ocultarElemento(){
    document.getElementById("contenedor").style.display = "none";
}
function mostrarElemento(){
    document.getElementById("contenedor").style.display = "block";
}

function toggleElemento(){
    const contenedor = document.getElementById("contenedor");
    const display = contenedor.style.display
    if(display == "block"){
        contenedor.style.display = "none";
    }else{
        contenedor.style.display = "block";
    }
}



