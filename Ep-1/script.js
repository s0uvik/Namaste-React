import React from "react"
import  ReactDOM  from "react-dom/client";



const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Let's learn React"
);

const htmlComponent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "Let's learn React Namaste React"),
    React.createElement("h2", { id: "heading" }, "Let's learn React")]
  )
);
// for creating sibling element we have to wrap componets into an array

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(htmlComponent);

