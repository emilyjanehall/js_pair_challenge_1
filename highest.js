const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 40 },
    { name: 'Charlie', grade: 70 }
]

const highest = (students) => {
    let highestGrade = 0;
    for(let i=0; i<students.length; i++) {
        if (students[i].grade > highestGrade) {
            highestGrade = students[i];
        }
    }
    return highestGrade;
}
console.log(highest(students))

module.exports = highest