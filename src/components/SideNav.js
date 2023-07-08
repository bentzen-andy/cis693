import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import styles from "./SideNav.module.css";

let CURRENT_SPRINT = 4;

const SideNav = () => {
  return (
    <Nav className={styles["side-nav"]}>
      <div
        className={styles["main-links"]}
        style={{ position: "sticky", top: "1rem" }}
      >
        <div className={styles["logo-container"]}>
          <Link to="/">
            <div className={styles["link"]}>CIS 693 - Master's Project</div>
          </Link>
        </div>
        <Link className={styles["link"]} to="/schedule">
          <span>
            <div className={styles["link-text"]}>Schedule</div>
          </span>
        </Link>

        <Link className={styles["link"]} to={`/requirements`}>
          <span>
            <div className={styles["link-text"]}>{`Requirements`}</div>
          </span>
        </Link>

        {new Array(5).fill("").map((item, i) => {
          if (i + 1 <= CURRENT_SPRINT) {
            return (
              <Link className={styles["link"]} to={`/sprint-${i + 1}`}>
                <span>
                  <div className={styles["link-text"]}>{`Sprint ${i + 1}`}</div>
                </span>
              </Link>
            );
          } else {
            return (
              <div className={styles["text"]}>
                <span>
                  <div className={styles["link-text"]}>{`Sprint ${i + 1}`}</div>
                </span>
              </div>
            );
          }
        })}

        <Link className={styles["link"]} to={`/privacy-policy`}>
          <span>
            <div className={styles["link-text"]}>{`Privacy Policy`}</div>
          </span>
        </Link>
      </div>
    </Nav>
  );
};

export default SideNav;
