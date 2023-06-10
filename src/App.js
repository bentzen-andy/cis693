import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import Requirements from "./pages/Requirements";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Sprint1 from "./pages/Sprint1";
import Sprint2 from "./pages/Sprint2";
// import Sprint1 from "./pages/Sprint3";
// import Sprint1 from "./pages/Sprint4";
// import Sprint1 from "./pages/Sprint5";
// import Sprint1 from "./pages/Sprint6";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="schedule/*" element={<Schedule />} />

        <Route path="requirements/*" element={<Requirements />} />
        <Route path="sprint-1/*" element={<Sprint1 />} />
        <Route path="sprint-2/*" element={<Sprint2 />} />
        {/* <Route path="sprint-1/*" element={<Sprint3 />} /> */}
        {/* <Route path="sprint-1/*" element={<Sprint4 />} /> */}
        {/* <Route path="sprint-1/*" element={<Sprint5 />} /> */}
        {/* <Route path="sprint-1/*" element={<Sprint6 />} /> */}
        <Route path="privacy-policy/*" element={<PrivacyPolicy />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
