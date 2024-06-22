import React from 'react'
import { Link } from 'react-router-dom'
import menu from '../assets/images/menu_48dp_FILL0_wght400_GRAD0_opsz48.svg'

const Navbar = () => {
  return (
    <nav>
            <div className="title"><Link to="/"><h1>Listing</h1></Link></div>

            <div className="navigation">
                <ul>
                    <li><Link className='navigate' to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/products">Products</Link></li>   
                    <li><button className="menu-icon"><img src={menu} alt="" /></button></li>
                </ul>
            </div>

            <div className="line"></div>
    </nav>
  )
}

export default Navbar
