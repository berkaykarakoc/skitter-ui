"use client"

import { logout } from "@/app/actions/auth"

export function LogoutButton() {
  return (
    <button
      type="button"
      onClick={(e) => logout()}
    >
      Logout
    </button>
  )
}
