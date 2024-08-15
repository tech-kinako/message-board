import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./PostThreadDetail.module.scss";

export const PostThreadDetail = () => {
    // state
    const [postThreads, setPostThreads] = useState([""])

    // params
    const { thread_Id } = useParams();

  // effect
    useEffect(() => {
      async function featchData() {
        await getPostThreads();
      }
      featchData();
    },[]);

  // function
  // スレッド取得関数
  const getPostThreads = async () => {
    console.log("getPostTherad");
    // API からスレッドデータ取得
    try {
    const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_Id}/posts`);
    if (!(response.status === 200)) { throw new Error(response.status)};
      const data = await response.json();
      setPostThreads(data.posts.map(thread => thread));
    } catch (error) {
      console.error(error.message);
    }
  }

  // スレッド表示処理
  const viewPostThreads = () => {
    if(postThreads.length === 1) { return};
    return postThreads.map(thread => (
          <div key={thread.id} className={classes.threadContent}>
            {thread.post}
          </div>
    )
  )};

  return (
    <>
      {viewPostThreads()}
    </>
  );
}