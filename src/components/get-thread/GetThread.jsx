import { useState } from "react";
import { useEffect } from "react";
import classes from "./getThread.module.scss";

export const GetThread = () => {
  // state
    const [threads, setThreads] = useState([''])
    useEffect(() => getThreads(),[]);

  // function
  // スレッド取得関数
const getThreads = async () => {
    // API からスレッドデータ取得
    try {
    const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads");
    if ( !response.status === 200) { throw new Error(response.status)};
      const data = await response.json();
      setThreads(data.map(thread => thread));
    }catch (error) {
      console.error(error.message);
    }
  }

  // スレッド表示処理
  const viewThreads = () => {
    if(threads.length === 1) { return};
    return threads.map(thread => (
      <div key={thread.id} className={classes.threadContent}>
        {thread.title}
      </div>
    )
  )};

  return (
    <>
      {viewThreads()}
    </>
  );
};
