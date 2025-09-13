import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Button } from './ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef()
  const titleRef = useRef()
  const subtitleRef = useRef()
  const ctaRef = useRef()
  const socialsRef = useRef()

  useEffect(() => {
    // Hero entrance animation
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    })

    timeline
      .add({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
      })
      .add({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
      }, '-=400')
      .add({
        targets: ctaRef.current,
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 500,
      }, '-=300')
      .add({
        targets: socialsRef.current.children,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 400,
      }, '-=200')
  }, [])

  const handleCTAClick = () => {
    // Smooth scroll to features section
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 px-4 sm:px-6 lg:px-8"
      role="banner"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 opacity-0"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ardhi Purna
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto opacity-0"
        >
          Full-Stack Developer passionate about creating beautiful, functional web experiences 
          that solve real problems and delight users.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 opacity-0"
        >
          <Button 
            size="lg" 
            onClick={handleCTAClick}
            className="text-lg px-8 py-3"
            aria-label="View my work and projects"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('mailto:ardhipurna11@gmail.com')}
            className="text-lg px-8 py-3"
            aria-label="Get in touch via email"
          >
            Get In Touch
          </Button>
        </div>
        
        <div 
          ref={socialsRef}
          className="flex justify-center space-x-6"
          role="navigation"
          aria-label="Social media links"
        >
          <a 
            href="https://github.com/alexjohnson" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-0"
            aria-label="Visit my GitHub profile"
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a 
            href="https://linkedin.com/in/alexjohnson" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-0"
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin className="w-6 h-6 text-blue-600" />
          </a>
          <a 
            href="mailto:alex@example.com"
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-0"
            aria-label="Send me an email"
          >
            <Mail className="w-6 h-6 text-green-600" />
          </a>
        </div>
      </div>
    </section>
  )
}