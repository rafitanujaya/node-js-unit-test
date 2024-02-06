test('string', () => {
    const name = "rafi tanujaya"

    expect(name).toBe('rafi tanujaya');
    expect(name).toEqual('rafi tanujaya');
    expect(name).toMatch(/rafi/)
});