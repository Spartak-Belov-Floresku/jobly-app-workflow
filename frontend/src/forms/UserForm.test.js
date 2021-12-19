import { render } from "@testing-library/react";
import UserForm from "./UserForm";
import { TestUserClass } from "../TestUserClass";

// TODO: woefully under-tested!

it("matches snapshot", function () {
  const { asFragment } = render(
      <TestUserClass>
        <UserForm />
      </TestUserClass>,
  );
  expect(asFragment()).toMatchSnapshot();
});