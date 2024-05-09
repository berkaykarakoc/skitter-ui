"use client"

import { postSkit } from "@/app/actions/skits"
import { useFormStatus } from "react-dom"

export function PostSkitForm() {
  return (
    <form action={postSkit}>
      <input
        type="text"
        name="text"
        placeholder="Type your Skit here!"
        className="border rounded h-10 px-3 text-black"
        required
      />

      <PostSkitButton />
    </form>
  )
}

export function PostSkitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      aria-disabled={pending}
      type="submit"
      className="bg-zinc-900 disabled:bg-zinc-500 transition text-white rounded py-2 px-3"
    >
      {pending ? "Posting..." : "Post"}
    </button>
  )
}
