import { useEffect, useState } from "react";
import data from "../detailsData.js"
import ItemList from "../ItemList/ItemList"


export const ListaItemContainer = () => {
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
        <ItemList lista={detailList}/>
      </ul>
    </div>
  );
};



export default ListaItemContainer