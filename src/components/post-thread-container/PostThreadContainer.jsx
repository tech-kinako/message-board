import classes from "./postThreadContainer.module.scss";
import { PostThread } from "../post-thread/PostThread";

export const PostThreadContainer = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.postThreadContainer}>
        <h2 className={classes.postThreadTitle}>スレッド新規作成</h2>
        <PostThread />
      </div>
    </div>
  )
}