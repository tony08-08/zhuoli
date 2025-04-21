import React from "react";
import { memo } from "react";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
};

export default memo(App);
