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

        userDetailsDatabase['UserName'] = userName;

// email
        let email = prompt('Enter you email address');

        function validateEmail(email){
            const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
            let emailCheckResult = emailCheck.test(email);
            if(emailCheckResult == true){
                return true;
            }else{
                return false
            }
        }
        if(email == null){
            return
        }
        while(validateEmail(email) == false){
            userName = prompt('pLease enter a correct email');
        }
        
        userDetailsDatabase['Email'] = email;

//password
        let password = prompt('please enter your passwprd');

        
        function validatePassword(password){
            if(password.length < 8){
                return true;
            }else{
                return false;
            }
        }
        if(password == null){
            return;
        }

        while(validatePassword(password) == false){
            userName = prompt('pLease enter a password  less than 8');
        }

        userDetailsDatabase['Password'] = password;

//confirm password
        let confirmPassword = prompt('confirm your password');

        function validateConfirmPassword(confirmPassword){
            if(confirmPassword == password){
                return true
            }else{
                return false;
            }
        }

        while(validateConfirmPassword(confirmPassword) == false){
            userName = prompt('password do not match');
        }
        userDetailsDatabase['Confirm Password'] = confirmPassword;
}
console.log(userDetailsDatabase)
//see details

function displayUserDetails(){
    alert(`your Details \n\nUsername: ${userDetailsDatabase['UserName']}\n Email: ${userDetailsDatabase["Email"]}`)
}
