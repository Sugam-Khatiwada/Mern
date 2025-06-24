// object = key ra valure ko pair
// name, age, city vaneko key ho
// "John", 30, "New York" vaneko value ho
let person = {
    name: "John",
    age: 30,
    city: "New York",
    // Object vitra aru object (key-value pairs) pani hun sakchha
    marks: {
        math: 90,
        science: 85,
        english: 88
    }
};

person.country = "USA"; // Adding a new key-value pair
person.age = 31; // Updating an existing key-value pair
person["gender"] = "male"; // Adding a new key-value pair using bracket notation

console.log(person);

// Accessing object properties using dot notation
console.log(person.name);

// Accessing object properties using bracket notation
console.log(person["age"]);

// Accessing nested object properties
console.log(person.marks.math); // Accessing math marks

for (let marks in person.marks) {
    console.log(marks, person.marks[marks]); // Iterating through marks object
}

for (let marks in person.marks) {
    console.log(`${marks}: ${person.marks[marks]}`); // Using template literals for better readability
}



// Question 1
let student = {
    name: "Alice",
    age: 20,
    marks: {
        math: 95,
        science: 90,
        english: 85
    }
};
for (let mark in student.marks) {
    console.log(mark, student.marks[mark]);
}

var totalmark = 0;
var Subno = 0;
for (let mark in student.marks) {
    totalmark = student.marks[mark]+totalmark;
    Subno++;
}
average = totalmark / Subno;
console.log("Total Marks: " + totalmark);
console.log("Average Marks: " + average);


if (average >= 40) {
    console.log("Result: Pass");
}
else {
    console.log("Result: Fail");
}

for (let mark in student.marks) {
    console.log(`${mark}: ${student.marks[mark]}`);
}

// Question 2

let students = {
    student1: {
        name: "Bob",
        age: 22,
        marks: {
            math: 88,
            science: 92,
            english: 80
        }
    },
    student2: {
        name: "Charlie",
        age: 21,
        marks: {
            math: 85,
            science: 90,
            english: 88
        }
    }
};

for (let stud in students) {
    console.log(stud, students[stud]);
}

for (let stud in students) {
    console.log(stud, students[stud].marks);
}

for (let stud in students) {
    var totalMark =0   
    var subCount = 0;
    console.log("Student Name: " + students[stud].name);
    for (let mark in students[stud].marks) {
        console.log(`${mark}: ${students[stud].marks[mark]}`);
        totalMark += students[stud].marks[mark];
        subCount++;
    }
    console.log("Total Marks: " + totalMark);
    avg = totalMark / subCount;
    console.log("Average Marks: " + avg);
    if (avg >= 40) {
        console.log("Result: Pass");
    }
    else {
        console.log("Result: Fail");
    }
}

var classTotal = 0;
var classStudCount = 0;
for (let stud in students) {
    for (let mark in students[stud].marks) {
        classTotal += students[stud].marks[mark];
        classStudCount++;
    }
}

var avgClass = classTotal / classStudCount;
console.log("Class Total Marks: " + classTotal);
console.log("Class Average Marks: " + avgClass);