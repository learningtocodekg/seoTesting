import type { Metadata } from 'next';
import './globals.css';
import Navigation from './Components/NavBar';


export const metadata: Metadata = {
  title: 'Kaareen - Step into Your Potential',
  description: 'Discover footwear that blends comfort, style, and performance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'StrideForm',
              url: 'https://your-site.com',
              description: 'Discover footwear that blends comfort, style, and performance.',
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50 font-sans">
        <Navigation />
        {children}
      </body>
    </html>
  );
}