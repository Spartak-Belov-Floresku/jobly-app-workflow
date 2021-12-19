import { render } from "@testing-library/react";
import CompanyDetails from "./CompanyDetails";
import { MemoryRouter, Route } from "react-router-dom";
import { TestUserClass } from "../TestUserClass";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <TestUserClass>
          <CompanyDetails />
        </TestUserClass>
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter initialEntries={["/company/ibm"]}>
        <TestUserClass>
          <Route path="/company/:handle">
            <CompanyDetails />
          </Route>
        </TestUserClass>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});