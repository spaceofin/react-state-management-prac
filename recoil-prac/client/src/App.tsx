import { RecoilRoot } from "recoil";
import CharacterCounter from "./features/characterCounter/CharacterCounter";
import TodoList from "./features/todoList/TodoList";
import CurrentUserInfo from "./features/users/CurrentUserInfo";
import React from "react";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <TodoList />
      <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUserInfo />
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
