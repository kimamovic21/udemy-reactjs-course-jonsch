import React from "react";
import styles from "./SpinnerFullPage.module.css";
import Spinner from "./Spinner";

const SpinnerFullPage = () => {
    return (
        <div className={styles.spinnerFullpage}>
          <Spinner />
        </div>
    );
};

export default SpinnerFullPage;