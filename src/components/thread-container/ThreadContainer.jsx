import classes from "./threadContainer.module.scss";
import { GetThread } from "../get-thread/GetThread.jsx";

export const ThreadContainer = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.threadsContainer}>
        <h2 className={classes.threadTitle}>新着スレッド</h2>
        <GetThread />
      </div>
    </div>
  )
};