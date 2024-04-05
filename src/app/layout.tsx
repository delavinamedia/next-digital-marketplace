import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"; // constructMetadata 
import NavBar from "@/components/NavBar";
import Providers from "@/components/providers/Providers";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = constructMetadata();
export const metadata: Metadata = {
  title: {
    template: '%s | digiprops',
    default: 'digiprops by delavina',
  },
  description: 'beautifully designed digital props for filmmaking',
  icons: {
    icon: "/favicon.ico", 
  },
  keywords: ['props', 'Requisiten', 'filmmaking', 'Grafik'],
  publisher: 'Holger Köppen | delavina',
  openGraph: {
    images: '/og-image.png',
  },
}

// TODO: add dark team implementation

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative h-full font-sans antialiased", 
          inter.className
        )}
      >
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            <NavBar />

            <div className="flex-grow flex-1">{children}</div>

            <Footer />
          </Providers>
        </main>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
