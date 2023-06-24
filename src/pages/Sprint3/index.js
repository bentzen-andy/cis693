import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "../SprintSummary.module.css";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

import pdv1 from "./pdv1.jpg";
import pdv2 from "./pdv2.jpg";
import c1 from "./c1.jpg";
import c2 from "./c2.jpg";
import c3 from "./c3.jpg";
import c4 from "./c4.jpg";
import t from "./t.jpg";
import lamp1 from "./lamp1.jpg";
import lamp2 from "./lamp2.jpg";
import db from "./db.png";

const Sprint3 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Sprint 3" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Sprint 3 Summary:</Card.Title>
          <Card.Body>
            <strong>Summary</strong>
            <div>
              For this past sprint, I completed the following tasks:
              <ul>
                <li>Fixed rotation issue</li>
                <li>Created a product detail view</li>
                <li>Added materials</li>
              </ul>
            </div>
            <strong>Rotation Issue</strong>
            <div>
              I fixed an issue related to the product's rotation when it gets
              inserted into the scene. The intended behavior is for the product
              to always have the front of the product facing the user when the
              product is initially inserted into the scene. So let's say you
              start up the app and you're facing north. You should be able to
              turn, facing east, and chair you insert should still face you when
              you insert it.
            </div>
            <br />
            <div>
              However, there was a bug messing up the rotation. If you start the
              app facing north and immediately inserted the product, then the
              app would insert the product (facing south). But if you start the
              app, facing north, and then turn so that you're facing east, it
              would still insert the product facing south.
            </div>
            <br />
            <div>
              I fixed this by changing the rotation of the product at time of
              insertion. I essentially told the product to rotate so its forward
              vector would face the forward vector of the camera. You can also
              tap the Clear button at the upper right to hide the model from
              view. You can then tap the screen again to insert the product at a
              new rotation (again facing the camera).
            </div>
            <br />
            <strong>Product Detail View</strong>
            <div>
              Next I created a product detail view (see images below). This is
              the view that you get to after clicking one of the products. So
              when the app starts, it gives you a list of products, and when you
              tap on one of the products, it brings you to a detail view to give
              you more information about the product. From here if you tap on
              the product image, the app will bring you to your camera view to
              insert the product into the scene. The product detail view also
              includes a list of buttons that allow you to pick a color theme
              for the product.
            </div>
            <br />
            <div>
              Currently each of these buttons appear as white--which is pretty
              boring. I'll update these next week to make each one look like an
              actual swatch of the color.
            </div>
            <br />
            <div>
              <img
                src={pdv1}
                alt="screenshot"
                style={{ marginRight: "1rem", width: "24rem" }}
              />
              <img
                src={pdv2}
                alt="screenshot"
                style={{ marginRight: "1rem", width: "24rem" }}
              />
            </div>
            <br />
            <strong>Materials</strong>
            <div>
              All materials come from Haworth's surface materials website as jpg
              images. So each color represents something that you can actually
              buy, and have shipped to your house in about 3-5 business days.
            </div>
            <br />
            <div>
              Materials are tedious. I had to create all the materials in Unity
              and then map each one to its corresponding part on the product. I
              basically created a database entry like the one in the screenshot
              below. This is a mapping that links the CAD layer name to the
              desired Unity material. The app pulls down these mappings from the
              database and then uses them to find the correct material that I
              previously created in Unity. Luckily, the CAD models import into
              Unity with all their layer names intact. So if all the mappings
              are correct, it should have all the info it needs to apply each of
              our materials.
            </div>
            <br />
            <div>
              When the user clicks on a material button (on the product detail
              view), it triggers the app to select a material theme. A material
              theme is a set of key/value mappings (a dictionary) that maps all
              layers to the corresponding materials for that theme. So in other
              words, clicking a material button, will change the fabric color,
              but it also might change the plastic and painted metal colors to
              the ones that match that chair's fabric. You can't pick your
              materials à la carte. You have to pick a theme and take all
              finishes that go with that preselected theme. This is how
              Haworth's online store works as well. In fact, all material themes
              are directly copied from the Haworth online store.
            </div>
            <br />
            <div>Take a look at the screenshots below to see the result.</div>
            <br />
            <img
              src={db}
              alt="screenshot"
              style={{
                marginRight: "1rem",
                marginBottom: "1rem",
                width: "100%",
              }}
            />
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
                  src={c1}
                  alt="screenshot"
                  style={{ marginRight: "1rem", width: "18rem" }}
                />
              </div>
              <div>
                <img
                  src={c2}
                  alt="screenshot"
                  style={{
                    marginRight: "1rem",
                    width: "40rem",
                    marginBottom: "2rem",
                  }}
                />
                <img
                  src={c3}
                  alt="screenshot"
                  style={{ marginRight: "1rem", width: "40rem" }}
                />
              </div>
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
                  src={c4}
                  alt="screenshot"
                  style={{ marginRight: "1rem", width: "18rem" }}
                />
              </div>
              <div>
                <img
                  src={lamp1}
                  alt="screenshot"
                  style={{
                    marginRight: "1rem",
                    width: "40rem",
                    marginBottom: "2rem",
                  }}
                />
                <img
                  src={lamp2}
                  alt="screenshot"
                  style={{ marginRight: "1rem", width: "40rem" }}
                />
              </div>
            </div>
            <br />
            <div>
              <img
                src={t}
                alt="screenshot"
                style={{ marginRight: "1rem", width: "40rem" }}
              />
            </div>
            <br />
            <strong>Up Next... </strong>
            <div>
              I have two more sprints left in this semester: Sprint 4, and
              Sprint 5.
            </div>
            <br />
            <div>
              For Sprint 4 I will plan to work on polishing up the user
              interface to make it prettier and more user friendly. All core
              functionality has already been implemented at this point, so there
              shouldn't be any major new features from here on out. I'll also
              clean up the code for readability; improve security on my backend
              systems; and add more products (with their corresponding
              materials) to the database. I'll also make sure to get the app
              deployed to the Apple store by the end of Sprint 4.
            </div>
            <br />
            <div>
              For Sprint 5 (beginning on July 9), I will start work on my
              project report, my poster, and my slides for final presentation.
              I'll plan to have all work turned in to you for review by the end
              of Sprint 5 (July 22). I believe this will give you enough time to
              review and let me make any needed revisions before the
              department's deadline of July 28 at 5:00pm.
            </div>
            <br />
            <div>
              I'll turn in work earlier if I can. Let me know if that timeline
              works for you!
            </div>
            <br />
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
                <li>[x] Product images with descriptions.</li>
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
                  [x] Ability to change surface fabric/paint/wood color on a
                  single product.
                </li>
                <li>
                  [x] Ability to change surface fabric/paint/wood color on all
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
              <li> rotated wood grain materials (19 hours ago) </li>
              <li> added materials for Zody and Upside. (20 hours ago) </li>
              <li> created basic material pickers. (2 days ago) </li>
              <li> adds default materials to Talia lamp. (5 days ago) </li>
              <li> created product detail view (8 days ago) </li>
              <li>
                {" "}
                makes model stay in current rotation after placement (8 days
                ago){" "}
              </li>
              <li>
                {" "}
                fixes rotation issue when inserting product into the scene (9
                days ago){" "}
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Sprint3;
