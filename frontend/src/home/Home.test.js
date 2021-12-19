import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";
import { TestUserClass } from "../TestUserClass";


it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <TestUserClass>
          <Home />
        </TestUserClass>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <TestUserClass currUser={null}>
          <Home />
        </TestUserClass>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
