import { atom } from "recoil";

export const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});
