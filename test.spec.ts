//this is a test file, with the extension .spec.ts
//let's add a script to run the tests, after writing a simple test

import { describe, it, expect } from 'vitest'

// we can start adding tests for things we want to play around with
// let's do simple test for a square function

function square(num: number) {
    return num * num
};

//now let's test it

describe('square', () => {
    it('3 * 3 = 9', () => {
        expect(square(3)).toBe(9)
    })
    //now let's try a failing test
    it('5 * 5 = 25', () => {
        expect(square(5)).toBe(25)
    })
})
