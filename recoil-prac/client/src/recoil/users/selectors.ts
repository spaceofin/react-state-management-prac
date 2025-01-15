import {
  Loadable,
  RecoilValue,
  RecoilValueReadOnly,
  selector,
  selectorFamily,
  UnwrapRecoilValues,
  waitForAll,
  waitForNone,
} from "recoil";
import { currentUserIDState } from "./atoms";
import { User } from "@/types/userTypes";

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

export const userInfoQuery = selectorFamily({
  key: "UserInfoQuery",
  get: (userId: number) => async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/users/${userId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
    }
  },
});

export const currentUserInfoQuery = selector({
  key: "CurrentUserInfoQuery",
  get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

export const friendsInfoQuery = selector({
  key: "FriendsInfoQuery",
  get: ({ get }) => {
    const { friendList } = get(currentUserInfoQuery);
    // return friendList.map((friend: User) => get(userInfoQuery(friend.id)));

    const friends = get(
      waitForAll(friendList.map((friend: User) => userInfoQuery(friend.id)))
    );
    return friends;

    //   const friendLoadables = get(
    //     waitForNone(friendList.map((friend: User) => userInfoQuery(friend.id)))
    //   ) as unknown as Loadable<User>[];

    //   return friendLoadables
    //     .filter(({ state }) => state === "hasValue")
    //     .map(({ contents }) => contents);
  },
});
