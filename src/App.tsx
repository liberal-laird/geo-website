import { useState, useEffect } from 'react';
import './index.css';

// Import all new components
import Navbar from './components/Navigation/Navbar';
import HeroSection from './components/Home/HeroSection';
import BenefitsGrid from './components/Benefits/BenefitsGrid';
import AIServicesSection from './components/AI/AIServicesSection';
import CasesGrid from './components/Cases/CasesGrid';
import ContactSection from './components/Contact/ContactSection';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="app loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsGrid />
        <AIServicesSection />
        <CasesGrid />
        <ContactSection />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AI<span className="ai-accent">MARKETING</span></h3>
            <p className="text-secondary">AI大模型营销解决方案专家</p>
          </div>

          <div className="footer-section">
            <h4>快速链接</h4>
            <ul>
              <li><a href="#home">首页</a></li>
              <li><a href="#benefits">优势</a></li>
              <li><a href="#ai-services">AI服务</a></li>
              <li><a href="#cases">案例研究</a></li>
              <li><a href="#contact">联系</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>联系方式</h4>
            <p>Email: lairdnotehk@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 AI Marketing Solutions. 版权所有。</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
