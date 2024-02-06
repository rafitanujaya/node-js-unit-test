import { sayHello } from "../src/sayhello"

test('sayHello succes', () => {
     expect(sayHello('rafi')).toBe('hello rafi')
})

test.failing('sayHello error',() => {
     sayHello(null)
})

test('should error macther ', () => {
   expect(() => helloAsync(null)).toThrow()
})
