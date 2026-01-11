import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Countdown from './components/CountDown'
import './assets/styles/index.css'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Services from './components/Services'
import ScrollToTop from './components/ScrollToTop'
import TermsAndPrivacy from './components/TermsAndPrivacy'
import LinkHub from './components/LinkHub'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <> 
                        <a href="#main-content" className="skip-link">Hoppa till huvudinnehåll</a>
                        <Header />
                        <Hero />
                        <main id="main-content">
                            <Introduction />
                            <Services />
                            <Contact />
                            <Footer />
                            <div className="overlay"></div>
                        </main>
                        <ScrollToTop />
                    </>
                } />
                <Route path="/villkor" element={
                    <>
                        <a href="#main-content" className="skip-link">Hoppa till huvudinnehåll</a>
                        <Header />
                        <main id="main-content">
                            <TermsAndPrivacy />
                            <Footer />
                            <div className="overlay"></div>
                        </main>
                        <ScrollToTop />
                    </>
                } />
                <Route path="/links" element={
                    <>
                        <main id="main-content">
                            <LinkHub />
                            <div className="overlay"></div>
                        </main>
                    </>
                } />
            </Routes>
        </Router>
    )
}

export default App
