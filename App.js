// ReactElement(Object) => HTML(Brower Understands)

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world! from React"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
console.log(parent);
root.render(parent);
root1.render(parent);
