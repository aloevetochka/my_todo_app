import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

import App from "./App";
import { fireEvent } from "@testing-library/react";
import { TEST_ITEMS_MOCKUP } from "../constants";

describe("Status filter", () => {
  it("ACTIVE btn => length = 4", () => {
    let container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      ReactDOM.render(<App itemsMockup={TEST_ITEMS_MOCKUP} />, container);
      const classBtns = container.getElementsByClassName("btns")[0];
      const allButtons = classBtns.querySelectorAll("button");
      const active = allButtons[1];
      fireEvent.click(active);
    });
    const items = container.getElementsByClassName("list");
    expect(items.length).toEqual(4);
  });
  it("COMPLETED btn => length = 2", () => {
    let container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      ReactDOM.render(<App itemsMockup={TEST_ITEMS_MOCKUP} />, container);
      const classBtns = container.getElementsByClassName("btns")[0];
      const allButtons = classBtns.querySelectorAll("button");
      const completed = allButtons[2];
      fireEvent.click(completed);
    });
    const items = container.getElementsByClassName("list");
    expect(items.length).toEqual(2);
  });
  it("ALL btn => length = 6", () => {
    let container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      ReactDOM.render(<App itemsMockup={TEST_ITEMS_MOCKUP} />, container);
      const classBtns = container.getElementsByClassName("btns")[0];
      const allButtons = classBtns.querySelectorAll("button");
      const all = allButtons[0];
      fireEvent.click(all);
    });
    const items = container.getElementsByClassName("list");
    expect(items.length).toEqual(6);
  });
});
