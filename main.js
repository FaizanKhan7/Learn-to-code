function validateFirstName() {
    var firstname = document.getElementById("firstName").value;
    if (firstname == "") {
        document.getElementById("firstNameError").innerHTML =
            "First Name cannot be empty";
        document.getElementById("firstName").style.borderColor =
            "hsl(0, 100%, 74%)";
    } else {
        document.getElementById("firstNameError").innerHTML = "";
        document.getElementById("firstName").style.borderColor = "";
    }
    event.preventDefault();
}

function validateLastName() {
    var lastname = document.getElementById("lastName").value;
    if (lastname == "") {
        document.getElementById("lastNameError").innerHTML =
            "Last Name cannot be empty";
        document.getElementById("lastName").style.borderColor = "hsl(0, 100%, 74%)";
    } else {
        document.getElementById("lastNameError").innerHTML = "";
        document.getElementById("lastName").style.borderColor = "";
    }
    // event.preventDefault();
}

function validateEmail() {
    var email = document.getElementById("email").value;
    // if (email == "" || /^[^@]+@[^@]{2,}\.[^@]{2,}$/.test(email)) {
    if (email == "") {
        document.getElementById("emailError").innerHTML =
            "Looks like this is not an email";
        document.getElementById("email").style.borderColor = "hsl(0, 100%, 74%)";
    } else {
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("email").style.borderColor = "";
    }
}

function validatePassword() {
    var password = document.getElementById("password").value;
    if (password == "" || password.length < 10) {
        document.getElementById("passwordError").innerHTML =
            "password cannot be empty";
        document.getElementById("password").style.borderColor = "hsl(0, 100%, 74%)";
    } else {
        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("password").style.borderColor = "";
    }
}

// function validateFirstName() {
//     var firstname = document.getElementById("firstNameError");
//     firstname.innerHTML = "First name cannot be empty";
//     event.preventDefault();
// }

// function validateLastName() {
//     var lastname = document.getElementById("lastNameError");
//     lastname.innerHTML = "Last name cannot be empty";
// }

// function validateEmail() {
//     var email = document.getElementById("emailError");
//     email.innerHTML = "Looks like this is not an email";
// }

// function validatePassword() {
//     var password = document.getElementById("passwordError");
//     password.innerHTML = "Password cannot be empty";
// }
// // border color

// function firstNameBorder() {
//     var fnameBorder = document.getElementById("firstName");
//     fnameBorder.style.borderColor = "hsl(0, 100%, 74%)";
// }

// function lastNameBorder() {
//     var lnameBorder = document.getElementById("lastName");
//     lnameBorder.style.borderColor = "hsl(0, 100%, 74%)";
// }

// function emailBorder() {
//     var mailBorder = document.getElementById("email");
//     mailBorder.style.borderColor = "hsl(0, 100%, 74%)";
// }

// function passwordBorder() {
//     var passwordBorder = document.getElementById("password");
//     passwordBorder.style.borderColor = "hsl(0, 100%, 74%)";
// }