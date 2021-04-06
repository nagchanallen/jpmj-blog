import React from "react";
import styles from "../styles/SideBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const SideBar: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className={styles.sideBar}>
        <input
          id="slide-sidebar"
          type="checkbox"
          role="button"
          defaultChecked
        />
        <label htmlFor="slide-sidebar">
          <FontAwesomeIcon icon={faChevronLeft} />
        </label>
        <div className={styles.sideBarContent}>
          <h1>SideBar</h1>
        </div>
      </div>
    </>
  );
};
export default SideBar;
