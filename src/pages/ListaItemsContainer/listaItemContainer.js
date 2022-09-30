import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList"
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";


export const ListaItemContainer = () => {
  const [detailList, setDetailList] = useState([]);
  const { categoryName } = useParams();

  const countClick = () => {

  }

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'items');
    if(categoryName){
      const queryfilter = query(querySnapshot, where("categoryId", "==", categoryName))
      getDocs(queryfilter).then(res => {
        const data = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setDetailList(data);
      });
    }else{
      getDocs(querySnapshot).then(res => {
        const data = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setDetailList(data);
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryName])


  return (
    <div>
      <ul >
        <ItemList lista={detailList} />
      </ul>
      <Link
        to={'/carrito'}>
        <button onClick={countClick} >Ir al carrito</button>
      </Link>
    </div>
  );
};



export default ListaItemContainer