import { cookies } from "next/headers"
import { decrypt } from "../lib/session"

export async function getProfile() {
  const cookie = cookies().get("session")?.value
  const session = await decrypt(cookie)

  const res = await fetch(`http://127.0.0.1:3000/api/profiles`, {
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
  })
  if (res.status === 404) {
    return `${session?.userId} does not exist`
  }

  const data = await res.json()
  return data
}

export async function getProfileByUsername(username: string) {
  const res = await fetch(`http://127.0.0.1:3000/api/profiles/${username}`)
  if (res.status === 404) {
    return `${username} does not exist`
  }

  const data = await res.json()
  return data
}
