var CLFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

export default function Producto( { Producto, AddToCart }){
    //console.log(props)
    return <div className="card m-2 p-2 col-md-3">
        <div className="card-body text-center">
            <p><strong>{ Producto.Descripcion }</strong></p>
            <img height='200' width='200' src={Producto.UrlImagen} alt="Imagen" />
            <p>Precio: <strong>{CLFormat.format(Producto.Precio)}</strong></p>
            <p>Stock: <strong>{Producto.Stock}</strong></p>
            <button onClick={ () => AddToCart(Producto) } className="btn btn-success">Add To Cart</button>
        </div>
    </div>
}