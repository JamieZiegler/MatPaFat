import logo from '../assets/images/logo/mpf-genomskinlig-for-webb.svg'

export default function Hero() {

    const scrollToContact = () => {
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
        
            <div className="hero-wrapper">
                <section className="hero" aria-labelledby="hero-tagline">
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
                    {/* </div> */}
                </section>
            </div>
        </>
    );
}