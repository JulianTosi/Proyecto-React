import data from '../../components/detailsData'
import { useEffect, useState } from "react";
import './listaDetailsContainer.css'
import ItemDetail from '../../components/ItemDetail/ItemDetail' 
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = (props) => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts.then((response) => {
       setProductList(response) 
    })
  }, [id]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  
  return (
    <div>
      {productList && <ItemDetail productList={productList}/>}
    </div>
  );
};

export default ItemDetailContainer;
