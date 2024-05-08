"use client"

import { login } from "@/app/actions/auth"
import { useFormStatus } from "react-dom"

export function LoginForm() {
  return (
    <form
      action={login}
      className="flex flex-col rounded max-w-[500px] mb-10 mx-auto space-y-2 p-10"
    >
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="border rounded h-10 px-3 text-black"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border rounded h-10 px-3 text-black"
        required
      />

      <LoginButton />
    </form>
  )
}

export function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <button
      aria-disabled={pending}
      type="submit"
      className="bg-zinc-900 disabled:bg-zinc-500 transition text-white rounded py-2 px-3"
    >
      {pending ? "Logging in..." : "Log in"}
    </button>
  )
}
