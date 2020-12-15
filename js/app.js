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


function loginform() {
    var loginEmail = document.getElementById("email").value;
    var loginpassword = document.getElementById("password").value;
    var isFound = false

    for (let i = 0; i < allUserData.length; i++) {
        if (allUserData[i].email === loginEmail) {
            isFound = i
            localStorage.setItem("index", JSON.stringify(isFound))
            break;
        }
    }
    if (isFound === false) {
        alert("user is not found")
    } else if (allUserData[isFound].password == loginpassword) {
        alert("login success fully")
         location.href = "home.html";
    } else {
        alert("email or passsword is not correct")
    }


    return false;

}


function userInformation(){

    let information = localStorage.getItem("index");
    document.getElementById("userN").innerHTML = "Name : " + " " + allUserData[information].name
    document.getElementById("userE").innerHTML = "Email : " + " " + allUserData[information].email
    document.getElementById("userG").innerHTML = "Gender : " + " " + allUserData[information].gender
    document.getElementById("userNationality").innerHTML = "Nationality : " + " " + allUserData[information].nationality
    document.getElementById("userPassword").innerHTML = "Passdword : " + " " + "*********"

    return false;
}

   


// function loginform() {
//     var uEmail = document.getElementById('email').value;
//     var uPassword = document.getElementById('password').value;
//     var isFound = false;
//     for (var i = 0; i < allUserData.length; i++) {
//         if (allUserData[i].email === uEmail) {
//             isFound = i
//             localStorage.setItem('cIndex', JSON.stringify(isFound))
//             break;
//         }
//     }
//     if (isFound === false) {
//         alert("user not found")
//     }
//     else if (allUserData[isFound].password === uPassword) {
//         alert("login")
//         location.href = "home.html";
//     }
//     else {
//         alert("email or password is incorrect")
//     }
//     return false;
// }



// function userInformation( {
//     var cIndex = JSON.parse(localStorage.getItem('cIndex'));
//     document.getElementById('userN').innerHTML = "Name: " + allUserData[cIndex].name;
//     document.getElementById('userE').innerHTML = "Natioality: " + allUserData[cIndex].nationality;
    
//     document.getElementById('userG').innerHTML = "Gender: " + allUserData[cIndex].userGender;
// }






