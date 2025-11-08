import { FilterPanel } from "@/components/experiences/filter-panel";
import { getExperienceFilters } from "@/lib/data/experiences";
import { readTravelProfile } from "@/lib/server/travel-profile";

export const dynamic = "force-dynamic";

export default async function ExperiencesFiltersSlot() {
  const profile = await readTravelProfile();
  const filtersPromise = getExperienceFilters(profile.persona);
  return <FilterPanel filters={filtersPromise} />;
}
