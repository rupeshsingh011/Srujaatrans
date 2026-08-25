import React from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext.jsx';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  User, 
  Briefcase, 
  Wrench, 
  Building2, 
  Lightbulb, 
  Laptop, 
  Award, 
  MessageSquare, 
  HelpCircle, 
  PanelBottom, 
  Navigation,
  LogOut,
  ExternalLink,
  Settings
} from 'lucide-react';
import './Admin.css';

const NAV_ITEMS = [
  { to: '/admin', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/admin/hero', label: 'Hero', icon: ImageIcon },
  { to: '/admin/about', label: 'About', icon: User },
  { to: '/admin/experience', label: 'Experience', icon: Briefcase },
  { to: '/admin/services', label: 'Services', icon: Wrench },
  { to: '/admin/companies', label: 'Companies', icon: Building2 },
  { to: '/admin/skills', label: 'Skills', icon: Lightbulb },
  { to: '/admin/work', label: 'Work', icon: Laptop },
  { to: '/admin/certifications', label: 'Certifications', icon: Award },
  { to: '/admin/reviews', label: 'Reviews', icon: MessageSquare },
  { to: '/admin/faq', label: 'FAQ', icon: HelpCircle },
  { to: '/admin/footer', label: 'Footer & Contact', icon: PanelBottom },
  { to: '/admin/navbar', label: 'Navbar', icon: Navigation },
];

export default function AdminLayout() {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const currentNav = NAV_ITEMS.find(item => item.to === location.pathname || (item.to !== '/admin' && location.pathname.startsWith(item.to)));

  return (
    <div className="admin-root">
      <div className="admin-shell">
        <aside className="admin-sidebar">
          <div className="admin-sidebar-header">
            <Settings className="admin-sidebar-header-icon" size={24} />
            <h2>Srujaatrans</h2>
          </div>
          <nav>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}
                >
                  <Icon />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
          <div className="admin-sidebar-footer">
            <a href="/" className="admin-view-site-link" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              View live site
            </a>
            <button className="admin-btn admin-btn-secondary admin-btn-block" onClick={handleLogout}>
              <LogOut size={16} />
              Log Out
            </button>
          </div>
        </aside>
        
        <div className="admin-main-wrapper">
          <header className="admin-main-header">
            <h1 className="admin-main-header-title">{currentNav ? currentNav.label : 'Admin'}</h1>
          </header>
          <main className="admin-main">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
