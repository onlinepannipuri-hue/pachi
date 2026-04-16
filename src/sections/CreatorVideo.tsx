import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import { ALL_VIDEOS } from '../config/videoConfig';

gsap.registerPlugin(ScrollTrigger);

const CreatorVideo: React.FC = () => {
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Hotel video (food review)
  const videoSrc = ALL_VIDEOS[6] || ALL_VIDEOS[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cv-title', {
        scrollTrigger: { trigger: '.cv-title', start: 'top 85%' },
        y: 50, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.cv-card', {
        scrollTrigger: { trigger: '.cv-card', start: 'top 90%' },
        y: 60, opacity: 0, scale: 0.9, duration: 0.7, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="creator-video" className="section" ref={sectionRef} style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="cv-title section-title" style={{ marginBottom: '1rem' }}>
              <span className="text-gradient">Creator Video</span>
            </h2>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'
          }}>
            <div className="cv-card" style={{ flex: '0 1 300px' }}>
              <VideoCard 
                src={videoSrc} title="Creator Video" category="Hotel Visit"
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

export default CreatorVideo;
