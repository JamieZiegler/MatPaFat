import { Link, useLocation } from 'react-router-dom'

export default function TermsAndPrivacy() {
    const location = useLocation()
    const fromHash = location.state?.from || ''

    return (
        <div className="terms-privacy-page">
            <div className="terms-privacy-header">
                <Link to={`/${fromHash}`} className="back-link">← Tillbaka till startsidan</Link>
            </div>
            
            <div className="terms-privacy-content">
                <section className="terms-section">
                    <h1>Köpevillkor - Mat på Fat</h1>
                    
                    <h3>Mindre beställningar (Matlådor, smörgåstårtor, charkbrickor etc.)</h3>
                    <p>
                        Beställning och betalning sker senast 8 dagar före leverans. Vid avbokning senare än 8 dagar
                        före leverans sker ingen återbetalning, då livsmedel är undantagna ångerrätten enligt lag. I
                        vissa fall är det möjligt att beställa med kortare framförhållning, tveka inte att höra av dig med en
                        förfrågan!
                    </p>
                    
                    <h3>Catering</h3>
                    
                    <ul>
                        <h4>Deposition:</h4>
                        <li>
                            Vid bokning av catering erläggs en deposition på 30 %. För stora event
                            (t.ex. bröllop) erläggs 50 %. Bokningen blir bindande när depositionen är registrerad.
                        </li>
                        <h4>Antal gäster:</h4>
                        <li>
                            Definitivt antal gäster meddelas senast 14 dagar före leverans. 
                        </li>
                        <li>
                            För stora event, bröllop eller vid särskilda råvarubeställningar gäller 30 dagar. Vänligen notera att
                            vid specifika önskemål eller större beställningar kan det slutgiltiga antalet gäster behöva
                            bekräftas tidigare än standard. Det meddelade antalet utgör grund för slutgiltig fakturering
                            och kan inte minskas efter detta datum.
                        </li>
                        <h4>Avbokning catering:</h4>
                        <li>
                            Vid avbokning tidigare än 14 dagar (normal) eller 30-60 dagar 
                            (beroende på omfattning, stora event) före leverans återbetalas depositionen minus en administrativ 
                            avgift på 500 kr.
                        </li>
                        <li>
                            Vid senare avbokning än ovanstående tidsgränser återbetalas ej depositionen.
                        </li>
                        <li>
                            Vid avbokning 14–7 dagar före stora event debiteras 75 % av den totala ordersumman.
                        </li>
                        <li>
                            Vid avbokning mindre än 7 dagar före leverans (alla beställningar): Kunden debiteras
                            100 % av den totala ordersumman.
                        </li>
                    </ul>
                    <h3>Betalningsalternativ</h3>
                    <p>
                        Mindre beställningar betalas via Swish vid beställningstillfället. Vid större cateringbeställningar
                        och företagsuppdrag erbjuder vi betalning via Swish eller faktura (14 dagar netto).
                    </p>

                    <h3>Övrig information</h3>
                    <p>
                        Verksamheten drivs från hemmiljö, och köket är godkänt av kommunen. Vi upprätthåller samma
                        höga standard och hygienrutiner som på en restaurang – till och med ännu noggrannare. Köket
                        rengörs ordentligt före och efter varje beställning, och verksamhetens livsmedel förvaras
                        separat från privata livsmedel i egen kyl, frys och torrförråd.
                    </p>
                    <p>
                        I hemmet finns en katt, men den vistas självklart inte i köket under tillredning.
                    </p>
                    
                    
                    <h3>Allergier och specialkost</h3>
                    <p>
                        Information om allergier och specialkost måste lämnas vid beställning. Mat på Fat gör sitt bästa för 
                        att tillgodose önskemål, men kan inte garantera en helt allergen-fri miljö då tillagning sker i ett 
                        kök där olika ingredienser hanteras.
                    </p>
                    
                    <h3>Ansvarsbegränsning</h3>
                    <p>
                        Mat på Fat ansvarar inte för skador som uppstår till följd av felaktig hantering efter upphämtning 
                        eller leverans. Det är kundens ansvar att förvara produkterna enligt de anvisningar som lämnas.
                    </p>

                </section>
                
                <section className="privacy-section">
                    <h1>Integritetspolicy & GDPR</h1>
                    
                    <h3>Personuppgiftsansvarig</h3>
                    <p>
                        Mat på Fat är personuppgiftsansvarig för behandlingen av de personuppgifter som lämnas till oss.
                    </p>
                    
                    <h3>Vilka personuppgifter samlar vi in?</h3>
                    <p>
                        Vi samlar in följande personuppgifter när du kontaktar oss eller gör en beställning:
                    </p>
                    <ul className="privacy-list">
                        <li>Namn</li>
                        <li>E-postadress</li>
                        <li>Telefonnummer</li>
                        <li>Leveransadress (vid leverans)</li>
                        <li>Information om allergier och specialkost</li>
                    </ul>
                    
                    <h3>Varför samlar vi in dina personuppgifter?</h3>
                    <p>
                        Vi behandlar dina personuppgifter för att:
                    </p>
                    <ul className="privacy-list">
                        <li>Hantera din beställning och kommunicera med dig</li>
                        <li>Leverera produkter och tjänster</li>
                        <li>Fullgöra avtal och bokningar</li>
                        <li>Hantera betalningar och fakturering</li>
                        <li>Tillgodose önskemål om allergier och specialkost</li>
                    </ul>
                    
                    <h3>Laglig grund för behandling</h3>
                    <p>
                        Behandlingen av dina personuppgifter grundar sig på:
                    </p>
                    <ul className="privacy-list">
                        <li><strong>Fullgörande av avtal:</strong> För att kunna leverera de tjänster du beställt</li>
                        <li><strong>Rättslig förpliktelse:</strong> För att uppfylla bokföringskrav</li>
                        <li><strong>Berättigat intresse:</strong> För att kunna kommunicera med dig om din beställning</li>
                    </ul>
                    
                    <h3>Hur länge sparar vi dina uppgifter?</h3>
                    <p>
                        Dina personuppgifter sparas under den tid som krävs för att fullgöra ändamålet med behandlingen:
                    </p>
                    <ul className="privacy-list">
                        <li>Kontaktuppgifter och beställningshistorik: Så länge det finns ett aktivt kundförhållande</li>
                        <li>Fakturor och bokföringsmaterial: 7 år enligt bokföringslagen</li>
                        <li>Uppgifter i kontaktformulär: Raderas efter att ärendet är avslutat, om ingen beställning görs</li>
                    </ul>
                    
                    <h3>Delar vi dina uppgifter med någon?</h3>
                    <p>
                        Vi delar inte dina personuppgifter med tredje part utöver vad som krävs för att fullgöra tjänsten, 
                        såsom betaltjänstleverantörer. Vi säljer aldrig dina uppgifter till tredje part.
                    </p>
                    
                    <h3>Dina rättigheter</h3>
                    <p>
                        Enligt GDPR har du följande rättigheter:
                    </p>
                    <ul className="privacy-list">
                        <li><strong>Rätt till tillgång:</strong> Du kan begära att få veta vilka uppgifter vi har om dig</li>
                        <li><strong>Rätt till rättelse:</strong> Du kan begära att felaktiga uppgifter rättas</li>
                        <li><strong>Rätt till radering:</strong> Du kan begära att dina uppgifter raderas (med vissa undantag)</li>
                        <li><strong>Rätt till begränsning:</strong> Du kan begära att behandlingen av dina uppgifter begränsas</li>
                        <li><strong>Rätt till dataportabilitet:</strong> Du kan begära att få dina uppgifter i ett strukturerat format</li>
                        <li><strong>Rätt att göra invändningar:</strong> Du kan invända mot behandling av dina uppgifter</li>
                    </ul>
                    <p>
                        För att utöva dina rättigheter, kontakta oss via e-post eller telefon. Du har också rätt att lämna in 
                        ett klagomål till Integritetsskyddsmyndigheten (IMY) om du anser att behandlingen av dina personuppgifter 
                        inte sker i enlighet med gällande lagstiftning.
                    </p>
                    
                    <h3>Säkerhet</h3>
                    <p>
                        Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot 
                        obehörig åtkomst, förlust eller förstörelse.
                    </p>
                    
                    <h3>Cookies</h3>
                    <p>
                        Denna webbplats använder för närvarande inga cookies eller analyticaltjänster.
                    </p>
                    
                    <h3>Kontaktuppgifter</h3>
                    <p>
                        Om du har frågor om hur vi behandlar dina personuppgifter eller om du vill utöva dina rättigheter, 
                        kontakta oss via kontaktformuläret på startsidan eller via e-post/telefon.
                    </p>
                    
                    <h3>Ändringar av integritetspolicyn</h3>
                    <p>
                        Vi förbehåller oss rätten att uppdatera denna integritetspolicy. Ändringar publiceras på denna sida 
                        och träder i kraft omedelbart.
                    </p>
                    
                    <p className="last-updated">
                        <em>Senast uppdaterad: Januari 2026</em>
                    </p>
                </section>
            </div>
        </div>
    )
}
