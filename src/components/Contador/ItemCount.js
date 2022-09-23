import './ItemCount.css'
import {useState} from 'react';

function ItemCount({ stock, inicial, onAdd }) {
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

            <div>
            <button onClick={aumentar}>Aumentar</button>
            <p> contador:{contador} </p>
            <button onClick={disminuir}>Disminuir</button>
            </div>

            <div>
                <button onClick={() => onAdd(contador)}>
                    Agregar al carrito
                </button>
            </div>

        </div>
    );
}

export default ItemCount