import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, Phone, AlertCircle } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mgopkwpj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        })
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const inputStyle: React.CSSProperties = {
    padding: '1rem 1.2rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: 'white',
    width: '100%',
    outline: 'none',
    fontSize: '1rem',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--accent-gold)';
    e.currentTarget.style.boxShadow = '0 0 20px rgba(197,160,89,0.15)';
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <section id="contact" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }} ref={ref}>
      <div className="container">
        
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title text-gradient">Let's Create Impact</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Ready to elevate your brand? Let's talk about your next project.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem',
        }}>
          
          {/* Contact Form */}
          <motion.div 
            className="glass" 
            style={{ padding: '3rem', borderRadius: '20px', border: '1px solid rgba(197,160,89,0.1)' }}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Get in Touch</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>Fill out the form and I'll get back within 24 hours.</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input 
                  type="text" placeholder="Your Name" required
                  value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
                />
                <input 
                  type="email" placeholder="Your Email" required
                  value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
                />
              </div>
              <input 
                type="tel" placeholder="Phone Number (optional)"
                value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
              />
              <textarea 
                placeholder="Tell me about your project..." required rows={5}
                value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                style={{ ...inputStyle, resize: 'vertical' }} onFocus={focusStyle} onBlur={blurStyle}
              />

              <button 
                type="submit" className="btn btn-primary" disabled={status === 'sending'}
                style={{ 
                  width: '100%', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  background: status === 'sent' ? '#22c55e' : status === 'error' ? '#ef4444' : ''
                }}
              >
                {status === 'idle' && <><Send size={18} /> Send Message</>}
                {status === 'sending' && '⏳ Sending...'}
                {status === 'sent' && <><CheckCircle size={18} /> Message Sent Successfully!</>}
                {status === 'error' && <><AlertCircle size={18} /> Failed — Try Again</>}
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.2rem' }}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Connect Directly</h3>
            
            {[
              { href: 'tel:+917598480664', icon: <Phone color="var(--accent-gold)" size={24} />, label: 'Phone', value: '+91 7598 480 664' },
              { href: 'mailto:pachipachi044@gmail.com', icon: <Mail color="var(--accent-gold)" size={24} />, label: 'Email', value: 'pachipachi044@gmail.com' },
              { href: 'https://www.linkedin.com/in/pachiyappan-s-01241627b', icon: <FaLinkedin color="#0077b5" size={24} />, label: 'LinkedIn', value: 'pachiyappan-s' },
              { href: 'https://www.instagram.com/pachistime', icon: <FaInstagram color="#E4405F" size={24} />, label: 'Instagram', value: '@pachistime' },
              { href: 'https://www.youtube.com/@PachisTime', icon: <FaYoutube color="#FF0000" size={24} />, label: 'YouTube', value: "@Pachi's Time" },
            ].map((link, i) => (
              <motion.a 
                key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.2rem 1.5rem', 
                  background: 'rgba(255,255,255,0.03)', borderRadius: '14px', transition: 'all 0.3s ease',
                  border: '1px solid transparent', color: 'var(--text-main)', textDecoration: 'none',
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.transform = 'translateX(8px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateX(0)'; }}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {link.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{link.label}</div>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>{link.value}</div>
                </div>
              </motion.a>
            ))}

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.2rem 1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin color="var(--accent-neon)" size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Location</div>
                <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>Based in India 🇮🇳</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
