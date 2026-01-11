import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <>
        <header>
            <nav aria-label="Huvudnavigation">
                <ul>
                    <li className="nav-link"><a href="#introduction">Introduktion</a></li>
                    <li className="nav-link"><a href="#services">Tjänster</a></li>
                    <li className="nav-link"><a href="#contact">Kontakt</a></li>
                    <li className="nav-link"><Link to="/villkor">Betalning & villkor</Link></li>
                </ul>
            </nav>
        </header>
        </>
    );
}