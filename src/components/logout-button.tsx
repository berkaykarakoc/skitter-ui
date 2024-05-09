"use client"

import { logout } from "@/app/actions/auth"

export function LogoutButton() {
  return (
    <button
      type="button"
      onClick={(e) => logout()}
      className="bg-zinc-900 disabled:bg-zinc-500 transition text-white rounded py-2 px-3"
    >
      Logout
    </button>
  )
}
