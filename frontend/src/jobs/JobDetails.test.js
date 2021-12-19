import { render } from "@testing-library/react";
import JobDetails from "./JobDetails";
import { TestUserClass } from "../TestUserClass";


it("matches snapshot for mock user", () => {
  let item = { title: "CEO", salary: 1000000, equity: 10 };
  const { asFragment } = render(
      <TestUserClass>
        <JobDetails item={item} />
      </TestUserClass>,
  );
  expect(asFragment()).toMatchSnapshot();
});
