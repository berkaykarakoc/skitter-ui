"use client"

import { deleteSkit } from "@/app/actions/skits"
import Link from "next/link"

export function SkitList({ skits }: any) {
  return (
    <div>
      <h1>Skits</h1>
      <div>
        {skits.map((skit: any) => {
          return <Skit key={skit.id} skit={skit} />
        })}
      </div>
    </div>
  )
}

export function Skit({ skit }: any) {
  const { id, text } = skit || {}

  return (
    <div className="flex flex-row justify-between">
      <Link href={`/skits/${id}`}>{text}</Link>
      <DeleteSkitButton skitId={skit.id} />
    </div>
  )
}

export function DeleteSkitButton({ skitId }: { skitId: string }) {
  return (
    <button type="button" onClick={(e) => deleteSkit(skitId)}>
      X
    </button>
  )
}
