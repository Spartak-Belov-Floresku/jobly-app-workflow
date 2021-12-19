import { render } from "@testing-library/react";
import ErrorsHandler from "./ErrorsHandler";

it("renders without crashing", () => {
  render(<ErrorsHandler />);
});

it("matches snapshot for danger", () => {
  let messages = ["Everything is broken", "Run for the hills"];
  const { asFragment } = render(<ErrorsHandler type="danger" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot for success", () => {
  let messages = ["Everything is awesome!"];
  const { asFragment } = render(<ErrorsHandler type="success" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});