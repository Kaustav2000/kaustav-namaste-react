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
