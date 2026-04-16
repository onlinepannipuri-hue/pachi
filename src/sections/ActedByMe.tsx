import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import { ALL_VIDEOS } from '../config/videoConfig';

gsap.registerPlugin(ScrollTrigger);

const videos = [
  { id: 1, category: 'Acted by Me', title: 'Performance 1', src: ALL_VIDEOS[6] || ALL_VIDEOS[2] },
  { id: 2, category: 'Acted by Me', title: 'Performance 2', src: ALL_VIDEOS[7] || ALL_VIDEOS[3] }
];

const ActedByMe: React.FC = () => {
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ab-title', {
        scrollTrigger: { trigger: '.ab-title', start: 'top 85%' },
        y: 50, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.ab-card', {
        scrollTrigger: { trigger: '.ab-card', start: 'top 90%' },
        y: 60, opacity: 0, scale: 0.9, duration: 0.7, stagger: 0.15, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="acted-by-me" className="section" ref={sectionRef} style={{ padding: '6rem 0', background: 'rgba(10, 10, 10, 0.4)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="ab-title section-title" style={{ marginBottom: '1rem' }}>
              <span className="text-gradient">Acted by Me</span>
            </h2>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'
          }}>
            {videos.map(video => (
              <div key={video.id} className="ab-card" style={{ flex: '0 1 300px' }}>
                <VideoCard 
                  src={video.src} title={video.title} category={video.category}
                  onClick={() => setModalVideo(video.src)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <VideoModal src={modalVideo} onClose={() => setModalVideo(null)} />
    </>
  );
};

export default ActedByMe;
