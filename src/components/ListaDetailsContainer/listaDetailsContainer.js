import data from '../detailsData'
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './listaDetailsContainer.css'


export const ItemDetailContainer = (props) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts.then((response) => {
       setProductList(response) 
    })
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  return (
    <div>
      <ul className="lista">
        <li>{props.titulo}</li>
        <li>{props.numero}</li>
        <ItemDetail lista={productList}/>
      </ul>
    </div>
  );
};

export default ItemDetailContainer;
