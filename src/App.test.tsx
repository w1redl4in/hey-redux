import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const reducer = (state: any, action: any) => {
  if (typeof state === "undefined") {
    return 0;
  } else if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

// Happy Way
describe("Redux Increment", () => {
  it("Should work", () => {
    expect(reducer(1, { type: "INCREMENT" })).toBe(2);
  });

  it("Should'nt work", () => {
    expect(reducer(1, { type: "INCREMENT" })).toBe(1);
  });

  it("undefined", () => {
    expect(reducer(undefined, { type: "INCREMENT" })).toBe(0);
  });
});

describe("Redux Decrement", () => {
  it("Should work", () => {
    expect(reducer(1, { type: "DECREMENT" })).toBe(0);
  });

  it("Should'nt work", () => {
    expect(reducer(1, { type: "DECREMENT" })).toBe(1);
  });
  it("undefined", () => {
    expect(reducer(undefined, { type: "INCREMENT" })).toBe(0);
  });
});
