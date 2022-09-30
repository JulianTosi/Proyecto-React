import './NavBar.css'
import CartWidget from '../Carrito/CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className="propNav">
                <CartWidget/>
                <ul className="listaNav">
                    <li>
                    <Link to={'/'}>Inicio</Link>
                    </li>
                    <li>
                    <Link to={'categoria/gaseosa'}>Gaseosa</Link>
                    </li>
                    <li>
                    <Link to={'categoria/alcohol'}>Alcohol</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
