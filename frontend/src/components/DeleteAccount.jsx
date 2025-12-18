import React, { useState } from 'react';
import './styles/delete_account.css';

const DeleteAccount = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  const handleDeleteClick = () => {
    if (email) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmDelete = () => {
    setIsDeleting(true);
    
    // Simulate deletion process
    setTimeout(() => {
      setIsDeleting(false);
      setIsDeleted(true);
    }, 2000);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  if (isDeleted) {
    return (
      <div className="delete-account-container">
        {/* Header */}
        <header className="delete-header">
          <div className="header-content">
            <div className="logo">Locofy</div>
            <nav className="header-nav">
              <a href="/">Home</a>
            </nav>
          </div>
        </header>

        {/* Success Message */}
        <div className="delete-layout">
          <div className="success-container">
            <div className="success-animation">
              <div className="success-checkmark">
                <svg viewBox="0 0 52 52" className="checkmark-svg">
                  <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                  <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
              </div>
            </div>
            
            <h1 className="success-title">Account Deleted</h1>
            <p className="success-message">
              Your Locofy account has been successfully deleted. We're sorry to see you go.
            </p>
            
            <div className="success-info">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <p>You'll receive a confirmation email shortly</p>
              </div>
              <div className="info-item">
                <span className="info-icon">🔒</span>
                <p>All your data has been permanently removed</p>
              </div>
              <div className="info-item">
                <span className="info-icon">💬</span>
                <p>Your reviews and content have been anonymized</p>
              </div>
            </div>

            <div className="success-actions">
              <a href="/" className="btn-primary">
                Return to Homepage
              </a>
              <p className="feedback-text">
                Changed your mind? <a href="/contact" className="feedback-link">Contact Support</a>
              </p>
            </div>
          </div>
        </div>

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
                  <li><a href="/terms-and-conditions" className="hover:text-[#FFB300] transition-colors">Terms & Conditions</a></li>
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
  }

  return (
    <div className="delete-account-container">
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
      <div className="delete-layout">
        <div className="delete-content">
          {/* Warning Banner */}
          <div className="warning-banner">
            <span className="warning-icon">⚠️</span>
            <div>
              <h3 className="warning-title">Permanent Action</h3>
              <p className="warning-text">This action cannot be undone. All your data will be permanently deleted.</p>
            </div>
          </div>

          {/* Main Form */}
          <div className="delete-card">
            <div className="card-header">
              <h1 className="card-title">Delete Your Account</h1>
              <p className="card-subtitle">We're sorry to see you go. Please confirm your decision below.</p>
            </div>

            {!showConfirmation ? (
              <div className="form-container">
                {/* What Will Happen */}
                <div className="info-section">
                  <h3 className="info-title">What will happen when you delete your account:</h3>
                  <ul className="info-list">
                    <li className="info-item">
                      <span className="item-icon">🗑️</span>
                      <span>All your personal information will be permanently deleted</span>
                    </li>
                    <li className="info-item">
                      <span className="item-icon">📸</span>
                      <span>Your photos, reviews, and comments will be removed</span>
                    </li>
                    <li className="info-item">
                      <span className="item-icon">🔗</span>
                      <span>You'll lose access to saved businesses and bookmarks</span>
                    </li>
                    <li className="info-item">
                      <span className="item-icon">📊</span>
                      <span>All your activity history will be erased</span>
                    </li>
                    <li className="info-item">
                      <span className="item-icon">❌</span>
                      <span>You won't be able to recover your account</span>
                    </li>
                  </ul>
                </div>

                {/* Reason for Leaving */}
                <div className="form-group">
                  <label className="form-label">Why are you leaving? (Optional)</label>
                  <select 
                    className="form-select"
                    value={reason}
                    onChange={(e) => {
                      setReason(e.target.value);
                      if (e.target.value !== 'other') {
                        setCustomReason('');
                      }
                    }}
                  >
                    <option value="">Select a reason...</option>
                    <option value="not-useful">App not useful anymore</option>
                    <option value="privacy">Privacy concerns</option>
                    <option value="too-many-notifications">Too many notifications</option>
                    <option value="found-alternative">Found a better alternative</option>
                    <option value="technical-issues">Technical issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Custom Reason Textbox - Shows when "Other" is selected */}
                {reason === 'other' && (
                  <div className="form-group custom-reason-container">
                    <label className="form-label">Please tell us more</label>
                    <textarea
                      className="form-textarea"
                      placeholder="What made you decide to delete your account?"
                      value={customReason}
                      onChange={(e) => setCustomReason(e.target.value)}
                      rows="4"
                    />
                  </div>
                )}

                {/* Email Input */}
                <div className="form-group">
                  <label className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                  <button
                    className="btn-delete"
                    onClick={handleDeleteClick}
                    disabled={!email}
                  >
                    Delete My Account
                  </button>
                  <a href="/" className="btn-cancel">
                    Cancel
                  </a>
                </div>
              </div>
            ) : (
              <div className="confirmation-modal">
                <div className="modal-icon">
                  <span className="icon-warning">⚠️</span>
                </div>
                
                <h2 className="modal-title">Are you absolutely sure?</h2>
                <p className="modal-message">
                  This will permanently delete your Locofy account and remove all your data from our servers. This action is irreversible.
                </p>

                <div className="confirmation-details">
                  <div className="detail-item">
                    <span className="detail-label">Account Email:</span>
                    <span className="detail-value">{email}</span>
                  </div>
                  {reason && (
                    <div className="detail-item">
                      <span className="detail-label">Reason:</span>
                      <span className="detail-value">
                        {reason === 'other' && customReason 
                          ? customReason 
                          : reason.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                        }
                      </span>
                    </div>
                  )}
                </div>

                <div className="modal-actions">
                  <button
                    className="btn-confirm-delete"
                    onClick={handleConfirmDelete}
                    disabled={isDeleting}
                  >
                    {isDeleting ? (
                      <>
                        <span className="spinner"></span>
                        Deleting...
                      </>
                    ) : (
                      'Yes, Delete My Account'
                    )}
                  </button>
                  <button
                    className="btn-cancel-modal"
                    onClick={handleCancel}
                    disabled={isDeleting}
                  >
                    No, Keep My Account
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Help Section */}
          {/* <div className="help-section">
            <h3 className="help-title">Need help instead?</h3>
            <p className="help-text">
              If you're experiencing issues, our support team is here to help. You can also temporarily deactivate your account instead of deleting it.
            </p>
            <div className="help-links">
              <a href="/contact" className="help-link">Contact Support</a>
              <a href="/help" className="help-link">Visit Help Center</a>
            </div>
          </div> */}
        </div>
      </div>

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
                <li><a href="/terms-and-conditions" className="hover:text-[#FFB300] transition-colors">Terms & Conditions</a></li>
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

export default DeleteAccount;