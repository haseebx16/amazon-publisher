import Header from './components/Header';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import WhyChooseUs from './components/WhyChooseUs';
import BookShowcase from './components/BookShowcase';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteBar from './components/QuoteBar';
import About from './components/About';

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
      <QuoteBar />
      <Footer />
    </main>
  );
}
