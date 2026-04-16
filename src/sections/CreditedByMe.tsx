import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import { ALL_VIDEOS } from '../config/videoConfig';

gsap.registerPlugin(ScrollTrigger);

const videos = [
  { id: 1, category: 'Credited by Me', title: 'Project 1', src: ALL_VIDEOS[3] || ALL_VIDEOS[0] },
  { id: 2, category: 'Credited by Me', title: 'Project 2', src: ALL_VIDEOS[4] || ALL_VIDEOS[1] }
];

const CreditedByMe: React.FC = () => {
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cb-title', {
        scrollTrigger: { trigger: '.cb-title', start: 'top 85%' },
        y: 50, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.cb-card', {
        scrollTrigger: { trigger: '.cb-card', start: 'top 90%' },
        y: 60, opacity: 0, scale: 0.9, duration: 0.7, stagger: 0.15, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="credited-by-me" className="section" ref={sectionRef} style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="cb-title section-title" style={{ marginBottom: '1rem' }}>
              <span className="text-gradient">Credited by Me</span>
            </h2>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'
          }}>
            {videos.map(video => (
              <div key={video.id} className="cb-card" style={{ flex: '0 1 300px' }}>
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

export default CreditedByMe;
