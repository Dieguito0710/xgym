import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "X Gym — Where Champions Are Born",
  description:
    "El gimnasio premium que transforma tu cuerpo y mentalidad. Entrenadores certificados, equipamiento de élite y resultados reales. Únete a más de 3,000 miembros.",
  keywords: ["gimnasio premium", "fitness", "entrenamiento", "X Gym"],
  openGraph: {
    title: "X Gym — Where Champions Are Born",
    description: "El gimnasio premium que transforma tu cuerpo y mentalidad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
