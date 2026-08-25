import React from 'react';
import { useSiteContent } from '../context/SiteContentContext.jsx';
import { MessageSquare, Laptop, Award, Lightbulb } from 'lucide-react';

export default function AdminOverview() {
  const { lists, loading } = useSiteContent();

  return (
    <div>
      <p className="admin-subtitle">Manage every editable part of the Srujaatrans website from here.</p>
      
      <div className="admin-card">
        <h3>Content Overview</h3>
        {loading ? (
          <p>Loading…</p>
        ) : (
          <div className="admin-stats-grid">
            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                <MessageSquare size={24} />
              </div>
              <div className="admin-stat-details">
                <h4>Reviews</h4>
                <p>{lists.reviews.length}</p>
              </div>
            </div>
            
            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                <Laptop size={24} />
              </div>
              <div className="admin-stat-details">
                <h4>Work Samples</h4>
                <p>{lists.workItems.length}</p>
              </div>
            </div>
            
            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                <Award size={24} />
              </div>
              <div className="admin-stat-details">
                <h4>Certifications</h4>
                <p>{lists.certifications.length}</p>
              </div>
            </div>
            
            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                <Lightbulb size={24} />
              </div>
              <div className="admin-stat-details">
                <h4>Skills</h4>
                <p>{lists.skills.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="admin-card">
        <h3>Quick Tips</h3>
        <ul className="admin-tips-list">
          <li>Use the language tabs on each text field to translate into English, Marathi, Hindi and German.</li>
          <li>Uploaded images are stored on the server and used immediately after saving.</li>
          <li>Changes appear on the live site as soon as you save — no rebuild needed.</li>
        </ul>
      </div>
    </div>
  );
}
