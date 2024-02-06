test('toBe', () => {
  const name = 'rafi';
  const sayHello = `hallo ${name}`

  expect(sayHello).toBe('hallo rafi')
})

test('toEquals ', () => {
  const person = {id: 'rafi'};
  Object.assign(person, {name: "rafi"})

  expect(person).toEqual({
    id: 'rafi',
    name: 'rafi'
  })
})

