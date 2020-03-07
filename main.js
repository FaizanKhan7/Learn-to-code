// console.log("hello World");

// var firstName = document.getElementById("firstName").value;
// if (firstName == null) {
// var lastName = document.getElementById("last-name").value;
// var email = document.getElementById("email").value;
// var password = document.getElementById("password").value;



// function errorMessage() {

//     var domElement = document.getElementById("firstNameError")
//     domElement.innerHTML = "first name cannot be empty";

// }

// function errorMessage2() {

//     var domElement2 = document.getElementById("lastNameError")
//     domElement2.innerHTML = "last name cannot be empty";

// }


// function validateFirstName() {
//     var firstname = document.getElementById("first-name").value;
//     if (firstname == "") {
//         document.getElementById("firstNameError").innerHTML = "first name cannot be empty";
//     } else {

//     }
// }


// function validateLastName() {
//     var lastname = document.getElementById("last-name").value;
//     if (lastname == "") {
//         document.getElementById("lastNameError").innerHTML = "last name cannot be empty";
//     } else {

//     }
// }

// function validateEmail() {
//     var email = document.getElementById("email").value;
//     if (email == "" || /^[^@]+@[^@]{2,}\.[^@]{2,}$/.test(email)) {} else {
//         document.getElementById("emailError").innerHTML = "looks like this is not an email";
//     }
// }

// function validatePassword() {
//     var password = document.getElementById("password").value;
//     if (password == "" || password.length < 8) {
//         document.getElementById("passwordError").innerHTML = "password canoot be empty"
//     }
// }

function validateFirstName() {
    var firstname = document.getElementById("firstNameError");
    firstname.innerHTML = "first name cannot be empty";
}

function validateLastName() {
    var lastname = document.getElementById("lastNameError");
    lastname.innerHTML = "last name cannot be empty";
}

function validateEmail() {
    var email = document.getElementById("emailError");
    email.innerHTML = "looks like this is not an email";
}

function validatePassword() {
    var password = document.getElementById("passwordError");
    password.innerHTML = "password cannot be empty";
}