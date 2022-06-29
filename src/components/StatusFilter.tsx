//react things
import React from "react";

//imported context
import { ItemsContext } from "./App";

//impotrted constants
import { FILTER_VALUE } from "../constants";
import { BUTTONS } from "../constants";

export default function StatusFilter() {
  const { filter, updateFilter } = React.useContext(ItemsContext);

  const statusChange = (name: string) => {
    switch (name) {
      case "all":
        return FILTER_VALUE.ALL;
      case "active":
        return FILTER_VALUE.ACTIVE;
      case "completed":
        return FILTER_VALUE.COMPLETED;
      default:
        return FILTER_VALUE.ALL;
    }
  };

  const buttons = BUTTONS.map(({ name, label }) => {
    const isActive = filter === name;

    const clazz = isActive ? "btn-dark" : "btn-outline-dark";
    return (
      <button
        type="button"
        className={`btn ${clazz} shadow-none  custom-btn`}
        onClick={() => updateFilter(statusChange(name))}
        key={name}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group btns">{buttons}</div>;
}
