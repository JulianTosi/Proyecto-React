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
        let nuevaLista = [];
        cart.forEach((product) => {
            if (product.id !== id) {
                nuevaLista.push(product)
            }
        });
        setCart(nuevaLista)

    }

    return ( 
        <CartContext.Provider value={{ cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}