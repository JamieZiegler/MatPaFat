import { useState } from 'react'
import { Link } from 'react-router-dom'
import lunch from '../assets/images/food/lunch/lunch_cover.webp'
import couscous from '../assets/images/food/lunch/lunch_couscous.webp'
import fish from '../assets/images/food/lunch/lunch_fish.webp'
import pasta from '../assets/images/food/lunch/lunch_pasta.webp'


import catering from '../assets/images/food/catering/catering_cover.webp'
import cake_pops from '../assets/images/food/catering/catering_cakepops.webp'
import candy from '../assets/images/food/catering/catering_candyboard.webp'
import charcuterie2 from '../assets/images/food/catering/catering_charcuterie_2.webp'
import cookies from '../assets/images/food/catering/catering_cookies.webp'
import cream_cakes from '../assets/images/food/catering/catering_cream_cakes.webp'
import sandwich_cake from '../assets/images/food/catering/catering_sandwich_cake.webp'
import sourdough from '../assets/images/food/catering/catering_sourdough.webp'


import collaboration from '../assets/images/food/collaborations/collaboration_cover.webp'
import soup from '../assets/images/food/collaborations/collaboration_soup.webp'
import shrimp from '../assets/images/food/collaborations/collaboration_shrimp.webp'
import risotto from '../assets/images/food/collaborations/collaboration_risotto.webp'

import Carousel from './Carousel'

export default function Services() {
    const [expandedId, setExpandedId] = useState(null)

    const lunchImages = [lunch, couscous, fish, pasta]
    const cateringImages = [catering, charcuterie2, cookies,  sourdough, cream_cakes, sandwich_cake, cake_pops, candy]
    const samarbetenImages = [collaboration, soup, shrimp, risotto]

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
                                <img src={lunch} alt="Näringsrika matlådor för lunch och middag" width="400" height="300" loading="lazy" decoding="async" />
                            </div>
                            <p>
                                Nylagat från grunden – helt efter dina önskemål.
                                Mina matlådor tillagas med säsongens bästa råvaror och kyls ned direkt efter tillagning för att
                                garantera högsta kvalitet, smak och fräschör.
                            </p>
                            <div className="cta-lunch btn">
                                <button className="btn-lunch" onClick={() => handleExpand('lunch')} aria-expanded={expandedId === 'lunch'} aria-controls="service-lunch">Läs mer om matlådor</button>
                            </div>
                        </article>
                        <article className="service-item" role="listitem">
                            <h3>Catering</h3>
                            <div className="service-image">
                                <img src={catering} alt="Catering för alla tillfällen" width="400" height="300" loading="lazy" decoding="async" />
                            </div>
                            <p>
                                Catering för alla tillfällen – från små sammankomster till stora evenemang. Skräddarsydda
                                lösningar med fokus på detaljer som gör dina önskemål personliga och minnesvärda.
                            </p>
                            <div className="cta-catering btn">
                                <button className="btn-catering" onClick={() => handleExpand('catering')} aria-expanded={expandedId === 'catering'} aria-controls="service-catering">Läs mer om catering</button>
                            </div>
                        </article>
                        <article className="service-item" role="listitem">
                            <h3>Samarbeten</h3>
                            <div className="service-image">
                                <img src={collaboration} alt="Samarbetsmöjligheter med restauranger och event" width="400" height="300" loading="lazy" decoding="async" />
                            </div>
                            <p>
                                Behöver du en kock för en dag eller vid några tillfällen? Jag samarbetar med privatpersoner,
                                restauranger och evenemang för att skapa matupplevelser som passar just er.
                            </p>
                            <div className="cta-samarbeten btn">
                                <button className="btn-samarbeten" onClick={() => handleExpand('samarbeten')} aria-expanded={expandedId === 'samarbeten'} aria-controls="service-samarbeten">Läs mer om samarbeten</button>
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
                                                Jag arbetar inte med fasta veckomenyer, utan erbjuder nylagade rätter utifrån inspiration och
                                                dina specifika önskemål. Hör av dig så skräddarsyr vi en lösning som passar dig perfekt!
                                            </p>
                                            
                                            <h5>Villkor</h5>
                                            <ul className="boxed-meals">
                                                <li>Beställning och betalning sker senast 8 dagar i förväg, för mer detaljer, besök villkoren nedan</li>
                                                <li>Tillagnings- och upphämtningsdagar varierar vecka till vecka</li>
                                                <li>Hämtas hos mig eller levereras enligt överenskommelse</li>
                                            </ul>
                                            
                                            <h5>Priser</h5>
                                            <ul className="boxed-meals pricing">
                                                <li><strong>Matlådor standard:</strong> 85 kr per portion</li>
                                                <li><strong>Matlådor LYX inkl. dessert:</strong> 120 kr per portion</li>
                                            </ul>
                                            <p className="boxed-meals-note">
                                                Skicka gärna en förfrågan för mer information och menyförslag!
                                            </p>
                                            <small className="terms-link"><Link to="/villkor" state={{ from: '#services' }}>Var god läs fullständiga köpvillkor och integritetspolicy innan beställning</Link></small>
                                            <div className="expanded-cta btn">
                                                <button onClick={scrollToContact} aria-label="Gå till kontaktformuläret för att beställa matlådor">Skicka förfrågan</button>
                                            </div>
                                        </>
                                    )}
                                    {expandedId === 'catering' && (
                                        <>
                                            <p>
                                                Smörgåstårta, chark- och grillbrickor, kalasbrickor, söta tårtor – eller varför inte en hel catering
                                                med en välplanerad meny till festen? Alla förfrågningar är välkomna, stora som små, och vi kan
                                                även ordna alternativ som inte listas nedan. Vi erbjuder dessutom helhetslösningar med
                                                servering om det önskas, för att göra er tillställning komplett.
                                            </p>
                                            <h5>Exempel på produkter och riktpriser</h5>
                                            <ul className="catering-options pricing">
                                                <li><strong>Smörgåstårta</strong>95 - 125 kr per portion</li>
                                                <li><strong>Grillbricka</strong>195 - 280 kr per portion</li>
                                                <li><strong>Charkbricka</strong>185 - 280 kr per portion</li>
                                                <li><strong>Tapasbricka</strong>295 - 375 kr per portion</li>
                                                <li><strong>Kalasbricka</strong>50 - 85 kr per portion</li>
                                                <li><strong>Söta tårtor</strong>45 - 100 kr per portion</li>
                                                <li><strong>Desserter/bakverk</strong>20 - 65 kr per portion</li>
                                            </ul>
                                            <p className="catering-options-note">
                                                Skicka gärna en förfrågan för mer information och menyförslag!
                                            </p>

                                            <small className="terms-link"><Link to="/villkor" state={{ from: '#services' }}>Var god läs fullständiga köpvillkor och integritetspolicy innan beställning</Link></small>
                                            <div className="expanded-cta btn">
                                                <button onClick={scrollToContact} aria-label="Gå till kontaktformuläret för att beställa catering">Skicka förfrågan</button>
                                            </div>
                                        </>
                                    )}
                                    {expandedId === 'samarbeten' && (
                                        <>
                                            <p>
                                                Jag gästspelar gärna på restauranger eller vid olika evenemang– eller varför inte hyra in en
                                                personlig kock till din privata fest? Tveka inte att höra av er så hittar vi en lösning som passar
                                                just er!
                                            </p>
                                            <small className="terms-link"><Link to="/villkor" state={{ from: '#services' }}>Till fullständiga köpvillkor och integritetspolicy</Link></small>
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