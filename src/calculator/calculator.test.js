import { calculator } from './calculator';
describe("calculator test",()=>{

    it("test1",()=>{
        expect(calculator.add(2,4)).toBe(6);
    })

    it("test2",()=>{
        expect(calculator.subtract(10,5)).toBe(5);
    })

    it("test3",()=>{
        expect(calculator.divide(9,3)).toBe(3);
    })

    it("test4",()=>{
        expect(calculator.multiply(4,5)).toBe(20);
    })
}) 