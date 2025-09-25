import { render, screen } from "@testing-library/react";
import WorkersPage from "./page";

describe("WorkersPage", () => {
  test("renders heading correctly", () => {
    render(<WorkersPage />);
    const heading = screen.getByText(/Our Workers/i);
    expect(heading).toBeInTheDocument();
  });
});
