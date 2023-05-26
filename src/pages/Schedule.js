import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./Schedule.module.css";
import Breadcrumbs from "../components/Breadcrumbs";

const Schedule = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem" }}>
        <Breadcrumbs
          links={[
            { link: "/", label: "Home" },
            { link: null, label: "Schedule" },
          ]}
        />
      </Container>
      <Container className={styles["container"]}>
        <Card className={styles["card"]}>
          <Card.Title>Schedule</Card.Title>
          <Card.Body style={{ fontSize: "0.8rem" }}>
            <table>
              <thead>
                <tr>
                  <th className={styles["col-1"]}>Sprint</th>
                  <th className={styles["col-2"]}>Date</th>
                  <th className={styles["col-3"]}>Topic</th>
                  <th className={styles["col-4"]}>Description</th>
                  <th className={styles["col-5"]}>Deliverable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>5/14 - 5/27</td>
                  <td>Requirements</td>
                  <td>
                    I'll draw up some written requirements and work through a
                    test deployment for iOS. I'm not sure yet how to deploy to
                    Android yet, as I don't own an Android device to use for
                    testing. Stretch goal: get a 3D furniture CAD model working
                    in my scene.
                  </td>
                  <td>
                    (1) Requirements writeup, (2) preliminary working build of
                    the app.
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>5/28 - 6/10</td>
                  <td>Backend</td>
                  <td>Create a database with furniture CAD models. </td>
                  <td>
                    Sprint 2 summary (short writeup and/or video journal on
                    YouTube.)
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>6/11 - 6/24</td>
                  <td>Frontend</td>
                  <td>
                    Build out the UI that connects to the DB to insert CAD
                    models.
                  </td>
                  <td>
                    Sprint 3 summary (short writeup and/or video journal on
                    YouTube.)
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>6/25 - 7/8</td>
                  <td>Deploy</td>
                  <td>
                    Get stable version of the app (i.e., app does not crash) and
                    deploy it to the Apple Store. The app will only have bare
                    essential features necessary to work. Next, I'll expand the
                    app with additional features defined in the requirements
                    list. For example: surface material options; link to Haworth
                    online store; product descriptions from Haworth; manual
                    movement of 3D models; improve design/UX for the UI; build
                    and test Android deployment; etc.
                  </td>
                  <td>
                    Sprint 4 summary (short writeup and/or video journal on
                    YouTube.)
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>7/9 - 7/22</td>
                  <td>Bugfixes & Final Features</td>
                  <td>Implement any final "nice-to-have" features.</td>
                  <td>
                    Sprint 5 summary (short writeup and/or video journal on
                    YouTube.)
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>7/23 - 8/5</td>
                  <td>Poster/Report </td>
                  <td>
                    No new features after 7/23. Polish the existing features.
                    Fix existing bugs. Code Freeze on 7/29 at 11:59 PM. Final
                    deployment, poster, write-up, and presentation slides to be
                    worked on from 7/30 through 8/5.
                  </td>
                  <td>(1) Report, (2) poster, (3) link to deployed app</td>
                </tr>
              </tbody>
            </table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Schedule;
