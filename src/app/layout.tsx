import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { HeaderConteiner } from "@/Components/Layout/HeaderContainer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahdi Bagheri | Software engineering | Frontend Developer",
  description: "I'm a Frontend Developer specializing in Next.js, React, and modern UI/UX. Passionate about building fast and accessible web applications.",
  keywords: ["Software engineering", "Frontend Developer", "Next.js", "React", "UI Engineer", "Web Development"],
  robots: "index, follow",
  openGraph: {
    title: "Mahdi Bagheri | Software engineering & Frontend Developer",
    description: "Building modern, high-performance web applications with Next.js and React.",
    url: "https://personal-website-phi-orpin-88.vercel.app/",
    siteName: "Mahdi bagheri",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <HeaderConteiner/>
        {children}
      </body>
    </html>
  );
}
