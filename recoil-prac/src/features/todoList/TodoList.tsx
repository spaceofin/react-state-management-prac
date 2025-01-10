import { useRecoilValue } from "recoil";
import { todoListState } from "./states/todoListState";
import { TodoItemCreator } from "./todoItemCreator";
import { TodoItem } from "./TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
