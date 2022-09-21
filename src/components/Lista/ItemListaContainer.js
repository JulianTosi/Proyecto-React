import "./ItemListaContainer.css";
import data from "../mockData";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListaContainer = (props) => {
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
        <ItemList lista={productList}/>
      </ul>
    </div>
  );
};

export default ItemListaContainer;
