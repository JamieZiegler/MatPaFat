import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/mpf-genomskinlig-for-fonster.svg'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import { PiPhoneCallFill } from "react-icons/pi";
import { AiOutlineTikTok } from "react-icons/ai";

export default function LinkHub() {
    return (
        <div className="linkhub-page">
            <div className="linkhub-container">
                <div className="linkhub-logo">
                    <img src={logo} alt="Mat på Fat" />
                </div>
                
                <h1>Mat på Fat</h1>
                
                <p className="linkhub-tagline">
                    Hemlagad mat med kärlek – från Storå
                </p>
                
                <Link to="/" className="linkhub-website-btn">
                    Besök vår webbplats
                </Link>
                
                <div className="linkhub-divider"></div>
                
                <div className="linkhub-links">
                    <a 
                        href="https://www.facebook.com/profile.php?id=61583342170417" 
                        className="linkhub-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <BiLogoFacebookCircle className='icon' />
                        <span>Facebook</span>
                    </a>
                    <a 
                        href="https://www.instagram.com/matpafat_/" 
                        className="linkhub-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <BiLogoInstagramAlt className='icon' />
                        <span>Instagram</span>
                    </a>
                    <a 
                        href="https://www.tiktok.com/@matpafat_" 
                        className="linkhub-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <AiOutlineTikTok className='icon' />
                        <span>TikTok</span>
                    </a>
                    
                    <a 
                        href="https://maps.app.goo.gl/yP7fW2PoECrE9D5M8" 
                        className="linkhub-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <TiLocation className='icon' />
                        <span>Hitta oss</span>
                    </a>
                    
                    <a 
                        href="tel:+46703225801" 
                        className="linkhub-link"
                    >
                        <PiPhoneCallFill className='icon' />
                        <span>Ring oss</span>
                    </a>
                </div>
                
                <div className="linkhub-contact-info">
                    <p>Jessica Roch</p>
                    <p>070 322 58 01</p>
                    <p>Bärnstensvägen 10, 711 76 Storå</p>
                </div>
            </div>
        </div>
    )
}
