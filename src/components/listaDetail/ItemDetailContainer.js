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

  return (
    <div>
      <ul >
        <ItemDetail lista={detailList}/>
      </ul>
    </div>
  );
};

export default ItemDetailContainer