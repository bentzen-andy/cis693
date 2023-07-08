import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "../SprintSummary.module.css";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

import app_store from "./app_store.png";
import detail_view from "./detail_view.png";

const Sprint4 = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Sprint 4" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Sprint 4 Summary:</Card.Title>
          <Card.Body>
            <strong>Summary</strong>
            <div>
              For this past sprint, I completed the following tasks:
              <ul>
                <li>Made numerous UI changes.</li>
                <li>Added 12 new products.</li>
                <li>Fixed backward facing normals on CAD models.</li>
                <li>Improved security for backend systems.</li>
                <li>Refactored code for clarity.</li>
                <li>Deployed finished app to the Apple store.</li>
              </ul>
            </div>
            <br />

            <strong>App Demo</strong>
            <div>
              This app is deployed and ready to download on iOS. You can see a
              short video demo of the app here:{" "}
              <a href="https://youtu.be/xb3_GNYLO6c">
                https://youtu.be/xb3_GNYLO6c
              </a>
            </div>
            <br />

            <strong>UI Changes</strong>
            <div>
              I spent more time than I'd like to admit working out the material
              selectors for the product detail view. I got it working with a
              green selection box to show which material is selected for the
              product. I also improved the layout of the product detail view
              with a description, title, product number, etc. Additionally, I
              swapped out the "back" and "clear" buttons with actual icons. See
              image below for an example of this new product detail layout.
            </div>
            <br />

            <div>
              <img src={detail_view} alt="screenshot" height={600} />
            </div>

            <br />

            <strong>Added Products & Fixed Backward Normals</strong>
            <div>
              I added data for 12 additional products, including office chairs,
              lighting, and tables. This was more tedious than it was difficult.
              I already had a working proof of concept for three of my products.
              So conceptually I just needed to follow the same model for these
              other products. The time-consuming part was figuring out which
              materials needed to map to which layers of the CAD model. I ended
              up loading a subset of the products that already exist on the
              Haworth Store website. And I aligned the finishes on my products
              to match the website's material offering.
            </div>
            <br />

            <div>
              Once I got all the products working. I discovered that I had a few
              backward-facing normals on quite a few of my meshes. (In plain
              English, this means parts of my products essentially become
              invisible.) I briefly explored correcting this on the shader level
              (by forcing Unity to render both sides of the mesh). But
              ultimately, jumped back into AutoCAD and corrected the meshes
              there. We have a process for fixing these meshes in AutoCAD, but
              it's time-consuming and requires attention to detail. The issue
              should be resolved now.
            </div>
            <br />

            <div>
              Ultimately, I don't think there's any easy way to load CAD
              graphics into a 3D game/app. Especially when we need to apply
              real-world materials to them. But the result is really great when
              you can actually see the product in your home office with all
              actual materials applied. Hard work, but very gratifying in the
              end.
            </div>
            <br />

            <strong>Improved Backend Security</strong>
            <div>
              I have two Firebase databases: one for textual data, and one for
              large CAD or image files. I secured these DBs by using Firebase's
              AppCheck. AppCheck ensures that my DBs will only respond to
              requests that come specifically from my app (Work from Anywhere).
            </div>
            <br />
            <div>
              Realistically security is not a huge concern for this app. I don't
              store any user data, and none of my app's data is sensitive in any
              way. I just wanted to prevent possible abuse by someone who may
              spam my DB with requests for my CAD data. I don't require users to
              log in to use the app, so there's no need to authenticate users or
              require anything from them. AppCheck provides me with all the
              security that I need.
            </div>
            <br />

            <strong>Refactored Code & Deployed</strong>
            <div>
              The refactor was long overdue. I needed to prune out some dead
              code and make it easier to read and maintain. From there,
              everything else on my checklist was done, so I built the project
              in Xcode and submitted it to Apple. You can find the app here in
              Apple's App Store:
            </div>
            <div>
              <a href="https://apps.apple.com/app/work-from-anywhere/id6449601414">
                https://apps.apple.com/app/work-from-anywhere/id6449601414
              </a>
            </div>
            <br />
            <div>
              <img src={app_store} alt="screenshot" height={600} />
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
                <li>[x] Improved UI with better fonts and colorscheme.</li>
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
              <li> turned AppCheck back on </li>
              <li> more refactored for clarity </li>
              <li> refactored for clarity </li>
              <li> fixed an issue with the UX onboarding icons </li>
              <li>
                {" "}
                temporarily removed AppCheck code so I can debug with Unity
                editor{" "}
              </li>
              <li> added Firebase's AppCheck to the app </li>
              <li> moved files out of the 'new' folder. </li>
              <li> small change to settings </li>
              <li> added additional CAD models and materials to the app </li>
              <li> added 'insert CAD' button and fixed font sizes </li>
              <li> added better icons to title bar. </li>
              <li> added description to product detail view </li>
              <li> refactored code for material pickers </li>
              <li> added green selector to material pickers </li>
              <li> added material theme color to material pickers </li>
              <li> changed material picker to circle. </li>
              <li>
                {" "}
                removed unused scripts and components; added material name text
                to product detail view.{" "}
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Sprint4;
