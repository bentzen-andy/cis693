import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./SprintSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";

const Requirements = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Requirements" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Requirements</Card.Title>
          <Card.Body>
            <strong>Description</strong>
            <div>
              Work From Anywhere is a augmented Reality (AR) app for mobile
              phones that will allow user to view furniture in their own space
              before buying it. It will work similarly to the AR functionally in
              the Target and Idea iphone apps.
            </div>
            <br />

            <div>
              <strong>Required Features (Basic Necessities)</strong>
            </div>
            <div>
              <ul>
                <li>Basic UI to select product.</li>
                <li>Ability to insert product into phone camera view.</li>
              </ul>
            </div>
            {/* <br /> */}

            <div>
              <strong>Additional Features</strong>
            </div>
            <div>
              <ul>
                <li>Improved UI with better fonts and colorscheme.</li>
                <li>
                  Manual movements: ability to manually adjust the position and
                  rotation of 3D model in the view.
                </li>
              </ul>
            </div>
            {/* <br /> */}

            <div>
              <strong>Nice-to-Have Features</strong>
            </div>
            <div>
              <ul>
                <li>Allow user to save their favorite products.</li>
                <li>
                  Ability to insert multiple products in the same camera view.
                </li>
                <li>Ability to take a picture of the scene.</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Requirements;
