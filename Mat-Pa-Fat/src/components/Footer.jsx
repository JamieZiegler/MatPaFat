import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footer-links">
                <small className="terms-link">
                    <Link to="/villkor">Köpvillkor & Integritetspolicy</Link>
                </small>
            </div>
            <small>© 2026 Mat På Fat &nbsp; | &nbsp; Alla rättigheter reserverade.</small>
            <small>
                <a href="https://www.jamziewebdev.net">
                    Design, utveckling och underhåll av James Ziegler
                </a>
            </small>
            <small>Lindesberg &nbsp; | &nbsp; Storå &nbsp; | &nbsp; Örebro</small>
        </footer>
    );
}