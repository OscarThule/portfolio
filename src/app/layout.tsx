import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thule-Oscar | Full-Stack Developer Portfolio',
  description: 'Full-Stack Developer with 7 years of experience in modern web technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
