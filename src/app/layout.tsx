import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";


const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400", "600", "900"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", weight: ["300", "400", "500"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Vridhi Brahmbhatt | Full-Stack & FinTech Architect",
  description: "Architecting complex state machines, cryptographic ledgers, and real-time financial risk engines. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}