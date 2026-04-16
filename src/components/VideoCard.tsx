import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoCardProps {
  src: string;
  title: string;
  category: string;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, title, onClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div 
      className="video-card glass"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '9/16', // Reels format
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        boxShadow: isHovered ? '0 10px 30px rgba(197, 160, 89, 0.2)' : 'none'
      }}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted={isMuted}
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      
      {/* Overlays */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: isHovered ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.5)',
        transition: 'background 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem'
      }}
      onClick={onClick}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {category && (
            <span style={{ 
              background: 'rgba(197, 160, 89, 0.8)', 
              color: '#000', 
              padding: '4px 8px', 
              borderRadius: '4px', 
              fontSize: '0.75rem', 
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>
              {category}
            </span>
          )}
          
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
            style={{ 
              background: 'rgba(0,0,0,0.5)', 
              padding: '8px', 
              borderRadius: '50%',
              color: 'var(--text-main)',
              display: isHovered ? 'block' : 'none'
            }}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>

        <div>
          <h3 style={{ fontSize: '1.2rem', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{title}</h3>
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none'
      }}>
        <Maximize2 size={32} color="rgba(255,255,255,0.8)" />
      </div>
    </div>
  );
};

export default VideoCard;
