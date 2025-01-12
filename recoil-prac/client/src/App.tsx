import { RecoilRoot } from "recoil";
import CharacterCounter from "./features/characterCounter/CharacterCounter";
import TodoList from "./features/todoList/TodoList";
import CurrentUserInfo from "./features/users/CurrentUserInfo";
import { ErrorBoundary } from "react-error-boundary";
import React from "react";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <TodoList />
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <CurrentUserInfo />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}

export default App;
