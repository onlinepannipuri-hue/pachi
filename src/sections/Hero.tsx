import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  // Pick a video that is more likely to be bright
  const vids = Object.values(import.meta.glob('../../viodes/*.mp4', { eager: true, query: '?url', import: 'default' })) as string[];
  const heroVideo = vids[2] || vids[0];

  useEffect(() => {
    if (textRef.current) {
      const elements = textRef.current.children;
      gsap.fromTo(elements, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
      );
    }
  }, []);

  return (
    <section 
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {/* Background Video (Placeholder) */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          opacity: 0.8
        }}
      />
      
      {/* Overlay gradient */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.95) 100%)',
          zIndex: 1
        }}
      />

      <div className="container" ref={textRef} style={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
        <h2 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
          Pachi | Digital Marketer | Video Editor | Storyteller
        </h2>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '2rem', maxWidth: '1000px', margin: '0 auto 2rem auto', lineHeight: 1.2, minHeight: '120px' }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('I Don’t Just Edit Videos...<br/>')
                .pauseFor(500)
                .typeString('<span class="text-gradient">I Create Impact.</span>')
                .start();
            }}
            options={{
              delay: 50,
              cursor: '<span style="color:var(--accent-gold); animation: blink 1s step-end infinite">|</span>'
            }}
          />
        </h1>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#work" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
