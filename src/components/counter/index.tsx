import React, { useState } from "react";

export default function Counter({
  count,
  decrement,
  increment
}: any): JSX.Element {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
