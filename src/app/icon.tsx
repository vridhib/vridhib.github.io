import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0B0813', // ink-violet
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D4B884', // gold-accent
          fontFamily: 'monospace',
          fontWeight: 'bold',
          border: '2px solid #D4B884'
        }}
      >
        V
      </div>
    ),
    size
  );
}