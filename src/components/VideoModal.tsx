import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

interface VideoModalProps {
  src: string | null;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ src, onClose }) => {
  useEffect(() => {
    if (src) {
      gsap.fromTo('.video-modal-overlay', { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo('.video-modal-content', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => { document.body.style.overflow = 'auto'; };
  }, [src]);

  if (!src) return null;

  return (
    <div 
      className="video-modal-overlay"
      style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(5, 5, 5, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={onClose}
    >
      <button 
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white',
          padding: '0.5rem',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10000
        }}
        onClick={onClose}
      >
        <X size={24} />
      </button>
      
      <div 
        className="video-modal-content"
        style={{
          width: '90%',
          maxWidth: '500px', // Reels are vertical
          aspectRatio: '9/16',
          backgroundColor: '#000',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 0 50px rgba(197, 160, 89, 0.15)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <video 
          src={src} 
          autoPlay 
          controls 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default VideoModal;
