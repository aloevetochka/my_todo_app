//react things
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

//imported components
import App from "./App";

//imported constants
import { TEST_ITEMS_MOCKUP, TEST_ONE_ITEM_MOCKUP } from "../constants";

describe("Counter", function () {
  it("counter should display 'All items done!'", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App />, container);
    });
    const counter: any = container.getElementsByClassName("counter")[0];
    expect(counter.textContent).toBe("All items done");
  });
  it("counter should display '1 item left'", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App itemsMockup={TEST_ONE_ITEM_MOCKUP} />, container);
    });
    const counter: any = container.getElementsByClassName("counter")[0];
    expect(counter.textContent).toBe("1 item left");
  });
  it("counter should display '4 items left'", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<App itemsMockup={TEST_ITEMS_MOCKUP} />, container);
    });
    const counter: any = container.getElementsByClassName("counter")[0];
    expect(counter.textContent).toBe("4 items left");
  });
});
