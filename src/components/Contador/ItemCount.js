import './ItemCount.css'
import {useState} from 'react';

function ItemCount({ stock, inicial, onAdd, precio }) {
    const [setContador, contador] = useState(inicial)

    const aumentar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };
    const disminuir = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    };

    return (
        <div className='Contador'>
            <p>
                contador:{contador}
            </p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    );
}

export default ItemCount