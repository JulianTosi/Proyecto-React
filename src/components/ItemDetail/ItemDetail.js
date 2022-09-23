import { Link } from 'react-router-dom'
import ItemCount from "../Contador/ItemCount";
import { useState } from 'react';

export const ItemDetail = ({ lista }) => {
  
  const [contador, setContador] = useState(0);

  return (
    <>
    <img src={lista.image} alt={lista.title}/>
    <h2>{lista.title}</h2>
    <div>
      <p>Contiene alcohol ?{lista.alcohol}</p>
      <p>{lista.price}</p>
      <ItemCount setContador={setContador} contador={contador} />
    </div>
    </>
  );
};

export default ItemDetail;
