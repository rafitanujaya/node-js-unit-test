import { sum } from "../src/sum";

beforeAll(() => {
    console.info('before all');
})

afterAll(() => {
    console.info('after all');
})

beforeEach(() => {
    console.info('before each');
});

afterEach(() => {
    console.info('after each');
});

test('first test', () => {
    console.log("first test");
    expect(sum(10,10)).toBe(20)
});

test('second test', () => {
    console.log('second test');
    expect(sum(10,10)).toBe(20);
})
