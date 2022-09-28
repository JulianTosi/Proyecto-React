import Item from "../Item/Item";
import { Link } from 'react-router-dom'

const ItemList = ({ lista }) => {


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
    </div>
  );
}


export default ItemList