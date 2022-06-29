import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

import App from "./App";
import { fireEvent } from "@testing-library/react";

describe("Item add form", () => {
  it("the item should be added", () => {
    let container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App />, container);
      const input = container.getElementsByClassName("custom-input")[0];
      fireEvent.change(input, { target: { value: "test task" } });
      fireEvent.submit(input);
    });
    const itemLabel: any =
      container.getElementsByClassName("todo-list-item")[0];
    expect(itemLabel.textContent).toBe("test task");
  });
  it("the item shouldn't be added", () => {
    let container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App />, container);
      const input = container.getElementsByClassName("custom-input")[0];
      fireEvent.change(input, { target: { value: "  " } });
      fireEvent.submit(input);
    });
    const item: any = container.getElementsByClassName("todo-list-item")[0];
    expect(item).toBeNull;
  });
});
