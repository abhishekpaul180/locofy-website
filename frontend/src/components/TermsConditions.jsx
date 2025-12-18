import React, { useEffect, useState, useRef } from 'react';
import './styles/terms_conditions.css';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRef = useRef(null);

  const tableOfContents = [
    { id: 'introduction', title: '1. Introduction', level: 1 },
    { id: 'acceptance', title: '2. Acceptance of Terms', level: 1 },
    { id: 'services', title: '3. Description of Services', level: 1 },
    { id: 'eligibility', title: '4. Eligibility', level: 1 },
    { id: 'account', title: '5. Account Registration', level: 1 },
    { id: 'user-conduct', title: '6. User Conduct & Content', level: 1 },
    { id: 'child-safety', title: '7. Child Safety Standards', level: 1 },
    { id: 'prohibited', title: '8. Prohibited Activities', level: 1 },
    { id: 'content-moderation', title: '9. Content Moderation', level: 1 },
    { id: 'intellectual-property', title: '10. Intellectual Property', level: 1 },
    { id: 'privacy', title: '11. Privacy & Data Protection', level: 1 },
    { id: 'location', title: '12. Location-Based Services', level: 1 },
    { id: 'business-interactions', title: '13. Business Interactions', level: 1 },
    { id: 'termination', title: '14. Termination & Suspension', level: 1 },
    { id: 'disclaimer', title: '15. Disclaimer of Warranties', level: 1 },
    { id: 'limitation', title: '16. Limitation of Liability', level: 1 },
    { id: 'indemnification', title: '17. Indemnification', level: 1 },
    { id: 'governing-law', title: '18. Governing Law', level: 1 },
    { id: 'dispute', title: '19. Dispute Resolution', level: 1 },
    { id: 'modifications', title: '20. Modifications to Terms', level: 1 },
    { id: 'contact', title: '21. Contact Information', level: 1 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 500);

      // Update active section
      const sections = document.querySelectorAll('.terms-section');
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
    <div className="terms-container">
      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Header */}
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

      {/* Main Content */}
      <div className="terms-layout">
        {/* Sidebar - Table of Contents */}
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

        {/* Main Content Area */}
        <main className="main-content" ref={contentRef}>
          <div className="content-wrapper">
            {/* Hero Section */}
            <div className="hero-section">
              <h1 className="main-title">Terms of Services</h1>
              <p className="subtitle">Last Updated: December 18, 2025</p>
              <div className="hero-decoration"></div>
            </div>

            {/* Introduction */}
            <section id="introduction" className="terms-section">
              <h2 className="section-title">1. Introduction</h2>
              <p className="section-content">
                Welcome to Locofy, operated by Townsquare Technologies Private Limited ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of the Locofy mobile application and related services (collectively, the "App"). By accessing or using the App, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="section-content">
                Please read these Terms carefully before using the App. If you do not agree with any part of these Terms, you must not use the App.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section id="acceptance" className="terms-section">
              <h2 className="section-title">2. Acceptance of Terms</h2>
              <p className="section-content">
                By creating an account, downloading, installing, accessing, or using any part of the App, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. These Terms constitute a legally binding agreement between you and Townsquare Technologies Private Limited.
              </p>
              <div className="highlight-box">
                <p className="highlight-content">
                  If you are using the App on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms. In such cases, "you" and "your" will refer to that organization.
                </p>
              </div>
            </section>

            {/* Description of Services */}
            <section id="services" className="terms-section">
              <h2 className="section-title">3. Description of Services</h2>
              <p className="section-content">
                Locofy is a mobile application designed to empower local businesses and enhance community connections through:
              </p>
              <ul className="feature-list">
                <li>Location-based discovery of local businesses and services</li>
                <li>User-generated content including photos, reviews, and comments</li>
                <li>Business stories and promotional content viewing</li>
                <li>Social interaction features including bookmarking and engagement</li>
                <li>Personalized recommendations based on location and preferences</li>
                <li>Direct interaction with local businesses</li>
              </ul>
              <p className="section-content">
                We reserve the right to modify, suspend, or discontinue any aspect of the App at any time, with or without notice, and without liability to you.
              </p>
            </section>

            {/* Eligibility */}
            <section id="eligibility" className="terms-section">
              <h2 className="section-title">4. Eligibility</h2>
              <p className="section-content">
                To use the App, you must meet the following eligibility requirements:
              </p>
              <ul className="standard-list">
                <li>Be at least 13 years of age (or the minimum age required in your jurisdiction)</li>
                <li>Have the legal capacity to enter into a binding agreement</li>
                <li>Not be barred from using the App under applicable laws</li>
                <li>Provide accurate and complete information during registration</li>
              </ul>
              <div className="highlight-box">
                <p className="highlight-content">
                  Users under 18 years of age must have parental or guardian consent to use the App. Parents and guardians are responsible for monitoring their children's use of the App.
                </p>
              </div>
            </section>

            {/* Account Registration */}
            <section id="account" className="terms-section">
              <h2 className="section-title">5. Account Registration</h2>
              <p className="section-content">
                To access certain features of the App, you must create an account. When registering, you agree to:
              </p>
              <ul className="standard-list">
                <li>Provide accurate, current, and complete information (Name, Gender, Date of Birth)</li>
                <li>Provide valid contact details (Email Address or Phone Number)</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security and confidentiality of your password</li>
                <li>Accept full responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use or security breach</li>
              </ul>
              <p className="section-content">
                We use your Date of Birth for age verification and personalization purposes. Your contact details are used for account verification and communication. If we discover that you have provided false information, we reserve the right to suspend or terminate your account immediately.
              </p>
            </section>

            {/* User Conduct & Content */}
            <section id="user-conduct" className="terms-section">
              <h2 className="section-title">6. User Conduct & Content</h2>
              <p className="section-content">
                As a user of the App, you are solely responsible for the content you create, upload, post, or share, including photos, reviews, and comments ("User Content"). By posting User Content, you:
              </p>
              <div className="obligations-grid">
                <div className="obligation-card">
                  <h3 className="card-title">Own Your Content</h3>
                  <p>You retain ownership of your User Content but grant us a license to use, display, and distribute it through the App.</p>
                </div>
                <div className="obligation-card">
                  <h3 className="card-title">Ensure Accuracy</h3>
                  <p>All content must be truthful, accurate, and not misleading to other users or businesses.</p>
                </div>
                <div className="obligation-card">
                  <h3 className="card-title">Respect Rights</h3>
                  <p>You must have all necessary rights, licenses, and permissions for the content you post.</p>
                </div>
                <div className="obligation-card">
                  <h3 className="card-title">Follow Guidelines</h3>
                  <p>All content must comply with our Community Guidelines and applicable laws.</p>
                </div>
              </div>
              <h3 className="subsection-title">Content License</h3>
              <p className="section-content">
                By posting User Content on the App, you grant Townsquare Technologies Private Limited a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, modify, adapt, publish, translate, distribute, and display your User Content in connection with operating, promoting, and improving the App.
              </p>
            </section>

            {/* Child Safety Standards */}
            <section id="child-safety" className="terms-section">
              <h2 className="section-title">7. Child Safety Standards</h2>
              <div className="warning-box">
                <p className="warning-content">
                  LOCOFY HAS A STRICT ZERO-TOLERANCE POLICY AGAINST CHILD SEXUAL ABUSE MATERIAL (CSAM) AND THE EXPLOITATION OF CHILDREN. WE ARE COMMITTED TO PROTECTING THE SAFETY OF MINORS ON OUR PLATFORM.
                </p>
              </div>
              <p className="section-content">
                Users are strictly prohibited from publishing, sharing, promoting, or engaging with any content that:
              </p>
              <ul className="prohibited-list">
                <li>Depicts, encourages, or normalizes the sexual exploitation or abuse of minors</li>
                <li>Contains Child Sexual Abuse Material (CSAM) in any form</li>
                <li>Sexualizes, grooms, or endangers children</li>
                <li>Facilitates or promotes child exploitation</li>
              </ul>
              <h3 className="subsection-title">Enforcement Actions</h3>
              <p className="section-content">
                Any violation of our Child Safety Standards will result in immediate and severe consequences:
              </p>
              <ul className="standard-list">
                <li><strong>Immediate Content Removal:</strong> The offending content will be removed instantly</li>
                <li><strong>Permanent Account Suspension:</strong> The user's account will be permanently banned</li>
                <li><strong>Law Enforcement Reporting:</strong> We will report the incident to the National Center for Missing & Exploited Children (NCMEC) and relevant law enforcement authorities</li>
                <li><strong>Data Disclosure:</strong> User data including IP address, account details, and related information will be shared with authorities</li>
              </ul>
              <div className="highlight-box">
                <p className="highlight-content">
                  If you encounter any content that violates our Child Safety Standards, please report it immediately through the in-app reporting feature or contact us at abhishek@locofy.in.
                </p>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section id="prohibited" className="terms-section">
              <h2 className="section-title">8. Prohibited Activities</h2>
              <p className="section-content">
                In addition to our Child Safety Standards, you may not use the App to engage in any of the following prohibited activities:
              </p>
              <ul className="prohibited-list">
                <li>Post hate speech, harassment, or content that incites violence</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Transmit viruses, malware, or any harmful code</li>
                <li>Engage in fraudulent, deceptive, or manipulative practices</li>
                <li>Harass, abuse, threaten, or harm other users or businesses</li>
                <li>Attempt to gain unauthorized access to our systems or other accounts</li>
                <li>Scrape, crawl, or harvest data without explicit permission</li>
                <li>Interfere with or disrupt the App's functionality</li>
                <li>Use automated systems, bots, or scripts to access the App</li>
                <li>Impersonate any person, entity, or business</li>
                <li>Post false reviews or misleading information about businesses</li>
                <li>Engage in spam or unsolicited promotional activities</li>
              </ul>
            </section>

            {/* Content Moderation */}
            <section id="content-moderation" className="terms-section">
              <h2 className="section-title">9. Content Moderation</h2>
              <p className="section-content">
                We employ a combination of automated systems and human review to maintain a safe and respectful environment on the App. Our content moderation processes include:
              </p>
              <div className="payment-info">
                <div className="payment-section">
                  <h3 className="subsection-title">Automated Detection</h3>
                  <p className="section-content">
                    We use advanced automated systems to detect and flag potentially prohibited content, including CSAM, hate speech, and harassment.
                  </p>
                </div>
                <div className="payment-section">
                  <h3 className="subsection-title">Human Review</h3>
                  <p className="section-content">
                    Our moderation team reviews flagged content to ensure accurate enforcement of our policies and standards.
                  </p>
                </div>
                <div className="payment-section">
                  <h3 className="subsection-title">User Reports</h3>
                  <p className="section-content">
                    Users can report content that violates our Terms or Community Guidelines through in-app reporting features.
                  </p>
                </div>
                <div className="payment-section">
                  <h3 className="subsection-title">Proactive Monitoring</h3>
                  <p className="section-content">
                    We continuously monitor the App to identify and address potential violations before they are reported.
                  </p>
                </div>
              </div>
              <p className="section-content">
                We reserve the right to remove any content and suspend or terminate any account that violates these Terms, with or without notice. Content moderation decisions are made at our sole discretion.
              </p>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property" className="terms-section">
              <h2 className="section-title">10. Intellectual Property</h2>
              <p className="section-content">
                All content, features, and functionality of the App, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Townsquare Technologies Private Limited or its licensors and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <h3 className="subsection-title">Trademarks</h3>
              <p className="section-content">
                The Locofy name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Townsquare Technologies Private Limited. You may not use such marks without our prior written permission. Use of these marks without permission may constitute trademark infringement and unfair competition in violation of applicable laws.
              </p>
              <h3 className="subsection-title">Your Content Rights</h3>
              <p className="section-content">
                You retain all ownership rights to your User Content. However, by posting content on the App, you grant us the license described in Section 6 of these Terms. You represent and warrant that you own or have obtained all necessary rights, licenses, and permissions for any content you post.
              </p>
            </section>

            {/* Privacy & Data Protection */}
            <section id="privacy" className="terms-section">
              <h2 className="section-title">11. Privacy & Data Protection</h2>
              <p className="section-content">
                Your privacy is important to us. Our Privacy Policy explains in detail how we collect, use, disclose, and safeguard your information when you use the App. By using the App, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
              <h3 className="subsection-title">Information We Collect</h3>
              <ul className="standard-list">
                <li>Personal Information: Name, gender, date of birth, email address, or phone number</li>
                <li>Usage Data: User-generated content, device information, log data, and interaction patterns</li>
                <li>Location Information: With your consent, we collect and process location data</li>
              </ul>
              <h3 className="subsection-title">How We Use Your Information</h3>
              <p className="section-content">
                We use your information to provide and maintain the App, ensure safety and compliance through content moderation, communicate with you, and provide personalized, location-based services.
              </p>
              <a href="/privacy-policy" className="inline-link">Read our full Privacy Policy →</a>
            </section>

            {/* Location-Based Services */}
            <section id="location" className="terms-section">
              <h2 className="section-title">12. Location-Based Services</h2>
              <p className="section-content">
                The App offers location-based features that provide personalized content and local business discovery. By using these features, you consent to the collection and processing of your device's location information.
              </p>
              <div className="highlight-box">
                <p className="highlight-content">
                  You can control location permissions through your device settings at any time. Disabling location services may limit certain features and functionality of the App.
                </p>
              </div>
              <p className="section-content">
                We use your location information to:
              </p>
              <ul className="standard-list">
                <li>Show you relevant local businesses and services</li>
                <li>Provide personalized recommendations based on your area</li>
                <li>Enable location-specific content and features</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            {/* Business Interactions */}
            <section id="business-interactions" className="terms-section">
              <h2 className="section-title">13. Business Interactions</h2>
              <p className="section-content">
                The App facilitates interactions between users and local businesses. When you interact with business content (such as viewing stories, posting reviews, or bookmarking businesses), the following applies:
              </p>
              <h3 className="subsection-title">Analytics & Data Sharing</h3>
              <p className="section-content">
                Businesses may receive aggregated analytics data about user interactions with their content. This data helps businesses understand engagement but does not include personally identifiable information unless you choose to share it directly (e.g., through reviews or comments).
              </p>
              <h3 className="subsection-title">Third-Party Services</h3>
              <p className="section-content">
                We may share data with trusted third-party service providers for hosting, analytics, and customer support. These providers are bound by confidentiality agreements and may only use your data for specified services.
              </p>
              <h3 className="subsection-title">User Responsibility</h3>
              <p className="section-content">
                We are not responsible for the actions, content, or services of businesses listed on the App. Any transactions or interactions between you and businesses are solely between you and those businesses.
              </p>
            </section>

            {/* Termination */}
            <section id="termination" className="terms-section">
              <h2 className="section-title">14. Termination & Suspension</h2>
              <p className="section-content">
                We reserve the right to suspend or terminate your account and access to the App at our sole discretion, immediately and without notice or liability, for any reason, including but not limited to:
              </p>
              <ul className="standard-list">
                <li>Violation of these Terms or our Community Guidelines</li>
                <li>Violation of our Child Safety Standards</li>
                <li>Fraudulent, illegal, or harmful activity</li>
                <li>Request by law enforcement or government agency</li>
                <li>Extended periods of inactivity</li>
                <li>Technical or security concerns</li>
                <li>Posting prohibited content or engaging in prohibited activities</li>
              </ul>
              <p className="section-content">
                Upon termination, your right to use the App will immediately cease. You may also terminate your account at any time by contacting us at abhishek@locofy.in. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
              <h3 className="subsection-title">Data Retention After Termination</h3>
              <p className="section-content">
                Personal data will be deleted in accordance with our Privacy Policy. However, data related to violations of our Child Safety Standards may be retained for a longer period to prevent repeat offenses and assist in legal investigations.
              </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section id="disclaimer" className="terms-section">
              <h2 className="section-title">15. Disclaimer of Warranties</h2>
              <div className="warning-box">
                <p className="warning-content">
                  THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, TOWNSQUARE TECHNOLOGIES PRIVATE LIMITED DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>
              <p className="section-content">
                We do not warrant that:
              </p>
              <ul className="standard-list">
                <li>The App will be uninterrupted, secure, or error-free</li>
                <li>The results obtained from using the App will be accurate or reliable</li>
                <li>The quality of any services, information, or content obtained through the App will meet your expectations</li>
                <li>Any errors or defects in the App will be corrected</li>
                <li>The App will be compatible with all devices or operating systems</li>
                <li>User-generated content will be accurate, appropriate, or reliable</li>
              </ul>
              <p className="section-content">
                Your use of the App is at your sole risk. Any material downloaded or obtained through the App is accessed at your own discretion and risk.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section id="limitation" className="terms-section">
              <h2 className="section-title">16. Limitation of Liability</h2>
              <div className="warning-box">
                <p className="warning-content">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL TOWNSQUARE TECHNOLOGIES PRIVATE LIMITED, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
              </div>
              <ul className="standard-list">
                <li>Your access to, use of, or inability to access or use the App</li>
                <li>Any conduct or content of any third party on the App, including user-generated content</li>
                <li>Any content obtained from the App</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>Any interactions or transactions with businesses listed on the App</li>
                <li>Any errors, mistakes, or inaccuracies in content</li>
                <li>Personal injury or property damage resulting from your use of the App</li>
              </ul>
              <p className="section-content">
                Our total liability to you for all claims arising from or related to the App shall not exceed the greater of ₹1,000 (One Thousand Indian Rupees) or the amount you have paid us, if any, in the twelve (12) months preceding the claim.
              </p>
            </section>

            {/* Indemnification */}
            <section id="indemnification" className="terms-section">
              <h2 className="section-title">17. Indemnification</h2>
              <p className="section-content">
                You agree to defend, indemnify, and hold harmless Townsquare Technologies Private Limited and its officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any and all claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
              </p>
              <ul className="standard-list">
                <li>Your violation of these Terms or our Community Guidelines</li>
                <li>Your use or misuse of the App</li>
                <li>Your violation of any rights of another party, including other users or businesses</li>
                <li>Your User Content or any content you submit, post, or transmit through the App</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Any claim that your User Content caused damage to a third party</li>
              </ul>
              <p className="section-content">
                This indemnification obligation will survive the termination of these Terms and your use of the App.
              </p>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="terms-section">
              <h2 className="section-title">18. Governing Law</h2>
              <p className="section-content">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. You agree that any legal action or proceeding relating to these Terms or the App shall be instituted exclusively in the courts of Bangalore, Karnataka, India.
              </p>
              <p className="section-content">
                By using the App, you consent to the exclusive jurisdiction and venue of such courts in any such action or proceeding and waive any objection to such jurisdiction or venue.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section id="dispute" className="terms-section">
              <h2 className="section-title">19. Dispute Resolution</h2>
              <p className="section-content">
                We encourage you to contact us first if you have any concerns or disputes regarding the App. Most disputes can be resolved informally by contacting us at abhishek@locofy.in.
              </p>
              <h3 className="subsection-title">Arbitration</h3>
              <p className="section-content">
                If we are unable to resolve a dispute informally, any dispute arising from or relating to these Terms or the App shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall take place in Bangalore, Karnataka, India.
              </p>
              <h3 className="subsection-title">Class Action Waiver</h3>
              <p className="section-content">
                You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration.
              </p>
            </section>

            {/* Modifications to Terms */}
            <section id="modifications" className="terms-section">
              <h2 className="section-title">20. Modifications to Terms</h2>
              <p className="section-content">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect through:
              </p>
              <ul className="standard-list">
                <li>Email notification to the address associated with your account</li>
                <li>Prominent notice within the App</li>
                <li>Push notifications (if enabled)</li>
                <li>Updates on our website</li>
              </ul>
              <p className="section-content">
                Your continued use of the App after any such changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the App and may delete your account.
              </p>
              <p className="section-content">
                We recommend reviewing these Terms periodically for any changes. Changes are effective when posted.
              </p>
            </section>

            {/* Contact Information */}
            <section id="contact" className="terms-section">
              <h2 className="section-title">21. Contact Information</h2>
              <p className="section-content">
                If you have any questions, concerns, or feedback about these Terms or the App, please contact us:
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
              <div className="highlight-box">
                <p className="highlight-content">
                  For urgent safety concerns or to report content that violates our Child Safety Standards, please contact us immediately at abhishek@locofy.in or use the in-app reporting feature.
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="terms-section acknowledgment-section">
              <div className="acknowledgment-box">
                <h3 className="acknowledgment-title">Acknowledgment</h3>
                <p className="acknowledgment-content">
                  BY USING THE LOCOFY APP, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE APP.
                </p>
                <p className="acknowledgment-content" style={{ marginTop: '1rem' }}>
                  YOU FURTHER ACKNOWLEDGE THAT YOU UNDERSTAND OUR ZERO-TOLERANCE POLICY REGARDING CHILD SAFETY AND THE SEVERE CONSEQUENCES FOR VIOLATIONS.
                </p>
                <p className="acknowledgment-date">
                  Effective Date: December 18, 2025
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Scroll to Top Button */}
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

export default TermsOfService;