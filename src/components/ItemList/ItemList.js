import Item from "../Item/Item";
import { Link } from 'react-router-dom'

const ItemList = ({ lista }) => {

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
        </>
      ))}
      <Link
        to={'/cart'}>
        <button onClick={countClick} >Ir al carrito</button>
      </Link>
    </div>
  );
}


export default ItemList