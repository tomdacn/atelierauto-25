import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atelier Auto - Nettoyage professionnel de voitures",
  description: "Atelier Auto, le spécialiste du nettoyage professionnel de voitures. Services intérieur et extérieur pour tous types de véhicules.",
  icons: {
    icon: [
      {
        url: "https://ext.same-assets.com/711422529/1788618429.png",
        href: "https://ext.same-assets.com/711422529/1788618429.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
