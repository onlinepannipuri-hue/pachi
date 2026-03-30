import React, { useState } from 'react';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';

// Auto-import all videos from the viodes folder at the root
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

  const filteredVideos = activeTab === 'All' 
    ? videos 
    : videos.filter(v => v.category === activeTab);

  return (
    <>
      <section id="work" className="section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              <span className="text-gradient">Video Editing Portfolio</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
              High-engagement video edits with organic reach (No Paid Ads)
            </p>
          </div>

          {/* Folder / Tab Navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '30px',
                  background: activeTab === cat ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                  color: activeTab === cat ? '#000' : 'var(--text-main)',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  border: '1px solid',
                  borderColor: activeTab === cat ? 'transparent' : 'rgba(255,255,255,0.1)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {filteredVideos.map(video => (
              <VideoCard 
                key={video.id}
                src={video.src}
                title={video.title}
                category={video.category}
                onClick={() => setModalVideo(video.src)}
              />
            ))}
          </div>
        </div>
      </section>

      <VideoModal src={modalVideo} onClose={() => setModalVideo(null)} />
    </>
  );
};

export default VideoEditing;
