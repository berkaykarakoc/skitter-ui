"use client"

import { signUp } from "@/app/actions/auth"
import { useFormStatus } from "react-dom"

export function SignUpForm() {
  return (
    <form
      action={signUp}
      className="flex flex-col rounded max-w-[500px] mb-10 mx-auto space-y-2 p-10"
    >
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          placeholder="Username"
          className="border rounded h-10 px-3 text-black"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="border rounded h-10 px-3 text-black"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="border rounded h-10 px-3 text-black"
          required
        />
      </div>
      <SignUpButton />
    </form>
  )
}

export function SignUpButton() {
  const { pending } = useFormStatus()

  return (
    <button
      aria-disabled={pending}
      type="submit"
      className="bg-zinc-900 disabled:bg-zinc-500 transition text-white rounded py-2 px-3"
    >
      {pending ? "Submitting..." : "Sign up"}
    </button>
  )
}
