import { useRecoilValue } from "recoil";
import { TodoItemCreator } from "./todoItemCreator";
import { TodoItem } from "./TodoItem";
import { filteredTodoListState } from "@/recoil/todoList/selectors";
import { TodoListStats } from "./TodoListStats";
import { TodoListFilters } from "./TodoListFilters";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
