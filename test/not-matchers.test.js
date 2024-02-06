test('string not', () => {
    const name = 'rafi tanujaya';

    expect(name).not.toBe('iska');
    expect(name).not.toEqual('iska');
    expect(name).not.toMatch(/iska/)
});

test('numbers not', () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBe(10);
})
