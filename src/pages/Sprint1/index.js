import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "../SprintSummary.module.css";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import book1 from "./sprint1-book1.jpg";
import book2 from "./sprint1-book2.jpg";
import sprint1a from "./sprint1a.PNG";
import sprint1b from "./sprint1b.jpg";
import sprint1c from "./sprint1c.PNG";
import sprint1d from "./sprint1d.PNG";
import sprint1e from "./sprint1e.PNG";
import sprint1f from "./sprint1f.PNG";

const Sprint1 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Sprint 1" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Sprint 1 Summary:</Card.Title>
          <Card.Body>
            <strong>Summary</strong>
            <div>
              For this first sprint, I completed the following tasks:
              <ul>
                <li>Research</li>
                <li>Requirements</li>
                <li>Wireframing</li>
                <li>Basic Build</li>
                <li>Deployment Registration</li>
                <li>Basic Scene Template</li>
              </ul>
            </div>
            {/* <br /> */}

            <strong>Research</strong>
            <div>
              I did some reading (books & online) to learn about AR/VR
              frameworks (see below). I landed on Unity for my 3D engine, and AR
              Foundation for my AR framework. This workflow will allow me to
              build the type of AR app that I want and deploy it to both the
              Android and Apple app stores.
            </div>
            <br />

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <img
                  src={book1}
                  alt="book"
                  height="400px"
                  style={{ borderStyle: "solid", marginRight: "1rem" }}
                />
              </div>
              <div>
                <img src={book2} alt="book" height="400px" />
              </div>
            </div>

            <br />

            <strong>Requirements</strong>
            <div>
              I wrote up some requirements on the other page of this website (so
              I won't repeat the listing here). However I did add in a{" "}
              <Link className={styles["link"]} to={"../requirements"}>
                wireframe sketch
              </Link>{" "}
              of the different screens that I want this app to have.
            </div>
            <br />

            <strong>Basic Build</strong>
            <div>
              I worked through an example in my book to get up and running with
              a simple AR app that could place a simple red cube in the scene.
              That is, I had a working build of my app that was able to access
              my phone's camera, detect planes within the camera view
              (floors/walls), and insert a 3D object by tapping the screen. It
              sounds like a simple task until you list out all the steps of what
              the app actually needs to do to make it happen. Once I had a
              simple cube working, I played with some CAD file formats and got a
              3D furniture model working in the app. This was especially
              exciting for me because I actually drew this in AutoCAD and got to
              see it come to life in the app.
            </div>
            <br />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <img
                src={sprint1a}
                alt="screenshot"
                style={{ marginRight: "1rem" }}
              />
              <img
                src={sprint1b}
                alt="screenshot"
                style={{ marginRight: "1rem", marginBottom: "1rem" }}
              />
            </div>
            <div></div>
            <br />

            <strong>Deployment Registration</strong>
            <div>
              Once I had a working build, I jumped online to register my app
              with Apple and Google. They require quite a bit of technical info
              about the app, as well as some marketing info and app icons (in
              the image below, you can see the app icon that I whipped up in MS
              Paint). It can take a full Saturday to get all this set up, so I
              opted to do it early to avoid the rush later in the semester.
              Apple rejected my app because it's not "robust enough" which is
              unsurprising because it's far too simple at this point. But the
              point is that I now have 95% of the deployment work done.
            </div>
            <br />

            <div>
              Within the next few weeks I'll have a more suitable version of the
              app ready, and at that point, I'll just need to build the
              executable and resubmit to Apple/Google approval. Everything else
              as far as the deployment is done.
            </div>
            <br />
            <div>
              <img
                src={sprint1c}
                alt="screenshot"
                style={{ marginRight: "1rem" }}
              />
            </div>
            <br />

            <strong>Basic Scene Template</strong>
            <div>
              Lastly for this sprint, I improved some of the UI in the app to
              give the user some "onboarding instructions" for how to use the
              app. It looks like the screenshots below. I added some fade in,
              and fade out animations for the icons that you see below. And I
              created some simple state management to allow the app to display
              appropriate messages to the user. For instance, (1) app is still
              initializing; (2) AR is ready, but you need to move the phone
              around for the camera to understand where the floor is, (3) app is
              ready to place an object; and (4) error, AR doesn't work on your
              device.
            </div>
            <br />

            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={sprint1f}
                alt="screenshot"
                style={{ marginRight: "1rem" }}
              />
              <img
                src={sprint1d}
                alt="screenshot"
                style={{ marginRight: "1rem" }}
              />
              <img
                src={sprint1e}
                alt="screenshot"
                style={{ marginRight: "1rem" }}
              />
            </div>
            <br />

            <div>
              For the next sprint, I'll be working on the backend. I need to
              create a cloud based DB system to deliver CAD models to the app.
              I've used Google Firebase in the past to store and transfer image
              files, but I haven't really worked with CAD models in this way
              before. Wish me luck.
            </div>
          </Card.Body>
        </Card>

        <Card className={styles["card"]}>
          <Card.Title>Requirements Checklist:</Card.Title>
          <Card.Body>
            <div>
              <strong>[ ] Basic Features</strong>
            </div>
            <div>
              <ul>
                <li>[ ] Basic UI to select product.</li>
                <li>[x] Ability to insert product into phone camera view.</li>
              </ul>
            </div>

            <div>
              <strong>[ ] Additional Features</strong>
            </div>
            <div>
              <ul>
                <li>[ ] Improved UI with better fonts and colorscheme.</li>
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
                {" "}
                imported OnboardingUX assets into project; fixed some code that
                collided with other demo boilerplate code that was already in
                the project (41 minutes ago){" "}
              </li>
              <li>
                {" "}
                imported Localization and Addressables packages (2 hours ago){" "}
              </li>
              <li> rearranged script attachments again (2 hours ago) </li>
              <li> rearranged script attachments (2 hours ago) </li>
              <li> added P22 model to AR session origin (3 hours ago) </li>
              <li> attached scripts to mode game objects (3 hours ago) </li>
              <li> wrote UI mode scripts (3 hours ago) </li>
              <li> added interaction controller (3 hours ago) </li>
              <li> added fade in/out animations to UI (4 hours ago) </li>
              <li> wrote UIController class (4 hours ago) </li>
              <li> added basic UI panels for differ modes (5 hours ago) </li>
              <li> made title panel (6 hours ago) </li>
              <li> setup a blank canvas UI (6 hours ago) </li>
              <li> added basic setup for AR scene (6 hours ago) </li>
              <li>
                {" "}
                installed packages: TMP, DOTween; serialized-dictionary-lite (6
                hours ago){" "}
              </li>
              <li>
                {" "}
                added P22 model; added app icon; small refactor for efficiency
                (7 hours ago){" "}
              </li>
              <li>
                {" "}
                added feature: insert simple red cube into the scene by taping
                screen. (7 days ago){" "}
              </li>
              <li> added basic plane detection. (7 days ago) </li>
              <li> first commit (7 days ago) </li>{" "}
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Sprint1;
