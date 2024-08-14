import { Link } from "react-router-dom";
import classes from "./header.module.scss";

export const Header = (props) => {
  const dspCreateThreadLink = ()=> {
    if (props.isLink === "true") {
      return <Link to="threads/new" className={classes.threadLink} >スレッドをたてる</Link>
    }
  }

  return (
    <header>
      <h1 className={classes.headerTitle}>掲示板</h1>
      {dspCreateThreadLink()}
    </header>
  );
};
