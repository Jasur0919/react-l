import React from 'react'
import './Main.css'
import phoneS from '../../assents/images/hero-phone.webp'
import Redmi13 from '../../assents/images/phone_product.webp'
import Logochild from '../../assents/images/child-phone-product.webp'
import Watchredmi from '../../assents/images/wath-logo.webp'
import Prologo from '../../assents/images/pro-logo.webp'
import Redmipro from '../../assents/images/33pro-logo.webp'

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

          <div className="product_cards">
            <div className="product_section">
            <img src={Redmi13} alt="" />
              <div className="product_section_text">
                <h2 className='product_h2'>Redmi Note <span className='product_span'>13</span> <h4 className='product_h4'>Pro + </h4> <p className='product_p'>5G</p></h2>
                <p>Xiaomi Fan Festival Special Edition</p>
                <h4 className='product_text_h4'>Limited availability | Mystic Silver</h4>
                <button className='product_btn'>Learn more</button>
              </div>
            </div>
          </div>

          <div className="logo_card">
            <div className="logo_card_child">
              <img src={Logochild} alt="" />
              <h3>Redmi Note 13 5G</h3>
              <p>Super-clear 108MP triple camera</p>
              <button>Learn more</button>
            </div>
            <div className="logo_card_child">
              <img src={Watchredmi} alt="" />
              <h3>Redmi Watch 4</h3>
              <p>Ultra-large 1.97 " AMOLED display</p>
              <button>Learn more</button>
            </div>
            <div className="logo_card_child">
              <img src={Prologo} alt="" />
              <h3>Redmi Buds  5 Pro </h3>
              <p>High-resolution, HI-FI sound quality </p>
              <button>Learn more</button>
            </div>
            <div className="logo_card_child">
              <img src={Redmipro} alt="" />
              <h3>Redmi Buds 5</h3>
              <p>Al noise reduction for calls</p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </section>

      <section className="xiaomi">
        <div className="container">
          <div className="xiaomi_box">
            <div className="xiaomi_card"> 
            
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
