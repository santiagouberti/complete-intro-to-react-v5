import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", { id: "algo-importante" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Fortunato",
  //     animal: "Tortuga",
  //     breed: "Terrestre",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Alaska",
  //     animal: "Perro",
  //     breed: "Mixto",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Crackovia",
  //     animal: "Perro",
  //     breed: "Dálmata",
  //   }),
  // ]);

  return (
    <div>
      <h1 id="algo-importante">Adopt Me!</h1>
      <Pet name="Fortunato" animal="Tortug" breed="Terrestre" />
      <Pet name="Alaska" animal="Dog" breed="Mixto" />
      <Pet name="Crackovia" animal="Dog" breed="Dálmata" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
