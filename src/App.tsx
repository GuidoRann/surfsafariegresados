import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '@/app/pages/Landing';
import AboutUs from './app/pages/AboutUs';
import Products from './app/pages/Products';
import ContactUs from './app/pages/ContactUs';
import Promotions from './app/pages/Promotions';
import ScrollToTop from './app/components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/about" element={ <AboutUs /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/contact" element={ <ContactUs />}  />
        <Route path="/promotions" element={<Promotions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
