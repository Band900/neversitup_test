const { manipulate } = require('../src/controllers/index')

describe('test function manipulate', () => {
    
    test(`function should return: ['a']`, () => {
      expect(manipulate('a')).toEqual([ 'a' ]);
    });

    test(`function should return [ 'ab', 'ba', 'aa' ]`, () => {
        expect(manipulate('ab')).toEqual([ 'ab', 'ba', 'aa' ]);
    });
 
    test(`function should return [
            'abc', 'acb', 'bca',
            'bac', 'cab', 'cba',
            'aba', 'aab', 'bab',
            'bba'
        ]`, () => {
        expect(manipulate('abc')).toEqual([
            'abc', 'acb', 'bca',
            'bac', 'cab', 'cba',
            'aba', 'aab', 'bab',
            'bba'
          ]);
    });
 
    test(`function should return [
            'aabb', 'abba',
            'bbaa', 'baab',
            'aaba', 'abaa',
            'aaab'
    ]`, () => {
        expect(manipulate('aabb')).toEqual([
            'aabb', 'abba',
            'bbaa', 'baab',
            'aaba', 'abaa',
            'aaab'
          ]);
    });
 
});