import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { MemoryRouter } from "react-router";
import { TestUserClass } from "../TestUserClass";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <TestUserClass>
            <LoginForm />
        </TestUserClass>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});