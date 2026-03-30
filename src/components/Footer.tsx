import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'rgba(5,5,5,0.95)',
      borderTop: '1px solid var(--glass-border)',
      padding: '4rem 0 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              PACHI<span style={{ color: 'var(--accent-gold)' }}>.</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Cinematic storytelling. High-impact editing. End-to-end creative solutions that don't just look stunning — they grow brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.2rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Work', href: '#work' },
                { label: 'Channel', href: '#channel' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  style={{ color: 'var(--text-muted)', fontSize: '0.95rem', transition: 'color 0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.2rem' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['Video Editing', 'Script Writing', 'Cinematography', 'Digital Marketing', 'Content Strategy'].map(service => (
                <span key={service} style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.2rem' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                { icon: <FaYoutube size={22} />, href: 'https://www.youtube.com/@PachisTime', bg: '#FF0000' },
                { icon: <FaInstagram size={22} />, href: 'https://www.instagram.com/pachistime', bg: 'var(--accent-neon)' },
                { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/pachiyappan-s-01241627b', bg: '#0077b5' },
                { icon: <Mail size={22} />, href: 'mailto:pachipachi044@gmail.com', bg: 'var(--accent-gold)' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = social.bg; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a href="mailto:pachipachi044@gmail.com" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              pachipachi044@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {currentYear} <span style={{ color: 'var(--accent-gold)' }}>PACHI</span>. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Crafted with 🎬 passion & precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
