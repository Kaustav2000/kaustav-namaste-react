import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery")); // for bundling

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
      {/* if my path is / */}
      <Outlet />

      {/* if my path is /about */}
      {/* <About /> */}

      {/* if my path is /contact */}
      {/* <Contact /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ), // can pass Shimmer UI also
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
