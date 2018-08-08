//Jasmine

/*
Essential Keywords

describe - "let me describe __ to you."
it - "let me tell you about __"
expect - "here's what I expect"
*/

var earth = {
    isRound: true,
    numberFromSun: 3
}

describe("Earth", function(){
    it("is round", function(){
        expect(earth.isRound).toBe(true)
    });
    it("is the third planet form the sun", function(){
        expect(earth.numberFromSun).toBe(3)
    });
});

/*
Matchers

toBe/ not.toBe   #(===)
toBeCloseTo
toBeDefined
toBeFalsey/ toBeTruthy
toBeGreaterThan/ toBeLessThan
toContain
toEqual   #(==)
jasmine.any() -> #typeOf
*/

//beforeEach
describe("Arrays", function(){
    var arr;
    beforeEach(function(){
        arr = [1,3,5];
    });
});

//afterEach
//-run before/after all tests! Does not reset in between
describe("Counting", function(){
    var count = 0;

    beforeEach(function(){
        count++;
    })

    afterEach(function(){
        count = 0;
    })

    it("has a counter that increments", function(){
        expect(count).toBe(1);
    });

    it("get a reset", function(){
        expect(count).toBe(1);
    });
});

//Pending tests
describe("Pendinf specs", function(){
    xit("can start with an xit", function(){
        expect(true).toBe(true);
    });
});