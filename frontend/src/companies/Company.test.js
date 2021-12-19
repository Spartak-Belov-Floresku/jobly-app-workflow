import { render } from "@testing-library/react";
import Company from "./Company";
import { MemoryRouter } from "react-router";

it("matches snapshot with logo", () => {
  const { asFragment } = render(
      <MemoryRouter>
        <Company
            handle="rithm"
            name="Rithm School"
            description="Become an exceptional developer in 16 weeks."
            logo_url="https://pbs.twimg.com/profile_images/770491761412173826/ZUeIa4tw_400x400.jpg"
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without logo", () => {
  const { asFragment } = render(
      <MemoryRouter>
        <Company
            handle="algo"
            name="Algo School"
            description="Become a mediocre developer in 160 weeks."
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});