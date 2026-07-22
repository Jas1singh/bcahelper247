// let title = document.getElementById('title');
// let signIn = document.getElementById('signIn');
// let signUp = document.getElementById('signUp');
// let signupBtn = document.getElementById('signupBtn');
// let nameField = document.getElementById('nameField');
// let cPassField = document.getElementById('cPassField');
// let forgetP = document.getElementById('forgetP');
// let form = document.getElementById('form-Box');
// // let close = document.getElementById('close');
// let popup = document.getElementById('popup');

// signupBtn.onclick = function change() {
//     title.innerHTML = "Sign Up";
//     nameField.style.display = "block";
//     cPassField.style.display = "block";
//     forgetP.style.display = "none";
//     signIn.style.display = "none"; 
//     signUp.style.display = "block";          
//     signupBtn.style.display = "none"; 
//     clear();         
// }

// function clear(){
//     var frm = document.getElementsByName('loginForm')[0];
//     frm.reset();
//     return false; 
// }

// function submitForm() {
//     var frm = document.getElementsByName('loginForm')[0];
//     frm.submit();
//     frm.reset();
//     return false;
// }

// signIn.onclick = function (){
//     submitForm();
//     alert("Login not Required Yet !!");
//     alert("Go to Homepage and Access all Resources !!");
// };


//  signUp.onclick = function () {
//     var name = document.forms["loginForm"]["name"].value;
//     var email = document.forms["loginForm"]["email"].value;
//     var pass = document.forms["loginForm"]["password"].value;
//     var cPass = document.forms["loginForm"]["confirmPassword"].value;
    
//     if (name == "" || email == "" || pass == "" || cPass == "") {
//     alert("All fields are Required !!");
//     return false;
//     }

//     else if(pass!=cPass){
//     alert("Password and ConfirmPassword didn't Match.")
//     return false;
//     }
//     nameField.style.display = "none";
//     cPassField.style.display = "none";
//     forgetP.style.display = "block";
//     signupBtn.style.display = "block";
//     openPopup();
//     submitForm();
//     signUp.style.display ="none";
//     signIn.style.display ="block";
//     title.innerHTML = "Login";
// }

// function openPopup(){
//     popup.classList.add("open-popup");
// }

// function closePopup(){
//     popup.classList.remove("open-popup");
// }

// // Page Protection from Inspect , Copy , Paste Or view Page Source

// document.oncontextmenu = () => {
//     alert("Don't try to hack us from right click. 😍🤪");
//     return false;
// }

// document.onkeydown = e => {

//     if (e.key == "F12") {
//         alert("Don't try to inspect element. 😍");
//         return false;
//     }

//     if (e.ctrlKey && e.key == "u") {
//         alert("Don't try to view Page Source. 😍");
//         return false;
//     }

//     if (e.ctrlKey && e.key == "U") {
//         alert("Don't try to view Page Source. 😍");
//         return false;
//     }

//     if (e.ctrlKey && e.key == "c") {
//         alert("Don't try to copy page element. 😍");
//         return false;
//     }

//     if (e.ctrlKey && e.key == "v") {
//         alert("Don't try to paste anything to page. 😍");
//         return false;
//     }

//     if (e.ctrlKey && e.shiftKey && e.key == "I") {
//         alert("Naa munna naa , Tumse na ho payega. 😍");
//         return false;
//     }

//     if (e.ctrlKey && e.shiftKey && e.key == "i") {
//         alert("Naa munna naa , Tumse na ho payega. 😍");
//         return false;
//     }
// }


// ...................................... code 2 ..........................................................
// // Login / Signup Mode
// let isSignupMode = false;

// // Toggle between Login and Signup
// function change() {

//     isSignupMode = !isSignupMode;

//     let title = document.getElementById("title");
//     let nameField = document.getElementById("nameField");
//     let cPassField = document.getElementById("cPassField");
//     let forgetP = document.getElementById("forgetP");
//     let signupBtn = document.getElementById("signupBtn");

//     let signIn = document.getElementById("signIn");
//     let signUp = document.getElementById("signUp");

// //     if (isSignupMode) {

// //     title.innerHTML = "Sign Up";

// //     nameField.style.display = "block";
// //     cPassField.style.display = "block";

// //     forgetP.style.display = "none";

// //     signupBtn.innerHTML =
// //         'Already have an account? <a href="#">Login</a>';

// //     signIn.value = "Sign Up";
// //     signUp.style.display = "none";
// // }
// //  else {

// //     title.innerHTML = "Login";

// //     nameField.style.display = "none";
// //     cPassField.style.display = "none";

// //     forgetP.style.display = "block";

// //     signupBtn.innerHTML =
// //         'Not a member? <a href="#">Sign Up</a>';

// //     signIn.value = "Login";
// //     signUp.style.display = "inline-block";
// // }

// if (isSignupMode) {

//     title.innerHTML = "Sign Up";

//     nameField.style.display = "block";
//     cPassField.style.display = "block";

//     forgetP.style.display = "none";

//     signupBtn.innerHTML =
//         'Already have an account? <a href="#">Login</a>';

//     signIn.style.display = "none";
//     signUp.style.display = "inline-block";
// }
// else {

//     title.innerHTML = "Login";

//     nameField.style.display = "none";
//     cPassField.style.display = "none";

//     forgetP.style.display = "block";

//     signupBtn.innerHTML =
//         'Not a member? <a href="#">Sign Up</a>';

//     signUp.style.display = "none";
//     signIn.style.display = "inline-block";
// }
// }


// // Submit Form
// function submitForm(event) {

//     event.preventDefault();

