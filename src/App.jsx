import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { ThreadContainer } from "./components/thread-container/ThreadContainer";
import { CreateThreadContainer } from "./components/create-thread-container/CreateThreadContainer";

export function App() {
  return (
    <Routes>
      <Route exact path="/" element={
          <>
            <Header  isLink="true" />
            <ThreadContainer />
          </>
        }
      />
      <Route path="/threads/new" element={
          <>
            <Header isLink="false" />
            <CreateThreadContainer />
          </>
        }
      />
    </Routes>
  );
}
