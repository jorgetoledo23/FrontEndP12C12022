var CLFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

export default function CarroItem({ Item }){

    const BtnBorrar = {
        position : 'absolute',
        top : '10px',
        right : '20px',
        fontSize : '1.5rem'
    }

    return <div className="row justify-content-center m-2">
        <div className=" col-md-8 card shadow position-relative">
        <div className="row m-2 p-2 ">
            <div className="col-4">
                <img width='150' height='150'
                alt="Imagen" src={ Item.Producto.UrlImagen } />
            </div>
            <div className="col-8">
                <p><strong>{Item.Producto.Descripcion}</strong></p>
                <p>Precio Unitario: <strong>{CLFormat.format(Item.Producto.Precio)}</strong> </p>
                <p>Cantidad: <strong>{Item.Cantidad}</strong></p>
                <p>SubTotal: <strong>{CLFormat.format(Item.SubTotal)}</strong> </p>
            </div>
            
        </div>
        <span style={ BtnBorrar }><i className="fa fa-solid fa-trash"></i></span>
        </div>
        
    </div>
}