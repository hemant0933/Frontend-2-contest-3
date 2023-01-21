// select all the input field for validation

let inputField = document.getElementsByTagName('input');

let nameText  = inputField[0];
let emailText  = inputField[1].value;
let PasswordText  = inputField[2];
let cPasswordText  = inputField[3];
let form = document.getElementsByTagName('form')
let submitBtn = document.getElementById('Submit');
let body = document.getElementsByTagName('body')
// adding event Listner to submit button 

var userinput = []
submitBtn.addEventListener('click' , validation)

function validation() {
    var counter = 0;
    // just splited the name in two part 
    let nameArray = nameText.value.split(' ') 
    emailText  = inputField[1].value;
    if(nameArray.length < 2){
       let errorName = document.getElementById('errorName');
       errorName.style.display = 'block'
       errorName.style.color = 'red'
    }
    if(nameArray.length >= 2 ){
        counter++
        errorName.style.display = 'none'
    }
    // validation for email address 
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(pattern.test(emailText) == false){
        document.getElementById('errorEmail').style.display = 'block'
        document.getElementById('errorEmail').style.color = 'red'
    }
    if(pattern.test(emailText) == true){
        counter++
        document.getElementById('errorEmail').style.display = 'none'
    }

     let password = inputField[2].value;
     let name = nameText.value
     let email = emailText


    // for valid password we need create a function

    function isValidPassword(password,name,email){
        if(password.toLowerCase() == name.toLowerCase() || password.toLowerCase() == email.toLowerCase()){
            return false;
        }
        if(!/[a-z]/.test(password)){
            return false;
        }
        if(!/[A-Z]/.test(password)){
            return false;
        }
        if(!/[0-9]/.test(password)){
            return false;
        }
        if (!/[!@#\$%\^&\*\(\)]/.test(password)) {
            return false;
        }
        return true;
    }

    if(isValidPassword(password,name,email) == true){
        counter++
        document.getElementById('errorPassword').style.display = 'none';
    }
    if(isValidPassword(password,name,email) == false){
        document.getElementById('errorPassword').style.display = 'block';
    }

    // validation for confirm Password
    let cPasswordText  = inputField[3].value;

    if(password === cPasswordText){
        counter++
       document.getElementById('errorconfirmp').style.display = 'none';
    }
    if(password !== cPasswordText){
        document.getElementById('errorconfirmp').style.display = 'block';
    }
    
    if(counter === 4){
        window.location.href='/index2.html'
    }
    
}
var userdata = {
    id: id++,
    name: document.getElementsByTagName('input')[0].value ,
    email: document.getElementsByTagName('input')[1].value ,
    password: document.getElementsByTagName('input')[2].value 
}
userinput.push(userdata);



