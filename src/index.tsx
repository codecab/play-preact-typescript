import { h, render } from "preact";

// This actually works as expected from the code above
// import * as preact from "preact";
// const { h, render } = preact;

// Uncaught ReferenceError: h is not defined
render(<h1>Hello, preact!</h1>, document.body);
