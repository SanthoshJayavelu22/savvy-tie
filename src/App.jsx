// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import OutsourcingBenefits from './components/OutsourcingBenefits';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import TalentPool from './components/TalentPool';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChoose />
      <OutsourcingBenefits />
      <HowItWorks />
      <Services />
      <TalentPool />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;