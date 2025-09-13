import Hero from './components/Hero'
import Features from './components/Features'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App