let form = document.getElementById("form");
let email= document.getElementById("email");
let password=document.getElementById("password");
form.addEventListener("submit", getInformation);

function getInformation(e){
    e.preventDefault();
    let personData = {
        email:email.value,
        password:password.value,
    }
    console.log(personData);
    
}

