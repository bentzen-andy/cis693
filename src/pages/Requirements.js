import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./SprintSummary.module.css";
import Breadcrumbs from "../components/Breadcrumbs";
import wireframe from "./wireframe.jpg";

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
              phones that will allow users to view furniture in their own space
              before buying it. It will work similarly to the AR functionally in
              the Target and Ikea iPhone apps.
            </div>
            <br />
            <strong>Development Approach</strong>
            <div>
              The requirements list (below) is pretty short for now. I will
              likely add on to this over the next two weeks (5/14-5/27) as I
              start to get a better feel of what my AR framework is and what I
              can do in Unity. I'm open to any input and suggestions you might
              have. Feel free to bring ideas to our one-on-one meetings.
            </div>
            <br />
            <div>
              I'm going to take an approach of creating a very minimal build
              with only bare essential features and try to get it deployed to
              the Apple store as soon as possible. So worst case scenario, I
              will at least have something to turn in at the end of this
              semester. From there I'll build on more features as I go.
              Obviously I'm going to have very short deployment cycles since
              there's only 13 weeks to build it :)
            </div>
            <br />
            <div>
              The end goal is to build all of the{" "}
              <strong>Basic Features</strong> and the{" "}
              <strong>Additional Features</strong> by the end of the term. If I
              have time, I will stretch to build out the{" "}
              <strong>Nice-to-Have</strong> Features as well.
            </div>
            <br />

            <div>
              <strong>Basic Features</strong>
            </div>
            <div>
              <ul>
                <li>Basic UI to select product.</li>
                <li>Ability to insert product into phone camera view.</li>
              </ul>
            </div>

            <div>
              <strong>Additional Features</strong>
            </div>
            <div>
              <ul>
                <li>Improved UI with better fonts and colorscheme.</li>
                <li>Product images with descriptions.</li>
                <li>Link to product description page on company website.</li>
                <li>
                  "Order Now" button that links to the online store and places
                  current product in the shopping cart.
                </li>
                <li>
                  Manual movements: ability to manually adjust the position and
                  rotation of 3D model in the view.
                </li>
              </ul>
            </div>

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
                <li>
                  Ability to change surface fabric/paint/wood color on a single
                  product.
                </li>
                <li>
                  Ability to change surface fabric/paint/wood color on all
                  products.
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card className={styles["card"]}>
          <Card.Title>Wireframe Sketch</Card.Title>
          <Card.Body>
            <div>
              <img src={wireframe} alt="wireframe" width="1000px" />
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Requirements;
