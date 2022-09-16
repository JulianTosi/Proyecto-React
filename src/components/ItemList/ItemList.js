import Item from "../Item/Item";
import { Link } from 'react-router-dom'

const ItemList = ({ lista }) => {
  return (
    <div>
      {lista.map((product) => (
        <Link
        key={product.id}
        to={'/tecnologia/' + product.id }
        >
          <Item
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
