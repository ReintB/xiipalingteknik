import { Suspense } from "react";
import { Inter } from "next/font/google";
import { ScrollToTopProvider } from "@/components/scroll-to-top-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import PageTransition from "@/components/page-transition";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const description =
  "Website kenang-kenangan kelas XIIPALINGTEKNIK (XI-4 & XII-4): foto, video, kegiatan, dan cerita kami selama SMA.";

// og:image & favicon diambil otomatis dari app/opengraph-image.jpg dan app/icon.png
export const metadata: Metadata = {
  title: "XIIPALINGTEKNIK",
  description,
  openGraph: {
    title: "XIIPALINGTEKNIK",
    description,
    siteName: "XIIPALINGTEKNIK",
    locale: "id_ID",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <ScrollToTopProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1 overflow-hidden">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
              <BackToTop />
            </div>
          </ScrollToTopProvider>
        </Suspense>
      </body>
    </html>
  );
}
