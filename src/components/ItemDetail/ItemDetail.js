import Item from "../Item/Item";
import { Link } from 'react-router-dom'
import ItemCount from "../Contador/ItemCount";
import { useState } from 'react';

const ItemDetail = ({ lista }) => {

  const [contador, setContador] = useState(0);

  const countClick = () => {

  }

  return (
    <div className="tarjetaProd">
      {lista.map((product) => (
        <>
          <Link
            key={product.id}
            to={'/bebidas/' + product.id}
          >Comprar!
          </Link>
          <Item
            title={product.title}
            price={product.price}
            image={product.image}
          />
          <ItemCount setContador={setContador} contador={contador} />
        </>
      ))}
      <Link
        to={'/cart'}>
        <button onClick={countClick} >Ir al carrito</button>
      </Link>
    </div>
  );
}


export default ItemDetail