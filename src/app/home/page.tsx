import { PostSkitForm } from "@/components/post-skit-form"
import { getSkits } from "../actions/skits"
import { SkitList } from "@/components/skit-list"

export default async function HomePage() {
  const skits = await getSkits()
  return (
    <div>
      <PostSkitForm />
      <SkitList skits={skits} />
    </div>
  )
}
