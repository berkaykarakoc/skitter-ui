"use server"

import { cookies } from "next/headers"

export async function login(formData: FormData) {
  const { username, password } = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  }

  const res = await fetch(`http://127.0.0.1:3000/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
  const data = await res.json()

  cookies().set("accessToken", data.access_token, {
    maxAge: 15 * 60, // 15 minutes
    httpOnly: true,
    secure: true,
  })
}

export async function signUp(formData: FormData) {
  const { username, email, password } = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const res = await fetch(`http://127.0.0.1:3000/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  })

  const user = await res.json()

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }

  return user.username
}
