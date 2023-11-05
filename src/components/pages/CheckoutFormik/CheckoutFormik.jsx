import { Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import { useContext, useState } from "react"
import * as Yup from "yup"
import {addDoc, doc, serverTimestamp, updateDoc} from "firebase/firestore"
import { CartContext } from "../../../context/CartContext"
import { db } from "../../../firebaseConfig"
import { collection } from "firebase/firestore"


const CheckoutFormik = () => {

    const [orderId, setOrderId]= useState(null)

    const {cart, getTotalPrice, clearCart}=useContext(CartContext)
    const total= getTotalPrice()

    const {handleChange, handleSubmit, errors} =useFormik({
        initialValues: {nombre: "", apellido:"", email:"", repeatEmail:""},
        onSubmit:(data) =>{
            let buyer=(data)
            let order ={
              buyer,
              items: cart,
              total,
              date: serverTimestamp()
              
            }
            const ordersCollection = collection(db, "orders")

            addDoc(ordersCollection, order).then((res)=>setOrderId(res.id))

            cart.forEach((elemento)=>{
              updateDoc(doc(db, "products", elemento.id), {stock:elemento.stock - elemento.quantity})
            })
            clearCart()
        },

        validateOnChange:false,

        validationSchema:Yup.object({
            nombre: Yup.string()
                .required("El campo es obligatorio")
                .min(5, "debe terner al menos 5 caracteres")
                .max(20, "no debe superar los 20 caracteres"),
            apellido: Yup.string().required("El campo es obligatorio"),
            email: Yup.string()
                .email("El mail no parece valido debe contener @")
                .required("El campo es obligatorio"),
            repeatEmail: Yup.string()
                .required("El campo es obligatorio")
                .oneOf([Yup.ref("email")], "Las contraseñas no coinciden")
        }),

        
    })

  return (
    <>
      {orderId ? (
        <h1 style={{padding:"20px", marginTop:"90px", textAlign:"center"}}>Gracias por su compra, su N° de comprobante es {orderId}</h1>
      ):(
        <div style={{padding:"50px", marginTop:"90px"}}>
          <h1 style={{padding:"10px", textAlign:"center"}}>Llene sus datos para completar su compra</h1>
        <form onSubmit={handleSubmit} >
            <div style={{display:"flex", justifyContent:"space-around"}}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />

        <TextField
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />

        <TextField
          label="Repetir email"
          variant="outlined"
          name="repeatEmail"
          onChange={handleChange}
          error={errors.repeatEmail ? true : false}
          helperText={errors.repeatEmail}
        />

        </div>
       <div style={{margin:"20px", display:"flex", justifyContent:"space-around"}}>
        <Button variant= "contained" color="secondary" type="submit">Enviar</Button>
        <Button variant= "outlined" color="secondary" type="button">Cancelar</Button>
        </div>
        </form>
    </div>
      )}
    </>
  )
}

export default CheckoutFormik