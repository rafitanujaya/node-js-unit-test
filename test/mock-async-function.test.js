import { getBalance } from "../src/async";

test('mock async function', async () => {
    const from = jest.fn()
    from.mockResolvedValueOnce(1000);

    await expect(getBalance('rafi', from)).resolves.toEqual({
        name: 'rafi',
        balance: 1000
    })

    console.log(from.mock.results);
    console.log(from.mock.calls);

    expect(from.mock.calls.length).toBe(1)
    await expect(from.mock.results[0].value).resolves.toBe(1000)

})

test('mock async function rejected', async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce('Ups');

  await expect(getBalance('rafi', from)).rejects.toBe('Ups')
})
