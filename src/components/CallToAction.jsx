import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Button } from './ui/button'
import { ArrowRight, Download } from 'lucide-react'

export default function CallToAction() {
  const sectionRef = useRef()
  const contentRef = useRef()
  const buttonsRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate content with bounce effect
            anime({
              targets: contentRef.current,
              opacity: [0, 1],
              translateY: [40, 0],
              scale: [0.95, 1],
              duration: 800,
              easing: 'easeOutElastic(1, .6)',
            })

            // Animate buttons with stagger
            anime({
              targets: buttonsRef.current.children,
              opacity: [0, 1],
              translateX: [-30, 0],
              delay: anime.stagger(150, { start: 400 }),
              duration: 600,
              easing: 'easeOutCubic',
            })

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleHireMe = () => {
    window.open('mailto:ardhipurna11@gmail.com?subject=Let\'s Work Together', '_blank')
  }

  const handleDownloadCV = () => {
    // In a real app, this would download the actual CV file
    console.log('Downloading CV...')
    alert('CV download would start here!')
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-slate-800 dark:to-slate-900"
      aria-labelledby="cta-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div ref={contentRef} className="opacity-0">
          <h2 
            id="cta-title"
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life. I'm always excited to work on 
            innovative projects that challenge me and create value for users.
          </p>
        </div>
        
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            onClick={handleHireMe}
            className="text-lg px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 transition-colors opacity-0"
            aria-label="Contact me to discuss your project"
          >
            <span>Hire Me</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleDownloadCV}
            className="text-lg px-8 py-3 border-white text-indigo-600 hover:bg-white hover:text-indigo-800 transition-colors opacity-0"
            aria-label="Download my resume as PDF"
          >
            <Download className="mr-2 w-5 h-5" />
            <span>Download CV</span>
          </Button>
        </div>
      </div>
    </section>
  )
}