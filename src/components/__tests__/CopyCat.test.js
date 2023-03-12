import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CopyCat from "../copy-cat/CopyCat";

// Testing Header Displayed
test("display the name", () => {
  render(
    <CopyCat
      name={"jun"}
      isCoping={true}
      toggleCat={() => {}}
      value={"copy cat"}
      handleChange={() => {}}
    />
  );
  const header = screen.getByText("jun is Repeating your words");
  expect(header).toBeInTheDocument();
});

// Testing the state isCoping (true)
test("display value in paragraph bottom if isCoping is true", () => {
  render(
    <CopyCat
      value={"here display par"}
      isCoping={true}
      toggleCat={() => {}}
      handleChange={() => {}}
    />
  );
  // Simulate user typing in textbox
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue();
  const par = screen.getByText("here display par");
  // Assert that input text appears in paragraph
  expect(par).toBeInTheDocument();
});

// Testing the state isCoping (false)
test("NOT display value in paragraph bottom if isCoping is false", () => {
  render(
    <CopyCat
      value={"here display par"}
      isCoping={false}
      toggleCat={() => {}}
      handleChange={() => {}}
    />
  );
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue();
  // notice that we use the queryBy variant
  const par = screen.queryByText("here display par");
  expect(par).toBeNull();
});
