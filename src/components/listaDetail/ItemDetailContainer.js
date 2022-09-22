import { useEffect, useState } from "react";
import data from "../detailsData.js"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const [detailList, setDetailList] = useState([]);

  useEffect(() => {
    getDetails.then((response) => {
       setDetailList(response) 
    })
  }, []);

  const getDetails = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });


  const tieneAlcohol = (data) => data.filter((bebida) => bebida.alcohol === 'true')

  const sinAlcohol = (data) => data.filter((bebida) => bebida.alcohol !== 'true')

  const filtroAlcohol = ()=>{
    return tieneAlcohol
  }

  const filtroGaseosa = ()=>{
    return sinAlcohol
  }
  
  return (
    <div>
      <ul >
        <button
          onClick={() => filtroAlcohol}>Alcohol</button>
        <button
          onClick={() => filtroGaseosa}>Gaseosa</button>
        <ItemDetail lista={detailList}/>
      </ul>
    </div>
  );
};



export default ItemDetailContainer