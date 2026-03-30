import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';

gsap.registerPlugin(ScrollTrigger);

const videoModules = import.meta.glob('../../viodes/*.mp4', { eager: true, query: '?url', import: 'default' });
const rawVideos = Object.values(videoModules) as string[];

const videos = rawVideos.map((src, index) => ({
  id: index + 1,
  category: ['Reels', 'Client Work', 'Viral Videos', 'Edits'][index % 4],
  title: src.split('/').pop()?.split('.')[0]?.substring(0, 25) || `Video ${index + 1}`,
  src: src
}));

const categories = ['All', 'Reels', 'Client Work', 'Viral Videos', 'Edits'];

const VideoEditing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredVideos = activeTab === 'All' 
    ? videos 
    : videos.filter(v => v.category === activeTab);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from('.ve-title', {
        scrollTrigger: { trigger: '.ve-title', start: 'top 85%' },
        y: 50, opacity: 0, duration: 1, ease: 'power3.out'
      });
      // Subtitle
      gsap.from('.ve-subtitle', {
        scrollTrigger: { trigger: '.ve-subtitle', start: 'top 85%' },
        y: 30, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out'
      });
      // Tabs stagger
      gsap.from('.ve-tab', {
        scrollTrigger: { trigger: '.ve-tab', start: 'top 88%' },
        y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out'
      });
      // Cards stagger
      gsap.from('.ve-card', {
        scrollTrigger: { trigger: '.ve-card', start: 'top 90%' },
        y: 60, opacity: 0, scale: 0.9, duration: 0.7, stagger: 0.15, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="work" className="section" ref={sectionRef} style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="ve-title section-title" style={{ marginBottom: '1rem' }}>
              <span className="text-gradient">Video Editing Portfolio</span>
            </h2>
            <p className="ve-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
              High-engagement video edits with organic reach (No Paid Ads)
            </p>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                className="ve-tab"
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.75rem 1.5rem', borderRadius: '30px',
                  background: activeTab === cat ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                  color: activeTab === cat ? '#000' : 'var(--text-main)',
                  fontWeight: 600, transition: 'all 0.3s ease',
                  border: '1px solid', borderColor: activeTab === cat ? 'transparent' : 'rgba(255,255,255,0.1)',
                  transform: activeTab === cat ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem'
          }}>
            {filteredVideos.map(video => (
              <div key={video.id} className="ve-card">
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
