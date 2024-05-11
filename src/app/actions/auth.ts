"use server"

import { SignupFormSchema } from "@/app/lib/definitions"
import { createSession, deleteSession } from "../lib/session"
import { redirect } from "next/navigation"

export async function signup(formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { username, email, password } = validatedFields.data

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
      message: "An error occurred while creating your account.",
    }
  }

  redirect(`/login`)
}

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

  await createSession({
    access_token: data.access_token,
  })

  redirect("/home")
}

export async function logout() {
  deleteSession()
  redirect("/login")
}
