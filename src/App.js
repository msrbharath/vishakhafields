import React, { useState, useEffect, useLayoutEffect } from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Homes from './pages/Homes';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';
import EmiCalculator from './components/EmiCalculator';
import Listings from './components/Listings';
import Features from './components/Features';
import Footer from './components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./App.css";
import ViewHomes from './pages/ViewHomes';
import EmiCalc from './pages/EmiCalc';
import Booking from './components/Booking';


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [location.pathname]
  );

  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/homes' component={Homes} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/contact' component={Contact} />
        <Route path='/viewhome' component={ViewHomes} />
        <Route path='/emicalc' component={EmiCalc} />
        <Route path='/book' component={Booking} />
      </Switch>
      <Footer />
      {/* Phone icon */}
      <a
        href="tel:+919944930096"
        className="phone_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-phone phone-icon"></i>
      </a>
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/919944930096"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;
