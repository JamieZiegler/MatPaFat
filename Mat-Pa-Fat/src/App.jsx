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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <> 
                        <Header />
                        <Hero />
                        <main>
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
                        <Header />
                        <main>
                            <TermsAndPrivacy />
                            <Footer />
                            <div className="overlay"></div>
                        </main>
                        <ScrollToTop />
                    </>
                } />
            </Routes>
        </Router>
    )
}

export default App
