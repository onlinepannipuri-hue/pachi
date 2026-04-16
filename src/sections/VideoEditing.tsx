import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import { ALL_VIDEOS } from '../config/videoConfig';

gsap.registerPlugin(ScrollTrigger);

const rawVideos = ALL_VIDEOS;

const videos = [
  { id: 1, category: 'Edited by Me', title: 'Viral Edit', src: rawVideos[5] || rawVideos[0] },
  { id: 2, category: 'Edited by Me', title: 'Reel Edit', src: rawVideos[2] || rawVideos[1] }
];

const VideoEditing: React.FC = () => {
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ve-title', {
        scrollTrigger: { trigger: '.ve-title', start: 'top 85%' },
        y: 50, opacity: 0, duration: 1, ease: 'power3.out'
      });
      gsap.from('.ve-desc', {
        scrollTrigger: { trigger: '.ve-desc', start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out'
      });
      gsap.from('.ve-card', {
        scrollTrigger: { trigger: '.ve-card', start: 'top 90%' },
        y: 60, opacity: 0, scale: 0.9, duration: 0.7, stagger: 0.15, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="edited-by-me" className="section" ref={sectionRef} style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="ve-title section-title" style={{ marginBottom: '1rem' }}>
              <span className="text-gradient">Edited by Me</span>
            </h2>
            
            <div className="ve-desc glass" style={{ 
              display: 'inline-block', 
              padding: '1.5rem 2.5rem', 
              borderRadius: '12px', 
              marginTop: '1rem',
              border: '1px solid rgba(197, 160, 89, 0.3)'
            }}>
              <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 600 }}>Tools Used:</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '0.8rem' }}>
                <span style={{ 
                  background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '6px', 
                  backdropFilter: 'blur(4px)', color: '#fff', fontWeight: 500
                }}>Premiere Pro</span>
                <span style={{ 
                  background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '6px', 
                  backdropFilter: 'blur(4px)', color: '#fff', fontWeight: 500
                }}>CapCut</span>
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'
          }}>
            {videos.map(video => (
              <div key={video.id} className="ve-card" style={{ flex: '0 1 300px' }}>
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

export default VideoEditing;
