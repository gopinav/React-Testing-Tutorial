import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";

test("renders correctly", () => {
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  render(
    <CounterTwo
      count={0}
      handleIncrement={incrementHandler}
      handleDecrement={decrementHandler}
    />
  );
  const textElement = screen.getByText("Counter Two");
  expect(textElement).toBeInTheDocument();
});

test("handlers are called", () => {
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  render(
    <CounterTwo
      count={0}
      handleIncrement={incrementHandler}
      handleDecrement={decrementHandler}
    />
  );
  const incrementButton = screen.getByText("Increment");
  const decrementButton = screen.getByText("Decrement");
  incrementButton.click();
  decrementButton.click();
  expect(incrementHandler).toHaveBeenCalledTimes(1);
  expect(decrementHandler).toHaveBeenCalledTimes(1);
});
