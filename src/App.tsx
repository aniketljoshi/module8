import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import {
  AIEngineeringPage,
  CloudArchitecturePage,
  DevSecOpsPage,
  Web3BlockchainPage,
  WalletWeaverPage,
  BlogPage,
  BlogPostPage
} from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Routes>
          {/* Homepage with all sections */}
          <Route path="/" element={<HomePage />} />

          {/* Service Landing Pages */}
          <Route path="/services/ai-engineering" element={
            <>
              <Navbar />
              <AIEngineeringPage />
              <Footer />
            </>
          } />
          <Route path="/services/cloud-architecture" element={
            <>
              <Navbar />
              <CloudArchitecturePage />
              <Footer />
            </>
          } />
          <Route path="/services/devsecops" element={
            <>
              <Navbar />
              <DevSecOpsPage />
              <Footer />
            </>
          } />
          <Route path="/services/web3-blockchain" element={
            <>
              <Navbar />
              <Web3BlockchainPage />
              <Footer />
            </>
          } />

          {/* Product Pages */}
          <Route path="/products/walletweaver" element={
            <>
              <Navbar />
              <WalletWeaverPage />
              <Footer />
            </>
          } />

          {/* Blog Pages */}
          <Route path="/blog" element={
            <>
              <Navbar />
              <BlogPage />
              <Footer />
            </>
          } />
          <Route path="/blog/:slug" element={
            <>
              <Navbar />
              <BlogPostPage />
              <Footer />
            </>
          } />

          {/* Fallback - redirect to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
