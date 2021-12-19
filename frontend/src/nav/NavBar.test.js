import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavBar from "./NavBar";
import { TestUserClass } from "../TestUserClass";

it("renders without crashing logged in mock user", () => {
  render(
      <MemoryRouter>
        <TestUserClass>
          <NavBar />
        </TestUserClass>
      </MemoryRouter>,
  );
});

it("matches snapshot logged in mock user", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <TestUserClass>
        <NavBar />
      </TestUserClass>
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

  it("matches snapshot when logged out", () =>{
    const { asFragment } = render(
      <MemoryRouter>
        <TestUserClass currentUser={null}>
          <NavBar />
        </TestUserClass>
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
});