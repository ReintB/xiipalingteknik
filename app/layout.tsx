import { Suspense } from "react"
import { Inter } from "next/font/google"
import { ScrollToTopProvider } from "@/components/scroll-to-top-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import PageTransition from "@/components/page-transition"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "XIIPALINGTEKNIK",
  description: "Website untuk mengabadikan kenangan, prestasi, dan momen berharga selama masa sekolah",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
  )
}