import './ItemCount.css'

function ItemCount({ setContador, contador }) {
    const aumentar = () => {
        setContador(contador + 1);
    };

    const disminuir = () => {
        if (contador === 0) {
            return;
        }
        setContador(contador - 1);
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