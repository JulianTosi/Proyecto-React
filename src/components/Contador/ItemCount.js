import './ItemCount.css'
import {useState} from 'react';


const ItemCount = () => {

    const [contador, setContador] = useState (0);
    const stock = (20);

    const aumentar = ( ) => {
        setContador (contador + 1)
    }

    const disminuir = ( ) => {
        setContador (contador - 1)
    }

  return (
    <div className='Contador'>
        <p>
            Contador: { contador }
        </p>
        <button onClick={aumentar} placeholder='Aumentar'>Aumentar</button>
        <button onClick={disminuir} placeholder='Disminuir'>Disminuir</button>
    </div>
  );
};

export default ItemCount