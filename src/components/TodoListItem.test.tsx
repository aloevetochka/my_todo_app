import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

import App from "./App";
import { fireEvent } from "@testing-library/react";
import { TEST_ONE_ITEM_MOCKUP } from "../constants";

describe("Todo list item", () => {
  it("className and icon shoud be change", () => {
    let container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App itemsMockup={TEST_ONE_ITEM_MOCKUP} />, container);
      const item = container.getElementsByClassName("todo-list-item d-flex")[0];
      fireEvent.click(item);
    });
    const completedItem = container.getElementsByClassName(
      "todo-list-item-label done"
    )[0];
    const completedIcon = container.querySelector("FiCheckCircle");
    expect(completedItem);
    expect(completedIcon);
  });
});
