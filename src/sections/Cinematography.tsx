import React from 'react';

const vids = Object.values(import.meta.glob('../../viodes/*.mp4', { eager: true, query: '?url', import: 'default' })) as string[];
const media = [
  { id: 1, type: 'video', src: vids[3] || vids[0] },
  { id: 2, type: 'video', src: vids[7] || vids[0] },
  { id: 3, type: 'video', src: vids[4] || vids[0] },
  { id: 4, type: 'video', src: vids[8] || vids[0] },
];

const Cinematography: React.FC = () => {
  return (
    <section id="cinematography" className="section glass" style={{ minHeight: '100vh', margin: '2rem 0', background: 'rgba(10, 10, 10, 0.4)' }}>
      <div className="container">
        <h2 className="section-title text-gradient">Cinematography</h2>
        <p style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
          Capturing real-life moments with cinematic storytelling
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {media.map((item, i) => (
            <div 
              key={item.id}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: item.type === 'video' ? '16/9' : '4/5',
                gridRow: i === 1 || i === 3 ? 'span 2' : 'span 1' // masonry style hack
              }}
              className="cinematic-box"
            >
              <div 
                className="cinematic-media"
                style={{
                  width: '100%',
                  height: '100%',
                  filter: 'blur(3px) grayscale(50%)',
                  transition: 'all 0.5s ease',
                  cursor: 'crosshair',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'blur(0) grayscale(0)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'blur(3px) grayscale(50%)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    autoPlay loop muted playsInline 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt="Cinematography"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cinematography;
