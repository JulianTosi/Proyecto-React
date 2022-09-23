import data from '../detailsData'
import { useEffect, useState } from "react";
import './listaDetailsContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail' 


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

  console.log(ItemDetail)

  return (
    <div>
      <ul className="lista">
        <li>{props.titulo}</li>
        <li>{props.numero}</li>
      </ul>
    </div>
  );
};

export default ItemDetailContainer;
