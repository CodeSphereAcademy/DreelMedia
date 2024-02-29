import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import HowWeDoIt from './components/HowWeDoIt';
import MainContent from './components/MainContent';
import OurProjects from './components/OurProjects';
import OurServices from './components/OurServices';
import Team from './components/Team';
import WhatWeDo from './components/WhatWeDo';

function App() {
  return (
    <>
      <Header/>
      <MainContent/>
      <About/>
      <OurServices/>
      <OurProjects/>
      <WhatWeDo/>
      <HowWeDoIt/>
      <Team/>
      <Footer/>
    </>
  );
}

export default App;
