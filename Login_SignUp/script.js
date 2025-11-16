let title = document.getElementById('title');
let signIn = document.getElementById('signIn');
let signUp = document.getElementById('signUp');
let signupBtn = document.getElementById('signupBtn');
let nameField = document.getElementById('nameField');
let cPassField = document.getElementById('cPassField');
let forgetP = document.getElementById('forgetP');
let form = document.getElementById('form-Box');
// let close = document.getElementById('close');
let popup = document.getElementById('popup');

signupBtn.onclick = function change() {
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
    cPassField.style.display = "block";
    forgetP.style.display = "none";
    signIn.style.display = "none"; 
    signUp.style.display = "block";          
    signupBtn.style.display = "none"; 
    clear();         
}

function clear(){
    var frm = document.getElementsByName('loginForm')[0];
    frm.reset();
    return false; 
}

function submitForm() {
    var frm = document.getElementsByName('loginForm')[0];
    frm.submit();
    frm.reset();
    return false;
}

signIn.onclick = function (){
    submitForm();
    alert("Login not Required Yet !!");
    alert("Go to Homepage and Access all Resources !!");
};


 signUp.onclick = function () {
    var name = document.forms["loginForm"]["name"].value;
    var email = document.forms["loginForm"]["email"].value;
    var pass = document.forms["loginForm"]["password"].value;
    var cPass = document.forms["loginForm"]["confirmPassword"].value;
    
    if (name == "" || email == "" || pass == "" || cPass == "") {
    alert("All fields are Required !!");
    return false;
    }

    else if(pass!=cPass){
    alert("Password and ConfirmPassword didn't Match.")
    return false;
    }
    nameField.style.display = "none";
    cPassField.style.display = "none";
    forgetP.style.display = "block";
    signupBtn.style.display = "block";
    openPopup();
    submitForm();
    signUp.style.display ="none";
    signIn.style.display ="block";
    title.innerHTML = "Login";
}

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

// Page Protection from Inspect , Copy , Paste Or view Page Source

document.oncontextmenu = () => {
    alert("Don't try to hack us from right click. 😍🤪");
    return false;
}

document.onkeydown = e => {

    if (e.key == "F12") {
        alert("Don't try to inspect element. 😍");
        return false;
    }

    if (e.ctrlKey && e.key == "u") {
        alert("Don't try to view Page Source. 😍");
        return false;
    }

    if (e.ctrlKey && e.key == "U") {
        alert("Don't try to view Page Source. 😍");
        return false;
    }

    if (e.ctrlKey && e.key == "c") {
        alert("Don't try to copy page element. 😍");
        return false;
    }

    if (e.ctrlKey && e.key == "v") {
        alert("Don't try to paste anything to page. 😍");
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.key == "I") {
        alert("Naa munna naa , Tumse na ho payega. 😍");
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.key == "i") {
        alert("Naa munna naa , Tumse na ho payega. 😍");
        return false;
    }
}
