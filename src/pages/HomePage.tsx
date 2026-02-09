import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WalletWeaver from '../components/WalletWeaver';
import WhyUs from '../components/WhyUs';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Module8 (ModuleEight) | AI, Cloud & Web3 Infrastructure Solutions | Pune, India</title>
                <meta name="description" content="Module8 (ModuleEight Technologies Pvt. Ltd.) is a Pune-based technology infrastructure company specializing in AI engineering, cloud-native systems, DevSecOps, blockchain interoperability, and SaaS product development. Enterprise-grade solutions across AWS, Azure, GCP. Home of WalletWeaver blockchain intelligence platform." />
                <link rel="canonical" href="https://module8.io" />
            </Helmet>

            <Navbar />
            <div id="home">
                <Hero />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="products">
                <WalletWeaver />
            </div>
            <WhyUs />
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="faq">
                <FAQ />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </>
    );
}
