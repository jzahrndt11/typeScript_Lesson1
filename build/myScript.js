"use strict";
const myString = 'Hello World';
const myNum = 5;
const isBool = true;
const isAny = true;
const isNumOrString = 0;
const isNumOrBool = false;
const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(1, 2));
const addMulti = (numbers) => {
    return numbers.reduce((acc, x) => acc + x, 0);
};
const multiDimArray = [
    [1, 2, 3],
    [1, 2, 3]
];
const myArray = [1, 'M', 5, true];
const myFirstName = 'Jeremy';
const myDepartment = 'English';
const teacher = {
    firstName: 'Mike',
    lastName: 'Weinberg',
    Department: 'Comp Sci',
    yearsEmployed: 4,
    classes: [
        {
            name: 'Avanced Web',
            code: '4011',
            semester: 'Spring'
        }
    ]
};
var Semester;
(function (Semester) {
    Semester[Semester["Spring"] = 0] = "Spring";
    Semester[Semester["Summer"] = 1] = "Summer";
    Semester[Semester["Fall"] = 2] = "Fall";
})(Semester || (Semester = {}));
const teacher2 = {
    firstName: 'Mike',
    lastName: 'Weinberg',
    Department: 'Comp Sci',
    yearsEmployed: 4,
    classes: [
        {
            name: 'Avanced Web',
            code: '4011',
            semester: Semester.Spring
        }
    ]
};
