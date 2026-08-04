import React from 'react';

export const getSkillIcon = (toolName) => {
  switch (toolName) {
    case 'SDL Trados Studio':
      return (
        <img src="/logo_sdl.png" alt="SDL Trados Studio" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
      );
    case 'Wordfast':
      return (
        <svg viewBox="0 0 64 64" fill="none" style={{ width: '100%', height: '100%' }}>
          <circle cx="32" cy="32" r="28" fill="#368EDB" />
          <text x="32" y="42" fontSize="24" fontWeight="900" fill="#FFF" textAnchor="middle" fontFamily="sans-serif">WF</text>
        </svg>
      );
    case 'Translation Workspace':
      return (
        <svg viewBox="0 0 64 64" fill="none" style={{ width: '100%', height: '100%' }}>
          <path d="M32 6c16.5 0 30 11.6 30 26s-13.5 26-30 26c-3.5 0-6.8-.5-10-1.4C16 60 8 62 8 62s4-7 4-11C8.2 46.5 6 41 6 32 6 17.6 17.6 6 32 6z" fill="#1A73E8" />
          <text x="32" y="40" fontSize="22" fontWeight="900" fill="#FFF" textAnchor="middle" fontFamily="sans-serif">tw</text>
        </svg>
      );
    case 'InDesign':
      return (
        <svg viewBox="0 0 64 64" fill="none" style={{ width: '100%', height: '100%' }}>
          <rect x="12" y="12" width="40" height="40" rx="4" fill="#E4007B" />
          <rect x="16" y="16" width="32" height="32" rx="2" fill="#240012" />
          <text x="32" y="42" fontSize="20" fontWeight="bold" fill="#E4007B" textAnchor="middle" fontFamily="sans-serif">Id</text>
        </svg>
      );
    case 'Xbench':
      return (
        <svg viewBox="0 0 64 64" fill="none" style={{ width: '100%', height: '100%' }}>
          <path d="M12 12l16 20-16 20h12l10-12.5L44 52h12L40 32 56 12H44L34 24.5 24 12H12z" fill="#75B039" />
          <path d="M28 32l16 20h12L40 32z" fill="#1B3F5B" />
        </svg>
      );
    case 'Envelope':
      return (
        <svg viewBox="0 0 64 64" fill="none" style={{ width: '100%', height: '100%' }}>
          <rect x="6" y="16" width="52" height="32" rx="2" fill="#1A73E8" />
          <path d="M8 18l24 16 24-16" stroke="#FFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'Xliff Editor':
      return (
        <svg viewBox="0 0 64 64" fill="none" style={{ width: '100%', height: '100%' }}>
          <path d="M16 6h20l12 12v40H16V6z" fill="#E0E0E0" />
          <path d="M36 6v12h12" fill="#BDBDBD" />
          <rect x="12" y="42" width="40" height="12" rx="2" fill="#1A73E8" />
          <text x="32" y="51" fontSize="9" fontWeight="bold" fill="#FFF" textAnchor="middle" fontFamily="sans-serif">XLIFF</text>
          <path d="M24 24l-6 6 6 6M40 24l6 6-6 6M34 22l-4 16" stroke="#1A73E8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'ISM, etc...':
      return (
        <svg viewBox="0 0 64 64" fill="none" style={{ width: '100%', height: '100%' }}>
          <circle cx="32" cy="16" r="6" fill="#8E24AA" />
          <circle cx="16" cy="44" r="6" fill="#00897B" />
          <circle cx="48" cy="44" r="6" fill="#7CB342" />
          <path d="M32 22v4c0 10-12 14-12 14M32 22v4c0 10 12 14 12 14" stroke="#B0BEC5" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M22 44h20" stroke="#B0BEC5" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'Across':
      return (
        <svg viewBox="0 0 64 64" fill="none" style={{ width: '100%', height: '100%', borderRadius: '18px', backgroundColor: '#F5F5F5' }}>
          <path d="M16 42 h14 v-16 h-8 c0 -8, 6 -14, 14 -14 v-6 c-12 0, -20 10, -20 20 z" fill="#75B039" />
          <path d="M48 22 h-14 v16 h8 c0 8, -6 14, -14 14 v6 c12 0, 20 -10, 20 -20 z" fill="#1A365D" />
        </svg>
      );
    case 'MemoQ':
      return (
        <img src="/logo_memoq.png" alt="MemoQ" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
      );
    case 'Coach':
      return (
        <img src="/logo_coach.png" alt="Coach" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
      );
    case 'Phrase':
      return (
        <img src="/logo_phrase.png" alt="Phrase" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
      );
    case 'Matecat':
      return (
        <img src="/logo_matecat.png" alt="Matecat" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
      );
    default:
      return (
        <svg viewBox="0 0 64 64" fill="none" style={{ width: '100%', height: '100%' }}>
          <circle cx="32" cy="32" r="28" fill="#eaeaea" />
        </svg>
      );
  }
};
