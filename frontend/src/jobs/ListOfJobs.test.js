import { render } from "@testing-library/react";
import ListOfJobs from "./ListOfJobs";

it("renders without crashing", () => {
  render(<ListOfJobs jobs={[]} />);
});

it("matches snapshot with no jobs", () => {
  const { asFragment } = render(<ListOfJobs jobs={[]} />);
  expect(asFragment()).toMatchSnapshot();
});