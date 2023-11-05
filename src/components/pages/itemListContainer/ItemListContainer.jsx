import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import ItemList from "./ItemList";
import {getDocs, collection, query, where} from "firebase/firestore"
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const {categoryId}=useParams()

  useEffect(() => {
    let productsCollection = collection(db, "products")
    let consulta = undefined
    
    if(!categoryId){
      consulta=productsCollection
    }else{
      consulta =query(
        productsCollection,
        where("category", "==", categoryId)
      )
    }

    getDocs(consulta).then((res)=>{
      let newArray=res.docs.map(product=>{
        return {id:product.id, ...product.data()}
      })
      setItems(newArray)
    })

  }, [categoryId]);

  return(
    <>
      {items.length===0 ? <BeatLoader size={40} color="purple" cssOverride={{display:"flex", justifyContent:"center", margin:"200px", height: "calc(100vh - 300px - 125px)"}}/> : <ItemList items={items}  />}
    </>
  )
};

export default ItemListContainer;