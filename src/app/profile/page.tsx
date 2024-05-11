import { decrypt } from "@/app/lib/session"
import { SkitList } from "@/components/skit-list"
import { cookies } from "next/headers"
import { getSkits } from "../actions/skits"

export default async function ProfilePage() {
  const userDetails = await getUserDetails()
  const skits = await getSkits()
  return (
    <div className="space-y-4">
      <UserDetails userDetails={userDetails} />
      <SkitList skits={skits}/>
    </div>
  )
}

async function getUserDetails() {
  const cookie = cookies().get("session")?.value
  const session = await decrypt(cookie)

  const res = await fetch(
    `http://127.0.0.1:3000/api/profiles`,
    {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    }
  )
  if (res.status === 404) {
    return `${session?.userId} does not exist`
  }

  const data = await res.json()
  return data
}

function UserDetails({ userDetails }: any) {
  const {
    username,
    email,
    firstName,
    lastName,
    dateOfBirth,
    country,
    totalFollowers,
    createdAt,
    updatedAt,
  } = userDetails || {}
  return (
    <div>
      <h3>{username}</h3>
      <h3>{email}</h3>
      <h3>
        {firstName} {lastName}
      </h3>
      <h3>{dateOfBirth}</h3>
      <h3>{country}</h3>
      <h3>{totalFollowers}</h3>
      <h3>{createdAt}</h3>
      <h3>{updatedAt}</h3>
    </div>
  )
}
