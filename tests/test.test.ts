import { expect } from "chai";

function add(a: number, b:number) {
    return a + b;
}

describe('calculate', function () {
    it('add', function () {
        let result: number = add(3, 4);
        
        expect(result).equal(7);
    });
});