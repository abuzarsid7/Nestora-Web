

const Support = () => {
  return (
    <div className="support-page animate-fade-in">
      <div className="support-header">
        <h1>Nestora Support</h1>
        <p>Thank you for using Nestora.</p>
        <p>If you experience any issues, have questions, or would like to suggest improvements, please contact us.</p>
        
        <div className="contact-box">
          <p className="contact-label">Support Email</p>
          <a href="mailto:support@abitechpros.com" className="contact-email">support@abitechpros.com</a>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        
        <div className="faq-grid">
          <div className="faq-card">
            <h3>How do I start a focus session?</h3>
            <p>Open the Focus tab, select your preferred sounds, choose a duration, and tap Start Session.</p>
          </div>

          <div className="faq-card">
            <h3>Can I end a session early?</h3>
            <p>Yes. You can stop a session at any time.</p>
          </div>

          <div className="faq-card">
            <h3>Where can I see previous sessions?</h3>
            <p>Recent sessions are available from the Home screen.</p>
          </div>

          <div className="faq-card">
            <h3>The sounds are not playing</h3>
            <p>Check the following on your device:</p>
            <ul>
              <li>Device volume</li>
              <li>Silent mode settings</li>
              <li>Audio permissions</li>
            </ul>
          </div>

          <div className="faq-card bug-report-card">
            <h3>I found a bug</h3>
            <p>Please email: <a href="mailto:support@abitechpros.com">support@abitechpros.com</a></p>
            <p className="mt-2">Include:</p>
            <ul>
              <li>Device model</li>
              <li>iOS version</li>
              <li>Description of issue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
