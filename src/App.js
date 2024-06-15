import './App.css';
import Home from './Views/Home-Page/home';
import Services from './Views/Services/services';
import AppNavbarr from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import { Route, Routes } from 'react-router';
import About from './Views/About-us/about';
import ContactUs from './Views/Contact-Us/contactUs';




function App() {
  return (
    <div className='app'>
      <AppNavbarr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
