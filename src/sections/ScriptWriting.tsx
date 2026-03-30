import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScriptWriting: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vids = Object.values(import.meta.glob('../../viodes/*.mp4', { eager: true, query: '?url', import: 'default' })) as string[];

  useEffect(() => {
    // Basic text reveal animation
    const ctx = gsap.context(() => {
      gsap.from('.script-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="scripts" className="section" ref={containerRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Text Content */}
          <div className="script-text">
            <h2 className="section-title text-gradient" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              Script Writing
            </h2>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
              தமிழ்
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Emotion-driven Tamil storytelling designed for engagement. Every great video starts with a compelling script that connects deeply with the audience.
            </p>
            
            <div className="glass" style={{ padding: '2rem', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-gold)' }} />
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
                "இந்த உலகில் நிஜமான வெற்றி என்பது, உன்னை சுற்றியுள்ள மனிதர்கள் உன்னை பார்த்து எப்படி புன்னகைக்கிறார்கள் என்பதில் தான் இருக்கிறது..."
              </p>
            </div>
          </div>

          {/* Video Examples */}
          <div className="script-text" style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', aspectRatio: '9/16' }}>
              <video 
                src={vids[1] || vids[0]} 
                autoPlay loop muted playsInline 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', aspectRatio: '9/16', marginTop: '2rem' }}>
              <video 
                src={vids[2] || vids[0]} 
                autoPlay loop muted playsInline 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptWriting;
