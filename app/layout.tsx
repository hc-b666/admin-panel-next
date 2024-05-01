import { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "The Next practice looking at Next.js official course",
  metadataBase: new URL("https://next-practice-xi-six.vercel.app/dashboard"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
