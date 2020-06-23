import * as React from "react";
import "./styles.css";

import ItemsList from "./components/ItemsList";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Demo</h1>
      <h2>See list of items below</h2>
      <ItemsList items={[]} />
    </div>
  );
}
