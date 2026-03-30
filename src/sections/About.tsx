import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { ABOUT_VIDEOS } from '../config/videoConfig';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ end, duration, suffix = '' }: { end: number, duration: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => setStarted(true),
    });
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const totalDuration = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalDuration / end), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Get videos for image slideshow from Cloudinary
  const vids = ABOUT_VIDEOS;
  
  // Current visible video index for crossfade effect
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = vids.length;

  // Auto rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.about-title', {
        scrollTrigger: { trigger: '.about-title', start: 'top 85%' },
        y: 60, opacity: 0, duration: 1, ease: 'power3.out'
      });

      // Image container
      gsap.from('.about-image-wrapper', {
        scrollTrigger: { trigger: '.about-image-wrapper', start: 'top 80%' },
        x: -80, opacity: 0, duration: 1.2, ease: 'power3.out'
      });

      // Text items stagger
      gsap.from('.about-text-item', {
        scrollTrigger: { trigger: '.about-text-item', start: 'top 85%' },
        x: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      });

      // Stats animation
      gsap.from('.about-stat', {
        scrollTrigger: { trigger: '.about-stat', start: 'top 90%' },
        y: 40, opacity: 0, scale: 0.8, duration: 0.7, stagger: 0.2, ease: 'back.out(1.7)'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section glass" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="container">
        <h2 className="about-title section-title text-gradient" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          About Me
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Animated Image Slideshow */}
          <div className="about-image-wrapper" ref={imageContainerRef} style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto' 
          }}>
            {/* Decorative rotating rings */}
            <div className="about-ring-1" style={{
              position: 'absolute', width: '115%', height: '115%', borderRadius: '24px',
              border: '2px solid var(--accent-gold)', opacity: 0.25, transform: 'rotate(6deg)', zIndex: 0,
            }} />
            <div className="about-ring-2" style={{
              position: 'absolute', width: '112%', height: '112%', borderRadius: '24px',
              border: '2px solid var(--accent-neon)', opacity: 0.1, transform: 'rotate(-4deg)', zIndex: 0,
            }} />

            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} transitionSpeed={2500} 
              glareEnable={true} glareMaxOpacity={0.12} glareColor="#c5a059" glarePosition="all"
              style={{ width: '100%', zIndex: 2, position: 'relative' }}>
              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/4' }}>
                {/* Video slides with crossfade */}
                {vids.slice(0, totalSlides).map((vid, i) => (
                  <video
                    key={i}
                    src={vid}
                    autoPlay muted loop playsInline
                    style={{
                      position: i === 0 ? 'relative' : 'absolute',
                      top: 0, left: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'top center',
                      borderRadius: '20px',
                      boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(197,160,89,0.2)',
                      border: '3px solid var(--accent-gold)',
                      opacity: activeIndex === i ? 1 : 0,
                      transition: 'opacity 1.2s ease-in-out',
                      zIndex: activeIndex === i ? 1 : 0,
                    }}
                  />
                ))}
                
                {/* Bottom gradient overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
                  background: 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)',
                  borderRadius: '0 0 20px 20px', zIndex: 5,
                }} />
                
                {/* Name badge */}
                <div style={{
                  position: 'absolute', bottom: '1.5rem', left: '50%',
                  transform: 'translateX(-50%)', textAlign: 'center', zIndex: 6,
                }}>
                  <h4 style={{ fontSize: '1.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-display)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    PACHI<span style={{ color: 'var(--accent-gold)' }}>.</span>
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.3rem' }}>
                    Creator & Filmmaker
                  </p>
                </div>

                {/* Slide indicators */}
                <div style={{
                  position: 'absolute', bottom: '5rem', left: '50%', transform: 'translateX(-50%)',
                  display: 'flex', gap: '0.5rem', zIndex: 6,
                }}>
                  {Array.from({ length: totalSlides }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      style={{
                        width: activeIndex === i ? '24px' : '8px', height: '8px',
                        borderRadius: '10px', border: 'none', cursor: 'pointer',
                        background: activeIndex === i ? 'var(--accent-gold)' : 'rgba(255,255,255,0.3)',
                        transition: 'all 0.4s ease',
                      }}
                    />
                  ))}
                </div>
              </div>
            </Tilt>
          </div>

          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 className="about-text-item" style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
              The Face Behind the <span style={{ color: 'var(--accent-gold)' }}>Impact</span>
            </h3>
            <p className="about-text-item" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              Hi, I'm <strong style={{ color: 'var(--text-main)' }}>Pachi</strong>. I am a passionate Digital Marketer, Video Editor, Script Writer, and Cinematographer. I specialize in crafting high-end, scroll-stopping visual content designed specifically to build authority and drive massive organic reach.
            </p>
            <p className="about-text-item" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              From conceptualizing the script to calling action on set, right down to the final cut — I offer a true end-to-end creative solution. My goal is simple: Create cinematic, intentional content that doesn't just look pretty, but actually grows businesses.
            </p>
            
            {/* Stats */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
              <div className="about-stat" style={{ flex: 1, minWidth: '130px', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', borderBottom: '4px solid var(--accent-gold)', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '2.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                  <Counter end={5} duration={3} suffix="+" />
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Experience</p>
              </div>
              <div className="about-stat" style={{ flex: 1, minWidth: '130px', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', borderBottom: '4px solid var(--accent-neon)', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--accent-neon)', fontSize: '2.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                  <Counter end={50} duration={3} suffix="+" />
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Projects Done</p>
              </div>
              <div className="about-stat" style={{ flex: 1, minWidth: '130px', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', borderBottom: '4px solid #c5a059', textAlign: 'center' }}>
                <h4 style={{ color: '#c5a059', fontSize: '2.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ∞
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Creative Impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
