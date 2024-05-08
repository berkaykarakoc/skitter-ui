import { cookies } from "next/headers"

async function getUserDetails(username: string) {
  const accessToken = cookies().get("accessToken")
  const res = await fetch(
    `http://127.0.0.1:3000/api/users/${username}/details`,
    {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`
      },
    }
  )
  if (res.status === 404) { 
    return `${username} does not exist`
  }

  const data = await res.json()
  return data
}

export default async function ProfilePage({
  params,
}: {
  params: { username: string }
}) {
  const { username } = params

  const userDetails = await getUserDetails(username)
  return <UserDetails userDetails={userDetails} />
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
