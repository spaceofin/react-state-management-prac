import { selector, selectorFamily } from "recoil";
import { currentUserIDState } from "./atoms";

const tableOfUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
  { id: 6, name: "Frank" },
  { id: 7, name: "Grace" },
  { id: 8, name: "Hannah" },
  { id: 9, name: "Ivy" },
  { id: 10, name: "Jack" },
];

export const currentUserNameState = selector({
  key: "CurrentUserNameFromTable",
  get: ({ get }) => {
    const userId = get(currentUserIDState);
    const user = tableOfUsers.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  },
});

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
      return error;
    }
  },
});

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
