import { SkitList } from "@/components/skit-list"
import { getSkits } from "../actions/skits"
import { getProfile } from "../actions/profiles"
import { Profile } from "@/components/profile"

export default async function ProfilePage() {
  const profile = await getProfile()
  const skits = await getSkits()
  return (
    <div className="space-y-2">
      <Profile profile={profile} />
      <SkitList skits={skits} />
    </div>
  )
}
