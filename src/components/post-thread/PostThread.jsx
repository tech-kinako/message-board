import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./postThread.module.scss";

export const PostThread = () => {
  // state
  const [threadTitle, setThreadTitle] = useState("");

  // function
  // Enter押下時のsubmitキャンセル処理
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const postThreadTitle = async () => {
    // スレッド投稿
    try {
      const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads",{
        method: "POST",
        body: JSON.stringify({title: threadTitle}),
      });
      if (!(response.status === 200)) { throw new Error(response.status)};
      } catch (error) {
        console.error(error.message);
      }

      // スレッドテキストを初期化
      setThreadTitle("");
  }

  return (
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <input type="textarea" value={threadTitle} className={classes.threadaTitleArea} placeholder="スレッドタイトル" onChange={(e) => {setThreadTitle(e.target.value)}}></input>
      <div className={classes.subContaienr} >
        <Link to="/">Topに戻る</Link>
        <input type="button" value="作成"className={classes.postThreadButton} onClick={() => {postThreadTitle()}}></input>
      </div>
    </form>
  );
};
