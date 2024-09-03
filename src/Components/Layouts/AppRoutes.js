import {Routes, Route} from 'react-router-dom'
import Services from '../../Pages/Services';
import ContactUs from '../../Pages/ContactUs';
import HomePage from '../../Pages/HomePage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes