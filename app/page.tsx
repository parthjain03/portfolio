import { Metadata } from 'next'
import Header from '@/components/header'
import Hero from '@/components/hero'
import AboutMe from '@/components/about-me'
import Experience from '@/components/experience'
import Education from '@/components/education'
import Projects from '@/components/projects'
import Publications from '@/components/publications'
import AwardsMedia from '@/components/awards-media'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Tools from '@/components/tools'

export const metadata: Metadata = {
  title: 'Parth Jain | Aerospace Engineer Portfolio',
  description: 'Minimal and elegant portfolio showcasing aerospace engineering projects, experience, and expertise'
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <Education />
      <section id="projects">
        <Projects />
      </section>
      <Publications />
      <section id="awards">
        <AwardsMedia />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
