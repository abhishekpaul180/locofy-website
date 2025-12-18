import React, { useEffect, useState, useRef } from 'react';
import './styles/eula.css';

const EULA = () => {
  const [activeSection, setActiveSection] = useState('acceptance');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRef = useRef(null);

  const tableOfContents = [
    { id: 'acceptance', title: '1. Acceptance of Terms', level: 1 },
    { id: 'eligibility', title: '2. Eligibility', level: 1 },
    { id: 'child-safety', title: '3. Child Safety Standards', level: 1 },
    { id: 'zero-tolerance', title: '4. Zero Tolerance Policy', level: 1 },
    { id: 'user-content', title: '5. User Content and Conduct', level: 1 },
    { id: 'license-grant', title: '6. License Grant', level: 1 },
    { id: 'prohibited', title: '7. Prohibited Activities', level: 1 },
    { id: 'account-security', title: '8. Account Security', level: 1 },
    { id: 'privacy', title: '9. Privacy', level: 1 },
    { id: 'intellectual-property', title: '10. Intellectual Property', level: 1 },
    { id: 'disclaimer', title: '11. Disclaimer of Warranties', level: 1 },
    { id: 'limitation', title: '12. Limitation of Liability', level: 1 },
    { id: 'indemnification', title: '13. Indemnification', level: 1 },
    { id: 'governing-law', title: '14. Governing Law', level: 1 },
    { id: 'changes', title: '15. Changes to Agreement', level: 1 },
    { id: 'contact', title: '16. Contact Information', level: 1 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 500);

      const sections = document.querySelectorAll('.eula-section');
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
    <div className="eula-container">
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

      <div className="eula-layout">
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
              <h1 className="main-title">End-User License Agreement</h1>
              <p className="subtitle">Last Updated: December 18, 2025</p>
              <div className="hero-decoration"></div>
            </div>

            {/* Acceptance of Terms */}
            <section id="acceptance" className="eula-section">
              <h2 className="section-title">1. Acceptance of Terms</h2>
              <p className="section-content">
                This End-User License Agreement ("Agreement" or "EULA") is a legal contract between you ("User" or "you") and Townsquare Technologies Private Limited ("Company," "we," "us," or "our"), governing your use of the Locofy mobile application ("App").
              </p>
              <div className="highlight-box">
                <p className="highlight-content">
                  By downloading, accessing, or using the App, you agree to be bound by the terms of this EULA. If you do not agree with these terms, you must not download, install, or use the App.
                </p>
              </div>
            </section>

            {/* Eligibility */}
            <section id="eligibility" className="eula-section">
              <h2 className="section-title">2. Eligibility</h2>
              <p className="section-content">
                You must be at least 13 years of age (or the minimum legal age in your jurisdiction) to use the App. By using the App, you represent and warrant that you meet this age requirement.
              </p>
              <div className="age-requirement">
                <div className="requirement-icon">🔞</div>
                <div className="requirement-text">
                  <h4>Age Verification</h4>
                  <p>Users must be 13 years or older. Users under 18 require parental or guardian consent.</p>
                </div>
              </div>
            </section>

            {/* Child Safety Standards */}
            <section id="child-safety" className="eula-section">
              <h2 className="section-title">3. Child Safety Standards (Strictly Enforced)</h2>
              <div className="warning-box critical">
                <div className="critical-badge">Zero Tolerance</div>
                <p className="warning-content">
                  Locofy is committed to maintaining a safe environment. We have a <strong>Zero-Tolerance Policy</strong> regarding Child Sexual Abuse Material (CSAM).
                </p>
              </div>

              <div className="policy-cards">
                <div className="policy-card danger">
                  <h4 className="policy-title">Prohibition</h4>
                  <p className="policy-content">
                    Users are strictly prohibited from publishing, sharing, or promoting any content that depicts, encourages, or normalizes the sexual exploitation or abuse of minors.
                  </p>
                </div>

                <div className="policy-card enforcement">
                  <h4 className="policy-title">Enforcement & Reporting</h4>
                  <p className="policy-content">
                    If you violate this policy, we will immediately terminate your account and access to the App. Furthermore, we are legally obligated to report such incidents and user details to the National Center for Missing & Exploited Children (NCMEC) and relevant law enforcement authorities.
                  </p>
                </div>
              </div>

              <div className="report-cta">
                <h4>Report Violations Immediately</h4>
                <p>If you encounter content that violates our child safety policies, report it through the in-app feature or contact <a href="mailto:abhishek@locofy.in">abhishek@locofy.in</a>.</p>
              </div>
            </section>

            {/* Zero Tolerance for Objectionable Content */}
            <section id="zero-tolerance" className="eula-section">
              <h2 className="section-title">4. Zero Tolerance for Objectionable Content</h2>
              <p className="section-content">
                Beyond child safety, you agree not to post, upload, or transmit any content that is:
              </p>
              <ul className="prohibited-list">
                <li>Unlawful or promotes illegal activities</li>
                <li>Harmful, threatening, or abusive</li>
                <li>Harassment or bullying</li>
                <li>Defamatory or libelous</li>
                <li>Vulgar or obscene</li>
                <li>Racially or ethnically offensive</li>
                <li>Hateful or discriminatory</li>
              </ul>

              <div className="moderation-info">
                <div className="moderation-item">
                  <h4 className="moderation-title">
                    <span className="icon">⚖️</span>
                    Moderation
                  </h4>
                  <p>We reserve the right, at our sole discretion, to remove any content that violates these terms and to terminate the accounts of users who post objectionable content without notice.</p>
                </div>

                <div className="moderation-item">
                  <h4 className="moderation-title">
                    <span className="icon">🚫</span>
                    Blocking
                  </h4>
                  <p>The App provides features allowing users to block other users. Use this feature to control your experience and maintain a safe environment.</p>
                </div>
              </div>
            </section>

            {/* User Content and Conduct */}
            <section id="user-content" className="eula-section">
              <h2 className="section-title">5. User Content and Conduct</h2>
              
              <div className="content-rules">
                <div className="rule-card">
                  <h4 className="rule-title">License to Us</h4>
                  <p className="rule-content">
                    By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute such content in connection with the App.
                  </p>
                </div>

                <div className="rule-card">
                  <h4 className="rule-title">Your Responsibility</h4>
                  <p className="rule-content">
                    You are solely responsible for the content you post. We do not endorse user opinions and are not liable for user-generated content.
                  </p>
                </div>
              </div>

              <div className="highlight-box">
                <p className="highlight-content">
                  You retain ownership of your content, but by posting it on the App, you allow us to use it to operate, promote, and improve our services.
                </p>
              </div>
            </section>

            {/* License Grant */}
            <section id="license-grant" className="eula-section">
              <h2 className="section-title">6. License Grant</h2>
              <p className="section-content">
                Subject to your compliance with this EULA, we grant you a limited, non-exclusive, non-transferable, revocable license to download and use the App for your personal, non-commercial use on a device owned or controlled by you.
              </p>

              <div className="license-terms">
                <div className="license-item">
                  <div className="license-icon">✓</div>
                  <div className="license-text">
                    <strong>Limited:</strong> Only for personal use as described
                  </div>
                </div>
                <div className="license-item">
                  <div className="license-icon">✓</div>
                  <div className="license-text">
                    <strong>Non-Exclusive:</strong> We may license to others
                  </div>
                </div>
                <div className="license-item">
                  <div className="license-icon">✓</div>
                  <div className="license-text">
                    <strong>Non-Transferable:</strong> You cannot transfer this license
                  </div>
                </div>
                <div className="license-item">
                  <div className="license-icon">✓</div>
                  <div className="license-text">
                    <strong>Revocable:</strong> We may revoke at any time for violations
                  </div>
                </div>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section id="prohibited" className="eula-section">
              <h2 className="section-title">7. Prohibited Activities</h2>
              <p className="section-content">
                You agree not to engage in any of the following activities:
              </p>

              <div className="prohibited-grid">
                <div className="prohibited-card">
                  <div className="prohibited-icon">🔧</div>
                  <h4>No Reverse Engineering</h4>
                  <p>Do not reverse engineer, decompile, or disassemble the App or attempt to derive its source code.</p>
                </div>

                <div className="prohibited-card">
                  <div className="prohibited-icon">🤖</div>
                  <h4>No Automated Systems</h4>
                  <p>Do not use bots, scrapers, or any automated systems to access or interact with the App.</p>
                </div>

                <div className="prohibited-card">
                  <div className="prohibited-icon">⚠️</div>
                  <h4>No Illegal Activities</h4>
                  <p>Do not use the App for any illegal purpose or to solicit others to perform illegal acts.</p>
                </div>

                <div className="prohibited-card">
                  <div className="prohibited-icon">🔒</div>
                  <h4>No Unauthorized Access</h4>
                  <p>Do not attempt to gain unauthorized access to any part of the App or its systems.</p>
                </div>
              </div>
            </section>

            {/* Account Security */}
            <section id="account-security" className="eula-section">
              <h2 className="section-title">8. Account Security</h2>
              <p className="section-content">
                You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
              </p>

              <div className="security-responsibilities">
                <div className="security-card">
                  <div className="security-number">1</div>
                  <div className="security-info">
                    <h4>Keep Credentials Secure</h4>
                    <p>Never share your password or login information with anyone.</p>
                  </div>
                </div>

                <div className="security-card">
                  <div className="security-number">2</div>
                  <div className="security-info">
                    <h4>Monitor Account Activity</h4>
                    <p>Regularly review your account activity for any unauthorized use.</p>
                  </div>
                </div>

                <div className="security-card">
                  <div className="security-number">3</div>
                  <div className="security-info">
                    <h4>Report Compromises</h4>
                    <p>Immediately notify us if you suspect your account has been compromised.</p>
                  </div>
                </div>
              </div>

              <div className="highlight-box">
                <p className="highlight-content">
                  You accept full responsibility for all activities that occur under your account, whether or not authorized by you.
                </p>
              </div>
            </section>

            {/* Privacy */}
            <section id="privacy" className="eula-section">
              <h2 className="section-title">9. Privacy</h2>
              <p className="section-content">
                Your use of the App is also governed by our Privacy Policy, which is incorporated into this EULA by reference. The Privacy Policy explains how we collect, use, and protect your personal information.
              </p>
              <a href="/privacy-policy" className="inline-link">Read our full Privacy Policy →</a>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property" className="eula-section">
              <h2 className="section-title">10. Intellectual Property</h2>
              <p className="section-content">
                All intellectual property rights related to the App (excluding User Content) are owned by Townsquare Technologies Private Limited. This includes but is not limited to:
              </p>

              <div className="ip-grid">
                <div className="ip-item">
                  <div className="ip-icon">©</div>
                  <div className="ip-text">
                    <h4>Copyrights</h4>
                    <p>All original works, designs, and content</p>
                  </div>
                </div>

                <div className="ip-item">
                  <div className="ip-icon">™</div>
                  <div className="ip-text">
                    <h4>Trademarks</h4>
                    <p>Locofy name, logo, and branding</p>
                  </div>
                </div>

                <div className="ip-item">
                  <div className="ip-icon">🔐</div>
                  <div className="ip-text">
                    <h4>Trade Secrets</h4>
                    <p>Proprietary algorithms and processes</p>
                  </div>
                </div>

                <div className="ip-item">
                  <div className="ip-icon">💡</div>
                  <div className="ip-text">
                    <h4>Patents</h4>
                    <p>Patented technologies and features</p>
                  </div>
                </div>
              </div>

              <p className="section-content">
                You may not use our intellectual property without our prior written consent.
              </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section id="disclaimer" className="eula-section">
              <h2 className="section-title">11. Disclaimer of Warranties</h2>
              <div className="warning-box">
                <p className="warning-content">
                  THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED, REGARDING RELIABILITY, ACCURACY, OR AVAILABILITY.
                </p>
              </div>
              <p className="section-content">
                We make no warranties or representations about:
              </p>
              <ul className="standard-list">
                <li>The accuracy, reliability, or completeness of any content</li>
                <li>The uninterrupted or error-free operation of the App</li>
                <li>The correction of defects or errors</li>
                <li>The App being free from viruses or harmful components</li>
                <li>The results obtained from using the App</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section id="limitation" className="eula-section">
              <h2 className="section-title">12. Limitation of Liability</h2>
              <div className="warning-box">
                <p className="warning-content">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE APP.
                </p>
              </div>
              <p className="section-content">
                This limitation includes, but is not limited to, damages for:
              </p>
              <ul className="standard-list">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Personal injury or property damage</li>
                <li>Unauthorized access to your data</li>
                <li>Errors or interruptions in service</li>
                <li>User-generated content or third-party actions</li>
              </ul>
              <p className="section-content">
                Our total liability shall not exceed ₹1,000 (One Thousand Indian Rupees).
              </p>
            </section>

            {/* Indemnification */}
            <section id="indemnification" className="eula-section">
              <h2 className="section-title">13. Indemnification</h2>
              <p className="section-content">
                You agree to indemnify, defend, and hold us harmless from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from:
              </p>
              <div className="indemnity-list">
                <div className="indemnity-item">
                  <span className="indemnity-number">1</span>
                  <p>Your use or misuse of the App</p>
                </div>
                <div className="indemnity-item">
                  <span className="indemnity-number">2</span>
                  <p>Your violation of this EULA</p>
                </div>
                <div className="indemnity-item">
                  <span className="indemnity-number">3</span>
                  <p>Your violation of any rights of another party</p>
                </div>
                <div className="indemnity-item">
                  <span className="indemnity-number">4</span>
                  <p>Your content or conduct on the App</p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="eula-section">
              <h2 className="section-title">14. Governing Law</h2>
              <p className="section-content">
                This Agreement is governed by the laws of India, without regard to its conflict of law provisions. Any disputes arising from or relating to this EULA shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.
              </p>
              <div className="jurisdiction-box">
                <h4>Jurisdiction</h4>
                <p><strong>Governing Law:</strong> Laws of India</p>
                <p><strong>Exclusive Jurisdiction:</strong> Courts of Bengaluru, Karnataka</p>
              </div>
            </section>

            {/* Changes to Agreement */}
            <section id="changes" className="eula-section">
              <h2 className="section-title">15. Changes to This Agreement</h2>
              <p className="section-content">
                We may update this EULA periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. Material changes will be communicated through:
              </p>
              <ul className="standard-list">
                <li>Email notification to your registered email address</li>
                <li>In-app notifications</li>
                <li>Prominent notice on our website</li>
              </ul>
              <div className="highlight-box">
                <p className="highlight-content">
                  Continued use of the App after any changes indicates your acceptance of the revised EULA. If you do not agree with the changes, you must stop using the App.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="eula-section">
              <h2 className="section-title">16. Contact Information</h2>
              <p className="section-content">
                If you have any questions about this EULA or need to report violations, please contact us:
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
            <section className="eula-section acknowledgment-section">
              <div className="acknowledgment-box">
                <h3 className="acknowledgment-title">Your Agreement</h3>
                <p className="acknowledgment-content">
                  BY DOWNLOADING, INSTALLING, OR USING THE LOCOFY APP, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS END-USER LICENSE AGREEMENT, UNDERSTAND IT, AND AGREE TO BE BOUND BY ITS TERMS.
                </p>
                <p className="acknowledgment-content" style={{ marginTop: '1rem' }}>
                  IF YOU DO NOT AGREE TO THESE TERMS, DO NOT DOWNLOAD, INSTALL, OR USE THE APP.
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

export default EULA;