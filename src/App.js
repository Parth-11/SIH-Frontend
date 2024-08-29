import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ServicePage from './pages/ServicePage/servicespage';
import HomePage from './pages/HomePage/homepage';
import ContactUsPage from './pages/ContactUsPage/contactuspage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
