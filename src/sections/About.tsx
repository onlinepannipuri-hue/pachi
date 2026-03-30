import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration, suffix = '' }: { end: number, duration: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    if (start === end) return;
    const totalDuration = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalDuration / end), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <>{count}{suffix}</>;
};

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Use a video as profile "image" via canvas capture
  const vids = Object.values(import.meta.glob('../../viodes/*.mp4', { eager: true, query: '?url', import: 'default' })) as string[];
  const profileVideo = vids[5] || vids[0]; // Pick a good one
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterReady, setPosterReady] = useState(false);
  const [posterUrl, setPosterUrl] = useState('');

  useEffect(() => {
    // Capture a frame from the video as a profile photo
    const video = videoRef.current;
    if (!video) return;
    
    const handleLoaded = () => {
      video.currentTime = 1; // seek to 1s for a good frame
    };
    
    const handleSeeked = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0);
          const url = canvas.toDataURL('image/jpeg', 0.9);
          setPosterUrl(url);
          setPosterReady(true);
        }
      } catch (e) {
        // fallback: just show video
        setPosterReady(false);
      }
    };

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('seeked', handleSeeked);
    
    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, []);

  return (
    <section id="about" className="section glass" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Hidden video for frame capture */}
      <video ref={videoRef} src={profileVideo} muted preload="auto" style={{ display: 'none' }} />
      
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title text-gradient" 
          style={{ textAlign: 'center', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Profile Photo with Premium Styling */}
          <motion.div 
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%', maxWidth: '400px', margin: '0 auto' }}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            {/* Decorative ring behind */}
            <div style={{
              position: 'absolute',
              width: '110%',
              height: '110%',
              borderRadius: '24px',
              border: '2px solid var(--accent-gold)',
              opacity: 0.3,
              transform: 'rotate(6deg)',
              zIndex: 0,
            }} />
            <div style={{
              position: 'absolute',
              width: '108%',
              height: '108%',
              borderRadius: '24px',
              border: '2px solid var(--accent-neon)',
              opacity: 0.15,
              transform: 'rotate(-4deg)',
              zIndex: 0,
            }} />

            <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.04} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.15} glareColor="#c5a059" glarePosition="all" style={{ width: '100%', zIndex: 2, position: 'relative' }}>
              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
                {posterReady ? (
                  <img 
                    src={posterUrl} 
                    alt="Pachiyappan - Digital Marketer & Video Editor" 
                    style={{
                      width: '100%',
                      aspectRatio: '3/4',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                      borderRadius: '20px',
                      boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(197, 160, 89, 0.2)',
                      border: '3px solid var(--accent-gold)',
                    }}
                  />
                ) : (
                  <video
                    src={profileVideo}
                    autoPlay muted loop playsInline
                    style={{
                      width: '100%',
                      aspectRatio: '3/4',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                      borderRadius: '20px',
                      boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(197, 160, 89, 0.2)',
                      border: '3px solid var(--accent-gold)',
                    }}
                  />
                )}
                {/* Bottom gradient overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 100%)',
                  borderRadius: '0 0 20px 20px',
                }} />
                {/* Name badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
                }}>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--text-main)', fontFamily: 'var(--font-display)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    PACHI<span style={{ color: 'var(--accent-gold)' }}>.</span>
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.3rem' }}>
                    Creator & Filmmaker
                  </p>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Text Content with Framer Motion Stagger */}
          <motion.div 
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } }
            }}
          >
            <motion.h3 variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: {duration: 0.6, ease: "easeOut"} } }} style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
              The Face Behind the <span style={{ color: 'var(--accent-gold)' }}>Impact</span>
            </motion.h3>
            <motion.p variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: {duration: 0.6, ease: "easeOut"} } }} style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              Hi, I'm <strong style={{color: 'var(--text-main)'}}>Pachi</strong>. I am a passionate Digital Marketer, Video Editor, Script Writer, and Cinematographer. I specialize in crafting high-end, scroll-stopping visual content designed specifically to build authority and drive massive organic reach.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: {duration: 0.6, ease: "easeOut"} } }} style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              From conceptualizing the script to calling action on set, right down to the final cut in editing, I offer a true end-to-end creative solution. My goal is simple: Create cinematic, intentional content that doesn't just look pretty, but actually grows businesses.
            </motion.p>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"} } }} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ flex: 1, minWidth: '120px', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderBottom: '4px solid var(--accent-gold)', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '2rem', marginBottom: '0.5rem' }}>
                  {inView ? <Counter end={5} duration={3} suffix="+" /> : "0+"}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Experience</p>
              </div>
              <div style={{ flex: 1, minWidth: '120px', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderBottom: '4px solid var(--accent-neon)', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--accent-neon)', fontSize: '2.5rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ∞
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Creative Impact</p>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
