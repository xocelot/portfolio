import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan Villarreal | Portfolio",
  description:
    "Software engineer & crypto builder — portfolio de Juan Villarreal (xocelot / León de Cripto).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
