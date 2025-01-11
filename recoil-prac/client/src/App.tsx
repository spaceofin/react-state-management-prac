import { RecoilRoot } from "recoil";
import CharacterCounter from "./features/characterCounter/CharacterCounter";
import TodoList from "./features/todoList/TodoList";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
