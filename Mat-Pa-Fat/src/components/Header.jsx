import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <>
            <header>
                <nav aria-label="Huvudnavigation">
                    <ul>
                        <li className="nav-link">
                            {isHome ? <a href="#introduction">Introduktion</a> : <Link to="/#introduction">Introduktion</Link>}
                        </li>
                        <li className="nav-link">
                            {isHome ? <a href="#services">Tjänster</a> : <Link to="/#services">Tjänster</Link>}
                        </li>
                        <li className="nav-link">
                            {isHome ? <a href="#contact">Kontakt</a> : <Link to="/#contact">Kontakt</Link>}
                        </li>
                        <li className="nav-link"><Link to="/villkor" state={{ from: location.hash }}>Betalning & villkor</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}