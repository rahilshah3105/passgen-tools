import React, { useEffect } from 'react';

/**
 * AdBanner – Google AdSense banner component
 *
 * Shows a live ad when VITE_ADSENSE_CLIENT_ID and slot are present,
 * or a styled dev-mode placeholder otherwise.
 *
 * Usage:
 *   <AdBanner
 *     slot={import.meta.env.VITE_ADSENSE_TOP_SLOT}
 *     position="top"
 *     darkMode={darkMode}
 *   />
 */
function loadAdSenseScript(client) {
  if (!client || typeof document === 'undefined') return;
  if (document.querySelector('script[data-passgen-adsense="true"]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
  script.setAttribute('crossorigin', 'anonymous');
  script.setAttribute('data-passgen-adsense', 'true');
  document.head.appendChild(script);
}

export default function AdBanner({
  slot,
  position = 'top',
  darkMode = false,
  className = '',
}) {
  const client = import.meta.env.VITE_ADSENSE_CLIENT_ID;
  const isLive = Boolean(client && slot);

  useEffect(() => {
    if (!isLive) return;
    loadAdSenseScript(client);
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Silently fail — expected in dev or when account isn't approved yet
    }
  }, [client, slot, isLive]);

  /* ── Dev / Placeholder mode ─────────────────────────────────────── */
  if (!isLive) {
    return (
      <div
        className={`ad-banner-placeholder ${className}`}
        role="note"
        aria-label="Advertisement placeholder"
        style={{
          width: '100%',
          minHeight: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '4px',
          border: `2px dashed ${darkMode ? '#374151' : '#d1d5db'}`,
          borderRadius: '12px',
          background: darkMode
            ? 'rgba(17, 24, 39, 0.6)'
            : 'rgba(248, 250, 252, 0.8)',
          color: darkMode ? '#6b7280' : '#9ca3af',
          fontSize: '12px',
          fontFamily: 'inherit',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          padding: '12px',
        }}
      >
        <span style={{ fontSize: '18px', opacity: 0.4 }}>📢</span>
        <span>
          Advertisement · {position === 'top' ? 'Top' : 'Bottom'} Banner
        </span>
        <span style={{ fontSize: '10px', opacity: 0.6 }}>
          Configure VITE_ADSENSE_CLIENT_ID &amp; VITE_ADSENSE_{position.toUpperCase()}_SLOT to enable live ads
        </span>
      </div>
    );
  }

  /* ── Live Google Ad ─────────────────────────────────────────────── */
  return (
    <div
      className={`ad-banner ${className}`}
      aria-label={`Advertisement – ${position} banner`}
      style={{ width: '100%', overflow: 'hidden' }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight: '90px' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
