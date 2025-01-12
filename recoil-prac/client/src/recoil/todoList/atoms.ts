import { atom } from "recoil";
import { Todo } from "@/types/todoListTypes";

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});
