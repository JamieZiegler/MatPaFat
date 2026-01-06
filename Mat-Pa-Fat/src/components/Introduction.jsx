import jessica from '../assets/headshots/jessica.jpg'

export default function Introduction() {

    return (
        <>
        <section className="introduction" id="introduction" aria-labelledby="introduction-heading">
            <h2 id="introduction-heading">Välkommen till<br />Mat På Fat!</h2>
            <div className="introduction-container">            
                <article className="introduction-founder">
                    <div className="founder-text">
                        <p>
                            Mat på Fat drivs av mig, Jessica. Jag är utbildad kock och brinner för att skapa goda måltider som piffar upp både vardag och fest.
                            Jag lagar all mat från grunden med noga utvalda råvaror av hög kvalitet för att säkerställa bästa smak och näring.
                        </p>
                        <p>
                            Mitt mål är att göra det enkelt för dig att njuta av hemlagade, näringsrika måltider utan stressen av matlagning. Både till vardag och fest!
                        </p>
                        <p>
                            Smaklig måltid!
                        </p>
                    </div>

                    <div className="founder">
                        <img src={jessica} alt="Jessica, grundare och kock på Mat På Fat" />
                    <p>Jessica, Grundare & Kock</p>
                </div>
                </article>

            </div>


        </section>

        </>
    );
}