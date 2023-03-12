import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "../login/Login";
import { BrowserRouter } from "react-router-dom";

describe("submit form", () => {
  test("render email", () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const email = screen.getByRole("textbox");
    userEvent.type(email, "hr@gmail.com");
    expect(email).toHaveValue("hr@gmail.com");
  });

  test("render Password", () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const password = screen.getByRole("textbox");
    userEvent.type(password, "123");
    expect(password).toHaveValue("123");
  });

  test("check how many btn we have in the component", () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const btn = screen.getAllByRole("button");
    expect(btn).toHaveLength(2);
  });

  test("the Reset btn", () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const btn = screen.getByTestId("reset");
    const emailNode = screen.getByPlaceholderText("Email");
    const passwordNode = screen.getByPlaceholderText("Password");
    userEvent.click(btn);
    expect(emailNode.value).toMatch("");
    expect(passwordNode.value).toMatch("");
  });
});
test("btn's are enable to click", () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  const btn = screen.getAllByRole("button");
  userEvent.click(btn[0]);
  userEvent.click(btn[1]);
  expect(btn[0]).not.toBeEnabled();
  expect(btn[1]).not.toBeEnabled();
});
