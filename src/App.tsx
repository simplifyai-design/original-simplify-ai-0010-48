
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ServicesPage from './pages/ServicesPage';
import WebsiteServicesPage from './pages/WebsiteServicesPage';
import AutomationServicesPage from './pages/AutomationServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/website-services" element={<WebsiteServicesPage />} />
            <Route path="/automation-services" element={<AutomationServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
