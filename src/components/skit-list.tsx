"use client"

import { formatISODate } from "@/util/format-date"
import Link from "next/link"
import { useState } from "react"

export function SkitList({ skits }: any) {
  return (
    <>
      {skits.map((skit: any) => {
        return <Skit key={skit.id} skit={skit} />
      })}
    </>
  )
}

export function Skit({ skit }: any) {
  const [passedTime, setPassedTime] = useState("")
  const { id, text, createdAt, username, totalLikes } = skit || {}
  setInterval(() => {
    setPassedTime(formatISODate(createdAt))
  }, 1000)

  return (
    <div className="flex flex-col justify-between border rounded space-y-2 p-6">
      <div className="flex flex-row space-x-4">
        <p>@{username}</p>
        <p>{passedTime}</p>
      </div>
      <div className="flex flex-row space-x-4">
        <Link href={`/skits/${id}`}>{text}</Link>
      </div>
      <div className="flex flex-row space-x-4">
        <p>Likes {totalLikes}</p>
      </div>
    </div>
  )
}
