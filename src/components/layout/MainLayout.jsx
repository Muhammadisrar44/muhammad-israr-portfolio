import Feedback from "../../sections/Feedback";
import Certificates from '../../sections/Certificates'
import FAQ from '../../sections/FAQ'
import Navbar from '../navigation/Navbar'
import Reveal from '../ui/Reveal'
import Hero from '../../sections/Hero'
import About from '../../sections/About'
import HowIWork from '../../sections/HowIWork'
import Skills from '../../sections/Skills'
import Projects from '../../sections/Projects'
import Contact from '../../sections/Contact'
import Footer from './Footer'

function MainLayout() {
  return (
    <>
      <Navbar />

     <main id="main-content">
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <HowIWork />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Certificates />
        </Reveal>

        <Reveal>
          <Feedback />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <FAQ />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <Footer />
    </>
  )
}

export default MainLayout