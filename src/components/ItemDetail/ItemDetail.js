import Item from "../Item/Item";
import { Link } from 'react-router-dom'

const ItemDetail = ({ lista }) => {
    return (
        <div>
          {lista.map((product) => (
            <Link
              key={product.id}
              to={'/bebidas/' + product.id }
              >
              <Item
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </Link>
          ))}
        </div>
      );
}


export default ItemDetail