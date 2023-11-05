import { useState } from "react"

const Checkout = () => {

    const [userInfo, setUserInfo]=useState({
        nombre: "",
        apellido: "",
        email: "",
    })

    const handleChange=(e)=>{
        setUserInfo({...userInfo, [e.target.name]:e.target.value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(userInfo)
    }
  return (
    <div>
        <h1>
            Estoy en el checkout
        </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" onChange={handleChange} />
            <input type="text" name="apellido" onChange={handleChange} />
            <input type="text" name="email" onChange={handleChange} />
            <button type= "submit" >Enviar</button>
        </form>
    </div>
  )
}

export default Checkout