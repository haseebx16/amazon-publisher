import Header from './components/Header';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import WhyChooseUs from './components/WhyChooseUs';
import BookShowcase from './components/BookShowcase';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Platforms />
      <WhyChooseUs />
      <BookShowcase />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
}
