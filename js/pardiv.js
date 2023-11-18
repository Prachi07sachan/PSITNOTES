const deletePasswordData = (index) => { // This function is called whenever delete button is clicked , it just deletes the data of that row from the JSON and local storage and table as well .
    let code = prompt("Enter Teacher's Code : ") ; 
    
    let passwordDetails = localStorage.getItem("passwordDetails") ; 
    let passwordData = JSON.parse(passwordDetails) ; 
    if(code == passwordData[i].code)
    passwordData.splice(index,1) ; 
    localStorage.setItem("passwordDetails",JSON.stringify(passwordData)) ; 
    alert("Password Deleted") ; 
}

const LikePasswordData = (index) => {
    location.href='loginpage.html' ; 
    let passwordDetails = localStorage.getItem("passwordDetails") ; 
    let passwordData = JSON.parse(passwordDetails) ; 
    passwordData[index].like += 1; // Increment the like count
    localStorage.setItem("passwordDetails", JSON.stringify(passwordData));
    // populateSavedPasswordDetails();
    localStorage.setItem("passwordDetails",JSON.stringify(passwordData)) ; 
    alert("LIKED") ; 
}
const populateSavedPasswordDetails = () => { // This function is to append the data into the table . 
    let table = document.querySelector("table") ;
    let passwordDetails = localStorage.getItem("passwordDetails") ; 
    if(passwordDetails == null){ // if there is no data in the local Storage . 
        table.innerHTML = "No Details Available" ; 
    }
    else{ // else we take all the data from the JSON and then append it into the table by changing it's innerHTML . 
        let passwordData = JSON.parse(passwordDetails) ; 
        let html = "" ; 
        for (let i=0 ; i<passwordData.length; i++){
            let row = passwordData[i] ; 
            // let pass = hidepassword(row.password) ; 
            html += `
            <tr>
                <td>${row.topic}  </td>
                <td>${row.Name}  </td>
                <td><a href="${row.link}" target="_blank">Click</td>
                <td><button class="like" style="background-color: yellow;" onClick="LikePasswordData('${i}')">${row.like} <i class="fa-solid fa-thumbs-up"></i></button></td>
                <td><button style="background-color: red;" onClick="deletePasswordData('${i}')">Delete</button></i></td>
            </tr>
            `;
        }
        table.innerHTML += html ;
    }
     
}

populateSavedPasswordDetails() ; 
document.querySelector(".btn").addEventListener("click",(event)=>{ // this function executes on clicking save button and it saves the details in the local storage in the form of string in the JSON.
    event.preventDefault() ; 
    if(code.value != 2213387){
        code.value = "" ; 
        alert("Your code is incorrect") ; 
        return ; 
    }
    
    console.log("Topic:",topic.value); 
    console.log("Uploaded By:",Name.value);
    console.log("Password:",link.value);
    
    let passwordDetails = localStorage.getItem("passwordDetails") ; // JSON is like map and here passwordDetails is keys of that map .
    if(passwordDetails == null){
        let passwordJSON = [] ; 
        passwordJSON.push({code: code.value,topic: topic.value, Name: Name.value,link: link.value ,like : 0});
        localStorage.setItem("passwordDetails",JSON.stringify(passwordJSON)) ; // JSON accepts keys and values as strings . Since our details are in the form of list so we are making it string .
        alert("Password Saved") ; 
    }
    else{
        let passwordJSON = JSON.parse(passwordDetails) ; // Since the details in the JSON are in the form of string hence we are first convertin it into list using parse . 
        passwordJSON.push({
            code: code.value ,
            topic: topic.value ,
            Name: Name.value ,
            link: link.value ,
            like: 0
        }) ; 
        
        localStorage.setItem("passwordDetails",JSON.stringify(passwordJSON)) ;
        alert("Password Saved") ;
    }
    code.value = "" ; 
    topic.value = "" ; 
    Name.value = "" ; 
    link.value = "" ; 
}); 