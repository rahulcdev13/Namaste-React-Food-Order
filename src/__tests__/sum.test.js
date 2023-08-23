import { sum } from "../commonFiles/Sum";

test("The function should calculatethe sum of two number", () => {
  const result = sum(3, 5);
   
  //  This line known as Assertions
  expect(result).toBe(8);
});
