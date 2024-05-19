import './App.css'
import { About } from './components/About'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { Services } from './components/Services'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<HowItWorks />
			<Services />
			<Cta />
			<Footer />
			<ScrollToTop />
		</>
	)
}

export default App
