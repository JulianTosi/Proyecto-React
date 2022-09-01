import './NavBar.css'
import CartWidget from '../Carrito/CartWidget';

const NavBar = () => {
    return (
        <div>
            <div className="propNav">
                <CartWidget/>
                <ul className="listaNav">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
