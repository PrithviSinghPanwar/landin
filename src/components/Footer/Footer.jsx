import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer className="footer" id='footer'>
        <div className="f-container">
            <div className="row">
                <div className="footer-col">
                    <h4>Land.in</h4>
                    <ul className="ul">
                        <li><a href="#">Rental Property's</a></li>
                        <li><a href="#">Buy Property's</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Agent's</h4>
                    <ul class="ul">
                        <li><a href="#">Ravi</a></li>
                        <li><a href="#">Olivia</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul className="ul">
                        <li><a href="#">LandIn@gmail.com</a></li>
                        <li><a href="#">1324675890</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>AllRightsReserved@2023LandIn</h4>
                    <div className="social-links">
                        
                    </div>
                </div>

            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
