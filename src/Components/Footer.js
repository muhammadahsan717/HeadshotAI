import React from 'react'
import '../Styles/Components/Footer.css'
import logo from '../Assets/Images/logoBlack.png'

function Footer() {
  return (
    <div className='footer-main'>
            <div className='footer-box'>
                <div className='upper-box'>
                    <div className='upper-box-heading'>
                        <p>Ready to take action</p>
                    </div>

                    <div className='upper-box-text'>
                        <div className='upper-box-email'>
                            <p>Enter email</p>
                        </div>

                        <div className='upper-box-icon'>
                            <button className='Button-icon'><i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>

                <div className='lower-box'>
                    <div className='lower-main'>
                        <div className='lower1'>
                            <div className='lower-logo'>
                                <img src={logo} className='lower-logo-img' alt='footer-logo'/>
                            </div>
                            <div className='lower-logo-content'>
                                <p>Get your business headshots that make you look professional and feel confident. Make your studio-quality headshot with A.I. now.</p>
                            </div>
                        </div>
                        <div className='lower2'>
                            <ul>
                                <li>Buy Now</li>
                                <li>Contact Us</li>
                                <li>Corporate Packages</li>
                            </ul>
                        </div>
                        <div className='lower3'>
                            <ul>
                                <li>+62 876 787 654</li>
                                <li>info@headshot.com</li>
                            </ul>
                        </div>
                        <div className='lower4'>
                            <ul>
                                <li>Legal</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer