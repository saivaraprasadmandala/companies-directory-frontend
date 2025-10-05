import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Building2 } from "lucide-react"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Companies Directory - Discover Leading Companies",
  description: "Browse and filter through a comprehensive directory of leading companies across various industries",
  generator: "v0.app",
}

/**
 * Root layout component
 * Contains the header, footer, and wraps all pages
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Header */}
        <Suspense fallback={<div>Loading...</div>}>
          <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-balance">Companies Directory</h1>
                  <p className="text-sm text-muted-foreground">Discover and explore leading companies</p>
                </div>
              </div>
            </div>
          </header>
        </Suspense>

        {/* Main Content */}
        <Suspense fallback={<div>Loading...</div>}>
          <main className="min-h-screen bg-background">{children}</main>
        </Suspense>

        {/* Footer */}
        <Suspense fallback={<div>Loading...</div>}>
          <footer className="border-t mt-16">
            <div className="container mx-auto px-4 py-6">
              <p className="text-center text-sm text-muted-foreground">
                Companies Directory © 2025 - Built with Next.js and React
              </p>
            </div>
          </footer>
        </Suspense>

        <Analytics />
      </body>
    </html>
  )
}
