import { helloAsync } from "../src/async";

test('test async function', async () => {
    const result = await helloAsync('rafi');

    expect(result).toBe('hello rafi')
})

test('test async', async () => {
  await expect(helloAsync('rafi')).resolves.toBe('hello rafi');
  await expect(helloAsync()).rejects.toBe('name is empty');
})
