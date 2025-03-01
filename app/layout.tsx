import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NavigationProvider } from "@/components/providers"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Professional portfolio showcasing my work and services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavigationProvider>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1 pt-[74px]">{children}</main>
              <Footer />
            </div>
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'