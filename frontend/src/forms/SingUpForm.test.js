import { render } from "@testing-library/react";
import SignUpForm from "./SignUpForm";
import { TestUserClass } from "../TestUserClass";
import { BrowserRouter } from 'react-router-dom'

// TODO: woefully under-tested!

it("matches snapshot", function () {
  const { asFragment } = render(
    <BrowserRouter>
        <TestUserClass>
            <SignUpForm />
        </TestUserClass>
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});