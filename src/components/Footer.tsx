import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(to bottom, rgba(5,5,5,0.95), rgba(0,0,0,1))',
      borderTop: '1px solid var(--glass-border)',
      padding: '5rem 0 2rem',
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
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>
              PACHI<span style={{ color: 'var(--accent-gold)' }}>.</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Cinematic storytelling. High-impact editing. End-to-end creative solutions that don't just look stunning — they grow brands.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {[
                { icon: <FaYoutube size={20} />, href: 'https://www.youtube.com/@PachisTime', hoverBg: '#FF0000' },
                { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/pachistime', hoverBg: '#E4405F' },
                { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/pachiyappan-s-01241627b', hoverBg: '#0077b5' },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer"
                  style={{
                    width: '42px', height: '42px', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.05)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = social.hoverBg; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 20px ${social.hoverBg}40`; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Portfolio', href: '#work' },
                { label: 'Channel', href: '#channel' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <a key={link.label} href={link.href} 
                  style={{ color: 'var(--text-muted)', fontSize: '0.95rem', transition: 'all 0.3s' }}
                  onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent-gold)'; e.currentTarget.style.paddingLeft = '8px'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.paddingLeft = '0'; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['Video Editing', 'Script Writing', 'Cinematography', 'Digital Marketing', 'Content Strategy'].map(service => (
                <span key={service} style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{service}</span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="tel:+917598480664" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <Phone size={18} color="var(--accent-gold)" /> +91 7598 480 664
              </a>
              <a href="mailto:pachipachi044@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <Mail size={18} color="var(--accent-gold)" /> pachipachi044@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '2rem',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
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
