import "./App.css"
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./router/AppRouter"
import CartContextComponent from "./context/CartContext"

const App= () => {

  return (


    <BrowserRouter>
      <CartContextComponent>
        <AppRouter/>
      </CartContextComponent>
    </BrowserRouter>              
    
  )
}

export default App
