import { Link } from 'react-router-dom'
import ItemCount from "../Contador/ItemCount";
import { useState, useContext } from 'react';
import { CartContext } from '../../context/cartContext';

export const ItemDetail = ({ productList }) => {
  const {addToCart} = useContext(CartContext);
  const [contador, setContador] = useState(1)

  function onAdd(productList) {
    addToCart(productList, contador)
  }

  return (
    <>
    <Link to='/'>Volver</Link>
      <img src={productList.image} alt={productList.title} />
      <h2>{productList.title}</h2>
      <div>
        <p>Contiene alcohol ?{productList.alcohol}</p>
        <p>{productList.price}</p>
        <ItemCount stock={3} contador={contador} setContador={setContador}/>
      </div>
      <div>
        <button onClick={()=> onAdd(productList)} >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemDetail;
