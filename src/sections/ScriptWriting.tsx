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
            <h2 className="sw-title section-title text-gradient" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Scripted by Me
            </h2>
            <h3 className="sw-text" style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>
              தமிழ்
            </h3>
            
            <div className="sw-text" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
              <p style={{ marginBottom: '0.5rem' }}>• Crafting engaging Tamil stories.</p>
              <p style={{ marginBottom: '0.5rem' }}>• Connecting deeply with the audience.</p>
              <p style={{ marginBottom: '0.5rem' }}>• Focused on emotional resonance.</p>
              <p style={{ marginBottom: '0' }}>• Driving organic reach through words.</p>
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
