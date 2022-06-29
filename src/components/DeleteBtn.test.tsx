import { act } from "react-dom/test-utils";
import * as ReactDOM from "react-dom";
import { fireEvent } from "@testing-library/react";
import App from "./App";
import { TEST_ITEMS_MOCKUP, TEST_ONE_ITEM_MOCKUP } from "../constants";

describe("DeleteBtn", function () {
  it("should display text 'Clear completed'", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App />, container);
    });
    const delete_btn: any = container.getElementsByClassName("delete-btn")[0];
    expect(delete_btn.textContent).toBe("Clear completed");
  });
  it("should delete completed items", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App itemsMockup={TEST_ITEMS_MOCKUP} />, container);
      const button = container.getElementsByClassName("delete-btn")[0];
      fireEvent.click(button);
    });
    const listLength: number = container.getElementsByClassName("list").length;
    expect(listLength).toEqual(4);
  });
  it("shouldn't delete active items", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App itemsMockup={TEST_ONE_ITEM_MOCKUP} />, container);
      const button = container.getElementsByClassName("delete-btn")[0];
      fireEvent.click(button);
    });
    const listLength: number = container.getElementsByClassName("list").length;
    expect(listLength).toEqual(1);
  });
});
