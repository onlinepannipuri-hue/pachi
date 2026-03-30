import React from 'react';
import { BTS_VIDEO } from '../config/videoConfig';

const BehindTheScenes: React.FC = () => {
  const btsVideo = BTS_VIDEO;

  return (
    <section id="bts" className="section" style={{ padding: '0', position: 'relative' }}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* BTS Video Background */}
        <video 
          src={btsVideo} 
          autoPlay loop muted playsInline 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
        />
        
        {/* Overlay Dark Gradient */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0.2) 100%)'
        }} />

        {/* Text Area */}
        <div className="container" style={{ position: 'absolute', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            color: 'var(--text-main)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            margin: 0,
            textShadow: '0 10px 30px rgba(0,0,0,0.8)'
          }}>
            Behind The Scenes
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--accent-gold)',
            marginTop: '1rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}>
            Raw / Unfiltered / Real
          </p>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
