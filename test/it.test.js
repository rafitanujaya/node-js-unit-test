import { sumAll } from "../src/sum"

describe('when call sumAll([10,10,10])', () => {
    it('should get 30', () => {
        expect(sumAll([10,10,10])).toBe(30);
    });
});