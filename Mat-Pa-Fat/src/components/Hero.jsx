import { useState, useEffect } from 'react';
import logo from '../assets/images/logo/mpf-genomskinlig-for-webb.svg'
import closedImg from '../assets/images/temp_hero_summer2.png';
// import closedImg from '../assets/images/temp_hero.jpg';
// import Countdown from './CountDown'

export default function Hero() {
    const [showLogo, setShowLogo] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setShowLogo(prev => !prev);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const scrollToContact = () => {
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
        
            <div className="hero-wrapper">
                <section className="open-hero" aria-labelledby="hero-tagline">

                    {/* Temporarily closed hero */}
                    <div className={`hero-slide ${!showLogo ? 'active' : 'inactive'}`}>
                        <div className="hero-content">
                            <h1 id="hero-tagline" className="hero-tagline">Välkommen till Mat på Fat!</h1>
                            <img className="hero-logo-small" src={closedImg} alt="Stängt för sommarsemester vecka 31 - 33. Tack för förståeslen!" fetchPriority="high" />
                            <div className="hero-info">
                                <h2>Tack för en fantastisk vår och sommar!</h2>
                                <div className="hero-info">
                                    <p>Nu tar jag några veckors sommarsemester. Åter öppet måndag v.34!</p>
                                    <div className="cta-contact">
                                        <button className="hero-contact-btn btn" onClick={scrollToContact} aria-label="Gå till kontaktformuläret">Kontakt</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Original hero */}
                    <div className={`hero-slide ${showLogo ? 'active' : 'inactive'}`}>
                        <div className="hero-content">
                            <h1 id="hero-tagline" className="hero-tagline">Välkommen till</h1>
                            <img className="hero-logo-small" src={logo} alt="Mat På Fat Bergslagen logotyp" />
                            <h1 className="sr-only">Catering i Lindesberg</h1>
                            <h2>Hemlagad mat med kärlek</h2>
                            <div className="hero-info">
                                <p>Kontakta mig för prisförslag och information!</p>
                                <div className="cta-contact">
                                    <button className="hero-contact-btn btn" onClick={scrollToContact} aria-label="Gå till kontaktformuläret">Kontakt</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}