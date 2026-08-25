import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext.jsx';
import { Shield, AlertCircle } from 'lucide-react';
import './Admin.css';

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(username, password);
      navigate('/admin');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div className="admin-login-header-icon">
            <Shield size={32} />
          </div>
          <h1>Admin Portal</h1>
          <p>Sign in to manage Srujaatrans content.</p>
        </div>
        
        {error && (
          <div className="admin-error">
            <AlertCircle size={18} />
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="admin-field">
            <label>Username</label>
            <input 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              autoFocus 
              placeholder="Enter username"
            />
          </div>
          <div className="admin-field">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter password"
            />
          </div>
          <button className="admin-btn admin-btn-primary admin-btn-block" disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
