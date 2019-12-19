import Counter from "../counter";
import React, { useEffect, useState } from "react";
import { createStore } from "redux";

export default function Container() {
  const reducer = (state: number = 0, action: any) => {
    switch (action.type) {
      case "PLUS":
        return state + 1;
      case "MINUS":
        return state - 1;
    }
    return 0;
  };

  const store = createStore(reducer);

  function increment() {
    store.dispatch({ type: "PLUS" });
  }

  function decrement() {
    store.dispatch({ type: "MINUS" });
  }

  return (
    <Counter
      count={store.getState()}
      increment={increment}
      decrement={decrement}
    />
  );
}
