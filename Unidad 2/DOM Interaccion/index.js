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
    div.style.height = "300px"

    const h3 = document.createElement("h3");
    h3.innerHTML = element.Name

    const p = document.createElement("p")
    p.innerHTML = element.Abreviacion
    p.className = "fst-italic"

    div.appendChild(h3)
    div.appendChild(p)

    root.appendChild(div)
}