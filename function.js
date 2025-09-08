let passingMarks = 35;
// Example usage
let students = [
    { name: 'MAHESH', marks: 96 },
    { name: 'RAMU', marks: 36 },
    { name: 'HEMANTH', marks: 67 },
    { name: 'ARAVIND', marks: 88 },
    { name: 'ABHISHAKE', marks: 34 }
];

function manageStudentGrades(students) {
    // Convert all names to uppercase and calculate grades
    let studentGrades = students.map(student => {
        return {
            name: student.name.toUpperCase(),
            marks: student.marks
        };
    });

    // Filter students who scored 50 or above
    let passedStudents = studentGrades.filter(student => student.marks >= passingMarks);


    // Display each student's name and grade
    passedStudents.forEach(student => {
        const includesA = student.name.includes('A');
        console.log(`Name: ${student.name} , marks:${student.marks}, Grade: ${student.grade}, Includes 'A': ${includesA}`);
    });
}

manageStudentGrades(students);