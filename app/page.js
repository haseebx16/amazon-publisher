// filepath: /C:/Users/Hasan/Documents/GitHub/amazon-publisher/app/page.js
import BookShowcase from './components/BookShowcase';
import Portfolio from './components/Portfolio';
import HomeAbout from './components/HomeAbout';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteBar from './components/QuoteBar';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import WhyChooseUs from './components/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <WhyChooseUs />
      <BookShowcase />
      <Platforms />
      <ErrorBoundary>
        <HomeAbout />
      </ErrorBoundary>
      <Contact />
      <QuoteBar />
      <Footer />
    </main>
  );
}