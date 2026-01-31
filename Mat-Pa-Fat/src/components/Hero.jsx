import logo from '../assets/images/logo/mpf-genomskinlig-for-fonster.svg'
import Countdown from './CountDown'

export default function Hero() {
    const scrollToContact = () => {
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            {/* Innan verksamheten öppnar: */}
            <div className="hero-wrapper">

                {/* <section className="pre-opening-hero" aria-labelledby="hero-tagline">
                    <div className="hero-content">
                        <img className="hero-logo-small" src={logo} alt="Mat På Fat Bergslagen logotyp" width="280" height="200" fetchPriority="high" />
                        <h1 className="sr-only">Catering i Lindesberg</h1>
                        <div className="hero-info">
                            <p>
                                Jag förbereder just nu för att öppna mina dörrar och börja servera dig läckra, näringsrika matlådor och skräddarsydd catering.
                            </p>
                            <p>
                                Kontakta mig redan nu för prisförslag och information!
                            </p>
                            <div className="cta-contact">
                                <button className="hero-contact-btn btn" onClick={scrollToContact} aria-label="Gå till kontaktformuläret">Kontakt</button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-countdown-wrapper">
                        <Countdown />
                    </div>
                </section> */}

                {/* Avskommentera när verksamheten öppnat */}
                <section className="open-hero" aria-labelledby="hero-tagline">
                    <div className="hero-content">
                        <img className="hero-logo-small" src={logo} alt="Mat På Fat Bergslagen logotyp" width="280" height="200" fetchPriority="high" />
                        <h1 className="sr-only">Catering i Lindesberg</h1>
                        <div className="hero-info">
                            <p>
                                Kontakta mig för prisförslag och information!
                            </p>
                            <div className="cta-contact">
                                <button className="hero-contact-btn btn" onClick={scrollToContact} aria-label="Gå till kontaktformuläret">Kontakt</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}