import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WalletWeaver from './components/WalletWeaver';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WalletWeaver />
      <WhyUs />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
