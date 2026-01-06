import { useState } from 'react'
import lunch from '../assets/food/service-item-covers/lunch.png'
import catering from '../assets/food/service-item-covers/catering.png'
import ramen from '../assets/food/ramen-7238665.jpg'
import pizza from '../assets/food/pizza-329523.jpg'
import buffet from '../assets/food/buffet-7012758.jpg'
import horsDoeuvre from '../assets/food/hors-doeuvre-2175326.jpg'
import smorgas from '../assets/food/smorgastarta-2388075.jpg'
import chark from '../assets/food/chark_jr.jpg'
import tomatoes from '../assets/food/tomatoes-3702962.jpg'
import pretzels from '../assets/food/pretzels-1491789.jpg'
import Carousel from './Carousel'

export default function Services() {
    const [expandedId, setExpandedId] = useState(null)

    const lunchImages = [lunch, ramen, pizza]
    const cateringImages = [catering, horsDoeuvre, smorgas, buffet]
    const samarbetenImages = [chark, tomatoes, pretzels]

    const handleExpand = (id) => setExpandedId(id)
    const handleCollapse = () => setExpandedId(null)
    
    const scrollToContact = () => {
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <section className="services" id="services" aria-labelledby="services-heading">
                <h2 id="services-heading">Mina tjänster</h2>
                {expandedId === null ? (
                    <div className="service-container" role="list" key="collapsed">
                        <article className="service-item" role="listitem">
                            <h3>Matlådor</h3>
                            <div className="service-image">
                                <img src={lunch} alt="Näringsrika matlådor för lunch och middag" />
                            </div>
                            <p>Varje vecka kan du välja mellan ett antal olika matlådor som passar både till lunch och middag. Alltid lagat med noga utvalda råvaror av hög kvalitet för bästa smak och näring.</p>
                            <div className="cta-lunch btn">
                                <button className="btn-lunch" onClick={() => handleExpand('lunch')} aria-expanded="false" aria-controls="service-lunch">Läs mer om matlådor</button>
                            </div>
                        </article>
                        <article className="service-item" role="listitem">
                            <h3>Catering</h3>
                            <div className="service-image">
                                <img src={catering} alt="Catering för alla tillfällen" />
                            </div>
                            <p>
                                Jag erbjuder catering för alla tillfällen, från små sammankomster till stora evenemang. Jag skapar skräddarsydda menyer med fokus på kvalitet och smak för att göra din fest minnesvärd.
                            </p>
                            <div className="cta-catering btn">
                                <button className="btn-catering" onClick={() => handleExpand('catering')} aria-expanded="false" aria-controls="service-catering">Läs mer om catering</button>
                            </div>
                        </article>
                        <article className="service-item" role="listitem">
                            <h3>Samarbeten</h3>
                            <div className="service-image">
                                <img src={chark} alt="Samarbetsmöjligheter med restauranger och event" />
                            </div>
                            <p>
                                Kock för en dag, eller kanske receptkomponering? Jag samarbetar gärna med restauranger, caféer butiker och evenemang. Kontakta mig för diskussion kring partnerskap och samarbetsmöjligheter.
                            </p>
                            <div className="cta-samarbeten btn">
                                <button className="btn-samarbeten" onClick={() => handleExpand('samarbeten')} aria-expanded="false" aria-controls="service-samarbeten">Läs mer om samarbeten</button>
                            </div>
                        </article>
                    </div>
                ) : (
                    <div className="service-container expanded" key={`expanded-${expandedId}`}>
                        <article className="service-item expanded" id={`service-${expandedId}`} aria-live="polite">
                            <div className="service-expanded-header">
                                <h3>
                                    {expandedId === 'lunch' && 'Matlådor'}
                                    {expandedId === 'catering' && 'Catering'}
                                    {expandedId === 'samarbeten' && 'Samarbeten'}
                                </h3>
                                <button className="service-expanded-close" onClick={handleCollapse} aria-label="Stäng detaljerad vy">✕</button>
                            </div>
                            <div className="service-expanded-content">
                                <div className="expanded-text">
                                    {expandedId === 'lunch' && (
                                        <>
                                            <p>
                                                Välj bland varierande, näringsrika matlådor till vardag och helg. Alltid lagat från grunden med fokus på smak, kvalitet och balans.
                                            </p>
                                            <h4>Veckans matlådor</h4>
                                            <ul className="weekly-meals">
                                                <li>Kommer snart</li>
                                                {/* <li>Vegetarisk lasagne med spenat och ricotta</li>
                                                <li>Fiskgratäng med potatismos och ärtor</li>
                                                <li>Biff Stroganoff med pasta</li>
                                                <li>Linsgryta med kokos och lime</li> */}
                                            </ul>
                                            <div className="expanded-cta btn">
                                                <button onClick={scrollToContact} aria-label="Gå till kontaktformuläret för att beställa matlådor">Skicka förfrågan</button>
                                            </div>
                                        </>
                                    )}
                                    {expandedId === 'catering' && (
                                        <>
                                            <p>
                                                Skräddarsydd catering för små och stora tillställningar. Vi hjälper till med menyförslag, specialkost och upplägg för en minnesvärd upplevelse.
                                            </p>
                                            <h4>Exempel på tillfällen och upplägg</h4>
                                            <div className="example-grid">
                                                <div className="example-card">
                                                    <h5>Charkbrickor</h5>
                                                    <p>Välbalanserade brickor med chark, ostar, marmelad, bröd och tillbehör. Perfekt för mingel.</p>
                                                </div>
                                                <div className="example-card">
                                                    <h5>Babyshower</h5>
                                                    <p>Fina snittar, små desserter och lättare rätter som passar firandet och temat.</p>
                                                </div>
                                                <div className="example-card">
                                                    <h5>Begravning</h5>
                                                    <p>Värdig servering med smörgåstårtor, sallader eller varma rätter efter önskemål.</p>
                                                </div>
                                            </div>
                                            <div className="expanded-cta btn">
                                                <button onClick={scrollToContact} aria-label="Gå till kontaktformuläret för att beställa catering">Skicka förfrågan</button>
                                            </div>
                                        </>
                                    )}
                                    {expandedId === 'samarbeten' && (
                                        <>
                                            <p>
                                                Jag är alltid öppen för nya samarbeten och partnerskap. Oavsett om du driver en restaurang, café, butik eller evenemang kan vi hitta kreativa lösningar tillsammans.
                                            </p>
                                            <h4>Samarbetsmöjligheter</h4>
                                            <div className="example-grid">
                                                <div className="example-card">
                                                    <h5>Restauranger & Caféer</h5>
                                                    <p>Leverans av färdiglagad mat, menyutveckling eller gästspel i köket för er verksamhet.</p>
                                                </div>
                                                <div className="example-card">
                                                    <h5>Butiker & Torg</h5>
                                                    <p>Försäljning av matlådor, brickor eller specialprodukter i ert sortiment.</p>
                                                </div>
                                                <div className="example-card">
                                                    <h5>Event & Festivaler</h5>
                                                    <p>Matstånd, pop-up eller catering för evenemang och festivaler.</p>
                                                </div>
                                            </div>
                                            <div className="expanded-cta btn">
                                                <button onClick={scrollToContact} aria-label="Gå till kontaktformuläret för att diskutera samarbeten">Skicka förfrågan</button>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="expanded-media">
                                    {expandedId === 'lunch' && (
                                        <Carousel images={lunchImages} alt="Matlådor" />
                                    )}
                                    {expandedId === 'catering' && (
                                        <Carousel images={cateringImages} alt="Catering" />
                                    )}
                                    {expandedId === 'samarbeten' && (
                                        <Carousel images={samarbetenImages} alt="Samarbeten" />
                                    )}
                                </div>
                            </div>
                        </article>
                    </div>
                )}
            </section>

        </>
    );
}