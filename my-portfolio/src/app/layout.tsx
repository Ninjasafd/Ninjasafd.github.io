import { Inter } from "next/font/google";
import './globals.css';
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jeffrey Pan - Portfolio',
  description: "Jeffrey Pan's personal portfolio showcasing projects, skills, and work experience.",
  icons: {
    icon: '/icons/space-rainbow-ico.ico', 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
