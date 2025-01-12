import { selectorFamily } from "recoil";

export const userNameQuery = selectorFamily({
  key: "UserName",
  get: (userId: number) => async () => {
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
      return error;
    }
  },
});
