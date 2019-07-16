import React from "react";
import { render } from "react-dom";
import FPSStats from "react-fps-stats";

const App = () => {
  return (
    <div>
      <h2 style={{ marginTop: 60 }}>Minimal example using react-fps-stats</h2>
      <FPSStats />
    </div>
  );
};

render(<App />, document.body);
