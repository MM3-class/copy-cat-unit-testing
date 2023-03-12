import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/user-event";
// Assertion and Matcher
import "@testing-library/jest-dom";
import CopyCatContainer from "../copy-cat-container/CopyCatContainer";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("render component CopyCatContainer", () => {
  // Testing the state of Value input
  test("should display value", () => {
    render(
      <BrowserRouter>
        <CopyCatContainer />
      </BrowserRouter>
    );
    const input = screen.getByRole("textbox");
    userEvent.type(input, "copy cat is displayed");
    const par = screen.getByText("copy cat is displayed");
    expect(par).toBeInTheDocument();
  });

  // Testing the function of Toggle img (Removing Tap)
  test("should remove the paragraph when cat is taped", async () => {
    render(
      <BrowserRouter>
        <CopyCatContainer />
      </BrowserRouter>
    );
    const input = screen.getByRole("textbox");
    userEvent.type(input, "my mouth is shut");

    let par = screen.getByText("my mouth is shut");
    expect(par).toBeInTheDocument();

    const copyCatImg = screen.getByAltText("copycat");
    userEvent.click(copyCatImg);

    await waitFor(() => {
      par = screen.queryByText("my mouth is shut");
      expect(par).toBeNull();
    });
  });

  // Testing the function of Toggle img (cat has Tap)
  test("should display the paragraph after removing tap", async () => {
    render(
      <BrowserRouter>
        <CopyCatContainer />
      </BrowserRouter>
    );

    const copyCatImg = screen.getByAltText("copycat");
    userEvent.click(copyCatImg);

    await screen.findByAltText("quietcat");

    const input = screen.getByRole("textbox");
    userEvent.type(input, "Eventually appear");

    const par = screen.queryByText("Eventually appear");
    expect(par).toBeNull();
  });
});
