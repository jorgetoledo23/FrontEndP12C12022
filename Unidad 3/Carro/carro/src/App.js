import './App.css';
import Navbar from './components/Navbar';
import Producto from './components/Producto';
import Productos from './data.json';
import Carro from './components/Carro'
import React from 'react'

function App() {

  //Hooks => useState
  const [Mostrado, setMostrado] = React.useState(false)
  const [Total, setTotal] = React.useState(0)
  const [ItemsCarro, setItemsCarro] = React.useState([])

  const CambiarMostrado = () => {
    setMostrado(!Mostrado) //!true = false  !false = true
  }

  const AddToCart = (P) =>{
    const newItem = {Producto : P, Cantidad : 1, SubTotal: P.Precio}
    const nuevoArray = [...ItemsCarro, newItem]
    setItemsCarro(nuevoArray)
  }

  return (
    <div>
      <Navbar FuncionCambiarEstado={ CambiarMostrado } />
      <Carro Visible={Mostrado} FuncionCambiarEstado={ CambiarMostrado } ItemsCarro={ ItemsCarro } />
      <div className='row justify-content-evenly'>
            { Productos.map(p => <Producto Producto={p}  key={p.Id} AddToCart={ AddToCart }/>) }
      </div>
    </div>
  );
}

export default App;
