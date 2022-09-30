import { useEffect, useState } from "react";
import "./listaDetailsContainer.css";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  const db = getFirestore();

  const queryDoc = doc(db, "items", id);
  getDoc(queryDoc)
    .then((res) => {
      setProductList({ id: res.id, ...res.data()});
    })
    .catch(err => console.log(err))

  const getProducts = () => {
    const queryDoc = doc(db, "items", id);

    getDoc(queryDoc)
    .then((res) => {
      setProductList(res.data())
    })
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return <div>{productList && <ItemDetail productList={productList} />}</div>;
};

export default ItemDetailContainer;
