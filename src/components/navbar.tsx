"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { LogoutButton } from "./logout-button"

export function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  const pathname = usePathname()

  return (
    <nav className="absolute top-0 space-x-4">
      {isLoggedIn ? (
        <>
          <Link
            className={`link ${pathname === "/" ? "active" : ""}`}
            href="/home"
          >
            Home
          </Link>
          <Link
            className={`link ${pathname === "/" ? "active" : ""}`}
            href="/profile"
          >
            Profile
          </Link>
          <LogoutButton />
        </>
      ) : (
        <>
          <Link
            className={`link ${pathname === "/" ? "active" : ""}`}
            href="/login"
          >
            Login
          </Link>
          <Link
            className={`link ${pathname === "/" ? "active" : ""}`}
            href="/signup"
          >
            Sign Up
          </Link>
        </>
      )}
    </nav>
  )
}
