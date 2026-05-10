import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import Promo from './components/Promo.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-sand-100">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Promo />
      </main>
      <Footer />
    </div>
  )
}
