import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { TestUserClass } from "../TestUserClass";
import Routers from "./Routers";

it("renders without crashing logged in mock user", () => {
  render(
      <MemoryRouter>
        <TestUserClass>
          <Routers />
        </TestUserClass>
      </MemoryRouter>,
  );
});

it("matches snapshot logged in user", () => {
  const { asFragment } = render(
      <MemoryRouter>
        <TestUserClass>
          <Routers />
        </TestUserClass>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", () => {
  const { asFragment } = render(
      <MemoryRouter>
        <TestUserClass currentUser={null}>
          <Routers />
        </TestUserClass>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});