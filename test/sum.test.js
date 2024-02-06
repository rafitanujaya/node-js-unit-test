import { sum } from "../src/sum";

test('test sum function ', () => {
  const result = sum(1,2)

  expect(result).toBe(3)
});

test('sum 1+2 to equal 3', () => {
  expect(sum(1,2 )).toEqual(3)
})