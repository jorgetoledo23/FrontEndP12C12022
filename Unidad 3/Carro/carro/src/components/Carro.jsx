import CarroItem from "./CarroItem"

export default function Carro( { Visible, FuncionCambiarEstado, ItemsCarro }){
    
    console.log(ItemsCarro)


    const CarroStyles = {
        width : Visible ? '100%' : '0px',
        height : '100%',
        backgroundColor : 'white',
        fontSize : '1rem',
        zIndex : '99',
        position : 'fixed',
        top : '0px',
        right : '0px',
        transition : '0.5s'
    }

    const CloseBtnStyles = {
        position : 'absolute',
        top : '0px',
        right : '20px',
        fontSize : '2rem',
        display : Visible ? 'block' : 'none',
    }

    const ItemsCarroStyles = {
        display : Visible ? 'block' : 'none'
    }
    
    return <div style={ CarroStyles }>
        <div className="text-center">
            <div style={ ItemsCarroStyles } >
                <span onClick={ () => FuncionCambiarEstado() } style={ CloseBtnStyles }><i className="fa-solid fa-xmark"></i></span>
                <h2>Carro de Compras</h2>

                {ItemsCarro.map(item => <CarroItem Item={item} key={ item.Producto.Id }/>) }

            </div>
            

        </div>
        
    </div>
}