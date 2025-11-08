import { ExperienceGrid } from "@/components/experiences/experience-grid";
import { getExperienceCatalog } from "@/lib/data/experiences";
import { readTravelProfile } from "@/lib/server/travel-profile";

export const dynamic = "force-dynamic";

export default async function ExperiencesCatalogSlot() {
  const profile = await readTravelProfile();
  const catalogPromise = getExperienceCatalog(profile.persona);
  return <ExperienceGrid catalog={catalogPromise} />;
}
