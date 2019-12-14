import React from "react";
import { PageHeader } from "antd";
import CrateDBTables from "./containers/CrateDBTables";
import "./App.css";

function App() {
  return (
    <div>
      <PageHeader
        title="Crate"
        subTitle="Tables Visualizer"
        className="header"
      />
      <CrateDBTables />
    </div>
  );
}

export default App;
