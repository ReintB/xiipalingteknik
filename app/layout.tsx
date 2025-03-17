import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import PageTransition from "@/components/page-transition"
import { ScrollToTopProvider } from "@/components/scroll-to-top-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "XIIPALINGTEKNIK",
  description: "Website untuk mengabadikan kenangan, prestasi, dan momen berharga selama masa sekolah",
  generator: 'v0.dev',
  icons: {
    icon: "/logokelas.png",
    shortcut: "/logokelas.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
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
      </body>
    </html>
  )
}



import './globals.css'