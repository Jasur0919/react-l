import React from 'react'
import './Footer.css'
import Facebook from '../../assents/images/facebooc-footer3.svg'
// import Youtbe from '../../assents/images/youtube-logo-24.png'
import Inistagram from '../../assents/images/instagram-footer.svg'
import Micommunity from '../../assents/images/footer_miCommunity.jpg'
import Left from '../../assents/images/footer_left_right.svg'

 function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_box">
          <div className="footer_text">
            <h3>Suuport</h3>
            <p className='footer_text_paragriph'>Contact Us</p>
            <p className='footer_text_paragriph'>User Guide</p>
            <p className='footer_text_paragriph'>Warranty</p>
            <p className='footer_text_paragriph'>International Warranty</p>
            <p className='footer_text_paragriph'>EU Declaration of Conformity</p>
            <p className='footer_text_paragriph'>Scooter Safety notice</p>
            <p className='footer_text_paragriph'>Andiroid Enterprice</p>
            <p className='footer_text_paragriph'>Recommended</p>
            <p className='footer_text_paragriph'>Digital Service act</p>
          </div>
          <div className="footer_text">
            <h3>About Us</h3>
            <p className='footer_text_paragriph'>Xiaomi</p>
            <p className='footer_text_paragriph'>Leaddership Team</p>
            <p className='footer_text_paragriph'>Privacy Policy</p>
            <p className='footer_text_paragriph'>Integrity & Compliance</p>
            <p className='footer_text_paragriph'>Investor Relations</p>
            <p className='footer_text_paragriph'>Suatainability</p>
            <p className='footer_text_paragriph'>Trust Center</p>
            <p className='footer_text_paragriph'>Xiaomi Accessibility</p>
            <p className='footer_text_paragriph'>xiaomi HyperOS</p>
          </div>
          <div className="footer_text">
            <h3>Xiaomi Projects</h3>
            <p className='footer_text_paragriph'>Xiaomi Creators</p>
            <p className='footer_text_paragriph'>Xiaomi Studios</p>
            <p className='footer_text_paragriph'>Xiaomi Imagery</p>
            <p className='footer_text_paragriph'>Xiaomi Master Class</p>
            <p className='footer_text_paragriph'>Xiaomi Renovation</p>
          </div>
          <div className="footer_text footer">
            <h3>Follow Xiaomi</h3>
            <div className="footer_text_images youtbeimage">
              <div className="footer_text_img">
              <img className='footer_text_img' src={Facebook} alt="" />
              </div>
              <div className="footer_text_img">
              <svg width={24} hanging={22} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
              </div>
            <div className="footer_text_img">
              <svg className='footer_text_img' height={20} width={22} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            </div>
            <div className="footer_text_img">
            <img className='footer_text_img' src={Inistagram} alt="" />

            </div>
            <div className="footer_text_img micommunity">
              <img src={Micommunity} alt="" />
            </div>
            </div>
            <h3>Let's stay in touch</h3>
            <div className="footer_text_input">
              <input type="text" placeholder='Enter emain address' />
              <svg width={10} hanging={10} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
