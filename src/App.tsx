import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import Products from './Products';
import Industries from './Industries';
import Services from './Services';
import Sustainability from './Sustainability';
import Projects from './Projects';
import Faq from './Faq';
import ContactUs from './ContactUs';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
