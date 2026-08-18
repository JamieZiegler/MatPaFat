import { useState } from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/images/icons/Facebook.svg';
import instagram from '../assets/images/icons/Instagram.svg';
import location from '../assets/images/icons/Location.svg';
import phone from '../assets/images/icons/Phone.svg';

export default function Contact() {
    const [formErrors, setFormErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [succeeded, setSucceeded] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const errors = {};
        
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name) errors.name = 'Namn är obligatoriskt';
        
        if (!email) {
            errors.email = 'E-postadress är obligatorisk';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = 'Ange en giltig e-postadress';
        }
        
        if (!message) {
            errors.message = 'Meddelande är obligatoriskt';
        } else if (message.length < 10) {
            errors.message = 'Meddelandet måste vara minst 10 tecken långt';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        if (form.botField && form.botField.value !== "") {
            console.log("Bot detected, submission ignored.");
            setSucceeded(true);
            return;
        }

        setFormErrors({});
        setSubmitting(true);

        const formData = new FormData(form);

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            });
            setSucceeded(true);
            setSubmitting(false);
            form.reset();
        } catch (error) {
            alert("Något gick fel när meddelandet skulle skickas. Försök igen senare.");
            console.error("Form submission error:", error);
            setSubmitting(false);
        }
    }

    if (succeeded) {
        return (
            <section className="contact success-message-container" id="contact">
                <h2>Tack för ditt meddelande!</h2>
                <div className="contact-container icon-center">
                    <p>Jag har mottagit din förfrågan och återkommer till dig så snart som möjligt, vanligtvis inom 48 timmar.</p>
                    <p>Observera att meddelanden i formuläret <u>inte är en bokning</u>, utan en förfrågan.</p>
                    <p>Bokningar bekräftas enligt överenskommelse och vid betalning.</p>
                    <div className="contact-info" style={{marginTop: '2rem', justifyContent: 'center'}}>
                        <a href="https://www.facebook.com/profile.php?id=61583342170417" aria-label="Besök oss på Facebook" target="_blank" rel="noopener noreferrer"><img className="icon" src={facebook} alt="" role="presentation" width="40" height="40" /></a>
                        <a href="https://www.instagram.com/matpafat_/" aria-label="Följ oss på Instagram" target="_blank" rel="noopener noreferrer"><img className="icon" src={instagram} alt="" role="presentation" width="40" height="40" /></a>
                        <a href="https://maps.app.goo.gl/yP7fW2PoECrE9D5M8" aria-label="Hitta oss på kartan" target="_blank" rel="noopener noreferrer"><img className="icon" src={location} alt="" role="presentation" width="40" height="40" /></a>
                        <a href="tel:+46703225801" aria-label="Ring oss"><img className="icon" src={phone} alt="" role="presentation" width="40" height="40" /></a>
                    </div>
                    <button className="contact-button" onClick={() => setSucceeded(false)} style={{marginTop: '20px'}}>Skicka ett nytt meddelande</button>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="contact" id="contact" aria-labelledby="contact-heading">
                <h2 id="contact-heading">Kontakt och beställning</h2>
                <div className="contact-container">
                    <div className="notice">
                            <p>
                                Mat på Fat är en en småskalig verksamhet vid sidan av mitt ordinarie arbete, och jag
                                nås därför bäst via <u>formuläret nedan</u> eller genom mina sociala medier, SMS eller telefon.
                            </p>

                            <p>
                                Svar på förfrågningar kan ta upp till <u>48 timmar</u> - men jag återkommer alltid så snart jag kan.
                            </p>
                            <p>
                                Jag ser fram emot att höra från dig!
                            </p>
                    </div>
                    <form 
                        className="contact-form" 
                        aria-label="Kontaktformulär"
                        name="kontakt" 
                        method="POST"
                        data-netlify="true" 
                        netlify-honeypot="botField"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="kontakt" />

                        <p className="hidden-honey">
                            <label>Fyll inte i detta fält om du är människa: <input name="botField" /></label>
                        </p>
                        
                        <label htmlFor="name">Namn:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Ditt namn"
                            required 
                            aria-required="true"
                            className={formErrors.name ? 'error' : ''}
                            disabled={submitting}
                        />
                        {formErrors.name && <span className="error-message" role="alert">{formErrors.name}</span>}
                    
                        <label htmlFor="email">E-post:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="din.email@example.com"
                            required 
                            aria-required="true"
                            className={formErrors.email ? 'error' : ''}
                            disabled={submitting}
                        />
                        {formErrors.email && <span className="error-message" role="alert">{formErrors.email}</span>}
                    
                        <label htmlFor="message">Meddelande:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Din förfrågan eller meddelande..."
                            required 
                            aria-required="true"
                            className={formErrors.message ? 'error' : ''}
                            rows="5"
                            disabled={submitting}
                        ></textarea>
                        {formErrors.message && <span className="error-message" role="alert">{formErrors.message}</span>}
                    
                        <div className="form-notes">
                            <small className="form-note">Genom att skicka detta formulär godkänner du vår <Link to="/villkor">integritetspolicy</Link>.</small>
                            <small className="form-note"><i>Observera att formulärmeddelanden <u>inte är en bokning</u>, och att priserna på hemsidan <u>endast är uppskattningar</u> och kan variera utifrån beställning. För mer information, besök våra <Link to="/villkor">villkor</Link>.</i></small>

                        </div>
                        
                        <button type="submit" disabled={submitting}>
                            {submitting ? 'Skickar...' : 'Skicka'}
                        </button>
                    </form>

                    <div className="contact-details">
                        <h3>Kontaktuppgifter</h3>
                        <div className="contact-detail-item">
                            <p className="contact-name">Jessica Roch</p>
                            <p className="contact-phone"><a href="tel:+46703225801">070 322 58 01</a></p>
                        </div>
                        <div className="contact-detail-item">
                            <p className="contact-address">
                            Bärnstensvägen 10<br />
                            711 76 Storå
                            </p>
                        </div>
                    </div>

                    <div className="contact-info" aria-label="Sociala medier och kontakt">
                        <a href="https://www.facebook.com/profile.php?id=61583342170417" aria-label="Besök oss på Facebook" target="_blank" rel="noopener noreferrer"><img className="icon" src={facebook} alt="" role="presentation" width="40" height="40" /></a>
                        <a href="https://www.instagram.com/matpafat_/" aria-label="Följ oss på Instagram" target="_blank" rel="noopener noreferrer"><img className="icon" src={instagram} alt="" role="presentation" width="40" height="40" /></a>
                        <a href="https://maps.app.goo.gl/yP7fW2PoECrE9D5M8" aria-label="Hitta oss på kartan" target="_blank" rel="noopener noreferrer"><img className="icon" src={location} alt="" role="presentation" width="40" height="40" /></a>
                        <a href="tel:+46703225801" aria-label="Ring oss"><img className="icon" src={phone} alt="" role="presentation" width="40" height="40" /></a>
                    </div>
                </div>
            </section>
        </>
    );
}