import React, { useState, useRef, useEffect } from 'react';

interface SoundToggleVideoProps {
  src: string;
  style?: React.CSSProperties;
  className?: string;
  showLabel?: boolean;
}

const SoundToggleVideo: React.FC<SoundToggleVideoProps> = ({ src, style, className, showLabel = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  // Attempt autoplay unmuted after user interaction
  useEffect(() => {
    const handleFirstClick = () => {
      // After first user interaction, browser allows unmuted playback
      document.removeEventListener('click', handleFirstClick);
    };
    document.addEventListener('click', handleFirstClick);
    return () => document.removeEventListener('click', handleFirstClick);
  }, []);

  return (
    <div style={{ position: 'relative', ...style }} className={className}>
      <video
        ref={videoRef}
        src={src}
        autoPlay loop muted={muted} playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <button
        onClick={toggleMute}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          width: showLabel ? 'auto' : '40px',
          height: '40px',
          borderRadius: showLabel ? '20px' : '50%',
          background: muted ? 'rgba(0,0,0,0.6)' : 'var(--accent-gold)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: muted ? '#fff' : '#000',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: showLabel ? '0 1rem' : '0',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          zIndex: 10,
        }}
        title={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? '🔇' : '🔊'}
        {showLabel && <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{muted ? 'TAP FOR SOUND' : 'PLAYING'}</span>}
      </button>
    </div>
  );
};

export default SoundToggleVideo;
