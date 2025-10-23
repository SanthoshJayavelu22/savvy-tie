// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import PropertyAssistants from './pages/ServiceDetail/PropertyAssistants';
import PersonalAssistants from './pages/ServiceDetail/PersonalAssistants';
import SocialMediaManagement from './pages/ServiceDetail/SocialMediaManagement';
import CallCentre from './pages/ServiceDetail/CallCentre';
import LiveChatSupport from './pages/ServiceDetail/LiveChatSupport';
import Telesales from './pages/ServiceDetail/Telesales';
import DataEntryServices from './pages/ServiceDetail/DataEntryServices';
import DebtCollection from './pages/ServiceDetail/DebtCollection';
import ITOutsourcing from './pages/ServiceDetail/ITOutsourcing';
import SalesAssistants from './pages/ServiceDetail/SalesAssistants';
import LegalAssistants from './pages/ServiceDetail/LegalAssistants';
import ContactUs from './pages/ContactUs';
// import HireNow from './pages/HireNow';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services/>} />

               <Route path="/services/property-assistants" element={<PropertyAssistants />} />
          <Route path="/services/personal-assistants" element={<PersonalAssistants />} />
          <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/services/call-centre" element={<CallCentre />} />
          <Route path="/services/live-chat-support" element={<LiveChatSupport />} />
          <Route path="/services/telesales" element={<Telesales />} />
          <Route path="/services/data-entry-services" element={<DataEntryServices />} />
          <Route path="/services/debt-collection" element={<DebtCollection />} />
          <Route path="/services/it-outsourcing" element={<ITOutsourcing />} />
          <Route path="/services/sales-assistants" element={<SalesAssistants />} />
          <Route path="/services/legal-assistants" element={<LegalAssistants />} />

           {/* <Route path="/hire-now" element={<HireNow/>} /> */}

             <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;