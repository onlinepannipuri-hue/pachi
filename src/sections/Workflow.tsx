import React from 'react';
import { WORKFLOW_VIDEOS } from '../config/videoConfig';

const steps = [
  { id: 1, title: 'Client Handling', icon: '🤝', video: WORKFLOW_VIDEOS.client },
  { id: 2, title: 'Script', icon: '📝', video: WORKFLOW_VIDEOS.script },
  { id: 3, title: 'Shoot', icon: '🎥', video: WORKFLOW_VIDEOS.shoot },
  { id: 4, title: 'Edit', icon: '✂️', video: WORKFLOW_VIDEOS.edit },
  { id: 5, title: 'Delivery', icon: '🚀', video: WORKFLOW_VIDEOS.client },
];

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <h2 className="section-title text-gradient">Project Management</h2>
        <p style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
          Handled complete projects independently from start to finish
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {steps.map((step, i) => (
            <div 
              key={step.id}
              className="glass"
              style={{
                position: 'relative',
                padding: '2rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                overflow: 'hidden',
                marginLeft: i % 2 === 0 ? '0' : '4rem',
                marginRight: i % 2 === 0 ? '4rem' : '0',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                const vid = e.currentTarget.querySelector('video');
                if (vid) vid.style.opacity = '0.4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                const vid = e.currentTarget.querySelector('video');
                if (vid) vid.style.opacity = '0.1';
              }}
            >
              {/* Background Video */}
              <video 
                src={step.video}
                autoPlay loop muted playsInline
                style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  objectFit: 'cover',
                  opacity: 0.1,
                  zIndex: 0,
                  transition: 'opacity 0.3s ease'
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 1, fontSize: '3rem' }}>
                {step.icon}
              </div>
              <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>Step 0{step.id}</h3>
                <h4 style={{ fontSize: '2rem', margin: 0 }}>{step.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
