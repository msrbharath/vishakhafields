import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';
import "./App.css";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      {/* Phone icon */}
      <a
        href="tel:+919944930096"
        class="phone_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-phone phone-icon"></i>
      </a>
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/919944930096"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;
