import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => after render()=> HTMLElement
// this is core react
// this is not developer friendly
//this is react element
const heading = React.createElement("h1", { id: "heading" }, "This is Souvik");
console.log(heading);

//JSX (transpile before it reaches JS engine)=> PARCEL => Babel
//JSX =>(Babel conversion)=> React.createElement => ReactElement (JS-Object) => after render()=> HTMLElement
const jsxHeading = <h1>Souvik is here using jsx </h1>;
console.log(jsxHeading);

//this is react element
const headingElement = <h1>This is heading from React element</h1>;

//this is react component
const HeadingComponent = () => {
  return (
    <>
      {headingElement}
      <h1>This is heading from component</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
