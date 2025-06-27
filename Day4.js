// Object Destructuring

const user = {
    name: "Ram",
    age: 25,
    email: "ram@gmail.com",
    location: "itahari"
}

console.log(user.name); // Ram

// // Destructuring the user object
// const { name, age, email, location:address } = user; // renaming location to address
// console.log(name); // Ram
// console.log(age); // 25
// console.log(address); // itahari

// Rest operator
const { name, ...Other } = user; // Other will contain the rest of the properties
console.log(name); // Ram
console.log(Other); // { age: 25, email: 'ram@gmail.com', location: 'itahari' }
console.log(Other.age); // 25

// fetch again
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        return response.json()
    }).then(data => {
        const { name, email, ...Other } = data;
        console.log(name); // Leanne Graham
        console.log(email);
    })
    .catch(error => {
        console.log(error);
    });

