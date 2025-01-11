import { selector } from "recoil";
import { currentUserIDState } from "./currentUserIdState";

export const currentUserNameQuery = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const userId = get(currentUserIDState);
    try {
      const url = `${import.meta.env.VITE_API_URL}/users/${userId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      return data.name;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
});
