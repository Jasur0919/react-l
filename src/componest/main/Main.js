import React from 'react'
import './Main.css'
import phoneS from '../../assents/images/hero-phone.webp'

 function Main() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero_box">
            <div className="hero_nformationi">
              <h1 className='hero_phone_name'>xiaomi Pad 6S Pro <h5 className='hero_phone_name_size'>12.4</h5></h1>
              <h3 className='hero_size'>Gig ideas on bigger screen</h3>
              <p className='hero_phone_style'>12.4 " 144Hz 3K crystal-clear display </p>
              <button className='hero_btn'>Leaen more</button>
            </div>
            <div className="hero_img">
              <img src={phoneS} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="product">
        <div className="container">
          <div className="product_box">
            <h1 className='product_name_h1'>Featured Products</h1>
            <div className="product_style_path">
              <p className='product_style_h4'>Stay on Trend</p>
              <p className='product_style_h4'>Latest Flagship</p>
              <p className='product_style_h4'>Enjoy the Outdoors</p>
              <p className='product_style_h4'>Gaming Essentials</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
