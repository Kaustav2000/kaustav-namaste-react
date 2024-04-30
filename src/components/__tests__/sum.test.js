import { sum } from "../sum";

test("Sum function should calculate summ of 2 nnumbers", () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
