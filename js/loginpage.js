
document.querySelector('.Losave').addEventListener('click',(event) =>{
    event.preventDefault() ; 
    let loginDetails = localStorage.getItem("loginDetails") ;
    // let Name = document.querySelector('#Name');
    // let phno = document.querySelector('#phno');
    // let dob = document.querySelector('#dob');
    // let email = document.querySelector('#email');
    // let password = document.querySelector('#password');
    if(loginDetails == null){
        let passwordJSON = [] ; 
        passwordJSON.push({Name : Name.value , phno : phno.value , dob : dob.value , email : email.value , password : password.value}) ; 
        localStorage.setItem("loginDetails",JSON.stringify(passwordJSON)) ;
        // alert("Password Saved") ; 
    }
    else {
        let passwordJSON = JSON.parse(loginDetails) ;
        passwordJSON.push({Name : Name.value , phno : phno.value , dob : dob.value , email : email.value , password : password.value}) ; 
        localStorage.setItem("loginDetails",JSON.stringify(passwordJSON)) ;   
    }
    alert("Password Saved") ;
    // let list = [Name.value , phno.value , dob.value , email.value, password.value]; 
    // console.log(list) ; 
    Name.value = "" ; 
    phno.value = "" ; 
    dob.value = "" ; 
    email.value = "" ; 
    password.value = "" ; 

}) 

document.querySelector('.Sisave').addEventListener('click',(event) => {
    event.preventDefault() ; 
    let Email = document.querySelector('#Email').value;
let Password = document.querySelector('#PAssword').value; 
    let loginDetails = localStorage.getItem("loginDetails") ; 
    let loginData = JSON.parse(loginDetails)
    let flag = 0 ; 
    for (let i=0 ; i<loginData.length; i++){
        let row = loginData[i] ; 
        if(row.email === Email){
            flag = 1 ; 
            if(row.password === Password){
                alert("SignedIn") ; 
            }
            else {
                alert("Password is Incorrect") ;  
            }
            break ;
        }
    }
    if(flag === 0){
        alert("You are Not Loged IN") ; 
    }
    document.querySelector('#Email').value = "" ; 
    document.querySelector('#PAssword').value = "" ; 
})