import Countdown from './components/CountDown'
import './assets/styles/index.css'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Services from './components/Services'
import ScrollToTop from './components/ScrollToTop'

function App() {
    return (
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
    )
}

export default App
