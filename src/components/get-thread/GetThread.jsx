import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./getThread.module.scss";

export const GetThread = () => {
  // state
    const [threads, setThreads] = useState([""])

  // effect
    useEffect(() => {
      async function featchData() {
        await getThreads();
      }
      featchData();
    },[]);

  // function
  // スレッド取得関数
  const getThreads = async () => {
    // API からスレッドデータ取得
    try {
    const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads");
    if (!(response.status === 200)) { throw new Error(response.status)};
      const data = await response.json();
      setThreads(data.map(thread => thread));
    } catch (error) {
      console.error(error.message);
    }
  }

  // スレッド表示処理
  const viewThreads = () => {
    return threads.map(thread => (
        <Link to={`/threads/${thread.id}`} key="thread.id" className={classes.threadLink} style={{ textDecoration: 'none' }}>
          <div key={thread.id} className={classes.threadContent}>
            {thread.title}
          </div>
        </Link>
    )
  )};

  return (
    <>
      {viewThreads()}
    </>
  );
};
