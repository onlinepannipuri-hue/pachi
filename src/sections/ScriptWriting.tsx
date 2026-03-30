import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SoundToggleVideo from '../components/SoundToggleVideo';
import { ALL_VIDEOS } from '../config/videoConfig';

gsap.registerPlugin(ScrollTrigger);

const ScriptWriting: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vids = ALL_VIDEOS;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title with clip-path reveal
      gsap.from('.sw-title', {
        scrollTrigger: { trigger: '.sw-title', start: 'top 85%' },
        x: -80, opacity: 0, duration: 1, ease: 'power3.out'
      });

      // Quote block
      gsap.from('.sw-quote', {
        scrollTrigger: { trigger: '.sw-quote', start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power2.out'
      });

      // Text paragraphs
      gsap.from('.sw-text', {
        scrollTrigger: { trigger: '.sw-text', start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out'
      });

      // Videos sliding in
      gsap.from('.sw-vid-1', {
        scrollTrigger: { trigger: '.sw-vid-1', start: 'top 85%' },
        x: 80, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.sw-vid-2', {
        scrollTrigger: { trigger: '.sw-vid-2', start: 'top 85%' },
        x: 80, y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="scripts" className="section" ref={containerRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center'
        }}>
          {/* Text Content */}
          <div>
            <h2 className="sw-title section-title text-gradient" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              Script Writing
            </h2>
            <h3 className="sw-text" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
              தமிழ்
            </h3>
            <p className="sw-text" style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Emotion-driven Tamil storytelling designed for engagement. Every great video starts with a compelling script that connects deeply with the audience.
            </p>
            
            <div className="sw-quote glass" style={{ padding: '2rem', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-gold)' }} />
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                "இந்த உலகில் நிஜமான வெற்றி என்பது, உன்னை சுற்றியுள்ள மனிதர்கள் உன்னை பார்த்து எப்படி புன்னகைக்கிறார்கள் என்பதில் தான் இருக்கிறது..."
              </p>
            </div>
          </div>

          {/* Video Examples */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="sw-vid-1" style={{ flex: 1, borderRadius: '16px', overflow: 'hidden', aspectRatio: '9/16', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <SoundToggleVideo src={vids[1] || vids[0]} style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="sw-vid-2" style={{ flex: 1, borderRadius: '16px', overflow: 'hidden', aspectRatio: '9/16', marginTop: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <video src={vids[2] || vids[0]} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptWriting;
