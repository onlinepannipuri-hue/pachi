import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CINEMATOGRAPHY_MEDIA } from '../config/videoConfig';

gsap.registerPlugin(ScrollTrigger);

const media = [
  { id: 1, type: 'video' as const, src: CINEMATOGRAPHY_MEDIA[0] },
  { id: 2, type: 'video' as const, src: CINEMATOGRAPHY_MEDIA[1] },
  { id: 3, type: 'video' as const, src: CINEMATOGRAPHY_MEDIA[2] },
  { id: 4, type: 'video' as const, src: CINEMATOGRAPHY_MEDIA[3] },
];

const Cinematography: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cin-title', {
        scrollTrigger: { trigger: '.cin-title', start: 'top 85%' },
        y: 50, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.cin-subtitle', {
        scrollTrigger: { trigger: '.cin-subtitle', start: 'top 88%' },
        y: 30, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power2.out'
      });
      gsap.from('.cin-card', {
        scrollTrigger: { trigger: '.cin-card', start: 'top 90%' },
        y: 80, opacity: 0, scale: 0.85, duration: 0.9, stagger: 0.2, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cinematography" ref={sectionRef} className="section glass" style={{ minHeight: '100vh', margin: '2rem 0', background: 'rgba(10, 10, 10, 0.4)' }}>
      <div className="container">
        <h2 className="cin-title section-title text-gradient">Cinematography</h2>
        <p className="cin-subtitle" style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
          Capturing real-life moments with cinematic storytelling
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'
        }}>
          {media.map((item, i) => (
            <div 
              key={item.id}
              className="cin-card"
              style={{
                borderRadius: '16px', overflow: 'hidden', position: 'relative',
                aspectRatio: '16/9',
                gridRow: i === 1 || i === 3 ? 'span 2' : 'span 1',
                boxShadow: '0 15px 30px rgba(0,0,0,0.4)'
              }}
            >
              <div 
                style={{
                  width: '100%', height: '100%',
                  filter: 'blur(3px) grayscale(50%)',
                  transition: 'all 0.5s ease', cursor: 'crosshair',
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
                <video 
                  src={item.src} autoPlay loop muted playsInline 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cinematography;
