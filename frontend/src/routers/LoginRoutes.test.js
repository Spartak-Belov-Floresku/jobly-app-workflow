import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { TestUserClass } from "../TestUserClass";
import LoginRoutes from "./LoginRoutes";

it("renders without crashing logged in mock user", () => {
  render(
      <MemoryRouter>
        <TestUserClass>
          <LoginRoutes />
        </TestUserClass>
      </MemoryRouter>,
  );
});

it("matches snapshot logged in user", () => {
  const { asFragment } = render(
      <MemoryRouter>
        <TestUserClass>
          <LoginRoutes />
        </TestUserClass>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot when logged out", () => {
  const { asFragment } = render(
      <MemoryRouter>
        <TestUserClass currentUser={null}>
          <LoginRoutes />
        </TestUserClass>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
