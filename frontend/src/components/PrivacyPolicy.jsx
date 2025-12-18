import React, { useEffect, useState, useRef } from 'react';
import './styles/privacy_policy.css';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRef = useRef(null);

  const tableOfContents = [
    { id: 'introduction', title: '1. Introduction', level: 1 },
    { id: 'information-collect', title: '2. Information We Collect', level: 1 },
    { id: 'personal-information', title: '2.1 Personal Information', level: 2 },
    { id: 'usage-content', title: '2.2 Usage & Content Data', level: 2 },
    { id: 'location-info', title: '2.3 Location Information', level: 2 },
    { id: 'how-we-use', title: '3. How We Use Your Information', level: 1 },
    { id: 'sharing-disclosure', title: '4. Information Sharing', level: 1 },
    { id: 'data-retention', title: '5. Data Retention', level: 1 },
    { id: 'security', title: '6. Security of Your Information', level: 1 },
    { id: 'your-rights', title: '7. Your Rights and Choices', level: 1 },
    { id: 'children-privacy', title: '8. Children\'s Privacy', level: 1 },
    { id: 'international', title: '9. International Data Transfers', level: 1 },
    { id: 'changes', title: '10. Changes to This Policy', level: 1 },
    { id: 'contact', title: '11. Contact Information', level: 1 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 500);

      const sections = document.querySelectorAll('.privacy-section');
      let current = activeSection;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="privacy-container">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      <header className="fixed top-0 w-full z-50 glass-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FFB300] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-[#111111] font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold text-white">Locofy</span>
            </div>
          </div>
        </div>
      </header>

      <div className="privacy-layout">
        <aside className="sidebar">
          <div className="sidebar-sticky">
            <h3 className="sidebar-title">Contents</h3>
            <nav className="table-of-contents">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  className={`toc-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  style={{ paddingLeft: `${item.level * 12}px` }}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="main-content" ref={contentRef}>
          <div className="content-wrapper">
            <div className="hero-section">
              <h1 className="main-title">Privacy Policy</h1>
              <p className="subtitle">Last Updated: December 18, 2025</p>
              <div className="hero-decoration"></div>
            </div>

            {/* Introduction */}
            <section id="introduction" className="privacy-section">
              <h2 className="section-title">1. Introduction</h2>
              <p className="section-content">
                Townsquare Technologies Private Limited ("we," "us," or "our") operates the Locofy mobile application ("the app"). This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use the app.
              </p>
              <p className="section-content">
                By accessing or using the app, you agree to the collection and use of information in accordance with this policy. We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </section>

            {/* Information We Collect */}
            <section id="information-collect" className="privacy-section">
              <h2 className="section-title">2. Information We Collect</h2>
              <p className="section-content">
                We collect several types of information to provide and improve our services to you:
              </p>
            </section>

            {/* Personal Information */}
            <section id="personal-information" className="privacy-section subsection">
              <h3 className="subsection-title">2.1 Personal Information</h3>
              <p className="section-content">
                When you create an account with Locofy, we collect the following personal information:
              </p>
              <div className="info-cards">
                <div className="info-card">
                  <div className="card-icon">👤</div>
                  <h4 className="card-title">Account Information</h4>
                  <p className="card-content">Name, Gender, and Date of Birth (used for age verification and account personalization)</p>
                </div>
                <div className="info-card">
                  <div className="card-icon">📧</div>
                  <h4 className="card-title">Contact Details</h4>
                  <p className="card-content">Email Address or Phone Number (used for account verification and communication)</p>
                </div>
              </div>
            </section>

            {/* Usage & Content Data */}
            <section id="usage-content" className="privacy-section subsection">
              <h3 className="subsection-title">2.2 Usage & Content Data</h3>
              <p className="section-content">
                We collect information about how you use the app and the content you create:
              </p>
              <ul className="feature-list">
                <li><strong>User-Generated Content:</strong> Photos, reviews, and comments you upload</li>
                <li><strong>Device Information:</strong> Device type, operating system, and unique identifiers</li>
                <li><strong>Log Data:</strong> IP address, usage patterns, timestamps, and interactions</li>
              </ul>
            </section>

            {/* Location Information */}
            <section id="location-info" className="privacy-section subsection">
              <h3 className="subsection-title">2.3 Location Information</h3>
              <div className="highlight-box">
                <p className="highlight-content">
                  With your consent, we collect and process information about your device's location to offer personalized, location-based services and discovery features. You can control location permissions through your device settings at any time.
                </p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section id="how-we-use" className="privacy-section">
              <h2 className="section-title">3. How We Use Your Information</h2>
              <p className="section-content">
                We use the collected information for various purposes to provide, maintain, and improve our services:
              </p>

              <div className="usage-grid">
                <div className="usage-card">
                  <h4 className="usage-title">To Provide and Maintain the App</h4>
                  <ul className="usage-list">
                    <li>Facilitate account creation and authentication</li>
                    <li>Provide personalized content and local recommendations</li>
                    <li>Enable core app features and functionality</li>
                    <li>Process and deliver your requests</li>
                  </ul>
                </div>

                <div className="usage-card highlighted">
                  <h4 className="usage-title">For Safety and Compliance</h4>
                  <div className="important-badge">Important</div>
                  <ul className="usage-list">
                    <li><strong>Content Moderation:</strong> We use automated systems and human review to detect and remove prohibited content, including hate speech, harassment, and Child Sexual Abuse Material (CSAM)</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations regarding online safety</li>
                  </ul>
                </div>

                <div className="usage-card">
                  <h4 className="usage-title">To Communicate with You</h4>
                  <ul className="usage-list">
                    <li>Send updates, security alerts, and support messages</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Provide customer support</li>
                    <li>Send promotional communications (with your consent)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information Sharing and Disclosure */}
            <section id="sharing-disclosure" className="privacy-section">
              <h2 className="section-title">4. Information Sharing and Disclosure</h2>
              <p className="section-content">
                We may share your information in the following circumstances:
              </p>

              <div className="sharing-section">
                <h3 className="subsection-title">4.1 For Safety and Legal Purposes</h3>
                <div className="warning-box">
                  <p className="warning-content">
                    <strong>Law Enforcement & NCMEC:</strong> We strictly comply with laws regarding the safety of minors. If we detect Child Sexual Abuse Material (CSAM) on our platform, we will report the content and the associated user data (including IP address and account details) to the National Center for Missing & Exploited Children (NCMEC) and appropriate law enforcement agencies.
                  </p>
                </div>
                <p className="section-content">
                  <strong>Legal Requests:</strong> We may disclose your information to comply with valid legal requests (e.g., court orders, government inquiries).
                </p>
              </div>

              <div className="sharing-section">
                <h3 className="subsection-title">4.2 With Businesses</h3>
                <p className="section-content">
                  <strong>Interaction Data:</strong> When you interact with business content (e.g., view stories, bookmark businesses), the respective businesses may see aggregated analytics data. This helps businesses understand engagement patterns without revealing your personal identity.
                </p>
              </div>

              <div className="sharing-section">
                <h3 className="subsection-title">4.3 Third-Party Service Providers</h3>
                <p className="section-content">
                  We share data with trusted providers for hosting, analytics, and customer support. These providers are bound by confidentiality agreements and may only use your data for the specified services.
                </p>
                <div className="providers-note">
                  <p>Third-party providers include cloud hosting services, analytics platforms, and customer support tools that help us operate and improve the app.</p>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section id="data-retention" className="privacy-section">
              <h2 className="section-title">5. Data Retention</h2>
              <p className="section-content">
                We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
              </p>
              <div className="retention-grid">
                <div className="retention-card">
                  <h4 className="retention-title">Personal Data</h4>
                  <p className="retention-content">Retained only as long as necessary for the purposes outlined in this policy. When you delete your account, we will delete your personal data within a reasonable timeframe.</p>
                </div>
                <div className="retention-card alert">
                  <h4 className="retention-title">Safety Data</h4>
                  <p className="retention-content">Data related to violations of our Child Safety Standards may be retained for a longer period to prevent repeat offenses and assist in legal investigations.</p>
                </div>
              </div>
            </section>

            {/* Security */}
            <section id="security" className="privacy-section">
              <h2 className="section-title">6. Security of Your Information</h2>
              <p className="section-content">
                We implement industry-standard security measures to protect your personal information, including:
              </p>
              <div className="security-features">
                <div className="security-item">
                  <div className="security-icon">🔒</div>
                  <div className="security-text">
                    <h4>Encryption</h4>
                    <p>Data transmission is encrypted using secure protocols</p>
                  </div>
                </div>
                <div className="security-item">
                  <div className="security-icon">🛡️</div>
                  <div className="security-text">
                    <h4>Access Controls</h4>
                    <p>Strict access controls limit who can view your data</p>
                  </div>
                </div>
                <div className="security-item">
                  <div className="security-icon">🔐</div>
                  <div className="security-text">
                    <h4>Secure Storage</h4>
                    <p>Your data is stored on secure, monitored servers</p>
                  </div>
                </div>
              </div>
              <div className="highlight-box">
                <p className="highlight-content">
                  However, no transmission over the internet or electronic storage method is 100% secure, and we cannot guarantee absolute security. We continuously monitor and improve our security practices.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section id="your-rights" className="privacy-section">
              <h2 className="section-title">7. Your Rights and Choices</h2>
              <p className="section-content">
                You have several rights regarding your personal information:
              </p>
              <div className="rights-grid">
                <div className="rights-card">
                  <h4 className="rights-title">Access and Update</h4>
                  <p>You may access and update your personal information within your account settings at any time.</p>
                </div>
                <div className="rights-card">
                  <h4 className="rights-title">Deletion</h4>
                  <p>You may request the deletion of your account and data by contacting us at <a href="mailto:abhishek@locofy.in">abhishek@locofy.in</a>.</p>
                </div>
                <div className="rights-card">
                  <h4 className="rights-title">Opt-Out</h4>
                  <p>You may opt-out of promotional communications via the unsubscribe links provided or by contacting us.</p>
                </div>
                <div className="rights-card">
                  <h4 className="rights-title">Location Permissions</h4>
                  <p>You can control location permissions through your device settings and revoke access at any time.</p>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section id="children-privacy" className="privacy-section">
              <h2 className="section-title">8. Children's Privacy</h2>
              <div className="warning-box">
                <p className="warning-content">
                  Locofy is committed to protecting the safety of minors. We have a strict zero-tolerance policy against Child Sexual Abuse Material (CSAM) and the exploitation of children.
                </p>
              </div>
              <p className="section-content">
                Users are strictly prohibited from publishing, sharing, or promoting any content that depicts, encourages, or normalizes the sexual exploitation or abuse of minors.
              </p>
              <h3 className="subsection-title">Enforcement</h3>
              <p className="section-content">
                Any violation of this policy will result in:
              </p>
              <ul className="enforcement-list">
                <li>Immediate removal of the content</li>
                <li>Permanent suspension of the user's account</li>
                <li>Reporting of the incident to the National Center for Missing & Exploited Children (NCMEC) and relevant law enforcement authorities</li>
              </ul>
              <div className="report-box">
                <h4>Report Violations</h4>
                <p>If you encounter content that violates our child safety policies, please report it immediately through the in-app reporting feature or contact us at <a href="mailto:abhishek@locofy.in">abhishek@locofy.in</a>.</p>
              </div>
            </section>

            {/* International Data Transfers */}
            <section id="international" className="privacy-section">
              <h2 className="section-title">9. International Data Transfers</h2>
              <p className="section-content">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
              </p>
              <p className="section-content">
                By using Locofy, you consent to this transfer. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.
              </p>
            </section>

            {/* Changes to Policy */}
            <section id="changes" className="privacy-section">
              <h2 className="section-title">10. Changes to This Privacy Policy</h2>
              <p className="section-content">
                We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. Changes will be posted on this page with an updated "Effective Date."
              </p>
              <div className="highlight-box">
                <p className="highlight-content">
                  We recommend reviewing this page regularly to stay informed about how we protect your information. For material changes, we will notify you via email or through a prominent notice within the app.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="privacy-section">
              <h2 className="section-title">11. Contact Information</h2>
              <p className="section-content">
                For any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="contact-card">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href="mailto:abhishek@locofy.in" className="contact-value">abhishek@locofy.in</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Company:</span>
                  <span className="contact-value">Townsquare Technologies Private Limited</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Address:</span>
                  <span className="contact-value">
                    235, 2nd, 13th Cross Rd,<br />
                    Indira Nagar II Stage, Hoysala Nagar,<br />
                    Indiranagar, Bengaluru,<br />
                    Karnataka 560038, India
                  </span>
                </div>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="privacy-section acknowledgment-section">
              <div className="acknowledgment-box">
                <h3 className="acknowledgment-title">Your Consent</h3>
                <p className="acknowledgment-content">
                  BY USING THE LOCOFY APP, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS PRIVACY POLICY, UNDERSTAND IT, AND AGREE TO ITS TERMS. IF YOU DO NOT AGREE WITH THIS POLICY, PLEASE DO NOT USE THE APP.
                </p>
                <p className="acknowledgment-date">
                  Effective Date: December 18, 2025
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>

      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}

      {/* Footer */}
      <footer className="relative bg-[#111111]/50 backdrop-blur-xl border-t border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#FFB300] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-[#111111] font-bold text-lg">L</span>
                </div>
                <span className="text-2xl font-bold text-white">Locofy</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering local businesses through engaging storytelling and hyperlocal discovery.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/#features" className="hover:text-[#FFB300] transition-colors">Features</a></li>
                <li><a href="/#pricing" className="hover:text-[#FFB300] transition-colors">Pricing</a></li>
                <li><a href="/#testimonials" className="hover:text-[#FFB300] transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/#about" className="hover:text-[#FFB300] transition-colors">About Us</a></li>
                <li><a href="/#careers" className="hover:text-[#FFB300] transition-colors">Careers</a></li>
                <li><a href="/#contact" className="hover:text-[#FFB300] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/terms-of-service" className="hover:text-[#FFB300] transition-colors">Terms & Conditions</a></li>
                <li><a href="/privacy-policy" className="hover:text-[#FFB300] transition-colors">Privacy Policy</a></li>
                <li><a href="/eula" className="hover:text-[#FFB300] transition-colors">EULA</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Locofy. All rights reserved. Made with ❤️ for local businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;