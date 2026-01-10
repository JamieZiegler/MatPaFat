import jessica from '../assets/images/headshots/jessica.jpg'

export default function Introduction() {

    return (
        <>
        <section className="introduction" id="introduction" aria-labelledby="introduction-heading">
            <h2 id="introduction-heading">Välkommen till<br />Mat På Fat!</h2>
            <div className="introduction-container">            
                <article className="introduction-founder">
                    <div className="founder-text">
                        <p>
                            Som utbildad kock brinner jag för att laga mat från grunden med noggrant utvalda råvaror. Jag
                            lägger stor vikt vid smaker och kvalitet och skräddarsyr lösningar efter just dina önskemål. Mitt
                            mål är att erbjuda vällagad catering med det lilla extra, där varje beställning får den omsorg och
                            noggrannhet som den förtjänar.
                        </p>
                        <p>
                            Tveka inte att höra av dig med en förfrågan – vare sig det gäller vardag eller fest. Vi tar emot
                            beställningar från både företag och privatpersoner. Vi hörs!
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