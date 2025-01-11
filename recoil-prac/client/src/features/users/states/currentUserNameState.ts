import { selector } from "recoil";
import { currentUserIDState } from "./currentUserIdState";

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
  key: "CurrentUserName",
  get: ({ get }) => {
    const userId = get(currentUserIDState);
    const user = tableOfUsers.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  },
});
