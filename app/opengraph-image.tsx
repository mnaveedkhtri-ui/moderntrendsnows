import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Modern Trends Now - Curated Viral Finds';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0a0c12',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 60%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              backgroundColor: '#0f121d',
              border: '2px solid rgba(245, 158, 11, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
              <path
                d="M10 30V12L20 23L30 12V30"
                stroke="#f59e0b"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="20" cy="15" r="2.5" fill="#ffffff" />
              <path d="M15 30H25" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '28px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.5px' }}>
              MODERN TRENDS NOW
            </span>
            <span style={{ fontSize: '14px', color: '#94a3b8', letterSpacing: '1px' }}>
              CURATED VIRAL FINDS // STORE
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#f59e0b',
              fontSize: '14px',
              fontWeight: '700',
              width: 'fit-content',
            }}
          >
            ● 2026 CURATED DESKTOP & HOME COLLECTION
          </div>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: '900',
              color: '#ffffff',
              lineHeight: '1.1',
              letterSpacing: '-1.5px',
              margin: '0',
            }}
          >
            Aesthetic Living & Viral Workspace Objects.
          </h1>
          <p style={{ fontSize: '22px', color: '#cbd5e1', lineHeight: '1.4', margin: '0' }}>
            Hand-tested minimalist desk accessories, ambient lighting, and smart home essentials. Direct Amazon Prime delivery.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#64748b',
            fontSize: '16px',
          }}
        >
          <span>https://moderntrendsnow.store</span>
          <span style={{ color: '#f59e0b', fontWeight: '700' }}>Amazon Prime Verified Curation</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
