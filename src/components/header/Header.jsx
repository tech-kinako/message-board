import classes from "./header.module.scss";

export const Header = () => {
  return (
    <header>
      <h1 className={classes.headerTitle}>掲示板</h1>
      <a className={classes.threadLink} href="">スレッドをたてる</a>
    </header>
  );
};
