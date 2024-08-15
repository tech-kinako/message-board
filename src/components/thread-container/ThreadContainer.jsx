import classes from "./threadContainer.module.scss";
import { GetThread } from "../get-thread/GetThread.jsx";
import { PostThreadDetail } from "../post-thread-detail/PostThreadDetail.jsx";

export const ThreadContainer = (props) => {
  const { transition } = props;
  if (transition === "root") {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.threadsContainer}>
          <h2 className={classes.threadTitle}>新着スレッド</h2>
            <GetThread />
        </div>
      </div>
    )
  } else if (transition == "threadId")
  return (
    <div className={classes.mainContainer}>
      <div className={classes.threadsContainer}>
        <h2 className={classes.threadTitle}>スレッド投稿一覧</h2>
          <PostThreadDetail />
      </div>
    </div>
  )
};