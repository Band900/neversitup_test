const { findOddNumber } = require('../src/controllers/index')

describe('test function manipulate', () => {
    
    test('should return 7, because it occurs 1 time (which is odd).', () => {
      expect(findOddNumber([7])).toEqual(7);
    });

    test('should return 0, because it occurs 1 time (which is odd).', () => {
        expect(findOddNumber([0])).toEqual(0);
    });
 
    test('[1,1,2] should return 2, because it occurs 1 time (which is odd).', () => {
        expect(findOddNumber([1,1,2])).toEqual(2);
    });
 
    test('[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).', () => {
        expect(findOddNumber([0,1,0,1,0])).toEqual(0);
    });
 
    test('[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).', () => {
        expect(findOddNumber([1,2,2,3,3,3,4,3,3,3,2,2,1])).toEqual(4);
    });
 
});