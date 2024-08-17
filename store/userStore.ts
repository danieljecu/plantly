import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserState = {
  hasFinishedOnboarding: boolean;
  toggleHasOnboarded: () => void;
};
export const useUserStore = create<UserState>(
  persist(
    (set) => ({
      hasFinishedOnboarding: false,
      toggleHasOnboarded: () => {
        set((state) => {
          return {
            ...state,
            hasFinishedOnboarding: !state.hasFinishedOnboarding,
          };
        });
      },
    }),
    {
      name: "plantly-user-store",
      storage: createJSONStorage(() => AsyncStorage)
    },
  ),
);
