import { Profile } from "@/components/profile"
import { SkitList } from "@/components/skit-list"
import { getProfileByUsername } from "@/app/actions/profiles"
import { getSkitsByUsername } from "@/app/actions/skits"

export default async function PublicProfilePage({
  params,
}: {
  params: { username: string }
}) {
  const profile = await getProfileByUsername(params.username)
  const skits = await getSkitsByUsername(params.username)
  return (
    <div className="space-y-2">
      <Profile profile={profile} />
      <SkitList skits={skits} />
    </div>
  )
}
