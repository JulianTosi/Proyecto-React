import ItemCount from '../Contador/ItemCount'
import './ItemListaContainer.css'

const ItemListaContainer = (props) => {
    return (
        <div>
            <ul className='lista'>
                <li>{props.titulo}</li>
                <li>{props.numero}</li>
                <ItemCount/>
            </ul>
        </div>
    )
}

export default ItemListaContainer