import CartWidget from "../../common/CartWidget/CartWidget"
import image from "./logo.png"
import "./NavBar.css"
import { Link} from "react-router-dom"
//import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <header>
      <nav className="NavBar">
            <Link to="/">
              <img src={image} alt="logo" />
            </Link>
          <ul>
              <Link to="/" className="li" >Home</Link>
              <Link to="/category/poleras" className="li" >Poleras</Link>
              <Link to="/category/casacas" className="li" >Casacas</Link>
              <Link to="/category/vestidos" className="li" >Vestidos</Link>
              <Link to="/category/pantalones" className="li" >Pantalones</Link>
          </ul>
          <CartWidget/>
      </nav>
      </header>
    )
  }
  
  export default NavBar