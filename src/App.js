import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/*
<div id='parent'>
    <div id='child'>
        <h1>I am an h1 tag</h1>
        <h2>I am an h1 tag</h2>
    </div>
    <div id='child'>
        <h1>I am an h1 tag</h1>
        <h2>I am an h1 tag</h2>
    </div>
</div>

*/

// EPISODE 1 & 2
/*
// above example in react
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

const heading = React.createElement("h1", { id: "heading" }, "Hello World"); // heading is a object

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // render method convert heading to tag and presents in the DOM

*/

// EPISODE 3

//  React Element

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// const jsxHeading = <h1 id="heading"> Namaste React Course</h1>;
/*

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const Heading = () => (
  <div className="container">
    <Title />
    {Title()}
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
