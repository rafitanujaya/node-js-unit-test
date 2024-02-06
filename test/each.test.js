import { sumAll } from "../src/sum";

// const table = [
//     [[10,10,10], 30],
//     [[10,10,10,10], 40]
// ];

// test.each(table)('test sumAll(%s), should result %i', (numbers, expected) => {
//     expect(sumAll(numbers)).toBe(expected)
// })

const table = [
    {numbers: [10,10,10], expected: 30},
    {numbers: [10,10,10,10], expected: 40}
]

test.each(table)('test sumAll($numbers), should result $expected', ({numbers, expected}) => {
    expect(sumAll(numbers)).toBe(expected)
})