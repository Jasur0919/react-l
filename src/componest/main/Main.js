import React from 'react'
import './Main.css'
import phoneS from '../../assents/images/hero-phone.webp'
import Redmi13 from '../../assents/images/phone_product.webp'
import Logochild from '../../assents/images/child-phone-product.webp'
import Watchredmi from '../../assents/images/wath-logo.webp'
import Prologo from '../../assents/images/pro-logo.webp'
import Redmipro from '../../assents/images/33pro-logo.webp'
import XiaomiCar from '../../assents/images/xiaomi_car.webp'
import Man from '../../assents/images/xiaomi_man.webp'
import Mars from '../../assents/images/xiaomi_mars.webp'

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
            <h1>Explore Xiaomi</h1>
            

          </div>
        </div>

        <div className="xiaomi_cardc"> 
              <div className="xiaomi_card">
                <img src={XiaomiCar} alt="" />
                <h3>Lorem ipsum dolor, sit amet</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <button>Learn more</button>

              </div>
              <div className="xiaomi_card">
                <img src={Man} alt="" />
                <h3>Lorem ipsum dolor, sit amet</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <button>Learn more</button>

              </div>
              <div className="xiaomi_card">
                <img src={Mars} alt="" />
                <h3>Lorem ipsum dolor, sit amet</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <button>Learn more</button>

              </div>


            </div>
      </section>

      <section className="inter">
        <div className="container">
          <div className="inter_box">
            <h1>Xiaomi Support</h1>
            <div className="inter_brend">
            <div className="inter_brend_card">
              <svg width={80} hanging={ 80} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 80C141.1 80 48 173.1 48 288V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288C0 146.6 114.6 32 256 32s256 114.6 256 256V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64h16c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V352zm288-64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h16z"/></svg>
              <h2>Costumer Support</h2>
              <p>Contact uc via live-chat, email, and phone call</p>

            </div>

            <div className="inter_brend_card">
              <svg width={80}
               hanging={80} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64V160h44.2c12.1 0 23.2 6.8 28.6 17.7L320 192h64c8.8 0 16 7.2 16 16v32c0 44.2-35.8 80-80 80H272v50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8 .6-5.5 1.9-8l15-30zM160 160h40 8v32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32V176c0-8.8 7.2-16 16-16zm128 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"/></svg>
               <h2>Warranty</h2>
              <p>Local warranty policy protection is provided</p>
            </div>

          <div className="inter_brend_card">
              <svg width={80} hanging={80} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg>
              <h2>Warranty</h2>
              <p>Local warranty policy protection is provided</p>
          </div>
          <div className="inter_brend_card">
          <svg width={80} hanging={80} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/></svg>
              <h2>Warranty</h2>
              <p>Local warranty policy protection is provided</p>
          </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
