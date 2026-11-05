const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 40 },
    { name: 'Charlie', grade: 70 }
]

const average = (students) => {
    let average = 0
    let sum = 0
    for(let i=0; i<students.length; i++) {
        sum += students[i].grade
    }
    average = sum / students.length
    return Math.ceil(average)
}

module.exports = average