import { useEffect } from 'react';
import { Timer, Headphones, History, Layout, Apple } from 'lucide-react';

const Landing = () => {
  useEffect(() => {
    // Basic intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transitionDelay = `${i * 100}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="animate-fade-in">Focus Better.<br/>Achieve More.</h1>
          <p className="animate-fade-in delay-100">
            Nestora helps you create distraction-free focus sessions with customizable ambient sounds, session tracking, and productivity insights.
          </p>
          <div className="animate-fade-in delay-200">
            <a href="https://apps.apple.com/us/app/nestora/id6777993756" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Apple size={24} />
              Available on the App Store
            </a>
          </div>
        </div>
        <div className="hero-image animate-fade-in delay-300">
          <img src="/mockup.png" alt="Nestora App Mockup" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Timer size={28} />
            </div>
            <h3>Focus Sessions</h3>
            <p>Create timed focus sessions designed to help you stay productive.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Headphones size={28} />
            </div>
            <h3>Ambient Sound Mixer</h3>
            <p>Mix sounds like rain, forest, wind, and white noise to build your ideal workspace.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <History size={28} />
            </div>
            <h3>Session History</h3>
            <p>Review recent focus sessions and track your productivity journey.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Layout size={28} />
            </div>
            <h3>Simple Design</h3>
            <p>Clean and intuitive interface built to keep your attention where it matters.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
