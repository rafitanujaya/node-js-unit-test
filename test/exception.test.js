import { MyExceotion, callMe } from "../src/exceptions"
test('exception', () => {
    expect(() => callMe('rafi')).toThrow();
    expect(() => callMe('rafi')).toThrow(MyExceotion);
    expect(() => callMe('rafi')).toThrow('ups my exception happens');

    expect(callMe()).toBe("OK")
})