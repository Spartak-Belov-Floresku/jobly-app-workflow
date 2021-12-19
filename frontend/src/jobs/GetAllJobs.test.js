import { render } from "@testing-library/react";
import GetAllJobs from "./GetAllJobs";

it("renders without crashing", () => {
  render(<GetAllJobs />);
});

it("matches snapshot with no jobs", () => {
  const { asFragment } = render(<GetAllJobs />);
  expect(asFragment()).toMatchSnapshot();
});