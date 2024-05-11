import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cookies } from "next/headers"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isLoggedIn = cookies().get("session")?.value ? true : false
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center items-center p-24">
        <Navbar isLoggedIn={isLoggedIn} />
        <main>{children}</main>
      </body>
    </html>
  )
}
