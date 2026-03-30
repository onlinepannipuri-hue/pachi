import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FaYoutube } from 'react-icons/fa';
import SoundToggleVideo from '../components/SoundToggleVideo';
import { PERSONAL_CHANNEL_LATEST } from '../config/videoConfig';

const PersonalChannel: React.FC = () => {
  const latestVideo = PERSONAL_CHANNEL_LATEST;
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section id="channel" className="section glass" style={{ position: 'relative', overflow: 'hidden', padding: '0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: ["#c5a059", "#ff0055"] },
            links: { enable: true, color: "#c5a059", distance: 150, opacity: 0.2, width: 1 },
            move: { enable: true, direction: "none", random: true, speed: 1, outModes: { default: "bounce" } },
            number: { density: { enable: true, width: 800, height: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      />)}

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4rem 0' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <motion.div 
            style={{ flex: '1 1 500px' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-gradient" style={{ textAlign: 'left', marginBottom: '1rem', fontSize: '3rem' }}>Personal Channel</h2>
            <p style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
              I don't just create for clients. <br/>
              <strong style={{ color: 'var(--accent-gold)' }}>I create and publish my own content.</strong>
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Practicing what I preach by building an engaged audience through cinematic storytelling, high-retention editing, and value-driven scripts.
            </p>
            
            <motion.a 
              href="https://www.youtube.com/@PachisTime" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', padding: '1rem 2.5rem', boxShadow: '0 0 30px rgba(197, 160, 89, 0.4)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaYoutube size={30} />
              Subscribe to Pachi's Time
            </motion.a>
          </motion.div>

          <motion.div 
            style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div style={{
              width: '100%',
              maxWidth: '350px',
              aspectRatio: '9/16',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(197, 160, 89, 0.3)',
              position: 'relative',
              border: '2px solid var(--accent-gold)'
            }}>
              <SoundToggleVideo 
                src={latestVideo} 
                showLabel={true}
                style={{ width: '100%', height: '100%' }}
              />
              <div style={{ position: 'absolute', bottom: '2rem', left: '0', width: '100%', textAlign: 'center', zIndex: 5 }}>
                <div style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', display: 'inline-block', padding: '0.8rem 1.5rem', borderRadius: '50px', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  Latest Upload 🔥
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="marquee-container" style={{ width: '100%', background: 'var(--accent-gold)', color: '#000', padding: '1.5rem', marginTop: 'auto', position: 'relative', zIndex: 2, overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className="marquee-content" style={{ display: 'inline-block' }}>
          {Array(8).fill("SUBSCRIBE ON YOUTUBE • NEW VIDEOS WEEKLY • ").map((text, i) => (
            <span key={i} style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)', padding: '0 2rem' }}>
              {text}
            </span>
          ))}
          {Array(8).fill("SUBSCRIBE ON YOUTUBE • NEW VIDEOS WEEKLY • ").map((text, i) => (
            <span key={`clone-${i}`} style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)', padding: '0 2rem' }}>
              {text}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PersonalChannel;
