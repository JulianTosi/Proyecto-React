import './ItemListaContainer.css'

const ItemListaContainer = (titulo, numero) => {
    return (
        <div>
            <ul>
                <li>{titulo}</li>
                <li>{numero}</li>
            </ul>
        </div>
    )
}

export default ItemListaContainer