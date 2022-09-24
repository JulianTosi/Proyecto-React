import {useState} from 'react';
import { CartContext } from '../context/cartContext';

export const CartProvider = ({ children }) => {
    const [cart , setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert('ya esta en el carrito')
        } else {
            setCart([...cart, {...item, ...cantidad}]);
        }
    };
    const isInCart = (id) => {
        return cart.some ((item) => item.id === id);
    };
    const clear  = () => {
        setCart([]);
    }

    const removeItem = (id) => {

    }

    return ( 
        <CartContext.Provider value={{ cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}