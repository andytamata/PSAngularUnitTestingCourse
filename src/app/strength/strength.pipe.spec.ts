import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
    it('should display weak if strength is 5', () => {
        // arrange
        let pipe = new StrengthPipe();

        // act
        const result = pipe.transform(5);

        //assert
        expect(result).toEqual('5 (weak)');
    })

    it('should display strong if strength is 10', () => {
        // arrange
        let pipe = new StrengthPipe();

        // act
        const result = pipe.transform(10);

        //assert
        expect(result).toEqual('10 (strong)');
    })
    
})