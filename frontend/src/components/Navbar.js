import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from './ContextReducer';
import MyCart from '../screens/MyCart';

const Navbar = (props) => {

    const [cartView, setCartView] = useState(false)
    localStorage.setItem('temp', "first")
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken')

        navigate("/login")
    }
    const loadCart = () => {
        setCartView(true)
    }




    const items = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "black" }}>
                <div className="container-fluid">
                    <img src={process.env.PUBLIC_URL + "/images/logo1.png"} alt="mainlogo" style={{ height: "70px", width: "170px", marginLeft: "30px" }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-8">
                            <li className="nav-item">
                                <Link className="nav-link text-white active" aria-current="page" to="/">Home</Link>
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item" style={{ width: '100px' }}>
                                    <Link className="nav-link text-white active" aria-current="page" to="/">My Orders</Link>
                                </li>
                                : ""}
                        </ul>
                        {(!localStorage.getItem("token")) ?
                            <form className="d-flex">
                                <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
                            </form> :
                            <div>

                                <div className="btn bg-white text-success mx-2 " onClick={loadCart}>
                                    <ShoppingCartIcon />
                                    My Cart
                                    <Badge color="secondary" badgeContent={items.length} style={{ paddingLeft: '15px' }}>

                                    </Badge>
                                </div>

                                {/*{cartView ? <a href="/mycart"><MyCart></MyCart></a> : ""}*/}
                                {cartView ? <div id='cart-root'><MyCart></MyCart></div> : ""}
                                <button onClick={handleLogout} className="btn bg-white text-success" >Logout</button></div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar