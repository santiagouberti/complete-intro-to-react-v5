import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "algo-importante" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Fortunato",
      animal: "Tortuga",
      breed: "Terrestre",
    }),
    React.createElement(Pet, {
      name: "Alaska",
      animal: "Perro",
      breed: "Mixto",
    }),
    React.createElement(Pet, {
      name: "Crackovia",
      animal: "Perro",
      breed: "",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
