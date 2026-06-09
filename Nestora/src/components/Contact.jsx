import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with AbiTechPros.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Whether you have a question about Nestora, need support, or just want to say hi, we're here for you.</p>

          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <a href="mailto:support@abitechpros.com">support@abitechpros.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Global Remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
