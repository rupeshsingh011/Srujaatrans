import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AnimatedBubbles from './components/AnimatedBubbles';
import { AdminAuthProvider } from './context/AdminAuthContext.jsx';
import AdminLogin from './admin/AdminLogin.jsx';
import AdminLayout from './admin/AdminLayout.jsx';
import ProtectedRoute from './admin/ProtectedRoute.jsx';
import AdminOverview from './admin/AdminOverview.jsx';
import HeroEditor from './admin/sections/HeroEditor.jsx';
import AboutEditor from './admin/sections/AboutEditor.jsx';
import ExperienceEditor from './admin/sections/ExperienceEditor.jsx';
import ServicesEditor from './admin/sections/ServicesEditor.jsx';
import CompaniesEditor from './admin/sections/CompaniesEditor.jsx';
import SkillsEditor from './admin/sections/SkillsEditor.jsx';
import WorkEditor from './admin/sections/WorkEditor.jsx';
import CertificationsEditor from './admin/sections/CertificationsEditor.jsx';
import ReviewsEditor from './admin/sections/ReviewsEditor.jsx';
import FaqEditor from './admin/sections/FaqEditor.jsx';
import FooterEditor from './admin/sections/FooterEditor.jsx';
import NavbarEditor from './admin/sections/NavbarEditor.jsx';

function PublicLayout({ children }) {
  return (
    <>
      <AnimatedBubbles />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AdminAuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/contact-us" element={<PublicLayout><Contact /></PublicLayout>} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminOverview />} />
            <Route path="hero" element={<HeroEditor />} />
            <Route path="about" element={<AboutEditor />} />
            <Route path="experience" element={<ExperienceEditor />} />
            <Route path="services" element={<ServicesEditor />} />
            <Route path="companies" element={<CompaniesEditor />} />
            <Route path="skills" element={<SkillsEditor />} />
            <Route path="work" element={<WorkEditor />} />
            <Route path="certifications" element={<CertificationsEditor />} />
            <Route path="reviews" element={<ReviewsEditor />} />
            <Route path="faq" element={<FaqEditor />} />
            <Route path="footer" element={<FooterEditor />} />
            <Route path="navbar" element={<NavbarEditor />} />
          </Route>
        </Routes>
      </AdminAuthProvider>
    </Router>
  );
}

export default App;
