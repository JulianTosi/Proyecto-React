import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../components/detailsData.js"
import ItemList from "../../components/ItemList/ItemList"


export const ListaItemContainer = () => {
  const [detailList, setDetailList] = useState([]);

  const countClick = () => {

  }

  const getDetails = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getDetails.then((response) => {
       setDetailList(response) 
    })
  }, []);


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
      <Link
        to={'/carrito'}>
        <button onClick={countClick} >Ir al carrito</button>
      </Link>
    </div>
  );
};



export default ListaItemContainer