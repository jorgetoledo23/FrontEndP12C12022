/* const root = document.getElementById("root")

//Programacion Imperativa 
//Decir que hacer y como hacerlo paso a paso
const titulo = document.createElement("h2")
titulo.innerHTML = "Producto 1"
titulo.className = "card-title"

root.appendChild(titulo)

//Programacion Declarativa
const tituloReact = <h2 className="card-title">Producto 1</h2>
ReactDOM.render(tituloReact,root)

//1 - Composable
//2 - Declarativo

*/

function Navbar(){
    return (
        <nav>
            <ul>
                <li>Index</li>
                <li>Contact</li>
                <li>Privacy</li>
            </ul>
        </nav>
        )
    }

const RootElement = document.getElementById("root");

ReactDOM.render(
    <div>
        <Navbar />
    </div>
    , RootElement)