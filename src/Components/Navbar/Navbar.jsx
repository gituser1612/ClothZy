import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/shopping_logo.png"
import cart_icon from "../../assets/cart.svg"
import { Link } from 'react-router-dom'
import login_icon from '../../assets/login_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const[menu,setMenu] = useState("home");
    const [menuOpen,setMenuOpen] = useState(false);
    const{getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" height="10px" />
            <h3>ClothZy</h3> 
        </div>
        <ul className={`nav-menu ${menuOpen?"open":""}`}>
            <li onClick={()=>{setMenu("home");setMenuOpen(false);}}>
                <Link style={{textDecoration:"none",color: "#333333ff"}} to="/">Home</Link>
                {menu === "home" && <hr/>}
                </li>
            <li onClick={()=>{setMenu("mens");setMenuOpen(false);}}>
                <Link style={{textDecoration:"none",color: "#333333ff"}} to="/mens">Mens</Link>{menu==="mens" && <hr/>}</li>
            <li onClick={()=>{setMenu("womens");setMenuOpen(false);}}>
                <Link style={{textDecoration:"none",color: "#333333ff"}} to="/womens">Women</Link>{menu==="womens" && <hr/>}</li>
            <li onClick={()=>{setMenu("kids");setMenuOpen(false);}}>
                <Link style={{textDecoration:"none",color: "#333333ff"}} to="/kids">Kids</Link>{menu==="kids" && <hr/>}</li>
             
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><img src={login_icon} alt="" height="30px"/></Link>
            <Link to="/cart"><img src={cart_icon} alt="" height= "30px"/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        <div className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen?"✖":"☰"}
        </div>
    </div>
  )


}

export default Navbar



