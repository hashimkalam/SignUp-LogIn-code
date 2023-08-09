function showSignUp() {
    document.getElementById("sign-up-form").style.display = "block";
    document.getElementById("sign-in-form").style.display = "none";
}
    
function showSignIn() {
    document.getElementById("sign-up-form").style.display = "none";
    document.getElementById("sign-in-form").style.display = "block";
}

/* function showSignUpAcc() {
    document.getElementById("sign-up-form").style.display = "block";
    document.getElementById("sign-in-form").style.display = "none";
    document.getElementById("signUp").style.display = "block"; // Show the sign-up details div

    // Retrieve input values from the form
    const phoneNumber = document.getElementById("phone-number").value;
    const fullName = document.getElementById("full-name").value;
    const username = document.getElementById("username").value;
    const createPassword = document.getElementById("create_password").value;

    // Update the paragraph texts with the retrieved values
    document.getElementById("phoneNumber").innerText = phoneNumber;
    document.getElementById("fullName").innerText = fullName;
    document.getElementById("username").innerText = username;
    document.getElementById("createPassword").innerText = createPassword;
}  */