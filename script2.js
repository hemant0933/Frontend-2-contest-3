// i am not able to fetch realtime data so i have used predefined data for redirect to new page !!!!!

// var userdata = [
//     {id: '1', name: 'Abhishek Kumar', email: 'myemai0@gmail.com', password: 'Abhishek123#!' },
//     {id: '2', name: 'Hemant Kumar', email: 'hemant90@gmail.com', password: 'Abhishek456#!' },
//     {id: '3', name: 'Rahul Kumar', email: 'rahul09@gmail.com', password: 'Abhishek789#!' },
//     {id: '4', name: 'Gaurav Kumar', email: 'myGaurav@gmail.com', password: 'Abhishek741#!' }
// ]



let login = document.getElementById('Login');

login.addEventListener('click', loginFunction);

function loginFunction(){
    let loginEmail = document.getElementById('email').value
    let loginPassword = document.getElementById('password').value

 if(loginEmail !== '' && loginPassword !== ''){
    document.getElementById('errormesg').style.display = 'none';
    window.location.href = '/index3.html';
 }
 else{
    document.getElementById('errormesg').style.display = 'block';
 }
}

