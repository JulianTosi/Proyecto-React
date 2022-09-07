import './ItemCount.css'
import {useState} from 'react';



const ItemCount = () => {

    const [contador, setContador] = useState (0);

    const aumentar = ( ) => {
        setContador (contador + 1)
    }

    const disminuir = ( ) => {
        setContador (contador - 1)
    }

  return (
    <view className='Contador'>
        <text>
            Contador: { contador }
        </text>
        <button onClick={aumentar} placeholder='Aumentar'>Aumentar</button>
        <button onClick={disminuir} placeholder='Disminuir'>Disminuir</button>
    </view>
  );
};

export default ItemCount