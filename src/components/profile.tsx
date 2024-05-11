"use client"

export function Profile({ profile }: any) {
  const {
    username,
    email,
    name,
    dateOfBirth,
    country,
    totalFollowers,
    createdAt,
  } = profile || {}
  const createdDate = new Date(createdAt)
  return (
    <>
      <h3>{username}</h3>
      <h3>{email}</h3>
      <h3>{name}</h3>
      <h3>{dateOfBirth}</h3>
      <h3>{country}</h3>
      <h3>{totalFollowers} followers</h3>
      <h3>
        Joined {createdDate.toLocaleString("en-Us", { month: "long" })}{" "}
        {createdDate.getFullYear()}
      </h3>
    </>
  )
}