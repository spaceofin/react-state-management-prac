import { atom, atomFamily } from "recoil";

const myFetchCurrentUserID = () => {
  return 1;
};

const myFetchUserInfo = async (id: number) => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/users/${id}`;
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
};

export const currentUserIDState = atom({
  key: "CurrentUserID",
  // default: 1,
  default: myFetchCurrentUserID(),
});

export const userInfoState = atomFamily({
  key: "UserInfo",
  default: (id: number) => myFetchUserInfo(id),
});
