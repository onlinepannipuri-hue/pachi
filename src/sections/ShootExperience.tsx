import React from 'react';
import { ALL_VIDEOS } from '../config/videoConfig';

const vids = ALL_VIDEOS;
const locations = [
  { id: 1, state: 'Jharkhand', client: 'Excel RI', video: vids[1] || vids[0] },
  { id: 2, state: 'Vizag', client: 'Kankatala', video: vids[2] || vids[0] },
  { id: 3, state: 'Hyderabad', client: 'Rangosha', video: vids[3] || vids[0] },
];

const ShootExperience: React.FC = () => {
  return (
    <section id="experience" className="section glass" style={{ minHeight: '100vh', margin: '2rem 0' }}>
      <div className="container">
        <h2 className="section-title text-gradient">Shoot Experience</h2>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            Worked across multiple locations for shoots
          </p>
          <span style={{ 
            background: 'rgba(197, 160, 89, 0.2)', 
            color: 'var(--accent-gold)', 
            padding: '8px 16px', 
            borderRadius: '20px', 
            fontSize: '0.9rem',
            fontWeight: 600
          }}>
            🌟 Handled selected clients directly
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {locations.map((loc) => (
            <div 
              key={loc.id} 
              className="location-card"
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4/5',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ transition: 'transform 0.4s ease', height: '100%', width: '100%' }}>
                <video 
                  src={loc.video} 
                  autoPlay loop muted playsInline 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}>
                <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--text-main)' }}>{loc.state}</h3>
                <p style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', margin: '0.5rem 0 0 0' }}>
                  Client: {loc.client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShootExperience;
