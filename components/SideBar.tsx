import React, { useState } from "react";
import styles from "../styles/SideBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const SideBar: React.FC = (): React.ReactElement => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <div className={styles.sideBar}>
        <input
          id="slide-sidebar"
          type="checkbox"
          role="button"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          defaultChecked
        />
        <label htmlFor="slide-sidebar">
          <span className="icon is-small">
            <FontAwesomeIcon
              icon={isSideBarOpen ? faChevronLeft : faChevronRight}
            />
          </span>
        </label>
        <div className={styles.sideBarContent}>
          <h1>SideBar</h1>
        </div>
      </div>
    </>
  );
};
export default SideBar;
