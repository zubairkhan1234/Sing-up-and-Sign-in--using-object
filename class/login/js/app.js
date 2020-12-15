var userData = []
function signUpInformation() {

    user_Names = (document.getElementById("userName").value);
    user_Emails = (document.getElementById("userEmail").value);
    user_Passwords = (document.getElementById("userPassword").value);
    user_Genders = (document.getElementById("gender").value);
    user_Nationalities = (document.getElementById("nationality").value);

    let userStorage = localStorage.getItem("userData");
    if (userStorage === null) {
        var userData = []
    } else {
        userData = JSON.parse(userStorage)
    }

    userData.push({
        name: user_Names,
        email: user_Emails,
        password: user_Passwords,
        nationality: user_Nationalities,
        gender: user_Genders
    })

    localStorage.setItem("userData", JSON.stringify(userData));
    // console.log(userData)
    alert("login success")
    window.location.href = "./js/login.html"
    return false

}

var allUserData = JSON.parse(localStorage.getItem("userData"))
function loginUser() {
    var uEmail = document.getElementById('uEmail').value;
    var uPassword = document.getElementById('uPassword').value;
    uEmail = uEmail.toLowerCase();
    var isFound = false;
    for (var i = 0; i < getUserData.length; i++) {
        if (getUserData[i].userEmail === uEmail) {
            isFound = i
            localStorage.setItem('cIndex', JSON.stringify(isFound))
            break;
        }
    }
    if (isFound === false) {
        alert("user not found")
    }
    else if (getUserData[isFound].userPassword === uPassword) {
        alert("login")
        location.href = "profile.html";
    }
    else {
        alert("email or password is incorrect")
    }
    return false
}

// function loginform() {
// console.log(allUserData)
//     var loginEmail = document.getElementById("email").value
//     var loginpassword = document.getElementById("password").value

//     for (let i = 0; i < allUserData.lentgh; i++) {
//         if (allUserData[i].email === loginEmail && allUserData[i].password === loginpassword) {

//             alert("login success fully")
//             window.localtion.href = "home.html"
//         } else{
//         alert("user password incorrect")
//     }
//     }


    // for (let i = 0; i < allUserData.lentgh; i++) {
    //     if (allUserData[i].email === loginEmail) {
    //         isfound = i
    //         localStorage.setItem("index", isfound)
    //         break;
    //     }
    // }
    // if (isfound === false) {
    //     alert("user is not found")
    // } else if (allUserData[isfound].password == loginpassword) {
    //     alert("login success fully")
    //     window.localtion.href = "home.html"
    // }
   

    // return false;

// }















