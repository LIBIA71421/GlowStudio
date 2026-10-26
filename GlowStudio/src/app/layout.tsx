import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import { MotionProvider } from "@/shared/components/motion-provider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GlowStudio — Soft beauty, made with love",
  description:
    "Tu momento de brillar comienza en GlowStudio. Uñas, pedicura y belleza en Cochabamba, con un toque soft beauty y mucho amor.",
  applicationName: "GlowStudio",
  openGraph: {
    title: "GlowStudio — Soft beauty, made with love",
    description:
      "Uñas hechas con amor, diseños a tu medida y un ratito solo para ti.",
    locale: "es_BO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta name="theme-color" content="#fffaf8" />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
