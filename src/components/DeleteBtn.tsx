//styles
import "./DeleteBtn.scss";

//react things
import React from "react";

//imported context
import { ItemsContext } from "./App";

//component body
export default function DeleteBtn() {
  const { items, updateItems } = React.useContext(ItemsContext);

  const unCompletedItems = items.filter(({ completed }) => !completed);

  return (
    <div className="delete-btn" onClick={() => updateItems(unCompletedItems)}>
      Clear completed
    </div>
  );
}
