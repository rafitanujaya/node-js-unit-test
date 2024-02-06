import { helloAsync } from "../src/async";

test.concurrent('concurent 1', async () => {
    await expect(helloAsync('rafi')).resolves.toBe('hello rafi')
})
test.concurrent('concurent 2', async () => {
    await expect(helloAsync('rafi')).resolves.toBe('hello rafi')
})
test.concurrent('concurent 3', async () => {
    await expect(helloAsync('rafi')).resolves.toBe('hello rafi')
})