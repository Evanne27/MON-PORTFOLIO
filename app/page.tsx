import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import LearningJourney from '@/components/LearningJourney';
import Experiences from '@/components/Experiences';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningJourney />
        <Experiences />
        <Contact />
      </main>
    </div>
  );
}