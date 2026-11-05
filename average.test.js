const average = require("./average");

describe("average", () => {
    it("returns average score of all students", () => {
        const students = [
            { name: 'Alice', grade: 90 },
            { name: 'Bob', grade: 40 },
            { name: 'Charlie', grade: 70 }
        ]
        expect(average(students)).toEqual(67)
    });
});