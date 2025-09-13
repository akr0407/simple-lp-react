import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Code, Palette, Zap, Users } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Expertise in React, Node.js, TypeScript, and modern web technologies to build scalable applications.',
    color: 'text-blue-600'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with attention to accessibility and user experience.',
    color: 'text-purple-600'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, SEO, and core web vitals to ensure the best user experience.',
    color: 'text-yellow-600'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Strong communication skills and experience working in agile teams with cross-functional stakeholders.',
    color: 'text-green-600'
  }
]

export default function Features() {
  const sectionRef = useRef()
  const titleRef = useRef()
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate title first
            anime({
              targets: titleRef.current,
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 600,
              easing: 'easeOutCubic',
            })

            // Then animate cards with stagger
            anime({
              targets: cardsRef.current,
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0.9, 1],
              delay: anime.stagger(150, { start: 300 }),
              duration: 600,
              easing: 'easeOutCubic',
            })

            observer.unobserver(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      aria-labelledby="features-title"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            id="features-title"
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 opacity-0"
          >
            What I Do Best
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Combining technical expertise with creative problem-solving to deliver exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card 
                key={feature.title}
                ref={el => cardsRef.current[index] = el}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 opacity-0"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-3 rounded-full bg-white dark:bg-slate-600 shadow-md group-hover:shadow-lg transition-shadow ${feature.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}