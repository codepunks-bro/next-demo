"use client";

import { createContext, type ReactNode, useContext, useMemo } from "react";
import { useActionState } from "react";
import {
  getTravelPersonaMeta,
  TRAVEL_PERSONA_OPTIONS,
  type TravelPersonaMeta,
  type TravelProfile,
  type TravelProfileActionState,
} from "@/lib/state/travel-profile";
import { updateTravelProfile } from "@/app/actions/travel-profile";

type TravelProfileContextValue = {
  profile: TravelProfile;
  personas: TravelPersonaMeta[];
  submit: (formData: FormData) => void;
  state: TravelProfileActionState;
  isPending: boolean;
  activePersona: TravelPersonaMeta;
};

const TravelProfileContext = createContext<TravelProfileContextValue | null>(null);

export function TravelProfileProvider({
  initialProfile,
  children,
}: {
  initialProfile: TravelProfile;
  children: ReactNode;
}) {
  const initialState: TravelProfileActionState = useMemo(
    () => ({
      status: "idle",
      profile: initialProfile,
    }),
    [initialProfile],
  );

  const [state, submit, isPending] = useActionState(updateTravelProfile, initialState);

  const value = useMemo<TravelProfileContextValue>(() => {
    const activePersona = getTravelPersonaMeta(state.profile.persona);
    return {
      profile: state.profile,
      personas: TRAVEL_PERSONA_OPTIONS,
      submit,
      state,
      isPending,
      activePersona,
    };
  }, [state, submit, isPending]);

  return (
    <TravelProfileContext.Provider value={value}>
      {children}
    </TravelProfileContext.Provider>
  );
}

export function useTravelProfile() {
  const context = useContext(TravelProfileContext);
  if (!context) {
    throw new Error(
      "useTravelProfile должен использоваться внутри TravelProfileProvider",
    );
  }
  return context;
}
