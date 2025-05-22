import type { Metadata } from "next";
import "./globals.css";
import { HeaderConteiner } from "@/Components/Layout/HeaderContainer";

export const metadata: Metadata = {
  title: "Mahdi Bagheri | Frontend Developer & UI Engineer",
  description: "Hi, I'm Mahdi Bagheri, a passionate frontend developer focused on building fast, modern, and accessible web apps using Next.js, React, and Tailwind CSS. Let's create innovative digital experiences together!",
  keywords: [
    "Mahdi Bagheri",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Iran",
    "UI Engineer",
    "Personal Website",
    "Tailwind CSS Developer",
    "Frontend Development",
    "Web Development",
    "UI/UX Engineer"
  ],
  robots: "index, follow",
  authors: [{ name: "Mahdi Bagheri", url: "https://personal-website-phi-orpin-88.vercel.app/" }],
  openGraph: {
    title: "Mahdi Bagheri | Frontend Developer & UI Engineer",
    description: "Building fast and modern web applications with React and Next.js. Passionate about creating accessible and responsive websites.",
    url: "https://personal-website-phi-orpin-88.vercel.app/",
    siteName: "Mahdi Bagheri",
    type: "website",
    locale: "en_US",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="fW0PQrZi5Pt-5zuEi4I1XuoUt4zHHw7jvvs5pDOxTtU" />
      </head>
      <body
        className={`antialiased`}
      >
        <HeaderConteiner />
        {children}
      </body>
    </html>
  );
}
