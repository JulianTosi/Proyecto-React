import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext"


export const Carrito = () => {
    const {cart, removeItem, clear} = useContext(CartContext);

    return (
    <div>
        <h1>Carrito</h1>
        {cart.length === 0 ? (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to={'/'} >Volver a comprar</Link>
            </>
        ) : (<>
            {cart.map((item) => (
            <div
                key={item.id}
            >
                <img src={item.image} alt={item.title}/>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
            </div>
        ))}</>)}
        <button onClick={() => clear}>Vaciar carrito</button>
    </div>
    );
}
