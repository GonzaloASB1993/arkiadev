import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARKIA - Más Clientes para tu Negocio con Presencia Digital",
  description: "Ayudamos a PYMEs a crecer digitalmente con soluciones web que aumentan ventas, ahorran tiempo y permiten competir con grandes empresas.",
  keywords: ["desarrollo web", "PYME", "tienda online", "página web", "Chile", "transformación digital"],
  authors: [{ name: "ARKIA Team" }],
  openGraph: {
    title: "ARKIA - Más Clientes para tu Negocio",
    description: "Soluciones web para PYMEs que aumentan ventas y ahorran tiempo",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
