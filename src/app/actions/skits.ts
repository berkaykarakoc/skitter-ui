"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { decrypt } from "../lib/session"

export async function postSkit(formData: FormData) {
  const cookie = cookies().get("session")?.value
  const session = await decrypt(cookie)

  const text = formData.get("text")

  const res = await fetch(`http://127.0.0.1:3000/api/skits`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
    }),
  })

  const skit = await res.json()

  console.log(skit)

  if (!skit) {
    return {
      message: "An error occurred while posting your Skit.",
    }
  }

  //redirect(`/profile`)
}

export async function getSkits() {
  const cookie = cookies().get("session")?.value
  const session = await decrypt(cookie)

  const res = await fetch(
    `http://127.0.0.1:3000/api/skits`,
    {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    }
  )
  const data = await res.json()
  return data
}

export async function deleteSkit(id: string) {
  const cookie = cookies().get("session")?.value
  const session = await decrypt(cookie)

  await fetch(
    `http://127.0.0.1:3000/api/skits/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    }
  )

  redirect(`/profile`)
}