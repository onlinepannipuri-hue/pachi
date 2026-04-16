import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import { ALL_VIDEOS } from '../config/videoConfig';

gsap.registerPlugin(ScrollTrigger);

const AssistantCameraman: React.FC = () => {
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // B-roll video, bureau taken
  const videoSrc = ALL_VIDEOS[7] || ALL_VIDEOS[1];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ac-title', {
        scrollTrigger: { trigger: '.ac-title', start: 'top 85%' },
        y: 50, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.ac-card', {
        scrollTrigger: { trigger: '.ac-card', start: 'top 90%' },
        y: 60, opacity: 0, scale: 0.9, duration: 0.7, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="assistant-cameraman" className="section" ref={sectionRef} style={{ padding: '6rem 0', background: 'rgba(10, 10, 10, 0.4)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="ac-title section-title" style={{ marginBottom: '1rem' }}>
              <span className="text-gradient">Assistant Cameraman</span>
            </h2>
            <p className="ve-desc glass" style={{ display: 'inline-block', padding: '1rem 2rem', borderRadius: '12px', marginTop: '1rem', color: 'var(--text-main)', fontStyle: 'italic' }}>
              B-rolls that bring the vision to life.
            </p>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'
          }}>
            <div className="ac-card" style={{ flex: '0 1 300px' }}>
              <VideoCard 
                src={videoSrc} title="B-Rols" category="Assistant Cameraman"
                onClick={() => setModalVideo(videoSrc)}
              />
            </div>
          </div>
        </div>
      </section>
      <VideoModal src={modalVideo} onClose={() => setModalVideo(null)} />
    </>
  );
};

export default AssistantCameraman;
