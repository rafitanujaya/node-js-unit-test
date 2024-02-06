import { calculate, calculateReturn } from "../src/sum";

test('test calculate', () => {
    const callback = jest.fn();

    calculate([10,10], callback);
    calculate([10,10,10], callback);

    expect(callback.mock.calls.length).toBe(2);
    expect(callback.mock.calls[0][0]).toBe(20);
    expect(callback.mock.calls[1][0]).toBe(30);
})

test('test mock return calculate', () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce(40)
    callback.mockReturnValueOnce(60)

    expect(calculateReturn([10,10], callback)).toBe(40);
    expect(calculateReturn([10,10,10], callback)).toBe(60);

    console.log(callback.mock.results);

    expect(callback.mock.calls.length).toBe(2);
    expect(callback.mock.results[0].value).toBe(40);
    expect(callback.mock.results[1].value).toBe(60)
});

test('test mock implementation', () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => {
    return total * 2;
  })

  expect(calculateReturn([10,10], callback)).toBe(40)
  expect(calculateReturn([10,10,10], callback)).toBe(60)

  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(60)

});