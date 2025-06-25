// function statement = defining function
function a(){
    console.log("function a");
}

// function expression = assigning function to a variable
let b = function() {
    console.log("function b");
}

// funciton declaration = defining function with a name
function c() {
    console.log("function c");
}

// anonymous function = function without a name (can't be called directly)
function () {
    console.log("anonymous function");
}

// named function expression = function with a name assigned to a variable
let d = function namedFunction() {
    console.log("named function expression");
}

// arrow function = shorter syntax for function expression
let e = () => {
    console.log("arrow function");
}

// anonymous arrow function = arrow function without a name
() => {
    console.log("anonymous arrow function");
}



//  Callback

function greeting() {
    console.log("Hello, World!");
}

setTimeout(greeting, 3000); // Calls greeting after 3 seconds

//  Higher-order function 
function greeting2 (greeting2) {
    return function name (name){
        console.log(greeting2, name);
    }
}

const greet = greeting2("Hello");
greet("Alice"); // output: Hello Alice

// Promise
function promiseFun () {
    return new Promise(function(resolve,reject){
        reject("Promise rejected!");
    });
}
// then is used to handle the resolved value of a promise
// catch is used to handle the rejected value of a promise
promiseFun().catch(function (data){
    console.log(data);
})

// Promise 2 
function statusFunction(name){
    return new Promise(function (resolved,reject){
        if (name === "success") {
            resolved("Operation was successful!");
        } else {
            reject("Operation failed!");
        }
    });
}
// Using the promise with then and catch
statusFunction("success").then(function (data){
    console.log(data);
}).catch(function (data){
    console.log(data);
});

// Async/Await
// using async/await to handle above promise
async function enrichmentClass() {
    try{
        const data = await statusFunction("success");
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

enrichmentClass(); // Calls the async function


// Question 1
let details = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "password123"}
    
    function promiseFunction(email, password) {
        return new Promise(function (resolve, reject){
            if (email === details.email && password === details.password) {
                resolve("Login successful!");
            } else {
                reject("Login failed!");
            }
        });
    }
    
    
    async function checkAuthentication() {
        try{
            const result = await promiseFunction("john.doe@example.com", "password123");
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    }

    
    // Fetch
    fetch("user.json")
    .then(response => {
        console.log(response.json())
    }).then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
checkAuthentication();