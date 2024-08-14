import classes from "./createThreadContainer.module.scss";
import { PostThread } from "../post-thread/PostThread";

export const CreateThreadContainer = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.createThreadContainer}>
        <h2 className={classes.createThreadTitle}>スレッド新規作成</h2>
        <PostThread />
      </div>
    </div>
  )
}