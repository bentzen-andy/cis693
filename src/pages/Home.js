import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./Home.module.css";

let CURRENT_SPRINT = 3;

const Home = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs links={[{ link: "/", label: "Home" }]} />
      </Container>

      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Body>
            <Card.Title>Computer Graphics Portfolio</Card.Title>
            <Link to="/schedule">Schedule</Link>

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
                      <div className={styles["link-text"]}>{`Sprint ${
                        i + 1
                      }`}</div>
                    </span>
                  </Link>
                );
              } else {
                return (
                  <div className={styles["text"]}>
                    <span>
                      <div className={styles["link-text"]}>{`Sprint ${
                        i + 1
                      }`}</div>
                    </span>
                  </div>
                );
              }
            })}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Home;
