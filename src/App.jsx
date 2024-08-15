import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { ThreadContainer } from "./components/thread-container/ThreadContainer";
import { PostThreadContainer } from "./components/post-thread-container/PostThreadContainer";

export function App() {
  return (
    <Routes>
      <Route exact path="/" element={
          <>
            <Header  isLink="true" />
            <ThreadContainer transition="root" />
          </>
        }
      />
      <Route path="/threads/new" element={
          <>
            <Header isLink="false" />
            <PostThreadContainer />
          </>
        }
      />
      <Route path="/threads/:thread_Id" element= {
        <>
          <Header isLink="false"/>
          <ThreadContainer transition="threadId" />
        </>
      }
      />
    </Routes>
  );
}
