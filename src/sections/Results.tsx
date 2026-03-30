import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { id: 1, label: 'Views', value: 10, suffix: 'M+' },
  { id: 2, label: 'Reach', value: 25, suffix: 'M+' },
  { id: 3, label: 'Engagement Rate', value: 15, suffix: '%' },
];

const Results: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>('.counter-value');
      
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top 70%',
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: target,
              duration: 2,
              ease: 'power3.out',
              snap: { innerHTML: 1 },
              onUpdate: function() {
                counter.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)).toString();
              }
            });
          },
          once: true
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="results" ref={containerRef} className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <h2 className="section-title text-gradient">Results & Impact</h2>
        <p style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Focusing on highly-engaging content that performs.
          <br/>
          <strong style={{ color: 'var(--accent-gold)', fontSize: '1.5rem', display: 'block', marginTop: '1rem' }}>
            Achieved organic growth without paid ads.
          </strong>
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {metrics.map((metric) => (
            <div key={metric.id} className="glass" style={{ padding: '3rem 2rem', borderRadius: '16px' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span className="counter-value" data-target={metric.value}>0</span>
                <span>{metric.suffix}</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)' }}>
                {metric.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
