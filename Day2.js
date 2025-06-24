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

