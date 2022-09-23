import './ItemCount.css'

function ItemCount({ stock, contador, setContador }) {

    const aumentar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };
    const disminuir = () => {
        if (contador > 0) {
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

        </div>
    );
}

export default ItemCount