//     let name = document.getElementById("nameField").value.trim();
//     let email = document.getElementById("emailField").value.trim();
//     let password = document.getElementById("passField").value.trim();
//     let confirmPassword = document.getElementById("cPassField").value.trim();

//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     // SIGNUP
//     if (isSignupMode) {

//         if (!name || !email || !password || !confirmPassword) {
//             alert("Please fill all fields");
//             return;
//         }

//         if (password !== confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }

//         let existingUser = users.find(
//             user => user.email === email
//         );

//         if (existingUser) {
//             alert("User already exists");
//             return;
//         }

//         users.push({
//             name: name,
//             email: email,
//             password: password
//         });

//         localStorage.setItem(
//             "users",
//             JSON.stringify(users)
//         );

//         alert("Signup Successful!");

//         document.forms["loginForm"].reset();

//         // Switch back to Login mode
//         change();

//         return;
//     }

//     // LOGIN
//     else {

//         if (!email || !password) {
//             alert("Please enter Email and Password");
//             return;
//         }

//         let user = users.find(
//             user =>
//                 user.email === email &&
//                 user.password === password
//         );

//         if (user) {

//             localStorage.setItem(
//                 "loggedInUser",
//                 JSON.stringify(user)
//             );

//             alert("Login Successful!");

//             window.location.href = "../index.html";

//         } else {

//             alert("Invalid Email or Password");
//         }
//     }
// }


// // Popup Functions
// function openPopup() {
//     let popup = document.getElementById("popup");
//     popup.classList.add("open-popup");
// }

// function closePopup() {
//     let popup = document.getElementById("popup");
//     popup.classList.remove("open-popup");
// }


// // Hide Signup Fields on Page Load
// // window.onload = function () {

// //     document.getElementById("nameField").style.display = "none";
// //     document.getElementById("cPassField").style.display = "none";

// //     document.getElementById("signIn").value = "Login";
// //     document.getElementById("signUp").style.display = "inline-block";
// // };
// window.onload = function () {

//     document.getElementById("nameField").style.display = "none";
//     document.getElementById("cPassField").style.display = "none";

//     document.getElementById("signUp").style.display = "none";
//     document.getElementById("signIn").style.display = "inline-block";
// };

// // Random Color Function
// function getRandomColor() {

//     let val1 = Math.floor(Math.random() * 256);
//     let val2 = Math.floor(Math.random() * 256);
//     let val3 = Math.floor(Math.random() * 256);

//     return `rgb(${val1}, ${val2}, ${val3})`;
// }


// // Change siteName color if element exists
// let siteName = document.getElementById("siteName");

// if (siteName) {

//     setInterval(() => {
//         siteName.style.color = getRandomColor();
//     }, 500);
// }


// // Logout Function (Optional)
// function logout() {

//     localStorage.removeItem("loggedInUser");

//     window.location.reload();
// }



// ...............................Code 3 .....................................................


// Login / Signup Mode
let isSignupMode = false;

// Toggle between Login and Signup
function change() {

    isSignupMode = !isSignupMode;

    let title = document.getElementById("title");
    let nameField = document.getElementById("nameField");
    let cPassField = document.getElementById("cPassField");
    let forgetP = document.getElementById("forgetP");
    let signupBtn = document.getElementById("signupBtn");
    let submitBtn = document.getElementById("submitBtn");

    if (isSignupMode) {

        title.innerHTML = "Sign Up";

        nameField.style.display = "block";
        cPassField.style.display = "block";

        forgetP.style.display = "none";

        signupBtn.innerHTML =
            'Already have an account? <a href="#">Login</a>';

        submitBtn.value = "Sign Up";

    } else {

        title.innerHTML = "Login";

        nameField.style.display = "none";
        cPassField.style.display = "none";

        forgetP.style.display = "block";

        signupBtn.innerHTML =
            'Not a member? <a href="#">Sign Up</a>';

        submitBtn.value = "Login";
    }
}


// Submit Form
function submitForm(event) {

    event.preventDefault();

    let name = document.getElementById("nameField").value.trim();
    let email = document.getElementById("emailField").value.trim();
    let password = document.getElementById("passField").value.trim();
    let confirmPassword = document.getElementById("cPassField").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // SIGNUP
    if (isSignupMode) {

        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        let existingUser = users.find(
            user => user.email === email
        );

        if (existingUser) {
            alert("User already exists");
            return;
        }

        users.push({
            name: name,
            email: email,
            password: password
        });

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        alert("Signup Successful!");

        document.forms["loginForm"].reset();

        // Switch back to Login mode
        change();

        return;
    }

    // LOGIN
    else {

        if (!email || !password) {
            alert("Please enter Email and Password");
            return;
        }

        let user = users.find(
            user =>
                user.email === email &&
                user.password === password
        );

        if (user) {

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );

            alert("Login Successful!");

            window.location.href = "../index.html";

        } else {

            alert("Invalid Email or Password");
        }
    }
}


// Popup Functions
function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}


// Hide Signup Fields on Page Load
window.onload = function () {

    document.getElementById("nameField").style.display = "none";
    document.getElementById("cPassField").style.display = "none";

    document.getElementById("submitBtn").value = "Login";
};


// Random Color Function
function getRandomColor() {

    let val1 = Math.floor(Math.random() * 256);
    let val2 = Math.floor(Math.random() * 256);
    let val3 = Math.floor(Math.random() * 256);

    return `rgb(${val1}, ${val2}, ${val3})`;
}


// Change siteName color if element exists
let siteName = document.getElementById("siteName");

if (siteName) {

    setInterval(() => {
        siteName.style.color = getRandomColor();
    }, 500);
}


// Logout Function (Optional)
function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.reload();
}