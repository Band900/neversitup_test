const { countSmilyFace } = require('../src/controllers/index')

describe('test function countSmilyFace', () => {
    
    test('should return 2', () => {
      expect(countSmilyFace([':)', ';(', ';}', ':-D'])).toEqual(2);
    });

    test('should return 3', () => {
        expect(countSmilyFace([';D', ':-(', ':-)', ';~)'])).toEqual(3);
    });

    test('should return 1', () => {
        expect(countSmilyFace([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
    });
 
});