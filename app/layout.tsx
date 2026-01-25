import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Lexend } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const lexend = Lexend({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "Femina K | Developer & Designer",
  description:
    "Full Stack Developer & UI/UX Designer creating production-ready web applications with a focus on clarity, usability, and scalability.",
  keywords: ["Full Stack Developer", "React", "Node.js", "MongoDB", "Web Developer", "AI Developer", "UI/UX Designer"],
  authors: [{ name: "Femina K" }],
  openGraph: {
    title: "Femina K | Developer & Designer",
    description: "Full Stack Developer & UI/UX Designer building production-ready applications.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a192f",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ "--font-heading": lexend.style.fontFamily } as React.CSSProperties}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
