import { Link } from 'react-router-dom'
import ItemCount from "../Contador/ItemCount";
import { useState, useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import Detail from '../Detail/Detail';


export const ItemDetail = ({ productList }) => {
  const { addToCart } = useContext(CartContext);
  const [contador, setContador] = useState(1)

  function onAdd(productList) {
    addToCart(productList, contador)
  }

  return (
    <>
      <Link to='/'>Volver</Link>

      <Detail
        title={productList.title}
        price={productList.price}
        image={productList.image}
        alcohol={productList.alcohol} 
      />
      <ItemCount stock={3} contador={contador} setContador={setContador} />
      <div>
        <button onClick={() => onAdd(productList)} >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemDetail;
