import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "../SprintSummary.module.css";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import chair from "./chair.jpg";
import dbrtd from "./db-rtd.png";
import dbstore from "./db-store.png";
import lamp from "./lamp.jpg";
import table from "./table.jpg";
import ui1 from "./ui1.png";
import ui2 from "./ui2.png";

const Sprint2 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Sprint 2" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Sprint 2 Summary:</Card.Title>
          <Card.Body>
            <strong>Summary</strong>
            <div>
              For this past sprint, I completed the following tasks:
              <ul>
                <li>Backend</li>
                <li>UI</li>
              </ul>
            </div>
            <strong>Backend</strong>
            <div>
              This sprint I took care of all my backend configuration. Before
              setting up the backend, I had a 3D model loaded directly into the
              app bundle itself. However I'd like to be able to add products to
              the app without needing to re-build and redeploy the app. Google's
              Firebase allows me to get this all set up pretty easily. In total,
              I set up two database services: (1) a realtime database, and (2) a
              storage database (for media files).
            </div>
            <br />

            <i>Realtime Database</i>
            <div>
              Realtime storage is a basic JSON based document storage database.
              I created a short entry in here for each product that I want to
              put in the app. This data will feed into the app and create a UI
              card for each product.
            </div>
            <br />

            <img
              src={dbrtd}
              alt="screenshot"
              style={{
                marginRight: "1rem",
                marginBottom: "1rem",
                width: "100%",
              }}
            />
            <i>Media Storage</i>
            <div>
              I also set up a Firebase Storage instance to store and deliver 3D
              CAD files to the app. So all told, I spent a few days this sprint
              setting up these database instances and configuring all the web
              request files in the app to successfully download from the
              database.
            </div>
            <br />

            <img
              src={dbstore}
              alt="screenshot"
              style={{
                marginRight: "1rem",
                marginBottom: "1rem",
                width: "100%",
              }}
            />
            <br />

            <strong>UI</strong>
            <div>
              For the second half of my sprint, I created a basic user
              interface. All of this text/images is fed in from the database.
              The images are borrowed from my company's website. Currently, when
              the app starts, it goes to this product screen with the images.
              From there the user can tap on one of these cards to place the
              model in the camera view.
            </div>
            <br />

            <img
              src={ui1}
              alt="screenshot"
              style={{ marginRight: "1rem", width: "24rem" }}
            />
            <img
              src={ui2}
              alt="screenshot"
              style={{ marginRight: "1rem", width: "24rem" }}
            />
            <br />
            <br />

            <strong>Camera View</strong>
            <div>
              The camera view has a few standard UI buttons to clear the 3D
              model from the space, and to return back to the previous menu.
              Eventually the intent is to create an intermediate product detail
              view for after you click the product card. The product detail view
              would look like the sketch here:{" "}
              <Link className={styles["link"]} to={"../requirements"}>
                wireframe sketch
              </Link>{" "}
            </div>
            <br />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <div>
                <img
                  src={chair}
                  alt="screenshot"
                  style={{ marginRight: "1rem", width: "18rem" }}
                />
              </div>
              <div>
                <img
                  src={lamp}
                  alt="screenshot"
                  style={{
                    marginRight: "1rem",
                    width: "40rem",
                    marginBottom: "2rem",
                  }}
                />
                <img
                  src={table}
                  alt="screenshot"
                  style={{ marginRight: "1rem", width: "40rem" }}
                />
              </div>
            </div>
            <br />

            <strong>Up Next... </strong>
            <div>
              For the next sprint, I'll be working on further improvements to
              the UI. For instance, I'd like to (1) create a product detail
              view; (2) create a link/web portal to the company store website;
              (3) clean up the UI with quality fonts and colors; (4) fix a model
              placement bug (the product does not always face the right way when
              inserting into the scene); (5) create ability to rotate the 3D
              model after placement;
            </div>
            <br />

            <strong>Future Sprints... </strong>
            <div>
              In future sprints I still need to do the following: (1) add
              material options (i.e., different fabrics/colors) and make them
              available in the product detail view; (2) add more products into
              the app (with their material options). Getting the materials to
              work right could be tricky. I'm not too sure how to get repeating
              fabric patterns to apply correctly to the chairs; solid colors
              shouldn't be a problem.
            </div>
          </Card.Body>
        </Card>

        <Card className={styles["card"]}>
          <Card.Title>Requirements Checklist:</Card.Title>
          <Card.Body>
            <div>
              <strong>[x] Basic Features</strong>
            </div>
            <div>
              <ul>
                <li>[x] Basic UI to select product.</li>
                <li>[x] Ability to insert product into phone camera view.</li>
              </ul>
            </div>

            <div>
              <strong>[ ] Additional Features</strong>
            </div>
            <div>
              <ul>
                <li>[ ] Improved UI with better fonts and colorscheme.</li>
                <li>[x] Product images.</li>
                <li>[ ] Product images with descriptions.</li>
                <li>
                  [ ] Link to product description page on company website.
                </li>
                <li>
                  [ ] "Order Now" button that links to the online store and
                  places current product in the shopping cart.
                </li>
                <li>
                  [ ] Manual movements: ability to manually adjust the position
                  and rotation of 3D model in the view.
                </li>
              </ul>
            </div>

            <div>
              <strong>[ ] Nice-to-Have Features</strong>
            </div>
            <div>
              <ul>
                <li>[ ] Allow user to save their favorite products.</li>
                <li>
                  [ ] Ability to insert multiple products in the same camera
                  view.
                </li>
                <li>[ ] Ability to take a picture of the scene.</li>
                <li>
                  [ ] Ability to change surface fabric/paint/wood color on a
                  single product.
                </li>
                <li>
                  [ ] Ability to change surface fabric/paint/wood color on all
                  products.
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card className={styles["card"]}>
          <Card.Title>Release Notes (git commit messages):</Card.Title>
          <Card.Body>
            <ul>
              <li>
                implemented image web requests for product cards (25 minutes
                ago)
              </li>
              <li>
                successfully downloaded image from the web (62 minutes ago)
              </li>
              <li>adds dynamic buttons (4 hours ago)</li>
              <li>added a scroll view (7 hours ago)</li>
              <li>
                adds stubbed out method to add product cards (22 hours ago)
              </li>
              <li>small change to project settings (23 hours ago)</li>
              <li>
                adds script to hide clear and back buttons on product screen (23
                hours ago)
              </li>
              <li>adds a back button (25 hours ago)</li>
              <li>adds a clear button. (25 hours ago)</li>
              <li>adds loading view (25 hours ago)</li>
              <li>adds UI product view (26 hours ago)</li>
              <li>adds 3 basic buttons (hardcoded) (27 hours ago)</li>
              <li>
                cleans up CAD web request and adds debug method for unity editor
                (29 hours ago)
              </li>
              <li>
                debounces HTTP request for CAD model (no repeated requests while
                download in process) (7 days ago)
              </li>
              <li>
                adds successful web request: WebRequestTest.cs (8 days ago)
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Sprint2;
