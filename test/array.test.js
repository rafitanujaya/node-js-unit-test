test('array', () => {
    const names = ['rafi', 'tanujaya'];
    expect(names).toContain('rafi');
    expect(names).toEqual(['rafi', 'tanujaya']);

    const person = [
        {
            name: 'rafi'
        },
        {
            name: 'tanujaya'
        }
    ]

    expect(person).toContainEqual({name: 'rafi'});
    expect(person).toEqual([{name: 'rafi'}, {name : 'tanujaya'}])
})