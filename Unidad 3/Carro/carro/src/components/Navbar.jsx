export default function Navbar( { FuncionCambiarEstado }){
    return <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Carro de Compras</a>
                <div className="d-flex">
                    <button onClick={ () => FuncionCambiarEstado() }
                    className="btn btn-outline-danger" type="submit"><i className="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </nav>
}

//export default Navbar