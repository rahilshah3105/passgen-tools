import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';

/**
 * Footer – Full-width site footer
 * Contains: Privacy Policy link, "Made with ❤️ in India" (center), copyright
 */
export default function Footer({ darkMode = false }) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const year = new Date().getFullYear();

  const borderColor = darkMode ? '#1f2937' : '#e2e8f0';
  const textMuted = darkMode ? '#6b7280' : '#94a3b8';
  const textPrimary = darkMode ? '#d1d5db' : '#475569';
  const bgColor = darkMode ? '#0f172a' : '#f8fafc';
  const linkHover = '#10b981';

  return (
    <>
      <footer
        id="site-footer"
        role="contentinfo"
        style={{
          width: '100%',
          background: bgColor,
          borderTop: `1px solid ${borderColor}`,
          padding: '18px 24px',
          marginTop: '32px',
        }}
      >
        <div
          style={{
            maxWidth: '1152px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* Top row: links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <a
              href="https://passgen-tools.vercel.app/"
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#10b981',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              🔑 PassGen Tools
            </a>

            <span style={{ color: borderColor }}>·</span>

            <button
              id="footer-privacy-policy-btn"
              onClick={() => setShowPrivacy(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                color: textMuted,
                padding: 0,
                fontFamily: 'inherit',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = linkHover)}
              onMouseLeave={(e) => (e.target.style.color = textMuted)}
            >
              Privacy Policy
            </button>

            <span style={{ color: borderColor }}>·</span>

            <a
              href="https://github.com/rahilshah3105"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '13px',
                color: textMuted,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = linkHover)}
              onMouseLeave={(e) => (e.target.style.color = textMuted)}
            >
              GitHub
            </a>
          </div>

          {/* Center: Made with ❤️ in India */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              color: textPrimary,
            }}
          >
            <span>Made with</span>
            <span
              style={{
                color: '#ef4444',
                display: 'inline-block',
                animation: 'footerHeartbeat 1.4s ease-in-out infinite',
              }}
            >
              ❤️
            </span>
            <span>in</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>India</span>
              <span>🇮🇳</span>
            </span>
          </div>

          {/* Copyright */}
          <p
            style={{
              margin: 0,
              fontSize: '12px',
              color: textMuted,
              textAlign: 'center',
            }}
          >
            © {year} PassGen Tools. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <PrivacyPolicy onClose={() => setShowPrivacy(false)} darkMode={darkMode} />
      )}

      <style>{`
        @keyframes footerHeartbeat {
          0%, 100% { transform: scale(1);    }
          14%      { transform: scale(1.3);  }
          28%      { transform: scale(1);    }
          42%      { transform: scale(1.2);  }
          56%      { transform: scale(1);    }
        }
      `}</style>
    </>
  );
}
