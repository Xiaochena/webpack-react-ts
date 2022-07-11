import React from "react";
import styles from "./styles.less";
import cssStyles from "./styles.css";

const App = () => {
  return (
    <div>
      <h1 className={styles.app}>hello react</h1>
      <h1 className={cssStyles.app}>hello react</h1>
    </div>
  );
};

export default App;
