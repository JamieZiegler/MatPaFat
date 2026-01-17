import logo from '../assets/images/logo/mpf-genomskinlig-for-fonster.svg'
import Countdown from './CountDown'

export default function Hero() {
    const scrollToContact = () => {
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            {/* Avskommentera när verksamheten öppnat */}
            {/* <section className="hero" aria-labelledby="hero-heading">
                <img className="hero-logo" src={logo} alt="Mat På Fat Logo" />
            </section> */}

            {/* Innan verksamheten öppnar: */}
            <div className="hero-wrapper">
                <section className="pre-opening-hero" aria-labelledby="hero-tagline">
                    <div className="hero-content">
                        <img className="hero-logo-small" src={logo} alt="Mat På Fat Bergslagen logotyp" width="280" height="200" fetchPriority="high" />
                        <h1 className="sr-only">Catering i Lindesberg</h1>
                        <h1 id="hero-tagline" className="hero-tagline">Hemlagad mat med kärlek</h1>
                        <div className="hero-info">
                            <p>
                            Jag förbereder just nu för att öppna mina dörrar och börja servera dig läckra, näringsrika matlådor och skräddarsydd catering.
                            </p>
                            <p>
                            Kontakta mig redan nu för prisförslag och information!
                            </p>
                            <div className="cta-contact">
                                <button className="hero-contact-btn btn" onClick={scrollToContact} aria-label="Gå till kontaktformuläret för Mat på Fat">Kontakt</button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-countdown-wrapper">
                        <Countdown />
                    </div>
                </section>
            </div>
        </>
    );
}