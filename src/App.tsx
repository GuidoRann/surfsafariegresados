import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '@/app/pages/Landing';
import AboutUs from './app/pages/AboutUs';
import Products from './app/pages/Products';
import ContactUs from './app/pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
