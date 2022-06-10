const root = document.getElementById("root");


//Agregar titulo a mi Pagina
const titulo = document.createElement("h1");
titulo.innerHTML = "Front End"
titulo.className = "text-center"

root.appendChild(titulo)


//Subtitulo
const subtitulo = document.createElement("p");
subtitulo.innerHTML = '"Bienvenido al mejor curso del semestre <strong> =) </strong>"'
subtitulo.className = "text-center"
subtitulo.classList.add("fst-italic")

root.appendChild(subtitulo)





let js = {
    Name: "JavaScript",
    Abreviacion: "Js",
    Tipo: "Interpretado",
    Dificultad: "4/5",
    Utilidad: ["Front","Back"]
}
let html = {
    Name: "HyperText Markup Language",
    Abreviacion: "Html",
    Tipo: "Marcado",
    Dificultad: "2/5",
    Utilidad: ["Front"]
}
let react = {
    Name: "React",
    Abreviacion: "React",
    Tipo: "Framework",
    Dificultad: "4/5",
    Utilidad: ["Front","Back"]
}
const lenguajes = [js, html, react]


for (let index = 0; index < lenguajes.length; index++) {
    const element = lenguajes[index];

    const div = document.createElement("div");
    div.className = "card"
    div.classList.add("text-center")
   // div.style.height = "300px"

    const name = document.createElement("h3");
    name.innerHTML = element.Name
    name.classList.add("mt-2")

    const desc = document.createElement("p")
    desc.innerHTML = element.Abreviacion
    desc.className = "fst-italic"

    const tipo = document.createElement("p")
    tipo.innerHTML = "Tipo: " + element.Tipo
    tipo.className = "fst-italic"

    const diff = document.createElement("h4");
    diff.innerHTML = "Dificultad: " + element.Dificultad

    const list = document.createElement("ul");
    list.className = "list-group"

    element.Utilidad.forEach(e => {
        const item = document.createElement("li");
        item.className = "list-group-item"
        item.innerHTML = e
        list.appendChild(item)
    });

    const btn = document.createElement("button");
    btn.className = "btn"
    btn.classList.add("btn-outline-success")
    btn.classList.add("m-2")
    btn.innerHTML = "Test"

    btn.addEventListener("click",function(){
        alert("Se produjo el Event Click")
    })

    div.addEventListener("mouseenter", function(){
        div.classList.add("shadow")
        div.style.backgroundColor = "lightblue"
     })

    div.addEventListener("mouseleave",function(){
        div.classList.remove("shadow")
        div.style.backgroundColor = "white"
    })


    btnBorrar = document.createElement("button")
    btnBorrar.className = "btn"
    btnBorrar.classList.add("btn-danger")
    btnBorrar.classList.add("m-2")
    btnBorrar.innerHTML = "Borrar"


    //$100
    //parseInt(btnBorrar.innerHTML) + 1

    btnBorrar.addEventListener("click", function(e){
        root.removeChild(div)
        console.log(e.target)
    })


    div.appendChild(name)
    div.appendChild(desc)
    div.appendChild(tipo)
    div.appendChild(diff)
    div.appendChild(list)
    div.appendChild(btn)
    div.appendChild(btnBorrar)

    root.appendChild(div)
}