//react things
import * as React from "react";

//imported context
import { ItemsContext } from "./App";

export default function Counter() {
  const { items } = React.useContext(ItemsContext);

  const active = items.filter(({ completed }) => !completed);

  return (
    <div className="counter">
      {active.length === 0 ? (
        "All items done"
      ) : (
        <div>
          <span>{active.length}</span>
          {active.length > 1 ? " items left" : " item left"}
        </div>
      )}
    </div>
  );
}
