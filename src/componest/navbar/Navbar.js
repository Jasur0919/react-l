import React from 'react'
import './Navbar.css'
import miCom from '../../assents/images/mi-com.png'
import headerSearch from '../../assents/images/search-header.png'
import headerUser from '../../assents/images/avatar-header.png'

 function Navbar() {
  return (
    <header>
        <div className="container">
            <div className="header_box">
                <div className="header_box_brend">
                <img className='header_micom' src={miCom} alt="" />
                <a className='header_a' href="Phone">Phone</a>
                <a className='header_a' href="Smart">Smart Home</a>
                <a className='header_a' href="Life">Life Style</a>
                </div>
                <div className="header_box_name">
                    <a className='header_a' href="discover">Discover</a>
                    <a className='header_a' href="support">Support</a>
                    <img src={headerSearch} alt="" />
                    <img src={headerUser} alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
