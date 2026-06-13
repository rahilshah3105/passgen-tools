import React from 'react';

/**
 * PrivacyPolicy – Full privacy policy modal/overlay
 * Opened from the Footer. Covers data practices, cookies, AdSense, and user rights.
 * Displays a styled "Made with ❤️ in India" section at the bottom.
 */
export default function PrivacyPolicy({ onClose, darkMode = false }) {
  const sections = [
    {
      icon: '📋',
      title: 'Information We Collect',
      content:
        'PassGen Tools operates entirely in your browser. We do not collect, transmit, or store any personal information on our servers. All passwords and vault data are saved exclusively in your browser\'s localStorage and never leave your device.',
    },
    {
      icon: '🔐',
      title: 'Password Storage & Security',
      content:
        'Passwords stored in the vault are kept in your browser\'s localStorage. We strongly recommend using this tool on a personal, trusted device. Clearing browser data will erase your vault. We have no access to any passwords you store.',
    },
    {
      icon: '🍪',
      title: 'Cookies & Local Storage',
      content:
        'We use localStorage to save your preferences (e.g., dark mode, vault data) and session settings. No third-party tracking cookies are placed by us. However, Google AdSense — our advertising partner — may use cookies to serve relevant ads based on your browsing history.',
    },
    {
      icon: '📢',
      title: 'Google AdSense & Advertising',
      content:
        'This site uses Google AdSense to display advertisements. Google, as a third-party vendor, uses cookies (including the DoubleClick cookie) to serve ads based on users\' prior visits to this website or other sites. You can opt out of personalised advertising by visiting Google\'s Ad Settings at https://adssettings.google.com. We comply with Google\'s policies and do not display ads alongside inappropriate content.',
    },
    {
      icon: '📊',
      title: 'Analytics',
      content:
        'We may use anonymous analytics tools (such as Google Analytics) to understand general usage patterns — pages viewed, session duration, device type. This data is aggregated and contains no personally identifiable information.',
    },
    {
      icon: '🔗',
      title: 'Third-Party Links',
      content:
        'Our Apps page includes links to third-party applications. We are not responsible for the privacy practices or content of those external sites. We encourage you to review their privacy policies before use.',
    },
    {
      icon: '👤',
      title: 'Your Rights',
      content:
        'Since we do not collect personal data, there is no stored data of yours to request, modify, or delete on our end. You can clear your own vault and preferences anytime by clearing your browser\'s localStorage or site data from your browser settings.',
    },
    {
      icon: '🔄',
      title: 'Changes to This Policy',
      content:
        'We may update this Privacy Policy from time to time. Changes will be reflected on this page with a revised date. Continued use of the site after changes constitutes your acceptance of the updated policy.',
    },
    {
      icon: '📬',
      title: 'Contact',
      content:
        'If you have questions about this Privacy Policy or our practices, feel free to reach out via the project\'s GitHub repository.',
    },
  ];

  return (
    <div
      id="privacy-policy-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        padding: '0',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '760px',
          maxHeight: '90vh',
          background: darkMode ? '#111827' : '#ffffff',
          borderRadius: '24px 24px 0 0',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.4)',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 24px 16px',
            borderBottom: `1px solid ${darkMode ? '#1f2937' : '#f1f5f9'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: '20px',
                fontWeight: 700,
                color: darkMode ? '#f9fafb' : '#0f172a',
              }}
            >
              🔏 Privacy Policy
            </h2>
            <p
              style={{
                margin: '4px 0 0',
                fontSize: '12px',
                color: darkMode ? '#6b7280' : '#94a3b8',
              }}
            >
              Last updated: June 2025 · PassGen Tools
            </p>
          </div>
          <button
            id="privacy-policy-close-btn"
            onClick={onClose}
            aria-label="Close Privacy Policy"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: `1px solid ${darkMode ? '#374151' : '#e2e8f0'}`,
              background: darkMode ? '#1f2937' : '#f8fafc',
              color: darkMode ? '#9ca3af' : '#64748b',
              cursor: 'pointer',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
          >
            ×
          </button>
        </div>

        {/* Scrollable body */}
        <div
          style={{
            overflowY: 'auto',
            flex: 1,
            padding: '20px 24px',
          }}
        >
          {/* Intro */}
          <div
            style={{
              background: darkMode
                ? 'linear-gradient(135deg, #064e3b22, #0284c722)'
                : 'linear-gradient(135deg, #ecfdf5, #eff6ff)',
              border: `1px solid ${darkMode ? '#065f4640' : '#d1fae5'}`,
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                color: darkMode ? '#a7f3d0' : '#065f46',
                lineHeight: 1.6,
              }}
            >
              <strong>Your privacy matters.</strong> PassGen Tools is built with a
              privacy-first approach — your passwords never leave your device, and we
              are transparent about how this site operates.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section, i) => (
            <div
              key={i}
              style={{
                marginBottom: '16px',
                padding: '16px',
                background: darkMode ? '#1f2937' : '#f8fafc',
                borderRadius: '12px',
                border: `1px solid ${darkMode ? '#374151' : '#e2e8f0'}`,
              }}
            >
              <h3
                style={{
                  margin: '0 0 8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: darkMode ? '#f3f4f6' : '#1e293b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>{section.icon}</span>
                {section.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: '13px',
                  color: darkMode ? '#9ca3af' : '#64748b',
                  lineHeight: 1.65,
                }}
              >
                {section.content}
              </p>
            </div>
          ))}

          {/* Made with ❤️ in India */}
          <div
            style={{
              marginTop: '24px',
              padding: '24px',
              borderRadius: '16px',
              background: darkMode
                ? 'linear-gradient(135deg, #1f2937, #111827)'
                : 'linear-gradient(135deg, #fff7ed, #fefce8)',
              border: `1px solid ${darkMode ? '#374151' : '#fed7aa'}`,
              textAlign: 'center',
            }}
          >
            {/* Indian flag colours bar */}
            <div
              style={{
                display: 'flex',
                height: '5px',
                borderRadius: '999px',
                overflow: 'hidden',
                maxWidth: '120px',
                margin: '0 auto 16px',
              }}
            >
              <div style={{ flex: 1, background: '#FF9933' }} />
              <div style={{ flex: 1, background: '#FFFFFF' }} />
              <div style={{ flex: 1, background: '#138808' }} />
            </div>

            <p
              style={{
                margin: '0 0 6px',
                fontSize: '22px',
                fontWeight: 700,
                color: darkMode ? '#f9fafb' : '#1e293b',
                letterSpacing: '-0.5px',
              }}
            >
              Made with{' '}
              <span
                style={{
                  color: '#ef4444',
                  display: 'inline-block',
                  animation: 'heartbeat 1.4s ease-in-out infinite',
                }}
              >
                ❤️
              </span>{' '}
              in India
            </p>
            <p
              style={{
                margin: 0,
                fontSize: '13px',
                color: darkMode ? '#6b7280' : '#94a3b8',
              }}
            >
              Built with passion to help people stay secure online 🇮🇳
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1);    }
          14%      { transform: scale(1.25); }
          28%      { transform: scale(1);    }
          42%      { transform: scale(1.15); }
          56%      { transform: scale(1);    }
        }
      `}</style>
    </div>
  );
}
