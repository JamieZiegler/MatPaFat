import facebook from '../assets/icons/Facebook.svg';
import instagram from '../assets/icons/Instagram.svg';
import location from '../assets/icons/Location.svg';
import phone from '../assets/icons/Phone.svg';
export default function Contact() {

    return (
        <>
        <section className="contact" id="contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Kontakt och beställning</h2>
            <div className="contact-container">
                <p>
                    Mat på Fat är i dagsläget en bisyssla, därmed kan svar på förfrågningar dröja upp till ett par dagar.
                    För snabbast svar vänligen kontakta mig på telefon. 
                </p>
                <p>
                    Fyll i formuläret nedan så återkommer jag så snart som möjligt!
                </p>
                <form className="contact-form" aria-label="Kontaktformulär">
                    <label htmlFor="name">Namn:</label>
                    <input type="text" id="name" name="name" required aria-required="true" />
                    <label htmlFor="email">E-post:</label>
                    <input type="email" id="email" name="email" required aria-required="true" />
                    <label htmlFor="message">Meddelande:</label>
                    <textarea id="message" name="message" required aria-required="true"></textarea>
                    <button type="submit">Skicka</button>
                </form>

                <div className="contact-info" aria-label="Sociala medier och kontakt">
                    <a href="https://www.facebook.com/profile.php?id=61583342170417" aria-label="Besök oss på Facebook" target="_blank" rel="noopener noreferrer"><img className="icon" src={facebook} alt="" role="presentation" /></a>
                    <a href="https://www.instagram.com/matpafat_/" aria-label="Följ oss på Instagram" target="_blank" rel="noopener noreferrer"><img className="icon" src={instagram} alt="" role="presentation" /></a>
                    <a href="https://maps.app.goo.gl/yP7fW2PoECrE9D5M8" aria-label="Hitta oss på kartan" target="_blank" rel="noopener noreferrer"><img className="icon" src={location} alt="" role="presentation" /></a>
                    <a href="tel:+#" aria-label="Ring oss"><img className="icon" src={phone} alt="" role="presentation" /></a>
                </div>
            </div>
        </section>
        </>
    );
}