//react things
import React from "react";

//imported context
import { ItemsContext } from "./App";

//component body
export default function Counter() {
  const { items } = React.useContext(ItemsContext);

  const unCompletedItems = items.filter(({ completed }) => !completed);

  return (
    <div className="counter">
      {unCompletedItems.length === 0 ? (
        "All items done"
      ) : (
        <div>
          <span>{unCompletedItems.length}</span>
          {unCompletedItems.length > 1 ? " items left" : " item left"}
        </div>
      )}
    </div>
  );
}
