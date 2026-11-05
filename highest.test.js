const highest = require('./highest');

describe("highest", () => {
    it("returns highest scoring student", () => {
        const students = [
            { name: 'Alice', grade: 90 },
            { name: 'Bob', grade: 40 },
            { name: 'Charlie', grade: 70 }
        ]

        expect(highest(students)).toEqual({name: 'Alice', grade: 90 });
    });
});