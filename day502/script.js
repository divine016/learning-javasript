//object
let userDetailsDatabase = {};
//get details
function getUserDetails(){
 //name
        let userName = prompt('Enter your user name');

        if(userName == null){
            return;
        }
        function validateUserName(userName){
            if(userName.length < 15 && userName.length > 0){
                return true;
            }
            else{
                return false;
            }
        }
        while(validateUserName(userName) == false){
            userName = prompt('pLease enter your user name lesser than 15');
        }

        userDetailsDatabase['User Name'] = userName;

// email
        let email = prompt('Enter you email address');

        if(email == null){
            return;
        }
        function validateEmail(email){
            const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            let emailCheckResult = emailCheck.test(email);
            if(emailCheckResult == true){
                return true;
            }else{
                return false
            }
        }

        while(validateEmail(email) == false){
            userName = prompt('pLease enter a correct email');
        }

        userDetailsDatabase['Email'] = email;

//password
        let password = prompt('please enter your passwprd');

        if(password == null){
            return;
        }
        function validatePassword(password){
            if(password.length < 8 && password.length > 6){
                return true;
            }else{
                return false;
            }
        }

        while(validatePassword(password) == false){
            userName = prompt('pLease enter a password greater than 6 and less than 8');
        }

        userDetailsDatabase['Password'] = password;

//confirm password
        let confirmPassword = prompt('confirm your password');

        if(confirmPassword == null){
            return;
        }
        function validateconfirmPassword(confirmPassword){
            if(confirmPassword == password){
                return true
            }else{
                return false;
            }
        }

        while(validateconfirmPassword(confirmPassword) == false){
            userName = prompt('password do not match');
        }
        ['Confirm Password'] = confirmPassword;
}
console.log(userDetailsDatabase)
//see details

function displayUserDetails(){
    alert(`your Details \n\nUsername: ${userDetailsDatabase['UserName']}\n
    Phone Number: ${userDetailsDatabase["Email"]}`)
}
